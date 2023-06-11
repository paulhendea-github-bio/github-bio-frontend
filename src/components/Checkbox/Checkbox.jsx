import './Checkbox.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export function Checkbox({ children, enabled, onClick }) {
  const className = classNames("checkbox-styled", { "enabled": enabled })
  
  return (
    <button type='button' onClick={onClick} className={className}>
      {children}
    </button>
  )
}

Checkbox.propTypes = {
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onClick: PropTypes.func
}
