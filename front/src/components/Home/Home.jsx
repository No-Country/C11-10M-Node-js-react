// import styled from 'styled-components';
import {stylesButton} from "../../styles"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="pl-2 leading-10">
      <h2>HOME</h2>
      <button className={stylesButton}
      onClick={()=>navigate("/")}>Volver a Login</button>
    </div>
  );
};


export default Home;