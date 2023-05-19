import { useNavigate } from 'react-router-dom';

const Landing = () => {
  
  const navigate = useNavigate();

  return (
    <>
    <h1>Landing</h1>
    <button onClick={() => navigate('/home')}>Ingresar</button>
    </>
  );
};


export default Landing;