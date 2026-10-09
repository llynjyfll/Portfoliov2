export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="tbtn" aria-label="Toggle dark/light theme" onClick={onToggle}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
