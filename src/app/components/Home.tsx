export default function Home() {
  return (
    <div className="flex-1 w-full flex justify-center px-8 pb-12 relative">
      <div
        className="w-full max-w-5xl glass-content animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <h1
          className="mb-6"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            color: "#000000",
            letterSpacing: "-0.03em",
          }}
        >
          About
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
            letterSpacing: "-0.01em"
          }}
        >
            Key Skills: Python, Typescript, React, Express, PostgreSQL, AWS
        </p>
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
          I'm currently a Computer Science student at the University of Minnesota and a full-stack developer. While my professional experience is primarily in web development, my academic focus is on Operating Systems, Computer Architecture, and Networking.
        </p>
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
           I’m actively seeking Software Engineering opportunities and open to collaborating on interesting projects. Outside of coding, I enjoy Brazilian Jiu-Jitsu, hiking, rock climbing, reading, and learning Portuguese.
        </p>
      </div>
    </div>
  );
}
