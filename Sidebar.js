import React from "react";
import '../App.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Create from "./Create";
import reactDom from "react-dom";
import { Link } from "react-router-dom";


export const Sidebar =()=>{
return(
    <div className="sidebar">
    <a className="navbar-brand" href="http://localhost:3000/">User Record</a>
    <ul>
    <li><Link className='badge badge-light' to='/dashboard'>Home</Link></li>
    <li><Link className='badge badge-light' to='/create'>Create Record</Link></li>
    <li><Link className='badge badge-light' to='/'>Update Record</Link></li>
    <li><Link className='badge badge-light' to='/search'>Search Record</Link></li>
    <li><Link className='badge badge-light' to='/location'>Add Location</Link></li>
    <li><Link className='badge badge-light' to='/calculator'>Calculator</Link></li>
    <li><Link className='badge badge-light' to='/calendar'>Premium Calendar</Link></li>
    <li><Link className='badge badge-light' to='/resourcecalendar'>Resource Calendar</Link></li>
    </ul>
    </div>
)
}