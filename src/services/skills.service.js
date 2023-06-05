const GITHUB_BIO_API_URL = import.meta.env.VITE_GITHUB_BIO_API_URL

export async function getSkills({ category, mode } = {}) {
  try {
    const queryParams = new URLSearchParams(
      JSON.parse(
        JSON.stringify({
          category,
          mode,
        })
      )
    )
    
    const response = await fetch(`${GITHUB_BIO_API_URL}/skills?${queryParams}`)
    const result = await response.json()
    return result.data
    
  } catch (error) {
    console.error(error)
    return null
  }
}
