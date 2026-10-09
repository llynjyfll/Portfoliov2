import { SKILLS } from '../data/portfolio'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-grid">
        {SKILLS.map(({ name, icon }) => (
          <div className="skill-tile" key={name} title={name}>
            <img src={`${CDN}${icon}.svg`} alt={name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
