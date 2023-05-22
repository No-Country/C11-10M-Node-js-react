import { useNavigate } from 'react-router-dom';
import { stylesButton } from '../../styles';

const Landing = () => {
  
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-2 pl-2'>
      <h1 className='font-bold text-3xl'>Landing</h1>
      <div className='flex gap-10'>
        <button onClick={() => navigate('/home')}
        className={stylesButton + " px-8"}>Ingresar</button>
        <button onClick={() => navigate('/signup')}
        className={stylesButton + " px-8"}>Registrarse</button>
        <button onClick={() => navigate('/registerEmployee')}
        className={stylesButton + " px-8"}>Agregar Empleado</button>
      </div>
    </div>
  );
};


export default Landing;