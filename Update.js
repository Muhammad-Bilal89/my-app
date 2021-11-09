import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import history from '../history';
function Update(){
    

    const [Firstname,setFirstname] =useState("")
    const [Lastname,setLasttname] =useState("")
    const [Eamil,setEmail] =useState("")
    const [Product,setProduct] =useState("")

    let handleChangeFirstname=(e)=>{setFirstname(e.target.value);console.log(Firstname)}
    let handleChangeLastname=(e)=>{setLasttname(e.target.value)}
    let handleChangeEmail=(e)=>{setEmail(e.target.value)}
    let handleChangeProduct=(e)=>{setProduct(e.target.value)}

    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={
            "id":location.state.id,
            "firstName": Firstname,
            "lastName": Lastname,
            "email": Eamil,
            "product":Product
        };
        fetch('http://localhost:50083/api/UserRecord',{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        }).then(r=>r.json()).then(res=>{
        console.log("done updating");
        history.push('')
        });
    }


    
    const location = useLocation()
    const [data,setData]  = useState([])
    useEffect(()=>{
        fetch("http://localhost:50083/api/UserRecord/"+location.state.id).then(res=>res.json()).then(result=>{
                setData(result.result);console.log(result.result);
                setFirstname(result.result[0].firstName)
                setLasttname(result.result[0].lastName)
                setEmail(result.result[0].email)
                setProduct(result.result[0].product)
            })
    },[])
    
    return(
        <div>
    <div className="row">
    <h2>Edit Record</h2>
    {
        data.map(bh=>(
            
            <form onSubmit={handleSubmit}>
                <label  className="control-label">ID
                <input  type="text" className="form-control" defaultValue={bh.id} disabled /></label><br/>

                <label  className="control-label">First Name
                <input onChange={handleChangeFirstname}  type="text" className="form-control" defaultValue={bh.firstName}/></label><br/>

                <label  className="control-label">Last Name
                <input onChange={handleChangeLastname} type="text" className="form-control" defaultValue={bh.lastName} /></label><br/>

                <label  className="control-label">Email
                <input onChange={handleChangeEmail} type="text" className="form-control" defaultValue={bh.email} /></label><br/>

                <label  className="control-label">Email
                <input onChange={handleChangeProduct} type="text" className="form-control" defaultValue={bh.product} /></label><br/>

                <input type="submit" value="Save" className="btn btn-secondary" />
        </form>
        ))
    }
    </div></div>
    )   
}

export default Update;
