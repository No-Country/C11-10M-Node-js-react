import { useNavigate } from "react-router-dom";

const LogIn = () => {

const navigate = useNavigate();

  return (
    <>
    <div>
        <label htmlFor="name">Usuario:  </label>
        <input
          type="text"
          name="name"
        />   
    </div>
    <div>
        <label htmlFor="password">Contraseña:  </label>
        <input
          type="text"
          name="password"
        />   
    </div>
    <div>
    <button onClick={() => navigate('/home')}>Ingresar</button>
    </div>
    </>
  );
};

export default LogIn;