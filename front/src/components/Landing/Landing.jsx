import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <StyledLanding>
      <h1>Landing</h1>
      <Link to={'/logIn'}>Ingresar</Link>
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
width: 100%;
`;

export default Landing;