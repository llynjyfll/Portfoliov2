import { GitHubIcon } from './Icons'

export default function ProjectCard({ project }) {
  const { title, desc, tags, repo, demo, icon, gradient } = project
  return (
    <article className="card">
      
      <div className="cb">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="tags" style={{ marginBottom: '1rem' }}>
          {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        <div className="row">
          {demo && <a className="demo" href={demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
          {repo && (
            <a className="gh" href={repo} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${title}`}>
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
