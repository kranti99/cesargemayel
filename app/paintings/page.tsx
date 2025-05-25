"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FloatingElements from "@/components/floating-elements"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const paintings = [
  {
    id: 1,
    title: "3 Baigneuses",
    dimensions: "31X40 CIG",
    year: "",
    category: "nudes",
    image: "/images/3 Baigneuses 31X40 CIG.jpg",
  },
  {
    id: 2,
    title: "Artist_s House",
    dimensions: "33X35",
    year: "",
    category: "nudes",
    image: "/images/Artist_s House 33X35.jpg",
  },
  {
    id: 3,
    title: "Portrait of a Woman",
    dimensions: "45cm x 35cm",
    year: "1940",
    category: "portraits",
    image: "/images/painting3.jpg",
  },
  {
    id: 4,
    title: "Bouquet d_Oeillets",
    dimensions: "39X35 Al El K",
    year: "",
    category: "still-life",
    image: "/images/Bouquet d_Oeillets 39X35 Al El K.jpg",
  },
  {
    id: 5,
    title: "Bouquet d_Oeillets",
    dimensions: "45X38 CVG",
    year: "",
    category: "still-life",
    image: "/images/Bouquet d_Oeillets 45X38 CVG.jpg",
  },
  {
    id: 6,
    title: "Bouquet Glaieuls",
    dimensions: "60X50 CMG",
    year: "",
    category: "nudes",
    image: "/images/Bouquet Glaieuls 60X50 CMG.jpg",
  },
  {
    id: 7,
    title: "Bouquet Glaieuls 60X50 CMG",
    dimensions: "60X50 CMG",
    year: "1944",
    category: "landscapes",
    image: "/images/painting2.jpg",
  },
  {
    id: 8,
    title: "Self Portrait",
    dimensions: "40cm x 35cm",
    year: "1950",
    category: "portraits",
    image: "/images/painting2.jpg",
  },
]

const categories = [
  { id: "all", name: "All Works" },
  { id: "portraits", name: "Portraits" },
  { id: "nudes", name: "Nudes" },
  { id: "landscapes", name: "Landscapes" },
  { id: "still-life", name: "Still Life" },
]

export default function Paintings() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPainting, setSelectedPainting] = useState(null)

  const filteredPaintings =
    selectedCategory === "all" ? paintings : paintings.filter((p) => p.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col bg-stone-950">
      <FloatingElements />
      <SiteHeader />

      <main className="relative flex-1 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-24">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-stone-200 transition-all hover:text-amber-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <h1 className="font-serif text-4xl font-light tracking-tight text-amber-500 md:text-5xl">Paintings</h1>

          <div className="mt-8 flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-stone-800 text-stone-200 hover:bg-stone-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* 🧱 Masonry layout using CSS columns */}
          <motion.div layout className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filteredPaintings.map((painting) => (
                <motion.div
                  key={painting.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid mb-4 cursor-pointer"
                  onClick={() => setSelectedPainting(painting)}
                >
                  <div className="overflow-hidden rounded-lg border-4 border-amber-900/20 shadow-md transition-all duration-300 group-hover:shadow-xl">
                    <Image
                      src={painting.image || "/placeholder.svg"}
                      alt={painting.title}
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-lg font-medium text-amber-400">{painting.title}</h3>
                    <p className="text-sm text-stone-400">
                      {painting.year} {painting.dimensions}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <SiteFooter />

      {/* 🔍 Pop-up Lightbox */}
      <AnimatePresence>
        {selectedPainting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedPainting(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-xl bg-stone-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPainting(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-stone-800/80 p-2 text-white backdrop-blur-sm transition-all hover:bg-stone-700"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative w-full max-w-full">
                <Image
                  src={selectedPainting.image || "/placeholder.svg"}
                  alt={selectedPainting.title}
                  width={1200}
                  height={1600}
                  className="mx-auto max-h-[80vh] w-auto object-contain"
                />
              </div>

              <div className="bg-stone-900 p-6 text-center">
                <h2 className="font-serif text-2xl font-medium text-amber-500">{selectedPainting.title}</h2>
                <p className="text-stone-400">
                  {selectedPainting.year}, {selectedPainting.dimensions}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
