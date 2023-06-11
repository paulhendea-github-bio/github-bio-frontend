import Highlight from 'react-highlight'
import { Logo } from '../../components/Logo/Logo'
import './Result.scss'
import { marked } from 'marked'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { getReadmeProfile } from '../../logic/getReadmeProfile'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export function Result() {
  const { userInfo, skills, summary, banner } = useContext(AppContext)
  const [readmeProfile, setReadmeProfile] = useState('')
  const [previewMode, setPreviewMode] = useState(true)

  useEffect(() => {
    getReadmeProfile({ userInfo, skills, summary, banner }).then(
      (newReadmeProfile) => setReadmeProfile(newReadmeProfile)
    )
  }, [userInfo, skills, summary, banner])

  const handleChangeMode = () => {
    setPreviewMode((prev) => !prev)
  }

  const copyText = () => {
    navigator.clipboard.writeText(readmeProfile)
  }

  return (
    <>
      <Logo />
      <header>
        <h1>Enjoy!</h1>
      </header>
      <main id="result">
        <section className="result">
          <div className="button-container">
            <Button onClick={handleChangeMode}>
              {previewMode ? 'Code' : 'Preview'}
            </Button>
            <Button onClick={copyText}>
              <FontAwesomeIcon icon={faCopy} />
            </Button>
          </div>
          <div className="code">
            {previewMode ? (
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(readmeProfile),
                }}
              />
            ) : null}
            {!previewMode ? <Highlight>{readmeProfile}</Highlight> : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
