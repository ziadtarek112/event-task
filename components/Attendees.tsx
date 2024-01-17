import { User } from "@/models"

interface AttendeesProps {
    attendes: User[] | undefined
}

const Attendees = ({ attendes }: AttendeesProps) => {
    return (
        <div className="w-full ">
            <table className="mx-auto bg-bg-primary w-[300px] text-center rounded-md "> 
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