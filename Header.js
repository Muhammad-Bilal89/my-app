import React from "react";
import reactDom from 'react-dom';
import Create from './Create';
import history from "../history";
import '../App.css';
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={() => history.push({ pathname: "/contact" })}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/">About</a>
                        </li>
                        <li className="nav-item active">
                        <Link className="btn btn1 btn-outline-info" to="/create">Create New</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
    
}


export default Header;