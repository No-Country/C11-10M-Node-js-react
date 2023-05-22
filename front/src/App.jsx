import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import RegisterEmployee from './components/RegisterEmployee/Register';
import axios from 'axios';
import Signup from './components/Signup/Signup';
axios.defaults.baseURL = "http://localhost:3001/"

function App() {
 
  return (
    <>
      <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/registerEmployee' element={<RegisterEmployee/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
