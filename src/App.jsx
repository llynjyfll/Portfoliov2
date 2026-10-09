import useTheme from './hooks/useTheme'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="vline" />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle theme={theme} onToggle={toggle} />
    </>
  )
}
