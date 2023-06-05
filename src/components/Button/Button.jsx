import classNames from 'classnames'
import './Button.scss'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export function Button({ children, type, onClick, className }) {
  const buttonClassName = classNames('button-styled', className)
  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  )
}
