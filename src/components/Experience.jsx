const ROLES = [
  {
    title: 'Software Engineer 1 · Implementation Architect',
    company: 'LTIMindtree · Hyderabad',
    period: 'Feb 2025 — Present',
    active: true,
    bullets: [
      'Lead technical delivery across 5+ enterprise engagements, translating operational challenges into requirements, architecture options, integration patterns, workflows, and implementation plans.',
      'Design customer-specific solutions on IRUN and BlueVerse Tech AIOps platforms using modular, microservices-based and plug-and-play patterns.',
      'Design REST API and MCP Server connectivity across monitoring, ITSM, knowledge, and automation systems, including considered data exchange and update flows.',
      'Define multi-agent workflows, OpenSearch-backed RAG integrations, CMDB topology-informed alert correlation, and human-approved automation with platforms such as Ansible AWX.',
      'Present architecture to customer review boards and security stakeholders; coordinate platform configuration, validation, deployment, enablement, and support handover.',
      'Contributed to 60%+ reductions in manual engineering effort through AI-assisted operational intelligence and workflow automation.',
    ],
  },
  {
    title: 'ServiceNow Administrator',
    company: 'LTIMindtree · Hyderabad · Parallel responsibility',
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
    company: 'LTIMindtree · Hyderabad',
    period: 'Jan 2024 — Feb 2025',
    active: false,
    bullets: [
      'Supported 20 Nutanix hosts and 950+ Windows, Linux, and customized OS servers for approximately 2,000 users at a 99.9% infrastructure SLA.',
      'Progressed from L1 support to L2/L3 responsibilities across troubleshooting, complex issue investigation, escalation management, and service restoration.',
      'Performed Windows and Linux patch management, OS hardening, vulnerability remediation, compliance operations, and incident, request, and change management.',
      'Automated health checks with Selenium, Active Directory onboarding with PowerShell, and software deployment/service restarts across 200–300 Linux servers with Ansible.',
      'Maintained SOPs, runbooks, and troubleshooting procedures; also collaborated with product engineering as a beta/product tester.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'LTIMindtree · Hyderabad',
    period: 'Sep 27, 2023 — Dec 2023',
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
