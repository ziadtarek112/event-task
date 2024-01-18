import { User } from "@/models"

interface AttendeesProps {
    attendes: User[] | undefined
}

const Attendees = ({ attendes }: AttendeesProps) => {
    const getEvents = async()=>{
        const res = await fetch('http://localhost:8080/api/events?page=1');
        const events = await res.json();
        return events.attendees;
      }
    
    return (
        
        <div className="w-full flex justify-center ">
            <table className=" bg-bg-primary w-[300px] text-center rounded-md "> 
                <thead>
                <tr>
                    <th>#Id</th>
                    <th>Name</th>
                </tr>
                </thead>

                <tbody>
                {attendes?.map((attendee) => (
                    <tr key={attendee.id} >
                        <td>{attendee.id}</td>
                        <td>{attendee.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Attendees