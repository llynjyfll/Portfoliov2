import { PROJECTS, GITHUB_URL } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="sub">Here are some of the projects I've built while learning.</p>
      <div className="grid">
        {PROJECTS.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}
