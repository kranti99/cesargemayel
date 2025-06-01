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
    category: "landscapes",
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
    category: "still-life",
    image: "/images/Bouquet Glaieuls 60X50 CMG.jpg",
  },
  {
    id: 7,
    title: "Bouquet Glaieuls Cuivre",
    dimensions: "81X54 CIG",
    year: "1944",
    category: "still-life",
    image: "/images/Bouquet Glaieuls Cuivre 81X54 CIG.jpg",
  },
  {
    id: 8,
    title: "Bouquet Mimosa",
    dimensions: "52X58 Privee",
    year: "1950",
    category: "still-life",
    image: "/images/Bouquet Mimosa 52X58 Privee.jpg",
  },
  {
    id: 9,
    title: "cesar gemayel",
    dimensions: "",
    year: "1938",
    category: "portraits",
    image: "/images/cesar gemayel 1938.jpg",
  },
  {
    id: 10,
    title: "Femme a l’Echarpe",
    dimensions: " 25X19 Privee",
    year: "",
    category: "portraits",
    image: "/images/Femme a L_echarpe 25X19 Privee.jpg",
  },
  {
    id: 11,
    title: "Foret de Naas",
    dimensions: "42X33 Al El K",
    year: "",
    category: "landscapes",
    image: "/images/Foret de Naas 42X33 Al El K.jpg",
  },
  {
    id: 12,
    title: "Endormie",
    dimensions: "",
    year: "",
    category: "portraits",
    image: "/images/full_675850014253187071.jpg",
  },
  {
    id: 13,
    title: "Gemayel ",
    dimensions: "32X38",
    year: "",
    category: "portraits",
    image: "/images/Gemayel 32X38.jpg",
  },
  {
    id: 14,
    title: "Gemayel",
    dimensions: " 182X105 Faloughi",
    year: "",
    category: "landscapes",
    image: "/images/Gemayel 182X105 Faloughi.jpg",
  },
  {
    id: 15,
    title: "Jeune Fille au Gramophone ",
    dimensions: "100X76 NL",
    year: "",
    category: "portraits",
    image: "/images/Jeune Fille au Gramophone 100X76 NL.jpg",
  },
   {
    id: 16,
    title: "Landscape (Watercolour) ",
    dimensions: "25X29",
    year: "",
    category: "landscapes",
    image: "/images/Landscape (Watercolour) 25X29.jpg",
  },
  {
    id: 17,
    title: "Lying Nude with Maid ",
    dimensions: "23X38",
    year: "",
    category: "nude",
    image: "/images/Lying Nude with Maid 23X38.jpg",
  },
  {
    id: 18,
    title: "Mar Elias Chouaya",
    dimensions: "51X52",
    year: "",
    category: "landscapes",
    image: "/images/Mar Elias Chouaya 51X52.jpg",
  },
  {
    id: 19,
    title: "Mariam 53x43cm",
    dimensions: "53x43cm",
    year: "",
    category: "portraits",
    image: "/images/Mariam 53x43cm.jpg",
  },
  {
    id: 20,
    title: "Mountain Landscape",
    dimensions: "34X25",
    year: "",
    category: "landscapes",
    image: "/images/Mountain Landscape 34X25.jpg",
  },
   {
    id: 21,
    title: "Nude",
    dimensions: "54X65",
    year: "",
    category: "nudes",
    image: "/images/Nude 54X65.jpg",
  },
   {
    id: 22,
    title: "Pastel 31X24",
    dimensions: "31X24",
    year: "",
    category: "portraits",
    image: "/images/Pastel 31X24.jpg",
  },
   {
    id: 23,
    title: "Portrait de Bou Deeb 37X30 NL",
    dimensions: "37X30 NL",
    year: "",
    category: "portraits",
    image: "/images/Portrait de Bou Deeb 37X30 NL.jpg",
  },
   {
    id: 24,
    title: "Reading Nude 33X43",
    dimensions: "33X43",
    year: "",
    category: "nudes",
    image: "/images/Reading Nude 33X43.jpg",
  },
   {
    id: 25,
    title: "Road to the Artist_s House 53X55",
    dimensions: "53X55",
    year: "",
    category: "landscapes",
    image: "/images/Road to the Artist_s House 53X55.jpg",
  },
   {
    id: 26,
    title: "Sannine",
    dimensions: "43X52",
    year: "",
    category: "landscapes",
    image: "/images/Sannine 43X52.jpg",
  },
   {
    id: 27,
    title: "Seated Nude - Back View",
    dimensions: "79X64",
    year: "",
    category: "nudes",
    image: "/images/Seated Nude - Back View 79X64.jpg",
  },
   {
    id: 28,
    title: "The Red Cushion 50X105",
    dimensions: "50X105",
    year: "",
    category: "nudes",
    image: "/images/The Red Cushion 50X105.jpg",
  },
   {
    id: 29,
    title: "The Two Bathers",
    dimensions: "68X45",
    year: "",
    category: "nudes",
    image: "/images/The Two Bathers 68X45.jpg",
  }
  
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
