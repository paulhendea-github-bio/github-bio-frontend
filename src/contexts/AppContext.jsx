import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PropTypes from 'prop-types'

const AppContext = createContext({})

function AppContextProvider({ children }) {
  const initialData = {
    userInfo: {
      username: '',
      location: '',
      currentOcupation: '',
      learning: '',
      other: '',
      contact: {
        email: '',
        twitter: '',
        web: '',
      },
    },
    skills: {},
    summary: '',
    banner: {
      name: '',
      title: '',
      subtitle: '',
      transparent: false,
    },
  }
  const [localStorage, setLocalStorage] = useLocalStorage(
    'userData',
    initialData
  )
  const [userInfo, setUserInfo] = useState(localStorage.userInfo)
  const [skills, setSkills] = useState(localStorage.skills)
  const [summary, setSummary] = useState(localStorage.summary)
  const [banner, setBanner] = useState(localStorage.banner)

  const contextValue = {
    userInfo,
    setUserInfo,
    skills,
    setSkills,
    summary,
    setSummary,
    banner,
    setBanner,
    setLocalStorage,
  }
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node,
}

export { AppContext, AppContextProvider }
