import './SummarySection.scss'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { getSummary } from '../../services/openai.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { useState } from 'react'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'
import { useEffect } from 'react'

export function SummarySection() {
  const { userInfo, skills, summary, setSummary } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const getNewSummary = () => {
    setLoading(true)
    setError(null)
    getSummary({ userInfo, skills }).then((newSumary) => {
      if (newSumary === null)
        setError('IA is not available, try again later :(')
      else setSummary(newSumary)
      setLoading(false)
    })
  }

  useEffect(() => {
    if (!summary) getNewSummary()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="openai-summary">
      <h1>Summary with OpenAI</h1>
      <div id="openai-summary-value">
        {loading ? <LoadingIndicator /> : <p>{summary}</p>}
        {error ? <p className="error">{error}</p> : null}
      </div>
      <Button onClick={getNewSummary} className="summary-button">
        <FontAwesomeIcon icon={faRefresh} /> Rewrite
      </Button>
    </section>
  )
}
