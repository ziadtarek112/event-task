'use client'


import { events } from '@/constants/data'
import Attendees from '@/components/Attendees'
import Button from '@/components/Button'
import AttendeesModal from '@/components/AttendeesModal'
import { use, useEffect, useState } from 'react'
interface EventProps {
  params: {
    id: string
  }
}

const Event = ({ params }: EventProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [event, setevent] = useState({});
    useEffect(()=>{
        const fethcEvents = async()=>{
            const res = await fetch(`http://localhost:8080/api/events?event=${params.id}`);
            const data = await res.json();
          
            setevent(data);
        }

        fethcEvents();
    },[])

  return (
    <div className='px-16'>
      <div className='w-full bg-bg-secondary p-8 rounded-md relative'>
        <h1 className='text-center mb-2'>{event?.title}</h1>

        <div className='flex items-center justify-center gap-4 mb-2 '>
          <h2>date: {event?.date}</h2>
          <h2>duration: {event?.duration}</h2>
          <h2>location: {event?.location}</h2>
        </div>

        <div>
          <h1 className='mb-2'>Describtion: </h1>
          <p>{event?.description}</p>
        </div>

        <div>
          <h1 className='mb-2 mt-2'>Attendees: </h1>
          <Attendees attendes={event?.attendees} />
        </div>

        <div className='w-full flex justify-center mt-2' onClick={() => setModalOpen(true)}>
          <Button text='Show more' color='primary' size='medium' />
        </div>
        <div className='absolute flex items-center justify-center w-full'>
          <AttendeesModal modalOpen={modalOpen} setModalOpen={setModalOpen} eventId={params.id} />
        </div>
      </div>
    </div>
  )
}

export default Event