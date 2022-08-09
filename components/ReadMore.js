import { useState } from 'react'
import style from '../styles/readMore.module.scss'

export default function ReadMore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => setIsReadMore(!isReadMore)

  return (
    <>
      <p className={`${style.readMore} ${isReadMore ? style.hide : ''}`}>
        {children}
      </p>
      <p onClick={toggleReadMore} className={style.readMoreToggle}>
        {isReadMore ? 'read more...' : 'show less...'}
      </p>
    </>
  )
}
