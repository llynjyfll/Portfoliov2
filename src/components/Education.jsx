import { EDUCATION as E } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <article className="edu">
        <h3>{E.degree}</h3>
        <p className="sch">{E.school}</p>
        <p>📅 {E.period}</p>
        <p className="rel"><b>Relevant Subjects:</b></p>
        <div className="tags">{E.subjects.map((s) => <span className="pill" key={s}>{s}</span>)}</div>
      </article>
    </section>
  )
}
