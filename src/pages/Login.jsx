import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  
  const [loginData, setLoginData] = useState({});
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
   setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.pass) {
      login(loginData.email, loginData.pass);
    }
  }

  return (
   <div>
<form onSubmit={handleSubmit}>
<input type="email" name="email"  placeholder="Enter Email" data-cy="login-email"  onChange={handleChange}/>
<input type="password" name="pass"  placeholder="Enter Password"data-cy="login-password" onChange={handleChange} />
<button type="submit" data-cy="login-submit">Login</button>
</form>
</div>
  );
};

export default Login;

