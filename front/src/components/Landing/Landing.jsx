import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <StyledLanding>
    <h1>Landing</h1>
    <button onClick={() => navigate('/logIn')}>Ingresar</button>
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
width: 100%;
`;

export default Landing;
