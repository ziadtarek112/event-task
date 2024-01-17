import { Event } from "@/models";
const events: Event[] = [
    {
      id: 1,
      title: 'Tech Conference',
      date: '2024-02-15',
      duration: '2 hours',
      location: 'Tech Expo Center',
      attendees: [
        { id: 101, name: 'John Doe' },
        { id: 102, name: 'Jane Smith' },
     
      ],
    },
    {
      id: 2,
      title: 'Art Exhibition',
      date: '2024-03-10',
      duration: '3 hours',
      location: 'City Art Gallery',
      attendees: [
        { id: 201, name: 'Alice Johnson' },
        { id: 202, name: 'Bob Wilson' },
 
      ],
    },
    {
      id: 3,
      title: 'Music Festival',
      date: '2024-04-20',
      duration: '6 hours',
      location: 'Riverfront Park',
      attendees: [
        { id: 301, name: 'Ella Davis' },
        { id: 302, name: 'Sam Thompson' },
      ],
    },
    {
      id: 4,
      title: 'Food Expo',
      date: '2024-05-15',
      duration: '4 hours',
      location: 'Gourmet Convention Center',
      attendees: [
        { id: 401, name: 'Carlos Rodriguez' },
        { id: 402, name: 'Lily Chen' },

      ],
    },
    {
      id: 5,
      title: 'Fitness Workshop',
      date: '2024-06-08',
      duration: '2 hours',
      location: 'Health Hub Gym',
      attendees: [
        { id: 501, name: 'Maxwell Turner' },
        { id: 502, name: 'Sophia Lee' },

      ],
    },

  ];