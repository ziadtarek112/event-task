import { User } from "@/models";
import { NextResponse } from "next/server";


export async function GET (req : Request) {
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get('event') || '';
    const res = await fetch(`http://localhost:3000/events/${eventId}`);
    const event = await res.json();
    event.attendees = event.attendees.slice(0,5);

    return NextResponse.json(event);
}