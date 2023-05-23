import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <StyledHome>
      <div className='home'>
        <div className='menu'>
          <img className='logo' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684566285/logo_2_qqpvpa.png" alt="Loading..." />
          <div className='contenedoriconos' >
            <div className='iconoHome'>
              <Link style={{color:'black'}} to={'/buildingForm'}>
                <img style={{width:'23%'}} className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684830150/icono_perfil_du8fbd.png" alt="Loading..." />
                <h5>Mi perfil</h5>       
              </Link>
            </div>  
            <div className='iconoHome'>
              <Link style={{color:'black'}} to={'/employees'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_empleados_kirz6w.png" alt="Loading..." />
                <h5>Mis empleados</h5>              
              </Link>
            </div>  
            <div className='iconoHome'>
              <Link style={{color:'black'}} to={'/wageForm'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_liquidacion_npc6km.png" alt="Loading..." />
                <h5>Calcular Liquidacion</h5>     
              </Link>
            </div>  
            <div className='iconoHome'>
              <Link style={{color:'black'}} to={'/downloads'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_descargas_yaqqlq.png" alt="Loading..." />
                <h5>Descargar</h5>     
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
.home {
  background-color: #ececf3;
  height: 89vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
}

.menu {
  background-color: white;
  width: 55%;
  height: 75%;
  border: 10px solid rgb(20,145,94);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.logo {
  width: 40%;
}

.contenedoriconos {
  width: 82%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;  
  justify-content: space-evenly;
  align-content: center;
}

.iconoHome {
  width: 45%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.logoImg {
  width: 30%;
}

`;

export default Home;