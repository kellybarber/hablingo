import { useState, useEffect } from 'react'

export default (elementGetter, clickLength=2000) => {
  
  const [ engaged, setEngaged ] = useState(false)

  useEffect(() => {
    let interval
    const element = elementGetter()

    const blur = e => {
      e.preventDefault()
      const isBlurred = !element.contains(e.target)
      if(isBlurred) setEngaged(false)
    }
    const addInterval = e => {
      e.preventDefault()
      interval = window.setTimeout(() => setEngaged(true), clickLength)
    }
    const removeInterval = e => {
      e.preventDefault()
      window.clearTimeout(interval)
    }

    document.addEventListener('click', blur)
    document.addEventListener('touch', blur)
    element.addEventListener('touchstart', addInterval)
    element.addEventListener('mousedown', addInterval)
    element.addEventListener('touchend', removeInterval)
    element.addEventListener('mouseup', removeInterval)
    
    return () => {
      document.removeEventListener('click', blur)
      document.removeEventListener('touch', blur)
      element.removeEventListener('touchstart', addInterval)
      element.removeEventListener('mousedown', addInterval)
      element.removeEventListener('touchend', removeInterval)
      element.removeEventListener('mouseup', removeInterval)
    }
  }, [])

  return engaged
}