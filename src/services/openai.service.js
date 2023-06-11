const GITHUB_BIO_API_URL = import.meta.env.VITE_GITHUB_BIO_API_URL

export async function getSummary({ userInfo, skills }) {
  try {
    const skillsList = Object.keys(skills)
    
    const response = await fetch(`${GITHUB_BIO_API_URL}/openai/summary`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ ...userInfo, skills: skillsList })
    })

    if (!response.ok) return null
    const result = await response.json()
    return result.summary
  } catch (error) {
    console.error(error)
    return null
  }
}