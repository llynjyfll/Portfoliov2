// Edit your content here. Components read everything from this file.

export const NAME = 'Allyn Joy Fullo'
export const INITIALS = 'AF'
export const PROFILE_IMAGE = '/profile.jpg' // put profile.jpg in /public; falls back to initials if missing
export const EMAIL = 'joyallyn0@gmail.com'
export const GITHUB_URL = 'https://github.com/llynjyfll'

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const HERO = {
  badge: 'UI/UI Designer &UX Researcher',
  tagline: 'Building skills. Creating projects. Growing every day.',
  desc: "I'm an Information Technology student who loves learning web development and building simple but meaningful applications.",
}

export const SOCIALS = [
  { name: 'GitHub', label: 'github.com/llynjyfll', href: GITHUB_URL },
  { name: 'LinkedIn', label: 'linkedin.com/in/AllynJoy', href: 'https://www.linkedin.com/in/allyn-joy-16a1b4401/' },
  { name: 'Facebook', label: 'facebook.com/allynjoy.fullo', href: 'https://www.facebook.com/allynjoy.fullo.9?' },
]

export const ABOUT = {
  intro: "I am an Information Technology student passionate about bridging the gap between design and development. I focus on crafting intuitive user experiences while continuously expanding my technical skills toward full-stack web development.",
}

export const EDUCATION = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Western Institute of Technology',
  period: '2024 – Present',
  subjects: ['Web Development', 'Database Systems', 'Networking'],
}

// icon = devicon slug (https://devicon.dev). Logos load from the jsDelivr CDN.
export const SKILLS = [
  { name: 'HTML', icon: 'html5/html5-original' },
  { name: 'CSS', icon: 'css3/css3-original' },
  { name: 'JavaScript', icon: 'javascript/javascript-original' },
  { name: 'React.js', icon: 'react/react-original' },
  { name: 'Figma', icon: 'figma/figma-original' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original' },
  { name: 'Express.js', icon: 'express/express-original' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
  { name: 'Git', icon: 'git/git-original' },
  { name: 'GitHub', icon: 'github/github-original' },
  { name: 'VS Code', icon: 'vscode/vscode-original' },
]

export const PROJECTS = [
  {
    title: 'Simple To-Do App',
    desc: 'A beginner task manager to add, edit, and delete tasks.',
    tags: ['HTML', 'React.js', 'MongoDB', 'Express', 'Node.js'],
    demo: 'https://awesome-todos-cjq8.onrender.com/',
    icon: '📋',
    gradient: '#4f46e5,#0891b2',
  },
  {
    title: 'Audio Playlist Prototyping',
    desc: 'An Audio playlist with a simple and intuitive interface, designed to enhance the music listening experience.',
    tags: ['Figma'],
    demo: 'https://www.figma.com/proto/1Wh3Um6O48P15hjgE0BEKi/Challenge-2-fullo?node-id=1-2&p=f&t=uMhzR4wobsyj1OQM-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    icon: '🗄️',
    gradient: '#0f766e,#0891b2',
  },
  {
    title: 'Pink Serenity Bouquet',
    desc: 'My personal Design for Flower',
    tags: ['Figma'],
    demo: 'https://www.figma.com/proto/zIYUQ6qEbuhauTVXF3GlgZ/Challenge-1-Fullo?node-id=87-13&p=f&t=SIXC2f4OIV6uuFbg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=87%3A13',
    icon: '💻',
    gradient: '#9333ea,#ec4899',
  },
   {
    title: 'Portfolio_v1 Website',
    desc: 'My personal Portfolio website',
    tags: ['HTML', 'React.js', 'MongoDB', 'Express', 'Node.js'],
    demo: 'https://allynjoyfullo.vercel.app/',
    icon: '💻',
    gradient: '#9333ea,#ec4899',
  },
]
