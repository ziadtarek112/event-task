import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page =searchParams.get('page') || 1;
  const eventsPerPage = 5;

  const res = await fetch('http://localhost:3000/events');
  const allEvents = await res.json();


  const startIndex = (+page - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
    const numberOfPages = Math.ceil(allEvents.totalEvents / eventsPerPage);

  const paginatedEvents = allEvents.events.slice(startIndex, endIndex);


  const paginatedResponse = {
    totalEvents: allEvents.totalEvents,
    currentPage: page,
    eventsPerPage: eventsPerPage,
    events: paginatedEvents,
    numberOfPages: numberOfPages,
  };

  return NextResponse.json(paginatedResponse);
}
