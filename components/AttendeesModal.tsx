'use client'

import { useEffect, useState } from "react"
import Attendees from "./Attendees";
import { Event, PaginatedResponse, User } from "@/models";
import Pagination from "./Paginationbar";

interface AttendeesModalProps {
    modalOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
    eventId: string;

}
const AttendeesModal = ({ modalOpen,setModalOpen,eventId }:AttendeesModalProps) => {
    const [event, setevent] = useState<PaginatedResponse>({
        attendees: [],
        numberOfPages: 1,
        totalEvents : [],
        currentPage: 1,
        eventsPerPage: 1,
    });
    const [page , setPage] = useState(1);


    useEffect(()=>{
        const fethcEvents = async()=>{
            const res = await fetch(`http://localhost:8080/api/events?page=${page}&event=${eventId}`);
            const data = await res.json();
        
            
            setevent(data);
        }

        fethcEvents();
    },[page,eventId])
  return (
    <dialog open={modalOpen} className="bg-bg-primary border text-text-primary  border-text-primary p-6 shadow-md rounded-md w-[500px] ">
        <div className="flex justify-between items-center mb-2">
        <h1>Attendess</h1>
        <h1 className="cursor-pointer" onClick={()=>setModalOpen(false)}>x</h1>
        </div>
        <hr className="mb-2"/>
        <Attendees attendes={event?.attendees}/>
        <Pagination totalPages={event?.numberOfPages} onPageChange={setPage} page={page}/>

    </dialog>
  )
}

export default AttendeesModal