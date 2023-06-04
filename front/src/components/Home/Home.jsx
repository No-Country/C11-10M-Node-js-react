import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Home = () => {

const userName = localStorage.getItem("user");

  return (
    <StyledHome>
      <div className='home'>
        <div className='menu'>
          <h2 style={{fontSize: '2.5vw'}}>¡Hola, {userName}! Te damos la bienvenida a</h2>
          <img className='logo' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684566285/logo_2_qqpvpa.png" alt="Loading..." />
          <div className='contenedoriconos' >
            <div className='iconoHome'>
              <NavLink style={{color:'black'}} to={'/buildingForm'}>
                <img style={{width:'23%'}} className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684830150/icono_perfil_du8fbd.png" alt="Loading..." />
                <h5 className='logoTxt'>Mi perfil</h5>       
              </NavLink>
            </div>  
            <div className='iconoHome'>
              <NavLink style={{color:'black'}} to={'/employees'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_empleados_kirz6w.png" alt="Loading..." />
                <h5 className='logoTxt'>Mis empleados</h5>              
              </NavLink>
            </div>  
            <div className='iconoHome'>
              <NavLink style={{color:'black'}} to={'/wageForm'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_liquidacion_npc6km.png" alt="Loading..." />
                <h5 className='logoTxt'>Calcular Liquidación</h5>     
              </NavLink>
            </div>  
            <div className='iconoHome'>
              <NavLink style={{color:'black'}} to={'/downloads'}>
                <img className='logoImg' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_descargas_yaqqlq.png" alt="Loading..." />
                <h5 className='logoTxt'>Descargar</h5>     
              </NavLink>
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
  align-content: center;
  justify-content: center;
}

.menu {
  background-color: white;
  width: 55%;
  height: fit-content;
  border: 10px solid rgb(20,145,94);
  border-radius: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.logo {
  min-width: 200px;
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
  padding: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.logoImg {
  min-width: 70px;
  width: 30%;
  display: block;
  margin: 0 auto;
}
.logoTxt {
  width: 30%;
  display: block;
  margin: 0 auto;
  text-align: center;
}

`;

export default Home;