import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-amber-800/20 bg-stone-950 py-8">
      <div className="container px-4 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-medium text-amber-500">César Gemayel</h3>
            <p className="mt-2 text-sm text-stone-400">
              Lebanese master painter (1898-1958) whose work bridged traditional and modern artistic expressions.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-stone-200">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="text-sm text-stone-400 transition-colors hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/biography" className="text-sm text-stone-400 transition-colors hover:text-amber-400">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/paintings" className="text-sm text-stone-400 transition-colors hover:text-amber-400">
                  Paintings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-stone-400 transition-colors hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-stone-200">Contact</h3>
            <p className="mt-2 text-sm text-stone-400">
              The friends of César Gemayel are proud to bring you this website dedicated to the Lebanese master painter.
            </p>
            <p className="mt-2 text-sm text-stone-400">
              Email:{" "}
              <a href="mailto:friendsofcesar@example.com" className="text-amber-400 hover:underline">
                friendsofcesar@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-amber-800/20 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} The Friends of César Gemayel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
