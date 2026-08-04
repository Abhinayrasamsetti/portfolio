const PROJECTS = [
  {
    title: 'Enterprise DevOps Platform',
    type: 'GitHub portfolio repository',
    desc: 'A portfolio of enterprise automation, Kubernetes, Terraform, cloud architecture, and platform engineering solutions.',
    href: 'https://github.com/Abhinayrasamsetti',
  },
  {
    title: '100-Day LinkedIn Networking Series',
    type: 'Professional brand initiative',
    desc: 'A 100-day publishing series focused on building professional network reach and technical brand visibility.',
    href: 'https://www.linkedin.com/in/abhinayrasamsetti',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">04 / projects</div>
        <h2 className="section-title">Selected builds</h2>
        <div className="card-grid">
          {PROJECTS.map((project) => (
            <a className="card project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <span className="card-icon">[↗] {project.type}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
