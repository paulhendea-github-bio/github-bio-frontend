import { useEffect, useState } from 'react'
import './ScrollDown.scss'

export function ScrollDown() {
  const [isTop, setIsTop] = useState(false)

  useEffect(() => {
    setIsTop(window.scrollY === 0)
    const handleScroll = () => {
      setIsTop(false)
      window.removeEventListener('scroll', handleScroll)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-down"
      style={{
        opacity: isTop ? 1 : 0,
      }}
    >
      <span></span>
    </div>
  )
}
