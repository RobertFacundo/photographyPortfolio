// src/data/images.js
// This file will contain information for all your images.
// Use direct URLs from Unsplash or your CDN.

const allImages = [
  {
    id: 'img001',
    src: 'https://images.unsplash.com/photo-1750875936215-0c35c1742cd6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Suburban house', // Translated
    category: 'place',
    caption: 'Urban gazes.' // Translated (keeping original meaning)
  },
  {
    id: 'img002',
    src: 'https://images.unsplash.com/photo-1750544684761-cc028988a69e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vintage Car', // Translated
    category: 'place',
    caption: 'Geometry and light.' // Translated
  },
  {
    id: 'img003',
    src: 'https://images.unsplash.com/photo-1564477415696-57fe0623c698?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait of a woman wearing a hat', // Translated
    category: 'portrait',
    caption: 'The warmth of a moment.' // Translated
  },
  {
    id: 'img004',
    src: 'https://images.unsplash.com/photo-1669158424312-a114a96a8b61?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mountainous landscape with fog', // Translated
    category: 'place',
    caption: 'Hidden paths.' // Translated
  },
  {
    id: 'img042',
    src: 'https://images.unsplash.com/photo-1678566861783-325d2622d108?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aalt: 'Close-up portrait of a beautiful woman with striking deep blue eyes looking directly at the camera.',
    category: 'portrait',
    caption: 'You take my breath away.'
  },
  {
    id: 'img006',
    src: 'https://images.unsplash.com/photo-1648818694788-87ef9712e796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Narrow street in an old city', // Translated
    category: 'place',
    caption: 'History in every corner.' // Translated
  },
  {
    id: 'img007',
    src: 'https://plus.unsplash.com/premium_photo-1729337273312-b0b7724bc033?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait of an elderly person', // Translated
    category: 'portrait',
    caption: 'The wisdom of time.' // Translated
  },
  {
    id: 'img008',
    src: 'https://plus.unsplash.com/premium_photo-1724014999956-85a0854ec5a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sunset on the beach with palm trees', // Translated
    category: 'place',
    caption: 'Tropical escape.' // Translated
  },
  {
    id: 'img009',
    src: 'https://plus.unsplash.com/premium_photo-1664464229426-aaa3623b0bd1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait of a young woman smiling', // Translated
    category: 'portrait',
    caption: 'Contagious joy.' // Translated
  },
  {
    id: 'img010',
    src: 'https://images.unsplash.com/photo-1629277912504-eb5abb29e546?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dense forest with light filtering through', // Translated
    category: 'place',
    caption: 'The mystery of the grove.' // Translated
  },
  {
    id: 'img012',
    src: 'https://plus.unsplash.com/premium_photo-1736338574394-787a5bb5169f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Cactus in the desert at sunrise', // Translated
    category: 'place',
    caption: 'Desert silhouettes.' // Translated
  },
  {
    id: 'img013',
    src: 'https://images.unsplash.com/photo-1636137531752-fbe8a4c3cac3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dramatic sky over an ocean at dusk',
    category: 'place',
    caption: 'Twilight over the sea.'
  },
  {
    id: 'img014',
    src: 'https://plus.unsplash.com/premium_photo-1729688320663-ff504e7754e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Close-up portrait of a thoughtful woman',
    category: 'portrait',
    caption: 'Reflective gaze.'
  },
  {
    id: 'img015',
    src: 'https://images.unsplash.com/photo-1589459783634-f0066942364a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Vibrant street art on a brick wall',
    category: 'place',
    caption: 'Colors of the city.'
  },
  {
    id: 'img016',
    src: 'https://plus.unsplash.com/premium_photo-1694475198799-87d8a531b855?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Ancient ruins under a clear sky',
    category: 'place',
    caption: 'Echoes of the past.'
  },
  {
    id: 'img017',
    src: 'https://images.unsplash.com/photo-1589439200770-d7614e575538?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Person standing on top of a mountain watching the sunrise',
    category: 'place',
    caption: 'Embracing the dawn.'
  },
  {
    id: 'img018',
    src: 'https://images.unsplash.com/photo-1688298853443-a4b12f909f22?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Close-up of a vintage camera lens',
    category: 'place',
    caption: 'Through the looking glass.'
  },
  {
    id: 'img019',
    src: 'https://images.unsplash.com/photo-1674821771816-4bd70bdb7eb2?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Street photography of people walking in a city',
    category: 'place',
    caption: 'Urban rhythms.'
  },
  {
    id: 'img020',
    src: 'https://images.unsplash.com/photo-1713119082293-6811ebd872f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Serene lake with a lone boat and mountains in the background',
    category: 'place',
    caption: 'Tranquil reflections.'
  },
  {
    id: 'img021',
    src: 'https://images.unsplash.com/photo-1615031206512-14fcc8a2da6e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract colorful light trails',
    category: 'place',
    caption: 'Dance of light.'
  },
  {
    id: 'img022',
    src: 'https://images.unsplash.com/photo-1605421400313-1ed88ece6381?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Close-up of a curious cat',
    category: 'portrait',
    caption: 'Feline gaze.'
  },
  {
    id: 'img023',
    src: 'https://images.unsplash.com/photo-1674242189292-edce82b96e4b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Colorful hot air balloons floating in the sky',
    category: 'place',
    caption: 'A vibrant spectacle above.'
  },
  {
    id: 'img024',
    src: 'https://images.unsplash.com/photo-1665531476560-2b96aefa094c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foggy forest with tall trees',
    category: 'place',
    caption: 'Into the mysterious woods.'
  },
  {
    id: 'img025',
    src: 'https://images.unsplash.com/photo-1655719310380-dcad41140ece?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract close-up of a succulent plant',
    category: 'place',
    caption: 'Nature\'s intricate designs.'
  },
  {
    id: 'img026',
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Headphones on a wooden table',
    category: 'place',
    caption: 'Music for the soul.'
  },
  {
    id: 'img027',
    src: 'https://images.unsplash.com/photo-1697374036527-7e885902d600?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Architectural details of a modern building',
    category: 'place',
    caption: 'Lines and light.'
  },
  {
    id: 'img028',
    src: 'https://images.unsplash.com/photo-1689322375612-652dd0745c4f?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A person jumping on sand dunes at sunset',
    category: 'place',
    caption: 'Freedom in the desert.'
  },
  {
    id: 'img029',
    src: 'https://images.unsplash.com/photo-1723112375870-0dc131e67624?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Close-up of a coffee cup with latte art',
    category: 'place',
    caption: 'Art in a cup.'
  },
  {
    id: 'img034',
    src: 'https://images.unsplash.com/photo-1628578823759-088aafb04a85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Person reading a book in a cozy setting',
    category: 'place',
    caption: 'Lost in words.'
  },
  {
    id: 'img036',
    src: 'https://images.unsplash.com/photo-1582671137713-0d817082cc28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Woman looking pensively out a window',
    category: 'portrait',
    caption: 'Deep in thought.'
  },
  {
    id: 'img037',
    src: 'https://images.unsplash.com/photo-1724627560024-5a2d2c2b8989?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Woman with vibrant red hair looking directly at the camera',
    category: 'portrait',
    caption: 'Fiery gaze.'
  },
  {
    id: 'img038',
    src: 'https://images.unsplash.com/photo-1749640248290-db66ed6c3e1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Profile shot of a woman in a natural setting',
    category: 'portrait',
    caption: 'Quiet contemplation.'
  },
  {
    id: 'img039',
    src: 'https://images.unsplash.com/photo-1643081274715-2c6e534d77b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Women reading',
    category: 'portrait',
    caption: 'Nature\'s calm.'
  },
  {
    id: 'img040',
    src: 'https://images.unsplash.com/photo-1745984558347-3c95e0b46fb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Woman standing on a cruise balcony',
    category: 'place',
    caption: 'Staring at the mirror'
  },
  {
    id: 'img041',
    src: 'https://images.unsplash.com/photo-1507296459426-2af5b6833a88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Professional mature woman focused on her laptop.',
    category: 'portrait',
    caption: 'Experience in action.'
  },

];

export default allImages;