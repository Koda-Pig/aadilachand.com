import { useState } from 'react'
import style from '../styles/readMore.module.css'

export default function ReadMore({ children }) {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => setIsReadMore(!isReadMore)

  return (
    <>
      <p className={`${style.readMore} ${isReadMore ? style.hide : ''}`}>
        {text}
      </p>
      <span onClick={toggleReadMore} className={style.readMoreToggle}>
        {isReadMore ? 'read more...' : 'show less'}
      </span>
    </>
  )
}
