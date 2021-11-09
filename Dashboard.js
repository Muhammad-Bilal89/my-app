import React, { useEffect, useState } from "react";
import {Bar,Line,Pie} from "react-chartjs-2"
import GaugeChart from 'react-gauge-chart'
import { Link } from "react-router-dom";
export const Dashboard=()=>{
    
    const[guagevalue,setGuagevalue]=useState("40")
    const [laptop,setLaptop]=useState()
    const [mobile,setMobile]=useState()
    const [mouse,setMouse]=useState()
    const [Keyboard,setKeyboard]=useState()
    const [headphone,setHeadphone]=useState()
    const [printer,setPrinter]=useState()
    

    const handleBarData=(e)=>{
        console.log("s"+e)
    }

    useEffect(()=>{
        fetch('http://localhost:50083/api/Search/products').then(res=>res.json()).then(result=>{
            var meter= (((result.result[0].stock)+
            (result.result[1].stock)+
            (result.result[2].stock)+
            (result.result[3].stock)+
            (result.result[4].stock)+
            (result.result[5].stock))/100)*100
            setGuagevalue(meter)
            setLaptop(result.result[0].stock)
            setMobile(result.result[1].stock)
            setMouse(result.result[2].stock)
            setKeyboard(result.result[3].stock)
            setHeadphone(result.result[4].stock)
            setPrinter(result.result[5].stock)
        })
    }, [])

    return(
        <>
            <div className="content">
            <button ><Link style={{color:'#000'}} className='badge badge-light' to='/manage'>Manage Products</Link></button><br/><br/>
            <div style={{width:'30%',marginBottom:'20px',backgroundColor:"#000"}}>
            <GaugeChart 
                    nrOfLevels={30}
                    colors={["#FF5F6D", "#FFC371"]}
                    arcWidth={0.3}
                    percent={guagevalue/100}
            />
            </div>
            <Bar
                data={
                    {
                            labels: ['Laptop', 'Mobile', 'Mouse', 'Keyboard', 'Headphone', 'Printer'],
                            datasets: [{
                                label: '# of Votes',
                                data: [laptop,mobile ,mouse , Keyboard, headphone,printer],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                    }
                }
                // onClick={handleBarData}
                // getElementAtEvent={datasets => console.log(datasets[0].index)}
                getElementAtEvent={datasets => {if(datasets[0].index == 0) {
                    setGuagevalue(laptop)
                }else if(datasets[0].index == 1){
                    setGuagevalue(mobile)
                }
                }}
                height={100}
                options={{
                    maintainAspectRatio:true,
                    // onClick:{handleBarData}
                }}
            />
        </div>
        </>
    )
}
