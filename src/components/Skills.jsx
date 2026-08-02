const CATEGORIES = [
  {
    title: 'infrastructure & os',
    tags: ['Windows Server', 'Linux (RHEL/Ubuntu)', 'Active Directory', 'GPO', 'Windows Registry', 'Nutanix', 'OpenStack'],
  },
  {
    title: 'devops & automation',
    tags: ['Ansible', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Selenium', 'Python', 'PowerShell', 'Bash'],
  },
  {
    title: 'cloud platforms',
    tags: ['Microsoft Azure', 'Google Cloud Platform'],
  },
  {
    title: 'monitoring & observability',
    tags: ['Zabbix', 'ManageEngine'],
  },
  {
    title: 'security & compliance',
    tags: ['Qualys', 'CrowdStrike', 'Checkpoint', 'SCCM', 'BigFix', 'Cisco Umbrella Proxy', 'Keycloak'],
  },
  {
    title: 'backup & disaster recovery',
    tags: ['Veeam', 'Acronis'],
  },
  {
    title: 'networking',
    tags: ['Firewalls', 'Switches', 'Routers', 'HA Proxy'],
  },
  {
    title: 'itsm & servicenow',
    tags: ['ServiceNow Admin', 'Incident Mgmt', 'Asset Mgmt', 'FreshService'],
  },
  {
    title: 'databases',
    tags: ['MySQL', 'PostgreSQL', 'OpenSearch'],
  },
  {
    title: 'architecture & solutioning',
    tags: ['Solution Design', 'Enterprise Architecture', 'API Integration', 'Requirement Gathering', 'Stakeholder Mgmt'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">03 / skills</div>
        <h2 className="section-title">Installed modules</h2>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div className="skill-panel" key={cat.title}>
              <div className="skill-panel-title">// {cat.title}</div>
              <div className="tag-row">
                {cat.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
