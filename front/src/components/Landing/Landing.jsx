import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div >
      <h1>Landing</h1>
      <button onClick={() => navigate('/home')}>Ingresar</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

const StyledLanding = styled.div`
width: 100%;
`;

export default Landing;
