import { getBannerUrl } from '../services/banners.service'

export async function getReadmeProfile({ userInfo, skills, summary, banner }) {
  let svgBanner
  if (banner.name)
    svgBanner = await getBannerUrl({ ...banner, banner: banner.name })
    
  let hasSkills = Object.keys(skills).length !== 0
    
  let validContact = Object.fromEntries(
    Object.entries(userInfo.contact).filter(([, value]) => !!value)
  )

  return readmeTemplate({
    banner: svgBanner,
    summary,
    skills,
    hasSkills,
    contact: validContact,
  })
}

const readmeTemplate = ({ banner, summary, skills, hasSkills, contact }) => `
${
  banner
    ? `
<p align="center">
  <img src="${banner}" />
</p>
`
    : ''
}

${
  summary
    ? `
# About me 🙂

${summary}
`
    : ''
}

${
  hasSkills
    ? `
# Skills ⚡

${Object.entries(skills)
  .map(([key, value]) => `<img src="${value}" alt="${key}" width="50px" />`)
  .join(' ')}
`
    : ''
}

${
  contact === ''
    ? `
# Find me at 📫

${Object.entries(contact)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join('\n\n')}
`
    : ''
}
`
