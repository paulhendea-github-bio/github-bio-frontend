import { Route, Switch, useLocation } from 'wouter'
import { Home } from './pages/Home/Home'
import { Details } from './pages/Details/Details'
import { AppContext, AppContextProvider } from './contexts/AppContext'
import { Skills } from './pages/Skills/Skills'
import { AddOns } from './pages/AddOns/AddOns'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { StepsHeader } from './components/StepsHeader/StepsHeader'
import { Result } from './pages/Result/Result'
import { useContext } from 'react'
import { useEffect } from 'react'

export function App() {
  const { userInfo, skills, summary, banner, setLocalStorage } =
    useContext(AppContext)
  const [location] = useLocation()

  useEffect(() => {
    setLocalStorage({ userInfo, skills, summary, banner })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/details">
        <StepsHeader>
          <Details />
        </StepsHeader>
      </Route>
      <Route path="/skills">
        <StepsHeader>
          <Skills />
        </StepsHeader>
      </Route>
      <Route path="/addons">
        <StepsHeader>
          <AddOns />
        </StepsHeader>
      </Route>
      <Route path="/result">
        <Result />
      </Route>

      {/* DEFAULT ROUTE */}
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}
