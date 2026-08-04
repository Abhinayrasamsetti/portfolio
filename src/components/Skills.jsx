const CATEGORIES = [
  {
    title: 'servicenow & itsm',
    tags: ['ServiceNow Administration', 'ITSM', 'ITOM', 'Service Catalog', 'Flow Designer', 'Business Rules', 'Client Scripts', 'ACLs', 'Freshservice'],
  },
  {
    title: 'aiops & agentic ai',
    tags: ['AIOps Architecture', 'Agentic AI', 'Multi-Agent Systems', 'Agent Orchestration', 'RAG', 'Vector Databases', 'Incident Triage'],
  },
  {
    title: 'azure & cloud',
    tags: ['Azure VM', 'AKS', 'Azure Storage', 'Key Vault', 'API Management', 'Application Gateway', 'Azure Monitor', 'Log Analytics', 'Azure AD', 'Azure DevOps'],
  },
  {
    title: 'containers & automation',
    tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Azure Container Registry', 'Terraform', 'Ansible', 'PowerShell', 'Python', 'Bash', 'Selenium'],
  },
  {
    title: 'integration & security',
    tags: ['REST APIs', 'Custom REST APIs', 'OAuth 2.0', 'MID Server', 'Qualys', 'BigFix', 'CrowdStrike', 'Check Point', 'HashiCorp Vault', 'Keycloak'],
  },
  {
    title: 'infrastructure & monitoring',
    tags: ['Nutanix', 'Windows Server', 'Linux', 'OpenStack', 'Active Directory', 'Zabbix', 'ManageEngine', 'OpenSearch'],
  },
  {
    title: 'databases',
    tags: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'architecture & solutioning',
    tags: ['Enterprise Architecture', 'Solution Design', 'Requirements Gathering', 'Architecture Workshops', 'Stakeholder Management', 'Production Deployment'],
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
