import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Cv from "./components/Cv";


import { useLocation } from "react-router-dom";

export default function AppShell() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  useEffect(() => {
    // Only load metallicss on the client (not during SSR pre-rendering)
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/metallicss@4.0.3/dist/metallicss.min.js";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // If the path is /video, render only the background video
  if (location.pathname === "/video") {
    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        poster="/assets/Firefly.jpg"
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
    );
  }

  return (
    <div className="size-full relative overflow-y-auto">
      {/* SVG Filter for liquid glass effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-glass-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Background image — path must be absolute from root for GitHub Pages */}
      <video
        ref={videoRef}
        autoPlay
        muted
        poster="/assets/Firefly.jpg"
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-full flex flex-col">
        {/* Navbar */}
        <nav className="w-full flex justify-center py-6 px-8 animate-fade-in">
          <div
            className="metallicss w-full max-w-5xl glass-nav px-8 py-4 flex items-center justify-between relative"
            style={
              {
                "--convexity": 0.3,
                "--metal": "neutral",
              } as React.CSSProperties
            }
          >
            {!menuOpen ? (
              <div
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                }}
              >
                Carl Gombert
              </div>
            ) : (
              <div className="flex md:hidden gap-1.5 h-full items-stretch flex-1 min-w-0 mr-4">
                <Link
                  to="/"
                  className="dark-nav-btn px-3 py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                    about
                </Link>
                <Link
                  to="/cv"
                  className="dark-nav-btn px-4 py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                    CV
                </Link>
                <Link
                  to="/projects"
                  className="dark-nav-btn px-3 py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                    projects
                </Link>
              </div>
            )}

            {/* Desktop menu */}
            <div className="hidden md:flex gap-3 h-full items-stretch">
              <Link
                to="/"
                className="metallicss nav-chrome-btn"
                style={
                  {
                    "--convexity": 2,
                    "--metal": "neutral",
                    background: "#ffffff",
                    borderRadius: "20px",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#000000",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  about
                </span>
              </Link>
              <Link
                to="/cv"
                className="metallicss nav-chrome-btn"
                style={
                  {
                    "--convexity": 2,
                    "--metal": "neutral",
                    background: "#ffffff",
                    borderRadius: "20px",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#000000",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  CV
                </span>
              </Link>
              <Link
                to="/projects"
                className="metallicss nav-chrome-btn"
                style={
                  {
                    "--convexity": 2,
                    "--metal": "neutral",
                    background: "#ffffff",
                    borderRadius: "20px",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#000000",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  projects
                </span>
              </Link>
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`} />
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`} />
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`} />
            </button>

          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .glass-nav {
            background: linear-gradient(135deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(240, 240, 245, 0.98) 50%,
              rgba(255, 255, 255, 0.95) 100%);
            backdrop-filter: blur(12px) saturate(200%);
            -webkit-backdrop-filter: blur(12px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.95);
            border-top: 1px solid rgba(255, 255, 255, 1);
            border-radius: 20px;
            box-shadow:
              0 4px 24px 0 rgba(0, 0, 0, 0.12),
              0 2px 8px 0 rgba(0, 0, 0, 0.08),
              inset 0 1px 0 0 rgba(255, 255, 255, 1),
              inset 0 -1px 0 0 rgba(200, 200, 210, 0.3),
              inset 2px 0 6px 0 rgba(255, 255, 255, 0.6),
              inset -2px 0 6px 0 rgba(180, 180, 200, 0.2);
            position: relative;
        }

        .glass-nav::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 20px;
          pointer-events: none;
          z-index: 1;
        }

        .glass-nav > * {
          position: relative;
          z-index: 2;
        }

        .glass-content {
          aspect-ratio: 1 / 1;
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
          box-shadow: inset 0 0 20px -5px rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.03);
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
          background: rgba(255, 255, 255, 0.01);
          isolation: isolate;
        }

        .glass-content > * {
          position: relative;
          z-index: 2;
        }

        .nav-chrome-btn {
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .nav-chrome-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 20px;
          pointer-events: none;
          z-index: 5;
        }

        .nav-chrome-btn:hover {
          transform: translateY(-1px);
        }

        .nav-chrome-btn:active {
          transform: translateY(0);
        }

        .dark-nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: rgba(30, 41, 59, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .dark-nav-btn:active {
          transform: scale(0.96);
          background: rgba(15, 23, 42, 0.95);
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 20;
        }

        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: #1e293b;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hamburger-line.open:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
