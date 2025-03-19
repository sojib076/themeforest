"use client"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"

// Project data
const projects = [
  {
    id: 1,
    year: 2023,
    title: "TROPIC ELIXIRS",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["DESIGN", "BRANDING"],
    filters: ["all", "branding"],
  },
  {
    id: 2,
    year: 2022,
    title: "TECH VISIONARY",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["WEB DESIGN", "UI DESIGN"],
    filters: ["all", "website"],
  },
  {
    id: 3,
    year: 2021,
    title: "KIDS BOOKSTORE",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["PRINTING", "DESIGN"],
    filters: ["all", "print"],
  },
  {
    id: 4,
    year: 2020,
    title: "FASHION FUSION",
    image: "/placeholder.svg?height=300&width=400",
    categories: ["DIGITAL MARKETING", "CAMPAIGN"],
    filters: ["all", "digital"],
  },
]


const filterTabs = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "branding", label: "BRANDING" },
  { id: "website", label: "WEBSITE DESIGN" },
  { id: "print", label: "PRINT DESIGN" },
  { id: "digital", label: "DIGITAL MARKETING" },
]

export default function AntoraPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const projectsRef = useRef<HTMLDivElement>(null)


  const filteredProjects = projects.filter((project) => project.filters.includes(activeFilter))

 
  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter) return

 
    if (projectsRef.current?.children) {
      gsap.to(projectsRef.current.children, {
        opacity: 0,
        y: 20,
      
        duration: 0.3,
        onComplete: () => {
          setActiveFilter(filterId)

          
          setTimeout(() => {
            if (projectsRef.current?.children) {
              gsap.fromTo(
                projectsRef.current.children,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.05,
                  duration: 0.4,
                  ease: "power2.out",
                },
              )
            }
          }, 50)
        },
      })
    }
  }


  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white lg:p-6 p-3 md:p-12">
      <div className=" ">
       
      <div className="lg:flex  items-center  justify-between mb-10 ">
      <div className="">
          <p className="text-gray-400 text-sm mb-2">/ portfolio</p>
          <h1 className="lg:text-4xl text-xl md:text-5xl font-bold">FEATURED WORKS</h1>
        </div>


       
        <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 mt-5 lg:mt-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-6  py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === tab.id ? "bg-white text-black" : "bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#2a2a2a]  lg:w-[660px] w-[100%] lg:h-[640px]  lg:rounded-[50px] rounded-3xl overflow-hidden">
              <div className="lg:p-6 p-3">
                <p className="text-gray-400 text-sm">/ {project.year}</p>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-4">{project.title}</h2>

                <div className=" bg-[#e0e0e0] rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400} 
                    height={300}
                    className=" lg:w-[596px] w-full h-[484px] rounded-[50px] object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-4 justify-end">
                  {project.categories.map((category, index) => (
                    <span key={index} className="bg-white text-black px-4 py-1 rounded-full text-xs">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center mt-12">
          <button className="text-white hover:underline uppercase text-sm font-medium">SEE ALL PROJECTS</button>
        </div>
      </div>
    </main>
  )
}

