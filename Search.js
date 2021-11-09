import React,{useState,useEffect} from "react";



export const Search=()=>{
    const [Param,setParam]=useState("");
    const [ParamId,setParamId]=useState([]);
    const [selected,setSelected]=useState([]);
    const [datat,setData]=useState([]);
    const [loader,setloader]=useState(false);

    const handlechangeParam=(e)=>{setParam(e.target.value)}
    const handleChangeOption=(e)=>{setSelected(e.target.value)}
    const handlechangeParamId=(e)=>{setParamId(e.target.value);console.log(ParamId)}
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("postdata running....")
        console.log(Param+"  : "+selected)
        let data={
            "id": selected==='id'?ParamId:null,
            "firstname":selected==='firstname'?Param:null,
            "lastname":selected==='lastname'?Param:null,
            "email":selected==='email'?Param:null,
        };
        console.log("data"+JSON.stringify(data));
        fetch('http://localhost:50083/api/Search',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
        }).then(r=>r.json()).then(res=>{
        var re=JSON.stringify(res);
        setData(JSON.parse(re).result)
        console.log(JSON.parse(re).result[0])
        });
        setloader(true)
        console.log(loader)
    }
    const clearit=()=>{
        setParamId("")
        setParam("")
        setSelected("")
    }
    return<>
    <div className="content">
    <div className="form-bloc">
    <form className='form' onSubmit={handleSubmit}>

    <div class="input-group mb-3 ">
    <input type="text" 
         class="form-control" 
         placeholder="ID"  
         onChange={handlechangeParamId} value={ParamId}  />
         <input type="text" 
         class="form-control" 
         placeholder="Search Parameter"  
         onChange={handlechangeParam} value={Param} />
            <div class="input-group-append form-control">
                <select class="form-select" aria-label="Default select example"
                value={selected} 
                onChange={handleChangeOption}>
                <option >Search By</option>
                <option value="id">ID</option>
                <option value="firstname">FirstName</option>
                <option value="lastname">LastName</option>
                <option value="email">Email</option>
                </select><br />
            </div>        
    </div>
        <input type='submit' value='Search' /> &nbsp; <input onClick={clearit} type='submit' value='Cancel' />
    </form></div><br /><br />

    {/* <form className='form' onSubmit={handleSubmit}>

    <div class="input-group mb-3 ">
    <input type="text" 
         class="form-control" 
         placeholder="ID"  
         onChange={handlechangeParamId} value={ParamId}  required/>
         <input type="text" 
         class="form-control" 
         placeholder="Search Parameter"  
         onChange={handlechangeParam} value={Param} />
            <div class="input-group-append form-control">
                <select class="form-select" aria-label="Default select example"
                value={selected} 
                onChange={handleChangeOption}>
                <option >Search By</option>
                <option value="id">ID</option>
                <option value="firstname">FirstName</option>
                <option value="lastname">LastName</option>
                <option value="email">Email</option>
                </select><br />
            </div>        
    </div>
        <input type='submit' value='Search' /> &nbsp; <input onClick={clearit} type='submit' value='Cancel' />
    </form> */}
    
{loader &&
    <table className="table table-search ">
    <thead>
        <tr>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
        </tr>
        </thead>
        <tbody>
        {datat.map(r=>(
            <tr>
            <td>{r.id}</td>
            <td>{r.firstName}</td>
            <td>{r.lastName}</td>
            <td>{r.email}</td>
        </tr>
        ))}
        </tbody>
    </table>    }
    </div>
    </>

}