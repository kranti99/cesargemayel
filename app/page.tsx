import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import SiteHeader from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-950">
      <FloatingElements />
      <SiteHeader />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden">
        <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-8">
          <h1 className="mb-4 text-center font-serif text-3xl font-light tracking-tight text-amber-500 md:text-4xl lg:text-5xl">
            CÉSAR <span className="font-medium">GEMAYEL</span>
          </h1>

          <div className="mb-4 flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
            <div className="aspect-[3/4] w-[200px] overflow-hidden rounded-lg border-4 border-amber-700/30 transition-all duration-300 hover:border-amber-700/50">
              <Image
                src="/images/cesargemayel.jpg"
                alt="César Gemayel portrait painting"
                width={200}
                height={267}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                priority
              />
            </div>

            <div className="aspect-[3/4] w-[200px] overflow-hidden rounded-lg border-4 border-amber-700/30 transition-all duration-300 hover:border-amber-700/50">
              <Image
                src="/images/cesargemayel_profile.jpg"
                alt="César Gemayel photograph"
                width={200}
                height={267}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center">
            <div className="h-px w-8 bg-amber-700/50"></div>
            <div className="mx-3 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 7c0-5.333-8-5.333-8 0" />
                <path d="M6 17c0 5.333 8 5.333 8 0" />
              </svg>
            </div>
            <div className="h-px w-8 bg-amber-700/50"></div>
          </div>

          <p className="mb-4 max-w-3xl text-center text-base text-stone-300 md:text-lg">
            The friends of César Gemayel are proud to bring you this web site dedicated to the Lebanese master painter.
            We invite owners, collectors and institutions who own his work to email us pictures to expand this web site.
          </p>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/biography"
              className="group flex items-center justify-center gap-2 rounded-full border border-amber-700/50 bg-transparent px-4 py-2 text-center text-xs font-medium text-white transition-all hover:border-amber-600 hover:bg-stone-800 sm:text-sm"
            >
              Explore Biography
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/paintings"
              className="group flex items-center justify-center gap-2 rounded-full border border-amber-700/50 bg-transparent px-4 py-2 text-center text-xs font-medium text-stone-200 transition-all hover:border-amber-600 hover:bg-stone-800 sm:text-sm"
            >
              View Paintings
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full border border-amber-700/50 bg-transparent px-4 py-2 text-center text-xs font-medium text-stone-200 transition-all hover:border-amber-600 hover:bg-stone-800 sm:text-sm"
            >
              Contact Us
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
