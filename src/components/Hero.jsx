import { useEffect, useState } from 'react'

const CAREER_START = new Date('2023-09-01T00:00:00')

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const years = Math.floor(totalSeconds / (365.25 * 24 * 3600))
  const days = Math.floor((totalSeconds % (365.25 * 24 * 3600)) / (24 * 3600))
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${years}y ${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function Hero() {
  const [uptime, setUptime] = useState('')

  useEffect(() => {
    const tick = () => setUptime(formatUptime(Date.now() - CAREER_START.getTime()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header id="top" className="hero">
      <div className="wrap">
        <div className="status-panel">
          <span className="ok">SYSTEM OPERATIONAL</span>
          <span className="sep">|</span>
          <span>CAREER_UPTIME: {uptime}</span>
          <span className="sep">|</span>
          <span>SLA: 99.9%</span>
          <span className="sep">|</span>
          <span>LOCATION: Bengaluru, IN</span>
        </div>

        <div className="eyebrow">implementation architect · devops engineer</div>

        <h1 className="hero-name">
          Jagadeeswar Abhinay<br /><span className="accent">Rasamsetti</span>
        </h1>

        <p className="hero-role">
          <span className="prompt">$</span>
          whoami --role="Implementation Architect" --focus="AIOps, ServiceNow, Cloud & DevOps"
        </p>

        <p className="hero-summary">
          Implementation Architect and DevOps Engineer with 2.5+ years at LTIMindtree. I lead
          enterprise technical delivery across Azure, ServiceNow, Active Directory, AKS, and
          automation platforms — including AIOps solutions that reduce manual engineering effort
          through guided, AI-assisted resolution workflows.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:rasamsettiabhinay125@gmail.com">Get in touch →</a>
          <a className="btn btn-ghost" href="https://github.com/Abhinayrasamsetti" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/abhinayrasamsetti" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="metric-row">
          <div className="metric">
            <div className="metric-value">99.9%</div>
            <div className="metric-label">SLA across 950+ servers</div>
          </div>
          <div className="metric">
            <div className="metric-value">900+</div>
            <div className="metric-label">ServiceNow users supported</div>
          </div>
          <div className="metric">
            <div className="metric-value">60%+</div>
            <div className="metric-label">Manual effort reduced</div>
          </div>
          <div className="metric">
            <div className="metric-value">4</div>
            <div className="metric-label">Certifications</div>
          </div>
        </div>
      </div>
    </header>
  )
}
