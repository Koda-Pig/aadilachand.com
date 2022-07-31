import Link from 'next/link'
import style from '../styles/footer.module.scss'
import { BsArrowUp } from 'react-icons/bs'

export default function Footer(elem) {
  const scrollToTop = () => {
    elem.element.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={style.footer}>
      <div className={style.footerInner}>
        <div
          className={style.backToTop}
          onClick={scrollToTop}
          title="back to top"
        >
          <BsArrowUp />
          <span>back to top</span>
        </div>
        <div className={style.logo}>
          <Link href="/#home" passHref>
            <a className={style.logoLink} title="home">
              ac
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
