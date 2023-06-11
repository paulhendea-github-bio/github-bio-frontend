const GITHUB_BIO_API_URL = import.meta.env.VITE_GITHUB_BIO_API_URL

export async function getBannerUrl({ banner, title, subtitle, transparent }) {
  const queryParams = new URLSearchParams(
    JSON.parse(
      JSON.stringify({
        title: title || undefined,
        subtitle: subtitle || undefined,
        transparent,
      })
    )
  )

  return `${GITHUB_BIO_API_URL}/banners/${banner}?${queryParams}`
}

export async function getBanner({ name, title, subtitle, transparent }) {
  try {
    const queryParams = new URLSearchParams(
      JSON.parse(
        JSON.stringify({
          title: title || undefined,
          subtitle: subtitle || undefined,
          transparent,
        })
      )
    )

    const response = await fetch(
      `${GITHUB_BIO_API_URL}/banners/${name}?${queryParams}`
    )
    return await response.text()
  } catch (error) {
    console.error(error)
    return null
  }
}
