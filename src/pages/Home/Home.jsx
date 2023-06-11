import './Home.scss'
import { Button } from '../../components/Button/Button'
import { ScrollDown } from '../../components/ScrollDown/ScrollDown'
import { Footer } from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'wouter'
import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'

export function Home() {
  const { setUserInfo } = useContext(AppContext)
  const [, navigate] = useLocation()
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // don't submit empty usernames
    if (!username) return

    setUserInfo((prev) => ({ ...prev, username }))
    navigate('/details')
  }
  const handleUsername = (event) => {
    const username = event.target.value
    // don't allow empty spaces at the start
    if (/^\s+$/.test(username)) return

    setUsername(username)
  }

  return (
    <>
      <header id="home-header">
        <div className="background"></div>
        <img src="./logo.svg" alt="github-bio logo" className="logo" />
        <p>Start creating your new awesome readme profile</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="GitHub username" value={username} onChange={handleUsername} />
          <Button type="submit">
            Next
          </Button>
        </form>
      </header>
      <ScrollDown />
      <main id="home-main">
        <section id="how-to">
          <header>
            <h3>How to setup the profile readme</h3>
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
          </header>
          <ol>
            <li>
              On any page, locate the upper-right corner and click on the <FontAwesomeIcon icon={faPlus} className="fa-icon" /> dropdown menu.
            </li>
            <li>
              From the dropdown menu, choose the option <strong>New repository</strong>.
            </li>
            <li>
              Enter a name for your repository that matches your GitHub username. For example, if your username is <strong>octocat</strong>, the repository should be <strong>octocat</strong>.
            </li>
            <li>
              Optionally, you can provide a description for your repository in the <strong>Description</strong> field. For instance, you can write <strong>My personal repository</strong>.
            </li>
            <li>Select the option <strong>Public</strong>.</li>
            <li>
              Check the box that says <strong>Add a README file</strong>.
            </li>
            <li>Click on the <strong>Create repository</strong> button.</li>
            <li>
              Locate the edit button <FontAwesomeIcon icon={faPen} className="fa-icon" /> on the README preview.
            </li>
            <li>
              Write anything you want, save the changes, and <strong>you are ready to go!</strong>
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}
