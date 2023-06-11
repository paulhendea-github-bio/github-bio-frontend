import './Details.scss'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Footer } from '../../components/Footer/Footer'

export function Details() {
  const { userInfo, setUserInfo } = useContext(AppContext)

  const handleLocationChange = (event) => {
    const location = event.target.value
    if (/^\s+$/.test(location)) return
    setUserInfo((prev) => ({ ...prev, location }))
  }

  const handleOcupationChange = (event) => {
    const currentOcupation = event.target.value
    if (/^\s+$/.test(currentOcupation)) return
    setUserInfo((prev) => ({ ...prev, currentOcupation }))
  }

  const handleLearningChange = (event) => {
    const learning = event.target.value
    if (/^\s+$/.test(learning)) return
    setUserInfo((prev) => ({ ...prev, learning }))
  }

  const handleFunFactChange = (event) => {
    const other = event.target.value
    if (/^\s+$/.test(other)) return
    setUserInfo((prev) => ({ ...prev, other }))
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    if (/^\s+$/.test(email)) return
    setUserInfo((prev) => ({ ...prev, contact: { ...prev.contact, email } }))
  }

  const handleTwitterChange = (event) => {
    const twitter = event.target.value
    if (/^\s+$/.test(twitter)) return
    setUserInfo((prev) => ({ ...prev, contact: { ...prev.contact, twitter } }))
  }

  const handleWebChange = (event) => {
    const web = event.target.value
    if (/^\s+$/.test(web)) return
    setUserInfo((prev) => ({ ...prev, contact: { ...prev.contact, web } }))
  }

  return (
    <>
      <main className="details">
        <section>
          <form>
            {/* <Button>Next</Button> */}
            <fieldset>
              <legend>About you</legend>

              <input
                id="location"
                type="text"
                placeholder="Location"
                value={userInfo.location}
                onChange={handleLocationChange}
              />
              <input
                id="current-ocupation"
                type="text"
                placeholder="Current ocupation"
                value={userInfo.currentOcupation}
                onChange={handleOcupationChange}
              />
              <input
                id="learning"
                type="text"
                placeholder="Learning"
                value={userInfo.learning}
                onChange={handleLearningChange}
              />
              <input
                id="fun-fact"
                type="text"
                placeholder="Fun fact"
                value={userInfo.other}
                onChange={handleFunFactChange}
              />
            </fieldset>
            <fieldset>
              <legend>Contact</legend>

              <input
                id="email"
                type="text"
                placeholder="Email"
                value={userInfo.contact.email}
                onChange={handleEmailChange}
              />
              <input
                id="twitter"
                type="text"
                placeholder="Twitter"
                value={userInfo.contact.twitter}
                onChange={handleTwitterChange}
              />
              <input
                id="web"
                type="text"
                placeholder="Web url"
                value={userInfo.contact.web}
                onChange={handleWebChange}
              />
            </fieldset>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
