import React, { useState,useEffect,useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
export const ResourceCalendar=()=>{
    const calendarRef=React.createRef()
    let dataapi=[]
    let resourceapi=[]
    const [data,setData]=useState([])
    const [resource,setResource]=useState([])


    useEffect(()=>{
        
        let data={
                    "PageNumber": 1,
                    "RowsOfPage": 15, 
                    "BusinessId": 0,
                    "Type": 1
                };
                fetch('http://newadminapi-dev.findanexpert.net/api/Booking',{
                        method: 'POST',
                        headers:{'Content-type':'application/json'},
                        body: JSON.stringify(data)
                        }).then(r=>r.json()).then(res=>{
                        
                        console.log(res.bookingList)
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
                                color  : '#6857F2'
                            })
                        )) 
                        
                    });
//allocated
                    data={
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
                            
                            console.log(res.bookingList)
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
                                
                                console.log(res.bookingList)
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
                                    
                                    console.log(res.bookingList)
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
    },[])

    const handleEventClick=(e)=>{
        console.log(e)
    }
    const handleAdd=(e)=>{
        console.log(e)
    }
    const handleLeave=(e)=>{
        console.log(e)
    }
    const handleResize=(e)=>{
        console.log(e)
    }
    const handleSelect=(e)=>{
        console.log(e)
        console.log(calendarRef)
        console.log({start: e.startStr,end:e.endStr})
        if((e.endStr.split('-')[2] - e.startStr.split('-')[2]) >1 )
        {
            calendarRef.current
            .getApi()
            .changeView('resourceTimelineWeek',e.start)
        }
        else
        {
            calendarRef.current
            .getApi()
            .changeView('resourceTimelineDay',e.startStr)
        }
    }
    return(
        <>
        <div className='content'>
        <h3>Resource Calendar</h3>
        <FullCalendar
        headerToolbar= {{
            left: 'today prev,next',
            center: 'title',
            right: 'resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay'
        }
        }
            plugins={[resourceTimelinePlugin,interactionPlugin]}
            initialView= 'resourceTimelineMonth'
            resources={resource}
            events={data}

            editable={true}
            selectable={true}
            ref={calendarRef}
            eventClick={handleEventClick}
            select={handleSelect}
            dateClick={handleAdd}
            eventDrop={handleLeave}
            eventResize={handleResize}
        />
        </div>
        </>
    )
}