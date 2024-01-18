import { Event } from "@/models";
export const events: Event[] = [
    {
      id: 1,
      title: 'Tech Conference',
      date: '2024-02-15',
      duration: '2 hours',
      location: 'Tech Expo Center',
      description: 'Join us for the latest in technology trends and innovations. The Tech Conference brings together industry experts, thought leaders, and enthusiasts to discuss groundbreaking technologies, share insights, and network with like-minded individuals. Don\'t miss this opportunity to stay ahead in the rapidly evolving tech landscape.',

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
      description: 'Explore breathtaking artworks from local and international artists. The Art Exhibition showcases a diverse range of paintings, sculptures, and installations that captivate the imagination. Immerse yourself in the world of art and creativity as we celebrate the richness of human expression.',
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
      description: 'Experience a day filled with live music performances from various genres. The Music Festival brings together talented musicians and bands to create an unforgettable musical journey. Whether youre a fan of rock, pop, jazz, or electronic music, theres something for everyone at this electrifying event.',
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
      description: 'Indulge in a culinary journey featuring gourmet delights and food tastings. The Food Expo brings together top chefs, restaurateurs, and food enthusiasts to celebrate the art of cooking and gastronomy. Discover new flavors, savor exquisite dishes, and explore the world of culinary excellence.',
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
      description: 'Join us for a fitness workshop focusing on health and well-being. The Fitness Workshop provides expert guidance on physical fitness, nutrition, and mental wellness. Whether you\'re a fitness enthusiast or just starting your health journey, this workshop offers valuable insights to help you lead a healthier lifestyle.',

      attendees: [
        { id: 501, name: 'Maxwell Turner' },
        { id: 502, name: 'Sophia Lee' },

      ],
    },

  ];