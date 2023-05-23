import { NavLink } from "react-router-dom";

const Landing = () => {
	return (
		<div className="flex flex-col gap-2 pl-2">
			<p>Landing</p>
			<NavLink to="/logIn">Login</NavLink>
		</div>
	);
};

export default Landing;
