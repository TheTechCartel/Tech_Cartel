import '../src/index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Home } from './Pages/Home';

function App() {
  return (
    <div className=' font-clashGrotesk bg-theme-blue-1 '>
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
