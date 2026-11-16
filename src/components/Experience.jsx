const ROLES = [
  {
    title: 'Software Engineer 1 · Implementation Architect',
    company: 'LTIMindtree · Hyderabad',
    period: 'Feb 2025 — Present',
    active: true,
    bullets: [
      'Lead customer-facing technical delivery across 5+ enterprise engagements, translating business goals and operational challenges into requirements, architecture options, integration patterns, workflows, and actionable implementation plans.',
      'Run discovery and current-state assessments across monitoring and ITSM landscapes, ticket and alert data, operational processes, integrations, knowledge repositories, and automation capabilities.',
      'Design customer-specific solutions on IRUN and BlueVerse Tech AIOps platforms, mapping requirements to configurable components within modular, microservices-based, plug-and-play architecture patterns.',
      'Drive platform configuration, integration setup, workflow definition, functional validation, deployment coordination, customer enablement, and support handover; design supporting scripts and automation where needed.',
      'Define enterprise connectivity through REST APIs and MCP Servers, connecting monitoring, ITSM, knowledge, and automation systems with considered data-exchange and update flows.',
      'Design multi-agent workflows coordinated by a central orchestrator, defining agent responsibilities, operational sequence, context exchange, integration requirements, and expected outcomes.',
      'Design OpenSearch-backed RAG integrations using enterprise knowledge sources including ServiceNow Knowledge, Confluence, and SharePoint to enrich incident context, diagnosis, and resolution guidance.',
      'Design CMDB topology-informed alert correlation to relate parent and dependent infrastructure alerts and present a consolidated operational picture.',
      'Shape use cases for unified alert and incident visibility, ticket summarization, assignment-group and assignee recommendations, knowledge-assisted diagnosis, and guided resolution.',
      'Design human-in-the-loop automation patterns, including Ansible AWX integrations, with approval gates before production actions or changes.',
      'Present architectures to customer review boards, security teams, and technical stakeholders; capture feedback and refine integration and workflow decisions.',
      'Coordinate customer, internal platform, engineering, and delivery teams to resolve dependencies and prepare operational teams for handover.',
      'Support AI-assisted operational workflow adoption, contributing to reported 60%+ reductions in manual engineering effort.',
      'Recognized through multiple Spotlight Awards and customer appreciations for technical ownership, implementation quality, and delivery.',
    ],
  },
  {
    title: 'ServiceNow Administrator',
    company: 'LTIMindtree · Hyderabad · Parallel responsibility',
    period: 'Jan 2025 — Present',
    active: true,
    bullets: [
      'Administer and enhance an internal ServiceNow instance for 900+ active users, balancing platform configuration, requirement delivery, integration work, and operational support.',
      'Independently scope and deliver approximately 20–30 requirements per month across ITSM, ITOM, Service Catalog, workflows, integrations, and platform enhancements.',
      'Configure and maintain Business Rules, Client Scripts, Access Control Lists, Flow Designer workflows, Service Catalog components, and related platform configurations.',
      'Design REST Message integrations and develop OAuth 2.0-secured custom REST APIs for connected applications.',
      'Install and configure MID Server infrastructure for secure internal and external system connectivity.',
      'Partner with stakeholders to clarify requirements, assess platform impact, implement enhancements, validate behavior, and support ongoing service operations.',
    ],
  },
  {
    title: 'Automation Infrastructure Engineer',
    company: 'LTIMindtree · Hyderabad',
    period: 'Jan 2024 — Feb 2025',
    active: false,
    bullets: [
      'Supported hybrid enterprise infrastructure across 20 Nutanix hosts and 950+ Windows, Linux, and customized OS servers for approximately 2,000 users at a 99.9% infrastructure SLA.',
      'Progressed from L1 operations to L2/L3 technical responsibilities covering troubleshooting, complex issue investigation, escalation management, service restoration, and specialist-team coordination.',
      'Executed Windows patch management with Microsoft SCCM and Linux patch management with BigFix, supporting compliance, stability, and planned maintenance.',
      'Worked on Qualys-based vulnerability assessment and remediation, coordinating corrective actions to strengthen infrastructure security.',
      'Performed Windows and Linux OS hardening, security-baseline implementation, and configuration remediation for compliance.',
      'Managed incident, service request, and change-management processes, ensuring activities were documented, prioritized, investigated, tracked, and resolved.',
      'Worked across monitoring, backup and recovery, networking, compliance, Active Directory, Azure services, AKS, Docker, and enterprise infrastructure platforms.',
      'Identified repeatable operational work and designed PowerShell, Ansible, and Selenium automation to reduce manual intervention and improve consistency.',
      'Automated daily infrastructure health checks using Selenium, saving approximately one hour of manual work each day.',
      'Developed bulk Active Directory onboarding scripts with PowerShell, reducing approximately one to two hours per execution cycle.',
      'Implemented Ansible automation for software deployment and service restarts across 200–300 Linux servers in a single execution.',
      'Prepared SOPs, runbooks, and troubleshooting procedures spanning patching, remediation, automation, and support handovers.',
      'Collaborated with product engineering as a beta/product tester, validating developing enterprise solutions and providing technical feedback.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'LTIMindtree · Hyderabad',
    period: 'Sep 27, 2023 — Dec 2023',
    active: false,
    bullets: [
      'Completed structured enterprise infrastructure training across networking, virtualization, operating systems, databases, and cloud platforms.',
      'Designed and built an enterprise High Availability / Disaster Recovery infrastructure architecture project using foundational infrastructure-design principles.',
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
                <span className={`node-tag ${role.active ? '' : 'done'}`}>{role.active ? 'active' : 'completed'}</span>
                <span className="node-period">{role.period}</span>
              </div>
              <div className="node-company">{role.company}</div>
              <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
