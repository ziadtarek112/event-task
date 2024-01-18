
export interface User {
    id: number;
    name: string;
  }
  
 export interface Event {
    id: number;
    title: string;
    date: string;
    description:string;
    duration: string;
    location: string;
    attendees: User[];
  }

  export interface PaginatedResponse {
    totalEvents: Event[];
    currentPage: number;
    eventsPerPage: number;
    attendees: User[];
    numberOfPages: number;
  }

