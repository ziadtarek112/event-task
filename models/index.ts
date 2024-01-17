
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

