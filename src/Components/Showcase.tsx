import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function ShowcasePage() {
  // Sample showcase data - replace with your actual designs
  const showcaseItems = [
    {
      id: 1,
      title: "Artora",
      description: "Main landing page with hero section and features",
      image: "/placeholder.svg?height=600&width=800",
      path: "/artora",
    },
    {
      id: 2,
      title: "Features",
      description: "Detailed feature showcase with interactive elements",
      image: "/placeholder.svg?height=600&width=800",
      path: "/features",
    },
    {
      id: 3,
      title: "Pricing",
      description: "Pricing plans with comparison table",
      image: "/placeholder.svg?height=600&width=800",
      path: "/pricing",
    },
    {
      id: 4,
      title: "About",
      description: "Company story and team members",
      image: "/placeholder.svg?height=600&width=800",
      path: "/about",
    },
    {
      id: 5,
      title: "Contact",
      description: "Contact form and information",
      image: "/placeholder.svg?height=600&width=800",
      path: "/contact",
    },
    {
      id: 6,
      title: "Blog",
      description: "Blog posts and articles",
      image: "/placeholder.svg?height=600&width=800",
      path: "/blog",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 ">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md dark:bg-slate-950/80 dark:border-slate-800">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Artora</span>
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-1 text-xs text-white">
              Showcase
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-500">
              Home
            </Link>
            <Link href="/showcase" className="text-sm font-medium text-blue-600 dark:text-blue-500">
              Showcase
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-500">
              Documentation
            </Link>
          </nav>
          <Link
            href="https://github.com"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            GitHub
          </Link>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Landing Page Showcase</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Browse our collection of beautifully designed landing pages converted from Figma to Next.js
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={item.path}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    View Design
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <span className="text-xs text-muted-foreground">Figma → Next.js</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Request Custom Design
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </main>

      <footer className="border-t bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Artora. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

