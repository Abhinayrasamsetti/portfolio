const ROLES = [
  {
    title: 'Implementation Architect',
    company: 'LTIMindtree · Bengaluru',
    period: 'Feb 2025 — Present',
    active: true,
    bullets: [
      'Engaged directly with enterprise clients across industries to elicit requirements, run solution demos, and propose AI-powered architectures tailored to each client\u2019s ecosystem.',
      'Designed full-stack, end-to-end application architectures — dashboards, enterprise tools, integrations — interoperable with ServiceNow, Active Directory, and third-party REST APIs.',
      'Evaluated client environments against internal solution standards; resolved compatibility gaps to meet enterprise-grade scalability, security, and compliance requirements.',
      'Collaborated cross-functionally with development, QA, project management, and executive stakeholders to align business objectives with technical delivery timelines.',
      'Led end-to-end deployment phases for enterprise client rollouts, delivering scalable, production-ready solutions consistently on time.',
      'Promoted to Primary Solution Architect by leadership for consistent performance, technical depth, and demonstrated client impact.',
    ],
  },
  {
    title: 'Automation Infrastructure Engineer',
    company: 'LTIMindtree · Bengaluru',
    period: 'Jan 2024 — Feb 2025',
    active: false,
    bullets: [
      'Managed hybrid infrastructure operations across Windows and Linux — L1, L2, L3 — spanning monitoring, patching, networking, backups, and compliance.',
      'Sustained 99.9% SLA compliance over 12+ months across all incident management and infrastructure tasks.',
      'Administered Active Directory full lifecycle (provisioning, GPO, OU management) and Nutanix virtualization for high availability.',
      'Automated repetitive operational workflows using Ansible and Selenium, reducing manual effort and improving deployment consistency.',
      'Enforced vulnerability and patch management using Qualys, BigFix, SCCM, and CrowdStrike across the full server estate.',
      'Administered network infrastructure — firewalls, switches, routers, Cisco Umbrella Proxy, HA Proxy, Keycloak.',
      'Implemented Veeam and Acronis backup/DR solutions, consistently meeting RTO/RPO objectives.',
      'Deployed observability stack using Zabbix and ManageEngine; managed ITSM workflows via ServiceNow and FreshService.',
      'Managed Docker containers and Kubernetes orchestration; administered MySQL, PostgreSQL, and OpenSearch.',
      'Designed and deployed scalable infrastructure for the L&T Edutech Train the Trainer Programme.',
      'Recognized with a Spotlight Award for technical leadership and contributions in PI planning and strategic workshops.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'LTIMindtree · Bengaluru',
    period: 'Sep 2023 — Dec 2023',
    active: false,
    bullets: [
      'Completed structured enterprise IT training across 10+ domains — Operating Systems, Networking, Storage, Databases, Virtualization, Network Services.',
      'Designed a complete enterprise-grade global IT infrastructure with High Availability and Disaster Recovery as part of an architectural assessment project.',
      'Deployed a full multi-site office network with seamless integration across geographically distributed locations.',
      'Practiced Agile/SDLC methodologies in sprint planning, stakeholder communication, and scenario-based infrastructure assessments.',
      'Automated deployment workflows with Ansible; managed version control and collaboration using Git and GitHub.',
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
