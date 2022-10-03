import Link from 'next/link'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>
        <ul>
          <li>
            <Link href="/ux-ui" passHref>
              <a title="ux/ui">ux/ui</a>
            </Link>
          </li>
          <li>
            <Link href="/fine-art" passHref>
              <a title="fine art">fine art</a>
            </Link>
          </li>
          <li>
            <Link href="/digital-art" passHref>
              <a title="digital art">digital art</a>
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <Link href="/#home" passHref>
            <a className={styles.logoLink} title="home">
              ac
            </a>
          </Link>
        </div>
        <p></p>
      </div>
    </footer>
  )
}
