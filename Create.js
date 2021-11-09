import React, { useEffect, useState } from "react";
import '../App.css';
import history from "../history";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactDOM from 'react-dom';
import Index from "./Index";
import ClipLoader from 'react-js-loader'

function Create(){
   
   const [Firstname,setFirstname] =useState("")
   const [Lastname,setLasttname] =useState("")
   const [Eamil,setEmail] =useState("")
   const [Product,setProduct] =useState("")

    let handleChangeFirstname=(e)=>{setFirstname(e.target.value)}
    let handleChangeLastname=(e)=>{setLasttname(e.target.value)}
    let handleChangeEmail=(e)=>{setEmail(e.target.value)}
    let handleChangeProduct=(e)=>{setProduct(e.target.value)}

    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={
            "firstName": Firstname,
            "lastName": Lastname,
            "email": Eamil,
            "product": Product,
        };
        fetch('http://localhost:50083/api/UserRecord',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        }).then(r=>r.json()).then(res=>{
        console.log("done posting");
        history.push('')
        });
    }

    
    
    return(
        <div>
    <div className="row">
    <h2>Enter User Record</h2>
        <form onSubmit={handleSubmit}>
                <label  className="control-label">First Name
                <input onChange={handleChangeFirstname} type="text" className="form-control" minLength="3" /></label><br/>

                <label  className="control-label">Last Name
                <input onChange={handleChangeLastname} type="text" className="form-control" minLength="3" /></label><br/>

                <label  className="control-label">Email
                <input onChange={handleChangeEmail} type="text" className="form-control" required pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" /></label><br/>

                <label  className="control-label">Product Buyed
                <input onChange={handleChangeProduct} type="text" className="form-control" minLength="3" /></label><br/>

                <input type="submit" value="Create" className="btn btn-secondary" />
        </form>
        
    </div></div>
    )   
}

export default Create;














// import React from 'react'
// className Index extends React.Component
// {
//     constructor(props){
//         super(props)
//         this.state={
//             BookingHistory:[]
//         };
//     }
//     componentDidMount(){
//         fetch("http://localhost:50089/api/bookinghistory").then(res=>res.json()).then(result=>{
//             this.setState({BookingHistory:result});console.log(result)
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <table striped="true" hover="true">
//                 <thead>
//                 <tr>
//                 <th>ID</th>
//                 <th>User ID</th>
//                 <th>Created On</th>
//                 <th>Modified On</th>
//                 </tr>
//                 </thead>
//                 <tbody>
                   
//                 </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
// export default Index;