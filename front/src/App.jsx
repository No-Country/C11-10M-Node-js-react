import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import RegisterEmployee from './components/RegisterEmployee/Register';
import axios from 'axios';
import Signup from './components/Signup/Signup';
axios.defaults.baseURL = "http://localhost:3001/"
import "/src/index.css"
import Employees from './components/Employees/Employees';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from './redux/actions';
function App() {
  const {isLogin} = useSelector(s=>s)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isLogin) dispatch(getEmployees())
  }, [isLogin, dispatch])
 
  return (
    <>
      <div>
        <NavBar/>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/registerEmployee' element={<RegisterEmployee/>}/>
        <Route path='/employees' element={<Employees/>}/>
        {/* <Route path='/createForm' element={<CreateForm/>}/> */}
      </Routes>
      </div>
    </>
  )
}

export default App
