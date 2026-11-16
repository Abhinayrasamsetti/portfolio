const PROJECTS = [
  {
    title: 'IRUN · Modular Agentic AIOps Platform',
    type: 'Selected platform experience',
    desc: 'Customer-specific AIOps solution patterns spanning MCP and REST integrations, multi-agent workflows, OpenSearch-backed RAG, CMDB alert correlation, and approval-controlled automation.',
    href: 'https://github.com/Abhinayrasamsetti/portfolio',
  },
  {
    title: 'BlueVerse Tech · Enterprise Agentic AIOps',
    type: 'Selected platform experience',
    desc: 'AI-assisted operations for incident triage, alert analysis, ticket summarization, guided troubleshooting, Knowledge Fabric, knowledge graphs, and topology-aware insights.',
    href: 'https://www.linkedin.com/in/abhinayrasamsetti',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">04 / projects</div>
        <h2 className="section-title">Selected builds</h2>
        <div className="card-grid">
          {PROJECTS.map((project) => (
            <a className="card project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <span className="card-icon">[↗] {project.type}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
