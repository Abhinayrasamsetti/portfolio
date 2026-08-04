import { useState } from 'react'

const LINKS = [
  { n: '01', label: 'about', href: '#about' },
  { n: '02', label: 'experience', href: '#experience' },
  { n: '03', label: 'skills', href: '#skills' },
  { n: '04', label: 'projects', href: '#projects' },
  { n: '05', label: 'credentials', href: '#certifications' },
  { n: '06', label: 'contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-dot" />
          abhinay.sys
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}><span className="num">{l.n}</span>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? '×' : '≡'}
        </button>
      </div>
      {open && (
        <div className="wrap" style={{ paddingBottom: 20 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 14 }}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--dim)', marginRight: 8 }}>{l.n}</span>{l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
