import style from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={style.hero} id="home">
      <div className={style.heroText}>
        <h1 className={style.heading}>aadila chand</h1>
        <h2 className={style.subheading}>conceptual design</h2>
      </div>
    </div>
  )
}
