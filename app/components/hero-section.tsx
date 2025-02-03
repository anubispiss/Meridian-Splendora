"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTypingAnimation } from "./hooks/useTypingAnimation"

const words = ["FUTURE", "PRESENT", "PAST"]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { currentText, showCursor } = useTypingAnimation(words)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        if (window.scrollY === 0) {
          videoRef.current.currentTime = 0
          videoRef.current.play()
        } else if (!videoRef.current.paused) {
          videoRef.current.pause()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div id="hero" ref={ref} style={{ opacity, scale }} className="h-screen relative overflow-hidden pt-16">
      <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpsmeet.google.comsjx-onjz-dnk-4dRefE8fOqgVgKOnRmm1PEDVQfPF3t.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30">
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The{" "}
              <span className="inline-block min-w-[220px] text-left">
                <span className="bg-gradient-to-r from-[#ffd89b] to-[#f8b500] text-transparent bg-clip-text">
                  {currentText}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white"
                >
                  |
                </motion.span>
              </span>{" "}
              on Your Wrist
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Experience the next generation of smartwatches with Meridian Splendora
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

