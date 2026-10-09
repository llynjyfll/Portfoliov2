import { NAME } from '../data/portfolio'

export default function Footer() {
  return (
    <footer><small>© {new Date().getFullYear()} {NAME}. All rights reserved. ❤</small></footer>
  )
}
