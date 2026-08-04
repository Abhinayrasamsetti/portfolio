export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>07 / contact</div>
        <h2 className="footer-title">Let's build something<br />that stays up.</h2>
        <p className="footer-sub">
          Open to implementation architecture, AIOps, ServiceNow, DevOps, and infrastructure roles.
          Based in Bengaluru, India — reachable anywhere.
        </p>
        <div className="footer-links">
          <a className="btn btn-primary" href="mailto:rasamsettiabhinay125@gmail.com">rasamsettiabhinay125@gmail.com</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/abhinayrasamsetti" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href="https://github.com/Abhinayrasamsetti" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="tel:+918341698393">+91 83416 98393</a>
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} Jagadeeswar Abhinay Rasamsetti · Built with React · Deployed on GitHub Pages
        </div>
      </div>
    </footer>
  )
}
