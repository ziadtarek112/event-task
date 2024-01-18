import React from 'react'
import EventCard from '@/components/EventCard'
import { Event } from '@/models';

const getEvents = async()=>{
  const res = await fetch('http://localhost:8080/api/events');
  const events = await res.json();
  return events.totalEvents;
}
const Home = async() => {
  const events =await getEvents();
  
  return (
    <div className='mt-4'>
    <h1 className='text-center mb-4'>Available Events</h1>
    <div className='w-full px-9 flex gap-2 flex-wrap '>
        {events.map((event : Event)=>(
            <EventCard key={event.id} event={event}/>
        ))}
    </div>
    </div>
  )
}

export default Home