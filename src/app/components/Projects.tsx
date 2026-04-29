import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import outfit1 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.46.12 PM.png";
import outfit2 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.46.23 PM.png";
import outfit3 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.46.45 PM.png";
import outfit4 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.47.28 PM.png";
import outfit5 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.48.28 PM.png";
import outfit6 from "../../assets/outfitexplorer/Screenshot 2026-04-13 at 11.49.02 PM.png";
import raytracing from "../../assets/image_copy2.png";
import raytracing2 from "../../assets/demo.gif";
import raytracing3 from "../../assets/image_copy4.png";
import gophergraphics from "../../assets/image_copy.png";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.png";
import game3 from "../../assets/game3.png";
import libreide1 from "../../assets/libreide2.png";
import libreide2 from "../../assets/libreide1.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [api, setApi] = useState<any>(null);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const projects = [
    {
      id: 0,
      title: "LibreIDE",
      description: "An AI-native IDE built in Rust",
      tags: ["Rust", "Tauri", "Dioxus", "sqlite-vec"],
      images: [libreide1, libreide2],
      details: `This project is still in progress and it's going to take me a long time to finish. 
      It's an AI native IDE, similar to Cursor or Antigravity that allows user to use local open source models or their own API keys.
      This was primarily built for my specific workflow so it has a lot of features that I think are really nice.

      The agents use tokens efficiently, the agent is able to search through and understand the codebasing using a semantic memory system that uses 
      vector embeddings to selectively retrieve only the most relevant code snippets instead of reading the entire codebase. Code is broken up into logical chunks and then
      embedded into vectors using sqlite-vec. Then when the agent sends a query for a specific task or concept, that query is also converted into a vector 
      coordinate. The system then uses a K-Nearest Neighbors (KNN) search to identify and retrieve the "closest" code blocks, providing the agent with precise context
      while minimizing unnecessary token waste. 

      The semantic search often missing specific names so this is combined with a keyword search using ripgrep to combine keywork results with 
      semantic results, forming a hybrid search. 
      
      The agent doesn't always have to read every line of a file. The implementation uses a summarizer and symbol extraction to create a "skeleton" of a file (listing its functions, imports, and exports).
      This allows the agent to understand the structure of a large file using only a few hundred tokens, instead of thousands.

      It keeps much better history of file changes by using git worktrees. All changes done by the Agent will show up in your git history so it's much easier
      to accurately revert changes and keep track of exactly what the agent has done. Cursor and Antigravity just keep temporary copies of files in the application
      file system but can be unreliable and buggy when trying to revert old file changes. I find it very frusterating when it makes a change I don't like but I'm unable to
      easily revert it.
      
      The IDE is integrated with github and it's easy to manage github issues from within the app. The workflow for creating and assigning issues with the agent as well as sending
      issues straight to the agent for help is streamlined.
      `
    },
    {
      id: 1,
      title: "Outfit Explorer",
      description: "A full-stack web app to save, organize, and share outfits from your wardrobe.",
      tags: ["AWS", "React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
      images: [outfit1, outfit2, outfit3, outfit4, outfit5, outfit6],
      details: `Outfit Explorer lets you catalog your clothing items, build outfits by combining pieces into slots, and keep everything organized in one place. Upload photos of your clothes, tag them by category, and mix and match them into saved outfits. 

    It also lets you connect with friends. Search for other users, send and accept friend requests, send messages, and build your own social network within the app. Easily view your friends' profiles and share outfit ideas.

    Key Features:
    - User authentication utilizing bcrypt password hashing and JWT tokens.
    - Friend Management to search, send/accept requests.
    - API Response Caching via TanStack React Query.
    - Intelligent Image Classification with TensorFlow.js (MobileNet model)
    - Scalable Clothing Management with canvas cropping.
    - RESTful API with Express.js and PostgreSQL.
    - Real-time Messaging with Socket.IO.
    - Automated Testing with Vitest and Supertest.`
    },
    {
      id: 2,
      title: "Gopher Graphics Site",
      description: "A full-stack web app used by the computer graphics club at UMN.",
      tags: ["React", "TypeScript", "Express", "PostgreSQL"],
      images: [gophergraphics],
      details: `This site allows members of the Gopher Graphics Club to post their projects, message individually and in channels and view others work.

    This project also serves as an entrypoint for new and prospective members with info about the group as well as a display of our work.`
    },
    {
      id: 3,
      title: "Ray Tracing Engine",
      description: "A physically accurate 3D rendering engine built in Java that simulates light, shadows, and reflections.",
      tags: ["Java", "Math", "Linear Algebra"],
      images: [raytracing, raytracing2, raytracing3],
      details: `Built from scratch in Java, this ray tracing engine renders physically accurate light, shadows, and reflections to create hyper-realistic 3D images.

    Features an interactive mode that allows the user to explore the generated 3D scene from different angles before capturing high-quality renders.

    Current capabilities include mathematical sphere rendering, recursive reflections, and diffuse materials. `
    },
    {
      id: 4,
      title: "Hoppers Game",
      description: "2D Multiplayer level building game",
      tags: ["React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
      images: [game2, game1, game3],
      details: `Hoppers is a 2D game that allows you to build your own levels, share them to the community and play online with other players.`
    }
  ];

  const selectedProjectData = selectedProject !== null
    ? projects.find(p => p.id === selectedProject)
    : null;

  return (
    <div className="flex-1 w-full flex justify-center px-8 pb-12 relative">
      <div className="w-full max-w-5xl glass-content animate-fade-in-up" style={{ animationDelay: "0.2s", aspectRatio: "auto" }}>
        {selectedProjectData ? (
          // Project Detail View
          <div>
            <button
              onClick={() => setSelectedProject(null)}
              className="back-button"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#000000",
                marginBottom: "2rem",
              }}
            >
              ← Back to Projects
            </button>

            <div className="w-full mb-12 group">
              <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                  {selectedProjectData.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-2xl aspect-[16/9] bg-black/5">
                        <img
                          src={img}
                          alt={`${selectedProjectData.title} view ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CarouselPrevious className="left-6 bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-xl text-black size-12" />
                  <CarouselNext className="right-6 bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-xl text-black size-12" />
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {selectedProjectData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-black/40" : "w-1.5 bg-black/10"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            <h1
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#000000",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              {selectedProjectData.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProjectData.tags.map((tag) => (
                <span
                  key={tag}
                  className="project-tag"
                  style={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#000000",
                    letterSpacing: "0.01em"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#000000",
                letterSpacing: "-0.01em",
              }}
            >
              {selectedProjectData.details}
            </p>
          </div>
        ) : (
          // Projects Grid View
          <div>
            <h1
              className="mb-8"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#000000",
                letterSpacing: "-0.03em",
              }}
            >
              Projects
            </h1>
            <p
              className="mb-8"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#000000",
                maxWidth: "42rem",
                letterSpacing: "-0.01em",
              }}
            >
              You can find all the projects below on my <a style={{color:"#053ba6", textDecoration: "underline"}}href="https://github.com/carlgombert" target="none">github</a>
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-image"
                  />
                  <h3
                    style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#000000",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "#000000",
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                        style={{
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "#000000",
                          letterSpacing: "0.01em"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .glass-content {
          border-radius: 32px;
          padding: clamp(2rem, 5vw, 4rem);
          position: relative;
          isolation: isolate;
          box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.18);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-content::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          box-shadow: inset 0 0 20px -5px rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .glass-content::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          backdrop-filter: blur(40px) saturate(1.5);
          -webkit-backdrop-filter: blur(40px) saturate(1.5);
          background: rgba(255, 255, 255, 0.02);
          isolation: isolate;
        }

        .glass-content > * {
          position: relative;
          z-index: 2;
        }

        .project-card {
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          position: relative;
          isolation: isolate;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .project-card:hover {
          /* No movement, just shadow */
          box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.25);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          margin-bottom: 1.25rem;
        }

        .project-card > h3,
        .project-card > p,
        .project-card > div {
          padding: 0 1.5rem;
        }

        .project-card > div:last-child {
          padding-bottom: 1.5rem;
        }

        .project-detail-image {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: cover;
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .back-button {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(-2px);
        }

        .project-tag {
          padding: 0.375rem 0.75rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
