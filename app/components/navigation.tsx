"use client"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Watch } from "lucide-react"
import Link from "next/link"
import { useCallback, useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-sm border-b" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-10">
        <Image src="/logo3.png"alt="logo" height={60}width={180}></Image>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className={`hover:text-gray-300 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={`hover:text-gray-300 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
          >
            FEATURES
          </button>
          <button
            onClick={() => scrollToSection("donations")}
            className={`hover:text-gray-300 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
          >
            DONATIONS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-gray-300 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
          >
            ABOUT US
          </button>
        </div>
      </div>
    </nav>
  )
}

