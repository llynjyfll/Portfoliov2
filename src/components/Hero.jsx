import { NAME, HERO, SOCIALS } from '../data/portfolio'
import { SOCIAL_ICONS } from './Icons'
import ProfileCard from './ProfileCard'

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-copy">
        <p className="hero-badge">{HERO.badge}</p>
        <h1>Hi, I'm <span className="grad">{NAME}</span></h1>
        <p className="lead"><b>{HERO.tagline}</b><br />{HERO.desc}</p>
        <div className="cta">
          <a className="btn p" href="#projects">View My Projects <span>→</span></a>
          <a className="btn s" href="#contact">Contact Me <span>✉</span></a>
        </div>
        <div className="soc">
          {SOCIALS.map(({ name, href }) => {
            const Icon = SOCIAL_ICONS[name]
            return (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
      <div className="hero-profile-card">
        <ProfileCard
          name={NAME}
          title="IT Student & UI/UX Designer"
          handle="llynjyfll"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/photo.png"
          showUserInfo={false}
          enableTilt
          enableMobileTilt={false}
          behindGlowColor="rgba(236, 72, 153, 0.67)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg, #ec489988 0%, #f9a8d444 100%)"
        />
      </div>
    </section>
  )
}
