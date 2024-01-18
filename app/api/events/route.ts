
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page =searchParams.get('page') || 1;
  const eventId = searchParams.get('event') || 1;
  const attendeesPerPage = 5;
    console.log('page', page);
    console.log('event', eventId);
  const res = await fetch('http://localhost:3000/events');
  const allEvents = await res.json();
   console.log(allEvents);
   

  const startIndex = (+page - 1) * attendeesPerPage;
  const endIndex = startIndex + attendeesPerPage;
    const numberOfPages = Math.ceil(allEvents[+eventId-1].attendees.length / attendeesPerPage);

  const paginatedAttendees = allEvents[+eventId-1].attendees.slice(startIndex, endIndex);

    

  const paginatedResponse = {
    totalEvents: allEvents,
    currentPage: page,
    eventsPerPage: attendeesPerPage,
    attendees: paginatedAttendees,
    numberOfPages: numberOfPages,
  };

  return NextResponse.json(paginatedResponse);
}
