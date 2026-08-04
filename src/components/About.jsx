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
              Customer-facing technical ownership from discovery and architecture workshops
              through deployment and production support across enterprise environments.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// architecture</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Architecture for multi-agent AIOps platforms using agent orchestration, RAG,
              vector databases, ServiceNow, Azure, APIs, and container platforms.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// track record</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Independently deliver 20–30 ServiceNow requirements monthly for 900+ users,
              alongside delivery for 5+ enterprise client engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
