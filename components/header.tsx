"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/GlassSurface"
import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Über uns", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Prozess", href: "#process" },
  { name: "Preise", href: "#pricing" },
  { name: "Kontakt", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <GlassSurface
          width={900}
          height={56}
          borderRadius={28}
          backgroundOpacity={0.8}
          saturation={1.5}
          displace={5}
          distortionScale={-150}
          redOffset={2}
          greenOffset={8}
          blueOffset={15}
          brightness={100}
          opacity={0.95}
          className="border border-gray-300 shadow-lg"
        >
          <div className="px-6 w-full">
            <div className="flex h-14 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-lg font-bold text-gray-900">
                  Lead<span className="text-purple-600">boom</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:space-x-4 relative">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full text-gray-900 hover:text-purple-600 hover:bg-purple-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex">
                <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  <Link href="/login">
                    Log in
                  </Link>
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Menü öffnen</span>
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </GlassSurface>
      </header>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Leadboom</span>
              <span className="text-2xl font-bold text-purple-600">
                Lead<span className="text-black">boom</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menü schließen</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button asChild className="w-full">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    Log in
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}