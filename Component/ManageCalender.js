import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import history from "../../history";

export const ManageCalender=()=>{

    const [name,setName]=useState("")
    const [desp,setDesp]=useState("")
    const [date,setDate]=useState("")
    const [vanue,setVanue]=useState("")
    const location = useLocation()

    useEffect(()=>{
        if(location.state!=undefined){
            fetch('http://localhost:50083/api/Search/scheduler?date='+location.state.id).then(res=>res.json())
            .then(result=>{
                console.log(result.result)
                setName(result.result[0].userName)
                setDesp(result.result[0].description)
                setDate(result.result[0].date)
                setVanue(result.result[0].vanue)
            })
        }
        
    
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name+" "+desp+" "+date+" "+vanue)

        let data={
            "userName": name,
            "description": desp,
            "date": date,
            "vanue": vanue,
        };
        fetch('http://localhost:50083/api/Search/SetScheduler',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        }).then(r=>r.json()).then(res=>{
        console.log("done posting");
        history.push('/calculator')
        });
    }

    return(
        <div className='content'>
         <h4>Manage Appointment Here</h4>
         <form onSubmit={handleSubmit}>

                <label  className="control-label">User Name
                <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className="form-control"/></label><br/>

                <label  className="control-label">Description
                <input onChange={(e)=>{setDesp(e.target.value)}} value={desp} type="text" className="form-control"/></label><br/>

                <label  className="control-label">Date
                <input onChange={(e)=>{setDate(e.target.value)}} value={date} type="number" className="form-control" min='1' max='30' /></label><br/>

                <label  className="control-label">Vanue
                <input onChange={(e)=>{setVanue(e.target.value)}} value={vanue} type="text" className="form-control" /></label><br/>


                <input type="submit" value="Create" className="btn btn-secondary" />
        </form>
        </div>
       
    )
}