import './Skills.scss'
import { SkillCategory } from '../../components/SkillCategory/SkillCategory'
import {
  SKILL_CATEGORIES as CATEGORIES,
  SKILL_CATEGORY_TITLES as CATEGORY_TITLES,
} from '../../constants'
import { Footer } from '../../components/Footer/Footer'

export function Skills() {  
  return (
    <>
      <main id="skill-page">
        {CATEGORIES.map((category) => (
          <SkillCategory
            key={category}
            category={category}
            title={CATEGORY_TITLES[category]}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}
