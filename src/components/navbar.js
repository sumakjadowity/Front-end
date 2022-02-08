import React, { useState } from "react";
import Logo from "../assets/LOGO_KIiAM.png";
import { Link } from "react-router-dom";
//import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo}  alt=""/>
        <div className="hiddenLinks">
          <Link to="/"> Strona główna </Link>
          <Link to="/matlab"> Aplikacja</Link>
          <Link to="/diseases"> Baza chorób </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Strona główna </Link>
        <Link to="/matlab"> Aplikacja</Link>
        <Link to="/diseases"> Baza chorób </Link>
        <button onClick={toggleNavbar}>

        </button>
      </div>
    </div>
  );
}

export default Navbar;