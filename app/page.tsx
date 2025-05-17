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

      <main className="relative flex flex-1 items-center justify-center overflow-hidden py-4">
        <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4">
          <h1 className="mb-8 text-center font-serif text-5xl font-light tracking-tight text-amber-500 md:text-6xl lg:text-7xl">
            CÉSAR <span className="font-medium">GEMAYEL</span>
          </h1>

          <div className="mb-8 flex w-full flex-col items-center gap-6 md:flex-row md:justify-center">
            <div className="overflow-hidden rounded-lg border-4 border-amber-700/30 transition-all duration-300 hover:border-amber-700/50 md:max-w-[280px] lg:max-w-[320px]">
              <Image
                src="/images/cesargemayel.jpg"
                alt="César Gemayel portrait painting"
                width={320}
                height={400}
                className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
                priority
              />
            </div>

            <div className="overflow-hidden rounded-lg border-4 border-amber-700/30 transition-all duration-300 hover:border-amber-700/50 md:max-w-[280px] lg:max-w-[320px]">
              <Image
                src="/images/cesargemayel_profile.jpg"
                alt="César Gemayel photograph"
                width={320}
                height={400}
                className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center">
            <div className="h-px w-12 bg-amber-700/50"></div>
            <div className="mx-4 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 7c0-5.333-8-5.333-8 0" />
                <path d="M6 17c0 5.333 8 5.333 8 0" />
              </svg>
            </div>
            <div className="h-px w-12 bg-amber-700/50"></div>
          </div>

          <p className="mb-8 max-w-2xl text-center text-lg text-stone-300">
            The friends of César Gemayel are proud to bring you this website dedicated to the Lebanese master painter.
            We invite owners, collectors and institutions who own his work to contact us.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/biography"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-amber-700"
            >
              Explore Biography
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/paintings"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-700/50 bg-transparent px-6 py-3 text-sm font-medium text-stone-200 transition-all hover:border-amber-600 hover:bg-stone-800"
            >
              View Paintings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-700/50 bg-transparent px-6 py-3 text-sm font-medium text-stone-200 transition-all hover:border-amber-600 hover:bg-stone-800"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
