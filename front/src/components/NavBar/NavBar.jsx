import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Swal from "sweetalert2"


const NavBar = ({setFlag}) => {
	let [open, setOpen] = useState(false);

	const signOut = () =>{
		Swal.fire({
			title: "¿Desea cerrar sesión?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.setItem("user", "")
				localStorage.setItem("isLogin", "")
				localStorage.setItem("password", "")
				setFlag(prev=>!prev)
			}
		});
	}

	const isLogin = localStorage.getItem("user");
	
	return (
		<>
			<nav>
				<div
					
					className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
				>
					<Link to="/">
						<img className="h-8 mr-3" src={logo} alt="" />
					</Link>

					<div onClick={() => setOpen(!open)}>
						<span>
							{open ? (
								<svg
									className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden icon"
									xmlns="http://www.w3.org/2000/svg"
									height="48"
									viewBox="0 -960 960 960"
									width="48"
								>
									<path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
								</svg>
							) : (
								<svg
									className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden icon"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
                    className="w-6 h-6 absolute right-8 top-6 cursor-pointer md:hidden icon"
										fill="currentcolor"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									></path>
								</svg>
							)}
						</span>
					</div>
          <div onClick={()=>{}}>

            <NavLink to="/home"><svg className="w-6 h-6 absolute right-14 top-6 cursor-pointer md:hidden icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg></NavLink>
              
							

          </div>

					<div className="w-full md:block md:w-auto" id="navbar-default">
						<ul
							className={`md:flex md:items-center md:static md:w-auto md:pl-0 pl-9 bg-green md:z-auto z-[1] left-0 w-full absolute transition-allduration-800 ease-in ${
								open ? "top-12" : "top-[-490px]"
							}`}
						>
							<li className="md:ml-8 text-xl md:my-0 my-7">
								<NavLink className="text-white hover:text-gray-200" to="/home">
									Home
								</NavLink>
							</li>
							<li className="md:ml-8 text-xl md:my-0 my-7">
								<NavLink className="text-white hover:text-gray-200" to="/employees">
									Empleados
								</NavLink>
							</li>
							<li className="md:ml-8 text-xl md:my-0 my-7">
								<NavLink className="text-white hover:text-gray-200" to="/wage">
									Liquidación
								</NavLink>
							</li>
							{!isLogin && isLogin==="" ? <li className="md:ml-8 text-xl md:my-0 my-7">
								<NavLink className="text-white hover:text-gray-200" to="/logIn">
									Ingresar
								</NavLink>
							</li> : 
								<div className="text-white hover:text-gray-200 text-xl md:my-0 my-7 ml-5">
									<span className="text-white hover:text-gray-200 font-semibold cursor-pointer" onClick={()=>signOut()}>Cerrar sesión</span>
								</div>
							}
						</ul>
					</div>
				</div>
			</nav>
			<div>
				{isLogin === "superAdmin" && (
					<NavLink className="" to="/signup">
						Registrar
					</NavLink>
				)}
			</div>
		</>
	);
};

// const StyledNav = styled.div`
// 	align-items: center;
// 	width: 100%;
// 	justify-content: space-around;
// 	color: #ffffff;
// 	background-color: rgb(20, 145, 94);
// 	.navLink {
// 		font-size: 30px;
// 		color: #ffffff;
// 		font-weight: bold;
// 		text-decoration: none;
// 	}
// 	.logo {
// 		width: 180px;
// 	}
// `;

export default NavBar;
