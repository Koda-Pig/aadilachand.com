import MenuCtx from '../components/MenuCtx'
import { useContext } from 'react'

const useNav = (container, elem, sectionName) => {
  const { currentSection, setCurrentSection } = useContext(MenuCtx)

  const setCurrent = () => {
    if (
      container.current.getBoundingClientRect().top <= 0 &&
      !currentSection.includes(sectionName)
    )
      setCurrentSection((arr) => [...arr, sectionName])
    else setCurrentSection((arr) => arr.filter((item) => item !== sectionName))
  }

  useEffect(() => {
    elem.element.current.addEventListener('scroll', setCurrent)
    return () => {
      elem.element.current.removeEventListener('scroll', setCurrent)
    }
  })

  return [currentSection]
}

export default useNav
