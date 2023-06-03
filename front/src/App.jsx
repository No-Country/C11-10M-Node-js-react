import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/" //*uso local
// axios.defaults.baseURL = "https://liqui-back-final.onrender.com" //*uso deploy


import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import RegisterEmployee from './components/RegisterEmployee/Register';
import Downloads from './components/Downloads/Downloads';
import BuildingForm from './components/BuildingForm/BuildingForm';
import WageForm from './components/WageForm/WageForm';
import Signup from './components/Signup/Signup';
import LogIn from './components/LogIn/LogIn';
import "/src/index.css"
import Employees from './components/Employees/Employees';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees, getWages } from './redux/actions';
import Swal from "sweetalert2"
import Wage from './components/Wage/Wage';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLogin = localStorage.getItem("isLogin")
  
  useEffect(()=>{
    if(isLogin) {
      dispatch(getEmployees())
      dispatch(getWages())
      if(pathname==="/logIn"){
        Swal.fire({
          title: "¿Desea iniciar en el home?",
          text: "Usted ya estuvo logeado",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/home")
          }
        });
      }
    }
    else navigate("/login")
  }, [isLogin, dispatch])

  const { pathname }  = useLocation();
  return (
    <>
      <div>
        {pathname!=="/signup" && pathname!=="/login" && <NavBar/>}
       <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/downloads' element={<Downloads/>}/>
          <Route path='/buildingForm' element={<BuildingForm/>}/>
          <Route path='/wageForm' element={<WageForm/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/registerEmployee' element={<RegisterEmployee/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/wage' element={<Wage/>}/>
          <Route path='/wage/:id' element={<Downloads/>}/>
          {/* <Route path='/createForm' element={<CreateForm/>}/> */}
        </Routes>
      </div>
    </>
  )
}

export default App
