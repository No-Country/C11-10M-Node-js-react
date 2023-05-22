import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div >
      <h1 className='text-3xl text-orange-700'>Landing</h1>
      <button onClick={() => navigate('/home')}>Ingresar</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};



export default Landing;
