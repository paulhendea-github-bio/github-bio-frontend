import './SkillItem.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

SkillItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func
}

export function SkillItem({ name, url, enabled, onClick }) {
  const className = classNames('skill-list-item', {
    'skill-list-item-enabled': enabled,
  })

  return (
    <button className={className} onClick={onClick}>
      <img src={url} alt={name} />
      <small>{name}</small>
    </button>
  )
}