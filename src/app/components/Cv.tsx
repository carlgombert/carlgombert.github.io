export default function Cv() {
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
          Work Experience
        </h1>
        <div style={{ fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif", fontSize: 'clamp(1rem, 2vw, 1.25rem)', color:  "#000000", marginTop: '2rem'}}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.02em' }}>fAIshion.AI</div>
            <div style={{ fontSize: '0.95em', color:  "#000000", marginBottom: '0.2em' }}>Software Engineer Intern <span style={{ float: 'right', color:  "#000000" }}>Feb 2026 - Present</span></div>
            <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Developing scalable web crawling application using FastAPI and Python to collect and process clothing product data</li>
              <li>Created a complete Docker-based development environment for a full-stack Next.js web application, enabling consistent cross-platform development regardless of the host operating system.</li>
              <li>Designed and implemented automated testing for the web crawling application</li>
              <li>Enhancing fAIshion’s web app frontend using TypeScript, React, and TailwindCSS</li>
              <li>Created a Data Visualization Dashboard using JavaScript, HTML, and CSS to streamline the input, analysis, and management of clothing company data, improving data accessibility and decision-making efficiency.</li>
            </ul>
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.02em' }}>Clifton Larson Allen (CLA)</div>
            <div style={{ fontSize: '0.95em', color: '#000000', marginBottom: '0.2em' }}>Application Developer Intern <span style={{ float: 'right', color: '#000000' }}>Jun 2025 - Aug 2025</span></div>
            <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Developed and modified SQL stored procedures to support upcoming feature development and improve system maintainability.</li>
              <li>Extended and restructured REST APIs to fix bugs and ensure reliable integration across the auditor project management application.</li>
              <li>Debugged and refined existing frontend components, contributing production-ready improvements that were deployed into auditor workflows.</li>
              <li>Collaborated in Agile sprints, presenting progress to QA and coordinating with 15 engineers during daily stand-ups.</li>
            </ul>
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.02em' }}>fAIshion.AI</div>
            <div style={{ fontSize: '0.95em', color: '#000000', marginBottom: '0.2em' }}>Software Engineer Intern <span style={{ float: 'right', color: '#000000' }}>Feb 2025 - May 2025</span></div>
            <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
              <li>Built RESTful APIs with Flask and MongoDB to support backend functionality and data management</li>
              <li>Designed and implemented a user tracking system that logged logins, logouts, and feature interactions, enabling data-driven insights into user engagement and retention.</li>
              <li>Developed and improved fAIshion’s web app and browser extension using TypeScript, React, and TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
