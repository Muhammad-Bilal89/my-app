import React, { Button,useEffect, useState,useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interationPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
//import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import Modal from 'react-modal'
import { ResourceApi } from "@fullcalendar/resource-common";
    
export const ResourceCalendar=()=>{

    const [data,setData]=useState([])
    const [resource,setResource]=useState([])
    const [toggle,setToggle]=useState(false)
    const [initialView,setInitialView]=useState("dayGridMonth")
    const [initialDate,setInitialDate]=useState(new Date())
    const calendarRef =React.createRef()
    
    useEffect(()=>{
        setTimeout(() => {
            
        
        let dataapi=[]
        let resourceapi=[]
        let data={
            "PageNumber": 1,
            "RowsOfPage": 15, 
            "BusinessId": 0,
            "Type": 2
        };
        fetch('http://newadminapi-dev.findanexpert.net/api/Booking',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(data)
                }).then(r=>r.json()).then(res=>{
                
                //console.log(res.bookingList)
                //setData(res.bookingList)
                res.bookingList.map(m=>(
                    resourceapi.push({
                        id:m.userId,
                        title:m.customerName,
                        businessHours: {
                            startTime: '11:00',
                            endTime: '20:00',
                            daysOfWeek: [1,2,3,4,5] // Mon
                            } 
                    }) ,
                    dataapi.push({
                        resourceId:m.userId,
                        id : m.id,
                        title : m.serviceTypeName,
                        description : m.serviceTypeName,
                        start : m.createdon,
                        end : m.createdon,
                        color  : '#265728'
                    })
                )) 

            });
            data={
                "PageNumber": 1,
                "RowsOfPage": 15, 
                "BusinessId": 0,
                "Type": 3
            };
            fetch('http://newadminapi-dev.findanexpert.net/api/Booking',{
                    method: 'POST',
                    headers:{'Content-type':'application/json'},
                    body: JSON.stringify(data)
                    }).then(r=>r.json()).then(res=>{
                    
                    //console.log(res.bookingList)
                    //setData(res.bookingList)
                    res.bookingList.map(m=>(
                        resourceapi.push({
                            id:m.userId,
                            title:m.customerName
                        }) ,
                        dataapi.push({
                            resourceId:m.userId,
                            id : m.id,
                            title : m.serviceTypeName,
                            description : m.serviceTypeName,
                            start : m.createdon,
                            end : m.createdon,
                            color  : '#eeff00'
                        })
                    )) 
                    
                });
                data={
                    "PageNumber": 1,
                    "RowsOfPage": 15, 
                    "BusinessId": 0,
                    "Type": 4
                };
                fetch('http://newadminapi-dev.findanexpert.net/api/Booking',{
                        method: 'POST',
                        headers:{'Content-type':'application/json'},
                        body: JSON.stringify(data)
                        }).then(r=>r.json()).then(res=>{
                        
                        //console.log(res.bookingList)
                        //setData(res.bookingList)
                        res.bookingList.map(m=>(
                            resourceapi.push({
                                id:m.userId,
                                title:m.customerName
                            }) ,
                            dataapi.push({
                                resourceId:m.userId,
                                id : m.id,
                                title : m.serviceTypeName,
                                description : m.serviceTypeName,
                                start : m.createdon,
                                end : m.createdon,
                                color  : '#ff0000'
                            })
                        ))
                        console.log(dataapi)
                        setData(dataapi)
                        setResource(resourceapi)
                    });
                }, 300);                  
    },[])
    const handleEvent=(e)=>{
        console.log(e.event._def)
    }
    const handleSelect=(e)=>{
        //setToggle(true)
        console.log(e)
        console.log(calendarRef.current)
        //console.log(e.startStr)
        //e.view.type="timeGridDay"
        // {console.log(calendarRef.current)
        {calendarRef.current   
        .getApi()
        .changeView('resourceTimelineDay', e.startStr)}
        // setInitialDate(e.startStr)
        // setInitialView("timeGridDay")
        //setToggle(false)
    }
    return(
        
        <div className="content">
      
        {/* <Modal isOpen={show} >
            <h1>{data.customerName}</h1>
            <p><b>customerEmail</b>    : {data.customerEmail}</p>
            <p><b>customerMobile </b>  : {data.customerMobile}</p>
            <p><b>createdOn</b>        : {data.createdOn}</p>
            <p><b>providerEmail</b>    : {data.providerEmail}</p>
            <button onClick={handleClose}>save changes</button>
            </Modal> */}
        <h1>Premium Calender</h1>
        <div className='calendar'>
      
        { toggle==false &&
            <FullCalendar
            //schedulerLicenseKey="0216257263-fcs-1626084820"
            headerToolbar={
                {left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay'}
            }
            
            plugins= {[ resourceTimelinePlugin,dayGridPlugin,timeGridPlugin,interationPlugin ]}
            initialView='resourceTimelineMonth'
            //slotDuration='00:30:00'
            //initialDate={initialDate}
            resources={resource}
            events={data}
            editable={true}
            selectable={true}
            select={handleSelect}
            eventClick={handleEvent}
            ref={calendarRef}
    
           />
        }
     
        </div>
        </div>
       
    )
}