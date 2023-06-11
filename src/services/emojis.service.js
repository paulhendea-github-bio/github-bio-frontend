const GITHUB_BIO_API_URL = import.meta.env.VITE_GITHUB_BIO_API_URL

export async function getEmojis({ page, limit }) {
  try {
    const response = await fetch(`${GITHUB_BIO_API_URL}/emojis`, {
      queryParams: {
        page,
        limit,
      },
    })
    const result = await response.json()
    return result.data
  } catch (error) {
    console.error(error)
    return null
  }
}
