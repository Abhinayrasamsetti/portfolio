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
  { title: '99.9% SLA Achievement', desc: 'Consistently met 99.9% SLA targets across 2+ years of incident and infrastructure management.' },
  { title: 'Promoted to Primary Solution Architect', desc: 'Elevated by leadership for delivery consistency, technical depth, and client impact.' },
  { title: 'Technical Subject Matter Expert', desc: 'Recognized SME for key technical domains; led knowledge-sharing sessions within LTIMindtree.' },
  { title: 'All-Rounder Award', desc: 'Received during training for breadth of technical knowledge, mentorship, and leadership.' },
  { title: '100-Day LinkedIn Series on Networking', desc: 'Published daily networking insights for 100 consecutive days, building thought leadership.' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="eyebrow">04 / certifications</div>
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
