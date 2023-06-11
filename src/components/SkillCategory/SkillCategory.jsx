import './SkillCategory.scss'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getSkills } from '../../services/skills.service'
import { SkillItem } from '../SkillItem/SkillItem'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export function SkillCategory({ category, title }) {
  const { skills, setSkills } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [skillsData, setSkillsData] = useState([])

  useEffect(() => {
    setLoading(true)
    getSkills({ category }).then((newSkills) => {
      setSkillsData(newSkills)
      setLoading(false)
    })
  }, [category])

  const handleClick = ({ name, url }) => {
    setSkills((prev) => {
      if (name in prev) {
        const newSkills = { ...prev }
        delete newSkills[name]
        return newSkills
      } else return { ...prev, [name]: url }
    })
  }

  return (
    <section className="skill-category">
      <h1>{title}</h1>
      <div className="skill-list">
        {skillsData.map(({ _id: id, name, url }) =>
          !loading ? (
            <SkillItem
              key={id}
              name={name}
              url={url}
              enabled={name in skills}
              onClick={() => {
                handleClick({ name, url })
              }}
            />
          ) : null
        )}
      </div>
    </section>
  )
}

SkillCategory.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
}
