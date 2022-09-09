import '../src/index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Home } from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div className=' overflow-hidden bg-secondary '>
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Login />} path='/login'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
