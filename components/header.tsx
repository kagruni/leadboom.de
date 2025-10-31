"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sparkles, Zap, LogIn, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "Prozess", href: "#process" },
  { name: "Preise", href: "#pricing" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navigation.map(item => item.href)
      for (const section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <div
          className={cn(
            "relative rounded-full border-2 transition-all duration-500 bg-white/90 backdrop-blur-xl",
            scrolled
              ? "border-purple-400 shadow-2xl shadow-purple-200/60"
              : "border-purple-300 shadow-xl shadow-purple-200/40"
          )}
        >
          {/* Purple Glow Border Animation */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-700/50 via-purple-600/50 to-purple-800/50 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

          {/* Animated Top Border */}
          <div className="absolute -top-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-600/80 to-transparent rounded-full animate-pulse-slow"></div>

          <div className="relative px-4 py-2.5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 ml-6">
                <Link href="/" className="block hover:opacity-90 transition-opacity duration-300">
                  <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 tracking-tight">
                    Leadboom
                  </h1>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:space-x-1 lg:ml-8 relative">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-full",
                        isActive
                          ? "text-purple-700 bg-white shadow-lg shadow-purple-400/40"
                          : "text-gray-700 hover:text-purple-700"
                      )}
                    >
                      {/* Gradient Border for Active State */}
                      {isActive && (
                        <span className="absolute inset-[-2px] -z-10 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700"></span>
                      )}

                      {/* Hover Background */}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full bg-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      )}

                      {/* Text */}
                      <span className="relative flex items-center gap-1.5">
                        {item.name}
                      </span>

                      {/* Active Indicator Line */}
                      {!isActive && (
                        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                      )}
                    </Link>
                  )
                })}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex lg:ml-6 gap-3">
                <LiquidButton asChild size="sm" className="bg-white border border-purple-800 text-purple-900 font-medium hover:bg-purple-50 hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                  <Link href="https://app.leadboom.de" className="flex items-center gap-1.5">
                    <LogIn className="h-3.5 w-3.5" />
                    Login
                  </Link>
                </LiquidButton>
                <LiquidButton asChild size="sm" className="bg-purple-700 border border-purple-900 text-white font-medium hover:bg-purple-800 hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg">
                  <Link href="https://app.leadboom.de/sign-up" className="flex items-center gap-1.5">
                    Get Leadboom
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </LiquidButton>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className={cn(
                    "relative p-2 rounded-full transition-all duration-300",
                    "hover:bg-purple-100 text-gray-900 hover:text-purple-700",
                    mobileMenuOpen && "bg-purple-100 text-purple-700"
                  )}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Menü</span>
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-5 w-5 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "fixed inset-0 z-50 opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Purple Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-br from-white/85 to-purple-50/70 backdrop-blur-md transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm transition-transform duration-500 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full bg-white/95 backdrop-blur-xl border-l-2 border-purple-300 shadow-2xl shadow-purple-200/60 overflow-y-auto">
            <div className="px-6 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-900 hover:text-purple-700 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lead<span className="text-purple-600">boom</span>
                </Link>
                <button
                  type="button"
                  className="p-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Menü schließen</span>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300",
                        isActive
                          ? "bg-white text-purple-700 shadow-lg shadow-purple-400/40"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {/* Gradient Border for Active State */}
                      {isActive && (
                        <span className="absolute inset-[-2px] -z-10 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700"></span>
                      )}

                      {/* Icon Dot */}
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300 relative z-10",
                          isActive
                            ? "bg-purple-600 scale-110"
                            : "bg-purple-500 group-hover:bg-purple-400 group-hover:scale-125"
                        )}
                      ></span>

                      <span className="relative z-10">{item.name}</span>

                      {/* Arrow */}
                      <span className={cn(
                        "ml-auto transition-transform duration-300 relative z-10",
                        isActive ? "text-purple-700" : "text-gray-400 group-hover:translate-x-1 group-hover:text-purple-700"
                      )}>
                        →
                      </span>
                    </Link>
                  )
                })}
              </nav>

              {/* Gradient Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8"></div>

              {/* Login Button */}
              <LiquidButton
                asChild
                className="w-full bg-white border border-purple-800 text-purple-900 font-medium mb-4 hover:bg-purple-50 hover:scale-[1.01] transition-all duration-200 shadow-sm hover:shadow-md"
                size="lg"
              >
                <Link
                  href="https://app.leadboom.de"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
              </LiquidButton>

              {/* CTA Button */}
              <LiquidButton
                asChild
                className="w-full bg-purple-700 border border-purple-900 text-white font-medium hover:bg-purple-800 hover:scale-[1.01] transition-all duration-200 shadow-md hover:shadow-lg"
                size="lg"
              >
                <Link
                  href="https://app.leadboom.de/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  Get Leadboom
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </LiquidButton>

              {/* Decorative Elements */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-px bg-purple-300"></div>
                <Zap className="h-3 w-3 text-purple-600" />
                <div className="w-8 h-px bg-purple-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}