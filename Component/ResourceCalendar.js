import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
export const ResourceCalendar=()=>{
    const calendarRef=React.createRef()

    const handleSelect=(e)=>{
        console.log(e)
        console.log(calendarRef)
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
             resources={ [
                 { id: 'a', building: '460 Bryant', title: 'Auditorium A' },
                 { id: 'b', building: '460 Bryant', title: 'Auditorium B' },
                 { id: 'c', building: '460 Bryant', title: 'Auditorium C' },
                 { id: 'd', building: '460 Bryant', title: 'Auditorium D' },
                 { id: 'e', building: '460 Bryant', title: 'Auditorium E' },
                 { id: 'f', building: '460 Bryant', title: 'Auditorium F' },
                 { id: 'g', building: '564 Pacific', title: 'Auditorium G' },
                 { id: 'h', building: '564 Pacific', title: 'Auditorium H' },
                 { id: 'i', building: '564 Pacific', title: 'Auditorium I' },
                 { id: 'j', building: '564 Pacific', title: 'Auditorium J' },
                 { id: 'k', building: '564 Pacific', title: 'Auditorium K' },
                 { id: 'l', building: '564 Pacific', title: 'Auditorium L' },
                 { id: 'm', building: '564 Pacific', title: 'Auditorium M' },
                 { id: 'n', building: '564 Pacific', title: 'Auditorium N' },
                 { id: 'o', building: '101 Main St', title: 'Auditorium O' },
                 { id: 'p', building: '101 Main St', title: 'Auditorium P' },
                 { id: 'q', building: '101 Main St', title: 'Auditorium Q' },
                 { id: 'r', building: '101 Main St', title: 'Auditorium R' },
                 { id: 's', building: '101 Main St', title: 'Auditorium S' },
                 { id: 't', building: '101 Main St', title: 'Auditorium T' },
                 { id: 'u', building: '101 Main St', title: 'Auditorium U' },
                 { id: 'v', building: '101 Main St', title: 'Auditorium V' },
                 { id: 'w', building: '101 Main St', title: 'Auditorium W' },
                 { id: 'x', building: '101 Main St', title: 'Auditorium X' },
                 { id: 'y', building: '101 Main St', title: 'Auditorium Y' },
                 { id: 'z', building: '101 Main St', title: 'Auditorium Z' }
             ]}
            editable={true}
            selectable={true}
            ref={calendarRef}
            select={handleSelect}
        />
        </div>
        </>
    )
}