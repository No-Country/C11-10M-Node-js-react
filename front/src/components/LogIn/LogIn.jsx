import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  
  const navigate = useNavigate();

  const [ userData, setUserData ] = useState({
    user: "",
    password: "",
  })

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    console.log(userData)
  };

    return (
      <>
      <div>
        <label htmlFor="user">Usuario:  </label>
        <input
          type="text"
          name="user"
          value={userData.user}
          onChange={handleInputChange}
          />   
      </div>
      <div>
        <label htmlFor="password">Contraseña:  </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />   
      </div>
    <div>
    <button onClick={() => navigate('/home')}>Ingresar</button>
    </div>
    </>
  );
};

export default LogIn;