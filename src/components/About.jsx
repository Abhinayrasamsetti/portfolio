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
              Customer-facing solution delivery from discovery and operational landscape assessment
              through architecture, implementation planning, validation, enablement, and handover.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// architecture</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Customer-specific Agentic AIOps architectures on IRUN and BlueVerse Tech, using
              multi-agent workflows, OpenSearch-backed RAG, CMDB correlation, and MCP or REST integrations.
            </p>
          </div>
          <div className="skill-panel">
            <div className="skill-panel-title">// track record</div>
            <p style={{ color: 'var(--mist)', lineHeight: 1.7, fontSize: 15, margin: 0 }}>
              Balance hands-on ServiceNow administration for 900+ users with AIOps platform
              architecture and delivery across 5+ enterprise engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
