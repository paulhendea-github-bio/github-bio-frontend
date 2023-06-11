import './Banner.scss'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getBannerUrl } from '../../services/banners.service'

export function Banner({ type, title, subtitle, transparent }) {
  const [bannerUrl, setBannerUrl] = useState()

  useEffect(() => {
    getBannerUrl({ banner: type, title, subtitle, transparent }).then((newBannerUrl) => {
      setBannerUrl(newBannerUrl)
    })
  }, [type, title, subtitle, transparent])
  
  return <img src={bannerUrl} alt={`${type} banner`} className="banner" />
}

Banner.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  transparent: PropTypes.bool
}
