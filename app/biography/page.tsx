"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FloatingElements from "@/components/floating-elements"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Additional biography content
const additionalContent = [
  {
    id: 1,
    title: "Early Life and Education",
    content: `César Gemayel was born in 1898 in Ain El Touffaha, a small village in the Bikfaya region of Mount Lebanon. 
    He grew up in a family that was deeply involved in the political and social fabric of Lebanon. 
    His early education was focused on sciences, particularly pharmacology, which he studied with dedication.
    
    However, his artistic talents were evident from a young age, and he was fortunate to receive guidance from Khalil Saleeby, 
    one of Lebanon's pioneering modern artists. Under Saleeby's mentorship, Gemayel developed a strong foundation in painting techniques.`,
    image: "/images/biography-early.jpg",
  },
  {
    id: 2,
    title: "Paris Years (1927-1932)",
    content: `In 1927, following in the footsteps of his mentor, Gemayel traveled to Paris to study at the prestigious Académie Julian. 
    This period was transformative for his artistic development. Paris in the 1920s was the epicenter of modern art, 
    and Gemayel was exposed to various artistic movements including Impressionism, Post-Impressionism, Fauvism, and Cubism.
    
    At the Académie, he studied alongside artists from around the world and was taught by some of the leading figures in French art. 
    He was particularly drawn to the color theories and brushwork of the Impressionists and Fauvists, 
    which would later influence his own distinctive style.`,
    image: "/images/biography-paris.jpg",
  },
  {
    id: 3,
    title: "Return to Lebanon and Artistic Career",
    content: `After winning first prize at the Paris Exhibition Coloniale Internationale in 1931, Gemayel returned to Lebanon with renewed confidence and artistic vision. 
    He abandoned his pharmaceutical studies to dedicate himself fully to painting.
    
    Back in Lebanon, Gemayel established himself as a leading artist. He opened a studio where he both created his works and taught students, 
    thus contributing to the development of a new generation of Lebanese artists. His subjects ranged from portraits and nudes to landscapes and still lifes, 
    all executed with his characteristic attention to light, color, and form.
    
    Throughout the 1930s and 1940s, Gemayel's work was exhibited both in Lebanon and internationally, 
    cementing his reputation as one of the most important Lebanese artists of his generation.`,
    image: "/images/biography-lebanon.jpg",
  },
  {
    id: 4,
    title: "Legacy and Influence",
    content: `César Gemayel's contribution to Lebanese art cannot be overstated. Along with contemporaries like Khalil Saleeby, 
    Omar Onsi, and Saliba Douaihy, he helped establish a modern Lebanese artistic tradition that drew on both Western techniques and local themes.
    
    His work is characterized by a masterful use of color, light, and composition, showing influences of Impressionism and Fauvism 
    while maintaining a distinctive personal style. His portraits and nudes are particularly celebrated for their sensitivity and technical excellence.
    
    Gemayel passed away in 1958, but his legacy lives on through his artwork, which is held in private collections and museums, 
    and through the generations of artists he influenced through his teaching and example.`,
    image: "/images/biography-legacy.jpg",
  },
]

export default function Biography() {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleSection = (id: number) => {
    if (expandedSections.includes(id)) {
      setExpandedSections(expandedSections.filter((sectionId) => sectionId !== id))
    } else {
      setExpandedSections([...expandedSections, id])
    }
  }

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

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            <div className="md:col-span-2">
              <h1 className="font-serif text-4xl font-light tracking-tight text-amber-500 md:text-5xl">Biography</h1>

              <div className="prose prose-invert prose-stone mt-8 max-w-none">
                <p className="text-lg font-medium text-stone-200">
                  Born in a small village near the mountainous Bikfaya region of northern Lebanon, Gemayel is part of a
                  well-established family that played a pivotal political role in modern Lebanon.
                </p>

                <p>
                  As a young student, Gemayel started out studying pharmacology, to which he was genuinely devoted. But
                  he was a gifted painter who was tutored by another Lebanese master painter — Khalil Saleeby — and
                  eventually that talent took full root in him.
                </p>

                <p>
                  As Saleeby before him, Gemayel embarked in 1927 on a "pilgrimage" to Paris to learn firsthand about
                  the various techniques and movements at the Académie Julian. The Académie was set up in 1868 as a
                  private studio for art students. Favoured by international students, especially Americans, the
                  Académie's roster of famous painters included Matisse, Vuillard, Derain, Bonnard, as well as another
                  illustrious Lebanese artist — Gibran Kahlil Gibran. At the Académie, he was exposed to many different
                  styles. He was most attracted to impressionism and Fauvism.
                </p>

                <p>
                  His hard work and natural talent was recognized in 1931, when he won first prize at the Paris
                  Exhibition Coloniale Internationale. The prestigious award set Gemayel firmly on the path of art, and
                  he returned to his native Lebanon, where he abandoned any thoughts of being a pharmacist and turned
                  his full attention to developing his painting.
                </p>
              </div>

              {/* Expandable sections */}
              <div className="mt-12 space-y-8">
                {additionalContent.map((section) => (
                  <div key={section.id} className="rounded-lg border border-amber-800/20 bg-stone-900">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex w-full items-center justify-between p-4 text-left font-serif text-xl font-medium text-amber-500"
                    >
                      {section.title}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expandedSections.includes(section.id) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedSections.includes(section.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 p-4 md:grid-cols-2">
                            <div className="prose prose-invert prose-stone max-w-none">
                              {section.content.split("\n\n").map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                              ))}
                            </div>
                            <div className="overflow-hidden rounded-lg border-4 border-amber-900/20">
                              <Image
                                src={section.image || "/placeholder.svg?height=400&width=600"}
                                alt={section.title}
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="my-8 flex justify-center">
                <Link
                  href="/paintings"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-amber-700"
                >
                  Explore Paintings
                  <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden rounded-2xl border-8 border-amber-900/20 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="/images/bio1.jpg"
                  alt="César Gemayel portrait"
                  width={400}
                  height={600}
                  className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border-8 border-amber-900/20 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="/images/bio2.jpg"
                  alt="Sample of César Gemayel's work"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="rounded-lg border border-amber-800/20 bg-stone-900 p-4">
                <h3 className="font-serif text-lg font-medium text-amber-500">Notable Achievements</h3>
                <ul className="mt-3 space-y-2 text-stone-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>First prize at the Paris Exhibition Coloniale Internationale (1931)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>Established one of Lebanon's first modern art studios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>Mentored a generation of Lebanese artists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-amber-500">•</span>
                    <span>Works featured in international exhibitions across Europe and the Middle East</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
