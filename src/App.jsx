import {SignUp, Home, ForgotPassword} from "./pages";

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
    <main className=' overflow-hidden bg-secondary font-alt'>
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<SignUp/>} path='/signup'></Route>
          <Route element={<ForgotPassword/>} path='/forgot-password'></Route>

        </Routes>
      </Router>
    </main>
  );
}

export default App;
