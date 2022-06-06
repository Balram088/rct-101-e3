import React from "react";
import {Link , useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth , logout} = useContext (AuthContext);
  const navigate = useNavigate();

  const handleLogin=()=>{
    if(isAuth){
      logout();
    }
    else{
      navigate("/login");
    }
  }
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button"> {isAuth ? "Logout": "Login"}</button>
      
    </div>
  );
};

export default Navbar;
