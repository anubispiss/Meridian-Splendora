import { useState, useEffect } from "react"

const TYPING_SPEED = 80 // Reduced from 150
const BACKSPACE_SPEED = 30 // Reduced from 50
const WORD_PAUSE = 1000 // Reduced from 2000

export function useTypingAnimation(words: string[]) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const typeText = () => {
      const currentWord = words[currentWordIndex]

      if (!isDeleting && currentText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), WORD_PAUSE)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      } else {
        setCurrentText((prev) => (isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)))

        timeout = setTimeout(typeText, isDeleting ? BACKSPACE_SPEED : TYPING_SPEED)
      }
    }

    timeout = setTimeout(typeText, TYPING_SPEED)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return { currentText, showCursor }
}

