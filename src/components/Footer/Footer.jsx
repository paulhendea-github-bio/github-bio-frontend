import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer>
      <p>
        Final project for Web App Develop by{' '}
        <a
          href="https://github.com/paulhendea"
          aria-label="Paul's GitHub profile"
          target="_blank" rel="noreferrer"
        >
          Paul Hendea
        </a>
        {' '}<FontAwesomeIcon icon={faCode} />{' '}
        <a
          href="https://github.com/paulhendea-github-bio/github-bio-api"
          aria-label="GitHub project repository"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </p>
    </footer>
  )
}
