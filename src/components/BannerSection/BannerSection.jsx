import './BannerSection.scss'
import { Banner } from '../Banner/Banner'
import { Checkbox } from '../Checkbox/Checkbox'
import classNames from 'classnames'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const bannerList = [
  'typing',
  'origin',
  'luminance',
  'rainbow',
  'glitch',
  'text-box',
]

export function BannerSection() {
  const { banner, setBanner } = useContext(AppContext)

  const handleBannerClick = (name) => {
    setBanner((prev) => {
      if (name === prev.name) return { ...prev, name: '' }
      else return { ...prev, name }
    })
  }

  const handleTitleChange = (event) => {
    const title = event.target.value
    if (/^\s+$/.test(title)) return
    setBanner((prev) => ({ ...prev, title }))
  }

  const handleSubtitleChange = (event) => {
    const subtitle = event.target.value
    if (/^\s+$/.test(subtitle)) return
    setBanner((prev) => ({ ...prev, subtitle }))
  }

  const handleTransparentChange = () => {
    setBanner((prev) => ({ ...prev, transparent: !prev.transparent }))
  }

  return (
    <section id="banners">
      <h1>Choose your banner</h1>
      <form className="banners-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={banner.title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={banner.subtitle}
          onChange={handleSubtitleChange}
        />
        <Checkbox
          onClick={handleTransparentChange}
          enabled={banner.transparent}
        >
          Transparent
        </Checkbox>
      </form>
      <ul className="banner-list">
        {bannerList.map((name) => (
          <li
            key={name}
            className={classNames({
              selected: name === banner.name,
              'selected-transparent':
                name === banner.name && banner.transparent,
            })}
            onClick={() => handleBannerClick(name)}
          >
            <Banner
              type={name}
              title={banner.title}
              subtitle={banner.subtitle}
              transparent={banner.transparent}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
