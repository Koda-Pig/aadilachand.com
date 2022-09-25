import { useState } from 'react'
import styles from '../styles/readMore.module.scss'

export default function ReadMore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => setIsReadMore(!isReadMore)

  return (
    <>
      <div className={`${styles.readMore} ${isReadMore ? styles.hide : ''}`}>
        {children}
      </div>
      <p onClick={toggleReadMore} className={styles.readMoreToggle}>
        {isReadMore ? 'read more...' : 'show less...'}
      </p>
    </>
  )
}
