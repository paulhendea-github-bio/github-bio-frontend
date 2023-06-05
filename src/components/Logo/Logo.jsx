import { Link } from 'wouter'
import './Logo.scss'

export function Logo() {
  return (
    <Link to="/">
      <img
        id="logo"
        src="./logo.svg"
        alt="GitHub Bio logo"
      />
    </Link>
  )
}
