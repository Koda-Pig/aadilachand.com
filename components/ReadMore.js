import { useState } from 'react'
import styles from '../styles/readMore.module.scss'

export default function ReadMore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => setIsReadMore(!isReadMore)

  return (
    <>
      <p className={`${styles.readMore} ${isReadMore ? styles.hide : ''}`}>
        {children}
      </p>
      <p onClick={toggleReadMore} className={styles.readMoreToggle}>
        {isReadMore ? 'read more...' : 'show less...'}
      </p>
    </>
  )
}
