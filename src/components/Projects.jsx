const PROJECTS = [
  {
    title: 'IRUN · Modular Agentic AIOps Platform',
    type: 'Selected platform experience',
    desc: 'Customer-specific AIOps solution patterns spanning MCP and REST integrations, multi-agent workflows, OpenSearch-backed RAG, CMDB alert correlation, and approval-controlled automation.',
    highlights: [
      'Connect monitoring, ITSM, knowledge, and automation systems through REST APIs and MCP Servers.',
      'Use ServiceNow Knowledge, Confluence, and SharePoint sources to enrich operational diagnosis and guided resolution.',
      'Respect human approval gates before production automation actions, including Ansible AWX workflows.',
    ],
    href: 'https://www.ltm.com/services/iRun',
  },
  {
    title: 'BlueVerse Tech · Enterprise Agentic AIOps',
    type: 'Selected platform experience',
    desc: 'AI-assisted operations for incident triage, alert analysis, ticket summarization, guided troubleshooting, Knowledge Fabric, knowledge graphs, and topology-aware insights.',
    highlights: [
      'Translate infrastructure and IT operations requirements into AI-assisted incident-management workflows.',
      'Use contextual infrastructure, historical incident, and enterprise-knowledge signals for recommendations.',
      'Support a unified operational view across enterprise monitoring, ITSM, and operational data sources.',
    ],
    href: 'https://www.ltm.com/services/blueverse/blueverse-tech-operations',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">04 / projects</div>
        <h2 className="section-title">Selected platform experience</h2>
        <div className="card-grid">
          {PROJECTS.map((project) => (
            <a className="card project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <span className="card-icon">[↗] {project.type}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
              <ul className="project-detail-list">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
