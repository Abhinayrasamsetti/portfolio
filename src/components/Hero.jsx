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

        <div className="eyebrow">implementation solution architect</div>

        <h1 className="hero-name">
          Jagadeeswar Abhinay<br /><span className="accent">Rasamsetti</span>
        </h1>

        <p className="hero-role">
          <span className="prompt">$</span>
          whoami --role="Infrastructure & Solutions" --focus="DevOps, Cloud, Enterprise Architecture"
        </p>

        <p className="hero-summary">
          Infrastructure & Solutions professional with 2.5+ years at LTIMindtree, progressing
          from Automation Infrastructure Engineer to Implementation Solution Architect. I design
          enterprise-grade application architectures integrated with ServiceNow, Active Directory,
          and cloud platforms — and I've kept the lights on across hybrid Windows/Linux environments
          at 99.9% SLA the whole way.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:rasamsettiabhinay125@gmail.com">Get in touch →</a>
          <a className="btn btn-ghost" href="https://github.com/Abhinayrasamsetti" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="http://www.linkedin.com/in/abhinayrasamsetti" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="metric-row">
          <div className="metric">
            <div className="metric-value">99.9%</div>
            <div className="metric-label">SLA compliance / 2+ yrs</div>
          </div>
          <div className="metric">
            <div className="metric-value">3</div>
            <div className="metric-label">Roles, one company</div>
          </div>
          <div className="metric">
            <div className="metric-value">20+</div>
            <div className="metric-label">Tools & platforms</div>
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
