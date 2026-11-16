const PROJECTS = [
  {
    title: 'IRUN · Modular Agentic AIOps Platform',
    type: 'Selected platform & engineering experience',
    desc: 'A modular, microservices-based Agentic AIOps platform that provides a unified operational view and allows compatible components to be configured or replaced for each customer environment.',
    highlights: [
      'Architect customer-specific patterns that combine monitoring, ITSM/ticketing, enterprise knowledge, and automation through the platform integration layer.',
      'Design REST API and MCP Server patterns for exchanging operational data and enabling supported update flows across connected systems.',
      'Define multi-agent workflows across a core orchestrator and specialized agents, including workflow sequence, context exchange, and operational-task interactions.',
      'Design OpenSearch-backed RAG retrieval from ServiceNow Knowledge, Confluence, and SharePoint to enrich diagnosis and resolution guidance.',
      'Use CMDB relationships and data topology in alert-correlation design to connect related alerts into meaningful service context.',
      'Shape incident summarization, assignment recommendation, knowledge-assisted diagnosis, and guided-resolution use cases with production-automation approval controls.',
      'Connect automation platforms such as Ansible AWX while ensuring human approval gates are respected before production actions.',
      'Lead discovery, solution architecture, configuration, integration, functional validation, stakeholder reviews, customer training, and handover.',
    ],
    href: 'https://www.ltm.com/services/iRun',
  },
  {
    title: 'BlueVerse Tech · Enterprise Agentic AIOps Platform',
    type: 'Selected platform & engineering experience',
    desc: 'Enterprise Agentic AI-based AIOps work that turns infrastructure and IT-operations requirements into intelligent workflows for incident management, alert analysis, operational automation, and service improvement.',
    highlights: [
      'Designed AI-assisted incident-management workflows for resolution, triage, ticket and alert summarization, SOP recommendations, and guided troubleshooting.',
      'Worked on agent-driven operational workflows that use infrastructure, historical incidents, and enterprise knowledge to support relevant recommendations.',
      'Contributed to RAG capabilities using vector-store retrieval for contextual responses to operational queries and incident-resolution work.',
      'Worked with the Knowledge Fabric layer that consolidates information flowing into and out of connected enterprise systems.',
      'Contributed to knowledge-graph capabilities for representing and exploring relationships between collected data entities.',
      'Used CMDB relationships and infrastructure topology to understand dependencies and provide context for service-impacting events.',
      'Supported alert correlation that associates related alerts, reduces fragmented visibility, and focuses teams on meaningful incidents.',
      'Contributed to adaptive, user-centric capabilities that improve insight, recommendation, and workflow relevance over time.',
      'Collaborated on monitoring, ITSM, and operational-data integrations for a unified view of events, incidents, relationships, and knowledge.',
    ],
    href: 'https://www.ltm.com/services/blueverse/blueverse-tech-operations',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">04 / platform experience</div>
        <h2 className="section-title">Selected platform & engineering experience</h2>
        <div className="card-grid">
          {PROJECTS.map((project) => (
            <a className="card project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <span className="card-icon">[↗] {project.type}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
              <ul className="project-detail-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
