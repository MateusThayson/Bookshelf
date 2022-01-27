import "./Menu.css";
import { NavLink } from "react-router-dom";
import marca from "../../shared/img/marcamini.png";

// import { useContext } from "react";
// import { AppContext } from "../../App";

import { BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';



export function Menu(){

    // const {setAuth} = useContext(AppContext);

    return(
        <nav className="menu">
            <div>
                <img src={marca} alt=""></img>
            </div>
            <div className="container-btn"> 
                <button className="pesquisa" type="submit"><BsSearch/></button>
                <NavLink className="btn" exact to="/home"><span><AiOutlineHome/></span></NavLink>
                <NavLink className="btn" exact to="/descobrir"><span><BiWorld/></span></NavLink>
                <NavLink className="btn" exact to="/meuperfil"><span><BsPerson/></span></NavLink>
                <NavLink className="btn" exact to="/login"><span><AiOutlineLogout/></span></NavLink>
            </div>         
        </nav>
    )
}