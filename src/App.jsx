
import {SignIn, SignUp, Home, ComingSoon, ForgotPassword} from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import awsmobile from "./aws-exports";
import { Amplify } from "aws-amplify";


Amplify.configure(awsmobile)


function App() {
  return (
    <main className=' overflow-hidden bg-secondary font-workSans'>
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>

          <Route element={<SignUp/>} path='/sign-up'></Route>
          <Route element={<SignIn/>} path='/sign-in'></Route>
          <Route element={<ForgotPassword/>} path='/forgot-password'></Route>
          <Route element={<ComingSoon />} path='/about'></Route>
          <Route element={<ComingSoon />} path='/learning-path'></Route>
      </Routes>
    </Router>
    </main>
  );
}

export default App;
