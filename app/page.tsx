import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import CustomCursor from "@/components/custom-cursor"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-950">
      <CustomCursor />
      <FloatingElements />
      <SiteHeader />

      <main className="relative flex-1 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="font-serif text-5xl font-light tracking-tight text-amber-500 md:text-6xl lg:text-7xl">
                César <span className="block font-medium italic">Gemayel</span>
              </h1>
              <p className="max-w-md text-lg text-stone-300">
                Discover the legacy of the Lebanese master painter whose work bridged traditional and modern artistic
                expressions.
              </p>
              <div className="flex flex-wrap gap-4">
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
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-8 border-amber-900/20 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="/images/cesargemayel.jpg"
                  alt="César Gemayel portrait painting"
                  fill
                  className="object-cover object-center transition-all duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-40 rounded-full border-8 border-amber-900/20 shadow-lg md:-bottom-8 md:-left-8 md:w-48 lg:w-56">
                <Image
                  src="/images/cesargemayel_profile.jpg"
                  alt="César Gemayel photograph"
                  fill
                  className="rounded-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 z-10 rotate-6 font-handwriting text-2xl text-amber-500 md:text-3xl">
                Gemayel
              </div>
            </div>
          </div>

          <div className="mt-24 md:mt-32 lg:mt-40">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-light text-amber-500 md:text-4xl">
                The friends of César Gemayel
              </h2>
              <p className="mt-4 text-stone-300">
                We are proud to bring you this website dedicated to the Lebanese master painter. We invite owners,
                collectors and institutions who own his work to contact us.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-all hover:text-amber-300"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
