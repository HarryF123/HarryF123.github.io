import React from "react";

const SKILL_GROUPS = [
  {
    title: "Programming",
    skills: [
      "Java · Proficient",
      "JavaScript · Proficient",
      "TypeScript · Proficient",
      "Python · Proficient",
      "C · Previous experience",
      "C# · Previous experience",
    ],
  },
  {
    title: "Tools, Technologies & Frameworks",
    skills: [
      "Helm",
      "Kubernetes",
      "Docker",
      "K6",
      "Bash",
      "Spinnaker",
      "Jenkins",
      "MCP servers",
      "Azure",
      "Git",
      "Gerrit",
      "SQL",
      "Node.js",
      "React",
      "Linux",
      "Windows",
      "Unix",
    ],
  },
  {
    title: "Ways of Working",
    skills: ["Agile", "Kanban"],
  },
  {
    title: "Languages",
    skills: [
      "English · Natural speaker",
      "Irish · Natural speaker",
      "Spanish · Capable",
      "German · Capable",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">What I work with</p>
        <h2 className="mb-12 mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-base-content/15 px-3 py-1.5 text-sm text-base-content/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
