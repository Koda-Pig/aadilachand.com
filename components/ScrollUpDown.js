import { useEffect, useState } from 'react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import style from '../styles/scroll.module.scss'

export default function ScrollUpDown(props) {
  const [isUpVisible, setUpVisible] = useState(false)
  const [isDownVisible, setDownVisible] = useState(false)

  const toggleUpVisbility = () => {
    if (props.element.current.scrollTop > 250) setUpVisible(true)
    else setUpVisible(false)
  }

  const toggleDownVisbility = () => {
    const instance = props.element.current
    const onePageFromBottom =
      instance.scrollHeight -
      instance.scrollTop -
      window.innerHeight -
      window.innerHeight / 2
    if (onePageFromBottom >= 0 && props.down === true) setDownVisible(true)
    else setDownVisible(false)
  }

  const ScrollUpDown = () => {
    props.element.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollDown = () => {
    props.element.current.scrollBy(0, window.innerHeight)
  }

  // only display down arrow if props.down is true
  useEffect(() => {
    const instance = props.down
    if (instance) setDownVisible(true)
  }, [props.down])

  useEffect(() => {
    const instance = props.element.current
    instance.addEventListener('scroll', toggleUpVisbility)
    instance.addEventListener('scroll', toggleDownVisbility)
    return () => {
      instance.removeEventListener('scroll', toggleUpVisbility)
      instance.removeEventListener('scroll', toggleDownVisbility)
    }
  })

  return (
    <>
      <div className={style.container}>
        <BsArrowDown
          onClick={scrollDown}
          className={`${style.scrollDown} ${
            isDownVisible ? '' : style.invisible
          }`}
        />
        <div
          title="back to top"
          onClick={ScrollUpDown}
          className={`${style.backToTop} ${isUpVisible ? style.visible : ''}`}
        >
          <BsArrowUp />
          <span>
            back
            <br />
            to top
          </span>
        </div>
      </div>
    </>
  )
}
