import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-800/20 bg-stone-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-handwriting text-2xl text-amber-500">César Gemayel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-sm font-medium text-stone-200 transition-colors hover:text-amber-400">
            Home
          </Link>
          <Link href="/biography" className="text-sm font-medium text-stone-200 transition-colors hover:text-amber-400">
            Biography
          </Link>
          <Link href="/paintings" className="text-sm font-medium text-stone-200 transition-colors hover:text-amber-400">
            Paintings
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-200 transition-colors hover:text-amber-400">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-stone-200 hover:bg-stone-800 hover:text-amber-400">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] bg-stone-900">
            <DropdownMenuItem asChild>
              <Link href="/" className="cursor-pointer text-stone-200 hover:text-amber-400">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/biography" className="cursor-pointer text-stone-200 hover:text-amber-400">
                Biography
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/paintings" className="cursor-pointer text-stone-200 hover:text-amber-400">
                Paintings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact" className="cursor-pointer text-stone-200 hover:text-amber-400">
                Contact
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
