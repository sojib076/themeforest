"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Plus, Minus } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const answerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }
  }, [isOpen])

  return (
    <div className="border bg-[#fffaf0] border-gray-200 rounded-lg  ">
      <button className="flex items-center w-full text-left p-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Minus className="w-6 h-6 text-orange-600 flex-shrink-0" />
        ) : (
          <Plus className="w-6 h-6  text-orange-600 flex-shrink-0" />
        )}
        <h3 className="text-lg font-semibold ml-4">{question}</h3>
      </button>
      
      <div ref={answerRef} className="overflow-hidden bg-white " style={{ height: 0, opacity: 0 }}>
        <div className="px-4 pb-4">
          <p className="text-gray-600 mt-2">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQItem

