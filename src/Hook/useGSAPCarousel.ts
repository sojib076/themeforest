/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

export const useGSAPCarousel = (itemCount: number, externalIndex?: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { x: 0 })
    }
  }, [])

  useEffect(() => {
    if (externalIndex !== undefined) {
      goToSlide(externalIndex)
    }
  }, [externalIndex])

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      const totalSlides = isMobile ? itemCount : Math.ceil(itemCount / 4)
      const newIndex = (index + totalSlides) % totalSlides
      setCurrentIndex(newIndex)

      gsap.to(carouselRef.current, {
        x: `-${newIndex * (isMobile ? 100 : 25)}%`,
        duration: 0.5,
        ease: "power2.inOut",
      })

      if (isMobile) {
        itemRefs.current.forEach((item, i) => {
          if (item) {
            const distance = Math.abs(i - newIndex)
            gsap.to(item, {
              opacity: distance === 0 ? 1 : 0.5,
              scale: distance === 0 ? 1 : 0.9,
              duration: 0.5,
              ease: "power2.inOut",
            })
          }
        })
      }
    }
  }

  return {
    currentIndex,
    carouselRef,
    itemRefs,
    goToSlide,
    totalSlides: isMobile ? itemCount : Math.ceil(itemCount / 4),
    isMobile,
  }
}

