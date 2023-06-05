import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Home = () => {

  const userName = localStorage.getItem("user");

  const imageButton=[
    {url:"https://i.ibb.co/9N8sfb1/icono-banco.png",
    name:"Mi perfil",
    to:"/buildingForm"},
    {url:"https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_empleados_kirz6w.png",
    name:"Mis empleados",
    to:"/employees"},
    {url:"https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_liquidacion_npc6km.png",
    name:"Calcular Liquidacion",
    to:"/wageForm"},
    {url:"https://res.cloudinary.com/dalhatgbg/image/upload/v1684827018/icono_descargas_yaqqlq.png",
    name:"Descargar",
    to:"/downloads"}

    
  ];
  const btms=imageButton.map(e=>
    <div className='grid grid-cols-1'>
      <Link className="text-black" to={e.to}>
      <img className='w-20 h-20 m-auto' src={e.url} alt="mi cuenta" />
      <h5 className='mt-0.5'>{e.name}</h5> 
      </Link>
      
    </div>
    )
  
  return (
    <>
    <div className='grid items-center md:w-6/12 m-auto text-center md:my-12 my-8 py-20 bg-white pborder'>
      

      <div className="grid grid-cols-1 place-items-center m-auto">
				<img className="w-3/12 mb-12 m-5" src={logo}></img>
			</div>

      <div>
        <h2>¡Hola, {userName}! Te damos la bienvenida a</h2>
      </div>
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

      {/*image button*/}
      <div className='grid md:grid-cols-2 gap-[0.5em] items-center'>
      
      {btms}

      </div>
    </div>

    </>
  );
};
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


export default Home;