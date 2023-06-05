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

      {/*image button*/}
      <div className='grid md:grid-cols-2 gap-[0.5em] items-center'>
      
      {btms}

      </div>
    </div>

    </>
  );
};


export default Home;