import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar1 from './Components/Navbar';
import Profile from './Components/Profile';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Routes>
     <Route  path="/login" element={<Login/>}  />
     <Route  path="/Profile"       element={<Profile/>}              />
     <Route path="/Register" element={<Register/>}  />
     <Route path="/Home"element={<Home/>}  />
     <Route path="/Contact"element={<Contact/>}  />
     </Routes>
   
    </div>
  );
}

export default App;
