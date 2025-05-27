import Link from "next/link"
import { ArrowLeft, ArrowRight, Mail } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Contact() {
  const user = "friendsofcesar"
  const domain = "example.com"
  const email = `${user}@${domain}`

  const mailtoLink = `mailto:${email}`

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

          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-light tracking-tight text-amber-500 md:text-5xl">Contact Us</h1>

            <p className="mt-4 text-lg text-stone-300">
              The friends of César Gemayel welcome your inquiries. If you own any of his works or have information to
              share, please get in touch.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Left Panel */}
              <div className="rounded-lg border border-amber-800/20 bg-stone-900 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <h2 className="font-serif text-xl font-medium text-stone-200">Get in Touch</h2>
                </div>

                <p className="mt-3 text-stone-400">Email us directly at:</p>
                <span className="mt-1 block text-amber-400 select-text">{email}</span>

                <div className="mt-6">
                  <h3 className="font-medium text-stone-200">About the Collection</h3>
                  <p className="mt-2 text-stone-400">
                    We are constantly working to expand our digital archive of César Gemayel's works. If you own any of
                    his paintings or have historical information about the artist, we would be grateful for your
                    contribution.
                  </p>
                </div>
              </div>

              {/* Right Panel */}
              <div className="rounded-lg border border-amber-800/20 bg-stone-900 p-6">
                <h2 className="font-serif text-xl font-medium text-stone-200">Send a Message</h2>

                <div className="mt-4 space-y-4">
                  <a
                    href={mailtoLink}
                    className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-amber-700"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
