import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { useState } from 'react';
const NavBar = () => {
const location = useLocation();
const isLogin = localStorage.getItem("user")

const despliegue=()=>{


}
  let [open,setOpen]=useState(false)
  return (

  <>
    <nav>
      <div onClick={()=>setOpen(!open)}className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:mb-6'>

            <Link to="/home"><img className="h-8 mr-3" src={logo} alt="" /></Link>

        <div>
        <span>
          {open ?
                 <svg className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg> 
                :
                               
                <svg className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>}
        </span>

        </div>
        

        <div className='w-full md:block md:w-auto' id='navbar-default'>

          <ul className={`md:flex md:items-center md:static md:w-auto md:pl-0 pl-9 bg-green md:z-auto z-[1] left-0 w-full absolute transition-allduration-800 ease-in ${open ?'top-12':'top-[-490px]'}`}>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink className='text-white hover:text-gray-200' to='/buildingForm' >Perfil</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink className='text-white hover:text-gray-200' to='/employees' >Empleados</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink className='text-white hover:text-gray-200' to='/wage' >Liquidación</NavLink>
            </li>
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink className='text-white hover:text-gray-200' to='/downloads' >Descargas</NavLink>
            </li>
          </ul>

        </div>
      </div>
      
    </nav>
    <div>
      {isLogin === 'superAdmin' && <NavLink className='' to='/signup' >Registrar</NavLink>}
    </div>

  
  </>


    )
}

const StyledNav = styled.div`
    align-items: center;
    width: 100%;
    justify-content: space-around;
    color: #ffffff;
    background-color: rgb(20,145,94);
    .navLink {
        font-size: 30px;
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
    }
    .logo {
        width: 180px;
    }

`

export default NavBar;