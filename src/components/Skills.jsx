const CATEGORIES = [
  {
    title: 'servicenow & itsm',
    tags: ['ServiceNow Administration', 'ITSM', 'ITOM', 'Service Catalog', 'Flow Designer', 'Business Rules', 'Client Scripts', 'ACLs', 'Freshservice'],
  },
  {
    title: 'aiops & agentic ai',
    tags: ['Agentic AI', 'Multi-Agent Workflows', 'Agent Orchestration', 'AIOps', 'Incident Intelligence', 'OpenSearch RAG', 'CMDB Alert Correlation', 'Human-in-the-Loop Automation'],
  },
  {
    title: 'cloud & container platforms',
    tags: ['Microsoft Azure', 'AWS', 'Google Cloud', 'AKS', 'Kubernetes', 'Docker', 'Docker Compose', 'Helm', 'Azure Container Registry', 'API Management', 'Key Vault', 'Azure DevOps'],
  },
  {
    title: 'automation & devops',
    tags: ['Python', 'PowerShell', 'Bash', 'Ansible', 'Terraform', 'Selenium', 'CI/CD', 'Git', 'GitHub', 'Ansible AWX', 'Infrastructure Automation'],
  },
  {
    title: 'integration & security',
    tags: ['REST APIs', 'MCP Servers', 'MCP Integration Patterns', 'OAuth 2.0', 'Custom REST APIs', 'MID Server', 'Qualys', 'BigFix', 'CrowdStrike', 'Check Point', 'HashiCorp Vault', 'Keycloak'],
  },
  {
    title: 'infrastructure & monitoring',
    tags: ['Nutanix', 'Windows Server', 'Linux', 'OpenStack', 'Active Directory', 'Zabbix', 'ManageEngine', 'OpenSearch', 'Patch Management', 'OS Hardening', 'Backup & Recovery'],
  },
  {
    title: 'databases',
    tags: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'architecture & solutioning',
    tags: ['Implementation Architecture', 'Operational Landscape Assessment', 'Solution Design', 'Workflow Design', 'ARB / SARB Reviews', 'Customer Enablement', 'Support Handover'],
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
