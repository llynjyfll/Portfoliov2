import { EMAIL, SOCIALS } from '../data/portfolio'
import { SOCIAL_ICONS } from './Icons'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Let's Connect! 🚀</h2>
      <p>I'd love to connect and collaborate!</p>
      <div className="chips">
        <a className="btn p" href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
      </div>
      <div className="chips">
        {SOCIALS.map(({ name, label, href }) => {
          const Icon = SOCIAL_ICONS[name]
          return (
            <a key={name} className="btn s chip" href={href} target="_blank" rel="noopener noreferrer">
              <Icon /> {label}
            </a>
          )
        })}
      </div>
    </section>
  )
}
