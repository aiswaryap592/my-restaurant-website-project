import { Link } from "react-router-dom";
import './Navbar.css'

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';*/
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
const Navbar=()=>{
    const [openLinks,setOpenLinks]=useState(false)
    const save = ()=>{
        setOpenLinks(!openLinks)
    }
    return(

        <div classname="navbar">
        <div classname="leftside" id={openLinks ? "open":"close"}>
           <img src="https://o.remove.bg/downloads/aa8fa677-2ab3-4614-adb9-865b8e68a417/image-removebg-preview.png" />
           <div classname="hiddenlinks">
           <Link to="/">Home</Link>
       <Link to="/menu">Menu    </Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
           </div>

        </div>
        <div classname="rightside">
       <Link to="/">Home</Link>
       <Link to="/menu">Menu    </Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
      <button onClick = {save}>
      <FaBars />
      </button>
       </div>
       </div>
    )
}
export default Navbar;