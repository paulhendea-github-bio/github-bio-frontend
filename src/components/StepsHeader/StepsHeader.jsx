import './StepsHeader.scss'
import { STEPS } from '../../constants'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfoCircle,
  faLaptopCode,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Link, useLocation } from 'wouter'
import { Button } from '../Button/Button'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Logo } from '../Logo/Logo'

const stepsIcons = {
  '/details': faInfoCircle,
  '/skills': faLaptopCode,
  '/addons': faWandMagicSparkles,
}

StepsHeader.propTypes = {
  children: PropTypes.node,
}

export function StepsHeader({ children }) {
  const [location, navigate] = useLocation()
  
  const currentStep = STEPS.indexOf(location)
  const handleNext = () => {
    navigate(STEPS[currentStep + 1] ?? '/result')
  }

  return (
    <>
      <Logo />
      <header>
        <section className="steps-container">
          <div className="steps">
            {STEPS.map((step, index) => (
              <>
                {index !== 0 ? (
                  <div
                    className={classNames('line', {
                      completed: index <= currentStep,
                    })}
                  />
                ) : null}
                <Link to={step}>
                  <div
                    className={classNames('step', {
                      completed: index <= currentStep,
                    })}
                  >
                    <div
                      className={classNames('icon', {
                        selected: step === location,
                      })}
                    >
                      <FontAwesomeIcon icon={stepsIcons[step]} />
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </section>
        <Button onClick={handleNext} className="button-next">
          {location === STEPS[STEPS.length - 1] ? 'Finish' : 'Next'}
        </Button>
      </header>
      {children}
    </>
  )
}
