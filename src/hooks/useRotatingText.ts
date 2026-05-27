import { useEffect, useState } from 'react'

type UseRotatingTextOptions = {
  typingDelay?: number
  pauseDelay?: number
  swapDelay?: number
}

export function useRotatingText(
  items: readonly string[],
  {
    typingDelay = 115,
    pauseDelay = 1900,
    swapDelay = 850,
  }: UseRotatingTextOptions = {},
) {
  const [index, setIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  const showNextItem = () => {
    if (items.length === 0) {
      return
    }

    setIndex((currentIndex) => (currentIndex + 1) % items.length)
    setTypedText('')
    setIsVisible(true)
  }

  useEffect(() => {
    const currentItem = items[index]

    if (!currentItem) {
      return
    }

    if (prefersReducedMotion) {
      setTypedText(currentItem)
      setIsVisible(true)
      return
    }

    if (typedText.length < currentItem.length) {
      const typingTimeout = window.setTimeout(() => {
        setTypedText(currentItem.slice(0, typedText.length + 1))
      }, typingDelay)

      return () => window.clearTimeout(typingTimeout)
    }

    const pauseTimeout = window.setTimeout(() => {
      setIsVisible(false)
    }, pauseDelay)

    return () => window.clearTimeout(pauseTimeout)
  }, [index, items, pauseDelay, prefersReducedMotion, typedText, typingDelay])

  useEffect(() => {
    if (prefersReducedMotion || isVisible || items.length === 0) {
      return
    }

    const swapTimeout = window.setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % items.length)
      setTypedText('')
      setIsVisible(true)
    }, swapDelay)

    return () => window.clearTimeout(swapTimeout)
  }, [isVisible, items.length, prefersReducedMotion, swapDelay])

  return {
    typedText,
    isVisible,
    showNextItem,
  }
}
