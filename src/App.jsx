import React from "react";

const userProfile = {
        name: "Eric",
        title: "UI Developer – XYZ Project",
        email: "eric@xyz.com",
        organization: "XYZ Corporation",
        location: "San Francisco, USA",
        github: "https://github.com/eric-xyz",
        linkedin: "https://linkedin.com/in/eric-xyz",
        about: `Creative and detail-oriented UI Developer with 5+ years of experience designing and implementing engaging, user-centric web interfaces. Proficient in modern UI frameworks and passionate about delivering seamless digital experiences.`,
        skills: [
                "JavaScript (ES6+)",
                "React.js",
                "Redux",
                "TypeScript",
                "HTML5",
                "CSS3/SASS",
                "Figma",
                "UI/UX Design",
                "Accessibility (WCAG)",
                "Responsive Design",
                "Git & GitHub"
        ],
        projects: [
                {
                        name: "Design System Library",
                        description: "Developed a reusable React component library and design system for XYZ Corporation, improving UI consistency and developer productivity.",
                        url: "https://github.com/eric-xyz/design-system"
                },
                {
                        name: "Dashboard Analytics UI",
                        description: "Built a real-time analytics dashboard with interactive charts and advanced filtering for business users.",
                        url: "https://github.com/eric-xyz/dashboard-analytics"
                }
        ],
        experience: [
                {
                        company: "XYZ Corporation",
                        role: "UI Developer",
                        period: "Jan 2022 - Present",
                        description: "Lead UI development for the XYZ Project, collaborating with designers and backend engineers to deliver high-quality user interfaces. Championed accessibility and performance improvements."
                },
                {
                        company: "Creative Web Studio",
                        role: "UI/UX Developer",
                        period: "Jul 2019 - Dec 2021",
                        description: "Designed and implemented responsive web applications for various clients, focusing on usability and modern design trends."
                }
        ]
};

function App() {
    return (
        <div className="profile-box">
            <h1>{userProfile.name}</h1>
            <h2>{userProfile.title}</h2>
            <div className="social-links">
                <a className="social-icon" href={userProfile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <span role="img" aria-label="GitHub">🐙</span>
                </a>
                <a className="social-icon" href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <span role="img" aria-label="LinkedIn">💼</span>
                </a>
                <a className="social-icon" href={`mailto:${userProfile.email}`} title="Email">
                    <span role="img" aria-label="Email">✉️</span>
                </a>
            </div>
            <p><strong>Organization:</strong> {userProfile.organization}</p>
            <p><strong>Location:</strong> {userProfile.location}</p>
            <h3>About</h3>
            <p>{userProfile.about}</p>
            <h3>Skills</h3>
            <ul>
                {userProfile.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h3>Projects</h3>
            <ul>
                {userProfile.projects.map(project => (
                    <li key={project.name}>
                        <strong>{project.name}:</strong> {project.description} [<a href={project.url} target="_blank" rel="noopener noreferrer">Repo</a>]
                    </li>
                ))}
            </ul>
            <h3>Experience</h3>
            <ul>
                {userProfile.experience.map(exp => (
                    <li key={exp.company + exp.period}>
                        <strong>{exp.company}</strong> – {exp.role} ({exp.period})<br />
                        <span>{exp.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;