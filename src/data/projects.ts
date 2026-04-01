import outfitExplorerImg from '../assets/outfitexplorer.png';
import raytracingEngineImg from '../assets/raytracing_engine.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'outfit-explorer',
    title: 'Outfit Explorer',
    description: 'A full-stack web app to save, organize, and share outfits from your wardrobe.',
    longDescription: `Outfit Explorer lets you catalog your clothing items, build outfits by combining pieces into slots, and keep everything organized in one place. Upload photos of your clothes, tag them by category, and mix and match them into saved outfits. 

It also lets you connect with friends. Search for other users, send and accept friend requests, send messages, and build your own social network within the app. Easily view your friends' profiles and share outfit ideas.

Key Features:
- User authentication utilizing bcrypt password hashing and JWT tokens.
- Friend Management to search, send/accept requests.
- API Response Caching via TanStack React Query.
- Intelligent Image Classification with TensorFlow.js (MobileNet model)
- Scalable Clothing Management with canvas cropping.
- RESTful API with Express.js and PostgreSQL.
- Real-time Messaging with Socket.IO.
- Automated Testing with Vitest and Supertest.`,
    techStack: ['React', 'TypeScript', 'Tailwind', 'TensorFlow.js', 'Express', 'Socket.IO', 'PostgreSQL'],
    imageUrl: outfitExplorerImg,
    liveUrl: 'http://outfitexplorer.com/',
    repoUrl: 'https://github.com/carlgombert/WardrobeOrganizer',
  },
  {
    id: 'raytracing-engine',
    title: 'Ray Tracing Engine',
    description: 'A physically accurate 3D rendering engine built in Java that simulates light, shadows, and reflections.',
    longDescription: `Built from scratch in Java, this ray tracing engine renders physically accurate light, shadows, and reflections to create hyper-realistic 3D images.

Features an interactive mode that allows the user to explore the generated 3D scene from different angles before capturing high-quality renders.

Current capabilities include mathematical sphere rendering, recursive reflections, and diffuse materials. 

Ongoing development goals:
- Load complex 3D objects from OBJ files (requires polygon rendering).
- Add custom light sources, volumetric fog, and texture mapping.
- Implement motion blur and depth of field.
- Explore GPU acceleration to improve the current 20-seconds-per-frame render time.`,
    techStack: ['Java', 'Math', 'Linear Algebra', 'Ray Tracing'],
    imageUrl: raytracingEngineImg,
    repoUrl: 'https://github.com/carlgombert/Raytracer',
  }
];
