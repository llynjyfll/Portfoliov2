import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../data/portfolio'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <button className="mbtn" aria-label="Toggle mobile menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? '✕' : '☰'}
      </button>

      <div className={`mmenu${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
      </div>

      <nav className="nav">
        {NAV_ITEMS.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'on' : ''}>{n.label}</a>
        ))}
      </nav>
    </header>
  )
}
