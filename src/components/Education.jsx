const EDU = [
  {
    mark: 'Present',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Manipal Institute of Technology, Jaipur, India',
  },
  {
    mark: 'Aug 2023',
    degree: 'B.Sc. in Computer Science',
    school: 'Aditya Degree College, Kakinada, India',
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
