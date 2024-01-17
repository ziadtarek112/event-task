import React from 'react'
import { events } from '@/constants/data'
import Attendees from '@/components/Attendees'
import Button from '@/components/Button'
interface EventProps {
  params: {
    id: string
  }
}
const Event = ({ params }: EventProps) => {
  const event = events.find((event) => event.id === +params.id)
  return (
    <div className='px-16'>
      <div className='w-full bg-bg-secondary p-8 rounded-md '>
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
        <div className='mx-auto w-full'>
        <Button text='Show more' color='primary' size='medium'/>
        </div>
      </div>
    </div>
  )
}

export default Event