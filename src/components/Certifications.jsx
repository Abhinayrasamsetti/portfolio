const CERTS = [
  {
    title: 'Google Cloud Associate Cloud Engineer',
    org: 'Google',
    desc: 'Validates expertise in designing and managing scalable cloud solutions on GCP.',
  },
  {
    title: 'ITOPS Automation Engineer',
    org: 'LTIMindtree',
    desc: 'Covers Git, product lifecycle management, Docker, Kubernetes, PostgreSQL, and OpenSearch.',
  },
  {
    title: 'Certified Cloud — IT Infrastructure & Cybersecurity Services Professional',
    org: 'LTIMindtree',
    desc: 'Recognizes proficiency in cloud infrastructure architecture and cybersecurity services.',
  },
  {
    title: 'Generative AI Certification',
    org: 'LTIMindtree',
    desc: 'Demonstrates working knowledge of GenAI concepts and practical enterprise applications.',
  },
]

const ACCOMPLISHMENTS = [
  { title: '60%+ Manual Effort Reduction', desc: 'Drove adoption of AIOps resolution workflows that reduce manual engineering effort and improve MTTR.' },
  { title: '900+ ServiceNow Users', desc: 'Own platform configuration, enhancements, integrations, and support for a large internal ServiceNow instance.' },
  { title: '99.9% SLA Across 950+ Servers', desc: 'Maintained SLA for hybrid infrastructure that supports approximately 2,000 users.' },
  { title: 'Spotlight Award & Client Appreciation', desc: 'Recognized for ownership, architecture quality, and successful enterprise implementation delivery.' },
  { title: '100-Day LinkedIn Networking Series', desc: 'Published a 100-day series building professional network and technical brand visibility.' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="eyebrow">05 / certifications</div>
        <h2 className="section-title">Verified credentials</h2>

        <div className="card-grid" style={{ marginBottom: 64 }}>
          {CERTS.map((c) => (
            <div className="card" key={c.title}>
              <span className="card-icon">[✓] VERIFIED</span>
              <h3 className="card-title">{c.title}</h3>
              <div className="card-org">{c.org}</div>
              <p className="card-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="eyebrow">key accomplishments</div>
        <div className="card-grid">
          {ACCOMPLISHMENTS.map((a) => (
            <div className="card" key={a.title}>
              <span className="card-icon">[★] LOGGED</span>
              <h3 className="card-title">{a.title}</h3>
              <p className="card-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
