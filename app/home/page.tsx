import React from 'react'
import { events } from '@/constants/data'
import EventCard from '@/components/EventCard'
const Home = () => {
  return (
    <div className='mt-4'>
    <h1 className='text-center mb-4'>Available Events</h1>
    <div className='w-full px-9 flex gap-2 flex-wrap '>
        {events.map((event)=>(
            <EventCard key={event.id} event={event}/>
        ))}
    </div>
    </div>
  )
}

export default Home