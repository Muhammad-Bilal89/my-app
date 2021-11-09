import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../calender.css'
import history from "../../history";

export const Calculator=()=>{

    const [data,setData]=useState({})
    const [ispending,setIspending]=useState(false)
   // const Array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:50083/api/Search/scheduler').then(res=>res.json())
        .then(result=>{
            console.log(result.result)
            setData(result.result)
            setIspending(true)
        })
        }, 500);
        
    },{})
  
    return(
        ispending &&
        <div className="content">
        
        <button><Link style={{color:'blue'}} className='badge' to='/managecalender'>Manage Scheduler</Link> </button>
        <h3 style={{textAlign:"center",marginBottom:'15px',marginTop:'-3%'}}>Scheduler Calender</h3>
        <div className='calender'>
        <table className='table table-bordered table-dark'>
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
            {
                data[0].date==''?console.log('a'):console.log('b')
            }
                <tr>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: {  id: data[0].date } })}>1
                    <br/> {<span style={{color:'yellow'}}>{data[0].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[0].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[1].date } })}>2
                    <br/> {<span style={{color:'yellow'}}>{data[1].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[1].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[2].date } })}>3
                    <br/> {<span style={{color:'yellow'}}>{data[2].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[2].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[3].date } })}>4
                    <br/> {<span style={{color:'yellow'}}>{data[3].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[3].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[4].date } })}>5
                    <br/> {<span style={{color:'yellow'}}>{data[4].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[4].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[5].date } })}>6
                    <br/> {<span style={{color:'yellow'}}>{data[5].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[5].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[6].date } })}>7
                    <br/> {<span style={{color:'yellow'}}>{data[6].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[6].vanue}</span>}
                    </td>
                    
                </tr>
                
                
                <tr>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[7].date } })}>8
                    <br/> {<span style={{color:'yellow'}}>{data[7].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[7].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[8].date } })}>9
                    <br/> {<span style={{color:'yellow'}}>{data[8].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[8].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[9].date } })}>10
                    <br/> {<span style={{color:'yellow'}}>{data[9].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[9].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[10].date } })}>11
                    <br/> {<span style={{color:'yellow'}}>{data[10].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[10].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[11].date } })}>12
                    <br/> {<span style={{color:'yellow'}}>{data[11].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[11].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[12].date } })}>13
                    <br/> {<span style={{color:'yellow'}}>{data[12].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[12].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[13].date } })}>14
                    <br/> {<span style={{color:'yellow'}}>{data[13].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[13].vanue}</span>}
                    </td>
                    
                </tr>

                
                <tr>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[14].date } })}>15
                    <br/> {<span style={{color:'yellow'}}>{data[14].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[14].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[15].date } })}>16
                    <br/> {<span style={{color:'yellow'}}>{data[15].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[15].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[16].date } })}>17
                    <br/> {<span style={{color:'yellow'}}>{data[16].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[16].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[17].date } })}>18
                    <br/> {<span style={{color:'yellow'}}>{data[17].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[17].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[18].date } })}>19
                    <br/> {<span style={{color:'yellow'}}>{data[18].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[18].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[19].date } })}>20
                    <br/> {<span style={{color:'yellow'}}>{data[19].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[19].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[20].date } })}>21
                    <br/> {<span style={{color:'yellow'}}>{data[20].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[21].vanue}</span>}
                    </td>
                    
                </tr>

                
                <tr>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[21].date } })}>22
                    <br/> {<span style={{color:'yellow'}}>{data[21].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[21].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[22].date } })}>23
                    <br/> {<span style={{color:'yellow'}}>{data[22].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[22].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[23].date } })}>24
                    <br/> {<span style={{color:'yellow'}}>{data[23].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[23].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[24].date } })}>25
                    <br/> {<span style={{color:'yellow'}}>{data[24].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[24].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[25].date } })}>26
                    <br/> {<span style={{color:'yellow'}}>{data[25].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[25].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[26].date } })}>27
                    <br/> {<span style={{color:'yellow'}}>{data[26].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[26].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[27].date } })}>28
                    <br/> {<span style={{color:'yellow'}}>{data[27].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[27].vanue}</span>}
                    </td>
                    
                </tr>

                
                <tr>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[28].date } })}>29
                    <br/> {<span style={{color:'yellow'}}>{data[28].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[28].vanue}</span>}
                    </td>
                    <td onClick={() => history.push({ pathname: "/managecalender", state: { id: data[29].date } })}>30
                    <br/> {<span style={{color:'yellow'}}>{data[29].description}</span>}
                    <br/> {<span style={{color:'red'}}>{data[29].vanue}</span>}
                    </td>                   
                </tr>
             </tbody> 
        </table>
        </div>
        </div>
    )
}