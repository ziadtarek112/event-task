'use client'

import { useEffect, useState } from "react"
import Attendees from "./Attendees";
import { User } from "@/models";

interface AttendeesModalProps {
    modalOpen: boolean;
    eventId: number;

}
const AttendeesModal = ({modalOpen , eventId  }:AttendeesModalProps) => {
    const [event, setevent] = useState() ;
    useEffect(()=>{
        const fethcEvents = async()=>{
            const res = await fetch('http://localhost:8080/api/events');
            const data = await res.json();
            setevent(data);
        }

        fethcEvents();
    },[])
  return (
    <dialog open={true} className="bg-bg-primary border text-text-primary border-text-primary p-6 shadow-md rounded-md w-[500px] ">
        <div className="flex justify-between items-center mb-2">
        <h1>Attendess</h1>
        <h1>x</h1>
        </div>
        <hr className="mb-2"/>
        <Attendees attendes={event?.attendees}/>
    </dialog>
  )
}

export default AttendeesModal