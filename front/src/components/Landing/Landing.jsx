import { useNavigate } from "react-router-dom";
// import { stylesButton } from "../../styles";
import { useState } from "react";
// import { isLogin } from "../../redux/actions";
// import { useDispatch } from "react-redux";
// import swal from "sweetalert";
// import { useLocation, Link } from "react-router-dom";
import circle from "../../assets/circleEmpy.svg";
import logo from "../../assets/logo.png";

const Landing = () => {
	
	
	const slides=[
		{url:"https://i.ibb.co/5FKfTbR/01.webp",
		description:"¡Podes cargar las incidencias correspondientes a cada empleado!"},
		{url:"https://i.ibb.co/5K3xCch/02.webp",
		description:"¡Acceder de manera fácil y ágil a los datos cargados!"},
		{url:"https://i.ibb.co/yXDy71R/03.webp",
		description:"¡Y facilitar la liquidación de haberes de los empleados de tu empresa!"},
	  ]
	
	  const [currentImage,setCurrentImage]=useState(0)
	  const [text,setText]=useState(0)
	  
	  /* funtion for create dots below of image */
	  const dots= slides.map((slide, slideIndex)=>
	  <div key={slideIndex} className='cursor-pointer' onClick={()=>goToSlide(slideIndex)}>
	
		  <img src="src/assets/circleEmpy.svg" alt=""
		  className={`${currentImage === slideIndex && "bg-black rounded-full"}`}v />
		
	  </div>)
	
	   
	
	  
	  const nextimage=(e)=>{
		setCurrentImage(1+currentImage)
		setText(1+text)
		if(currentImage>=2){
		  setCurrentImage(0)
		  setText(0)
		}
	};

	const goToSlide= (slideIndex)=>{
        setCurrentImage(slideIndex)
        setText(slideIndex)
       }
  
	const navigate = useNavigate();

	return (
		<>
			<div className="grid place-items-center m-auto md:w-6/12 my-12">
				<div className="box grid place-items-center h-full m-auto mb-5">
					<div className="grid grid-cols-1 place-items-center m-auto">
						<div className="grid grid-cols-1 place-items-center m-auto">
							<img className="w-3/12 mb-12 m-5" src={logo}></img>
						</div>
						<img
							className="mb-8 w-8/12"
							onClick={nextimage}
							src={slides[currentImage].url}
							alt="a"
						/>

						<div className="text-center font-medium mb-8 w-8/12">
							<p className="">{slides[text].description}</p>
						</div>
						<div className="flex justify-center mb-8">{dots}</div>

						<button className="mb-8 btn-primary" onClick={() => navigate("/logIn")}>
							¡Empezar!
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
