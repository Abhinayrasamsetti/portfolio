const EDU = [
  {
    mark: '2025 — 2027',
    degree: 'Master of Computer Applications · Cybersecurity Specialization',
    school: 'Manipal Institute of Technology, Jaipur · Online · Pursuing',
  },
  {
    mark: '2020 — 2023',
    degree: 'B.Sc. Computer Science',
    school: 'Adikavi Nannaya University, Rajahmundry',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">06 / education</div>
        <h2 className="section-title">Training log</h2>

        <div>
          {EDU.map((e) => (
            <div className="edu-row" key={e.degree}>
              <div className="edu-mark">{e.mark}</div>
              <div>
                <h3 className="edu-degree">{e.degree}</h3>
                <div className="edu-school">{e.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
