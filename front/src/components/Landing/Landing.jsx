import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  const navigate = useNavigate();
  const Separator=()=>{
  
  }
  return (
    <div className='grid place-items-center m-auto mt-12 mb-12' >
      
      <div className='box grid place-items-center m-auto mb-5'>

        <div className='grid grid-cols-1 place-items-center m-auto'><img className="logo" src='./src/assets/logo.png'></img></div>

        

        <div className='grid w-t font-semibold'> 
        <hr className='line my-8'/>  
          <label htmlFor='user' >Usuario</label>
          <input className="my-2 bc" id="user" type='email'  />

          <label htmlFor='password' >Contraseña</label>
          <input className="my-2 bc" id="password" type='text'  />
          
          <span className='text-right underline'><a href="">Necesito ayuda</a></span>
          <hr className='line mb-8 mt-4'/>  
        </div>

        <div className='grid grid-cols-2 gap-10 mt-5 mb-10 font-semibold w-auto'>
          
          <button className='btn-secondary ' onClick={() => navigate('/register')}>Recuperar Contraseña</button>
          <button className=' btn-primary'onClick={() => navigate('/home')}>Ingresar</button>
          
        </div>

      </div>
      





    </div>
  );
};



export default Landing;
