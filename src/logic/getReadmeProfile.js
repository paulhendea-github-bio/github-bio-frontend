import { getBannerUrl } from '../services/banners.service'

export async function getReadmeProfile({ userInfo, skills, summary, banner }) {
  let svgBanner
  if (banner.name)
    svgBanner = await getBannerUrl({ ...banner, banner: banner.name })

  let hasSkills = Object.keys(skills).length !== 0

  let validContact = Object.fromEntries(
    Object.entries(userInfo.contact).filter(([, value]) => !!value)
  )
  let hasContact = Object.keys(validContact).length !== 0

  return readmeTemplate({
    banner: svgBanner,
    summary,
    skills,
    hasSkills,
    contact: validContact,
    hasContact,
  })
}

const readmeTemplate = ({
  banner,
  summary,
  skills,
  hasSkills,
  contact,
  hasContact,
}) => `
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
  hasContact
    ? `
# Find me at 📫

${Object.entries(contact)
  .map(
    ([key, value]) =>
      `- ${key.substring(0, 1).toUpperCase() + key.substring(1)}: ${value}`
  )
  .join('\n\n')}
`
    : ''
}
`
