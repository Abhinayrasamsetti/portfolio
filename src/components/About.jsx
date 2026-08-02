export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">01 / about</div>
        <h2 className="section-title">What I run</h2>
        <div className="skills-grid">
          <div className="skill-panel">
            <div className="skill-panel-title">// scope</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              End-to-end DevOps operations across hybrid Windows/Linux environments —
              L1 through L3 — covering monitoring, networking, compliance, containerization,
              and scripting.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// architecture</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Design enterprise-grade application architectures integrated with ServiceNow,
              Active Directory, and cloud platforms — Azure and GCP — for global clients.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// track record</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Maintained 99.9% SLA compliance over 2+ years and led design and deployment
              of a critical application solution for a global manufacturing leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
