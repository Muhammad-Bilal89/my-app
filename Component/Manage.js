import React, { useState,useEffect } from "react";
import history from "../../history";

export const Manage=()=>{

    const [laptop,setLaptop]=useState()
    const [mobile,setMobile]=useState()
    const [mouse,setMouse]=useState()
    const [Keyboard,setKeyboard]=useState()
    const [headphone,setHeadphone]=useState()
    const [printer,setPrinter]=useState()

    const handleChangeLaptop=(e)=>{setLaptop(e.target.value);console.log(laptop)}
    const handleChangeMobile=(e)=>{setMobile(e.target.value)}
    const handleChangeMouse=(e)=>{setMouse(e.target.value)}
    const handleChangeKeyboard=(e)=>{setKeyboard(e.target.value)}
    const handleChangeHeadphone=(e)=>{setHeadphone(e.target.value)}
    const handleChangePrinter=(e)=>{setPrinter(e.target.value)}

    const handleSubmit=((e)=>{
        e.preventDefault()
        let data={
            "stock1":  parseInt(laptop),
            "stock2":  parseInt(mobile),
            "stock3":  parseInt(mouse),
            "stock4":  parseInt(Keyboard),
            "stock5":  parseInt(headphone),
            "stock6":  parseInt(printer),
            
        };
        console.log(data)
        fetch('http://localhost:50083/api/Search/ADDStock',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        }).then(r=>r.json()).then(res=>{
        console.log("done updating");
        history.push('/dashboard')
        });
    })

    useEffect(()=>{
        fetch('http://localhost:50083/api/Search/products').then(res=>res.json()).then(result=>{
            setLaptop(result.result[0].stock)
            setMobile(result.result[1].stock)
            setMouse(result.result[2].stock)
            setKeyboard(result.result[3].stock)
            setHeadphone(result.result[4].stock)
            setPrinter(result.result[5].stock)
        })
    },[])
    return(
        <>
            <div className='content'>
                <h1>Products Management</h1>
                <form onSubmit={handleSubmit}>

                <label  className="control-label">Laptop Stock
                <input onChange={handleChangeLaptop}  type="number" className="form-control" value={laptop}  /></label><br/>

                <label  className="control-label">Mobile Stock
                <input onChange={handleChangeMobile} type="number" className="form-control" value={mobile}  /></label><br/>

                <label  className="control-label">Mouse Stock
                <input onChange={handleChangeMouse} type="number" className="form-control" value={mouse}   /></label><br/>

                <label  className="control-label">Keyboard Stock
                <input onChange={handleChangeKeyboard} type="number" className="form-control" value={Keyboard}  /></label><br/>

                <label  className="control-label">Headphone Stock
                <input onChange={handleChangeHeadphone} type="number" className="form-control" value={headphone}   /></label><br/>

                <label  className="control-label">Printer Stock
                <input onChange={handleChangePrinter} type="number" className="form-control" value={printer}  /></label><br/>

                <input type="submit" value="Save" className="btn btn-secondary" />
                </form>
            </div>
        </>
    )
}