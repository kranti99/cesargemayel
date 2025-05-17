import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-amber-800/20 bg-stone-950 py-8">
      <div className="container px-4 sm:px-8">
         

        <div className="mt-8 border-t border-amber-800/20 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} The Friends of César Gemayel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
