const ROLES = [
  {
    title: 'Implementation Architect',
    company: 'LTIMindtree · Bengaluru',
    period: 'Feb 2025 — Present',
    active: true,
    bullets: [
      'Serve as primary customer-facing technical owner across 5+ enterprise engagements, leading requirements gathering, solution demonstrations, and architecture workshops.',
      'Architect end-to-end enterprise solutions integrating Azure, ServiceNow, Active Directory, REST APIs, AKS, Docker, and Kubernetes.',
      'Define architecture and integration requirements for an in-house AIOps platform, specifying how multi-agent components connect, communicate, and operate end-to-end.',
      'Author functional requirements for AI agents that automate incident triage, recommendations, resolution suggestions, and alert or ticket summarization using RAG and vector databases.',
      'Drive AIOps adoption among support engineering teams, reducing MTTR and manual per-engineer effort by over 60% through guided resolution workflows.',
      'Recognized with a Spotlight Award and multiple customer appreciations for ownership, architecture quality, and implementation delivery.',
    ],
  },
  {
    title: 'ServiceNow Administrator',
    company: 'LTIMindtree · Bengaluru · Parallel responsibility',
    period: 'Jan 2025 — Present',
    active: true,
    bullets: [
      'Administer an internal ServiceNow instance supporting 900+ active users, owning platform configuration, enhancements, and support.',
      'Independently scope and deliver 20–30 requirements each month across ITSM, ITOM, and Service Catalog — including net-new catalog items, workflows, and integrations.',
      'Build Business Rules, Flow Designer automations, and REST Message integrations to extend out-of-the-box capabilities.',
      'Develop OAuth 2.0-secured custom REST APIs and configure MID Server infrastructure for secure system integrations.',
    ],
  },
  {
    title: 'Automation Infrastructure Engineer',
    company: 'LTIMindtree · Bengaluru',
    period: 'Jan 2024 — Feb 2025',
    active: false,
    bullets: [
      'Managed hybrid infrastructure across 20 Nutanix hosts supporting 950+ Windows, Linux, and custom OS servers for approximately 2,000 users at 99.9% SLA.',
      'Automated daily health checks with Selenium, saving about one hour of manual work each day.',
      'Built PowerShell automation for bulk Active Directory onboarding, reducing one to two hours of manual effort per cycle.',
      'Developed Ansible automation to deploy software and restart services across 200–300 Linux servers in a single execution.',
      'Administered AKS, Docker, Azure services, Active Directory, ServiceNow, networking, monitoring, backups, and OpenSearch.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'LTIMindtree · Bengaluru',
    period: 'Sep 2023 — Dec 2023',
    active: false,
    bullets: [
      'Completed structured enterprise infrastructure training across networking, virtualization, operating systems, databases, and cloud platforms.',
      'Designed and built an enterprise High Availability / Disaster Recovery infrastructure architecture project.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">02 / experience</div>
        <h2 className="section-title">Service history</h2>

        <div className="timeline">
          {ROLES.map((role) => (
            <div className={`node ${role.active ? 'active' : ''}`} key={role.title}>
              <div className="node-head">
                <span className="node-title">{role.title}</span>
                <span className={`node-tag ${role.active ? '' : 'done'}`}>
                  {role.active ? 'active' : 'completed'}
                </span>
                <span className="node-period">{role.period}</span>
              </div>
              <div className="node-company">{role.company}</div>
              <ul>
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
