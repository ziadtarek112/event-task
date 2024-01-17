import { Event } from "@/models"
import Button from "./Button"
import Link from "next/link"

interface EventCardProps {
    event: Event
}
const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className="flex flex-col bg-bg-secondary flex-1 p-4 rounded-md gap-1 h-full ">
            <h1>{event.title}</h1>
            <h2>date: {event.date}</h2>
            <h2>duration: {event.duration}</h2>
            <h2>location: {event.location}</h2>
            <Link href = {`event/${event.id}`}>  <Button text="Show Details" color="primary" size="small" /></Link>
        </div>
    )
}

export default EventCard