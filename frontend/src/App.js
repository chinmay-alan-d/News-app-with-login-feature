import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { AuthProvider } from './helper/AuthContext';
import { Restrict } from './helper/Restric';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/logout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Restrict><Home /></Restrict>}/>
          <Route path='/about' element={<Restrict><About /></Restrict>}/>
          <Route path='/contact' element={<Restrict><Contact /></Restrict>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/profile' element={<Restrict><Profile /></Restrict>}/>
          <Route path='/logout' element={<Logout />}/>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
