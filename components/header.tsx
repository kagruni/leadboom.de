"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, BarChart3, Target, MessageSquare, TrendingUp, FileText, Cog, Users, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassSurface from "@/components/GlassSurface"
import { cn } from "@/lib/utils"

interface SubItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavigationItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const platformSubItems: SubItem[] = [
  { 
    name: "Dashboard & Analytics", 
    href: "/platform/dashboard", 
    description: "Zentrale Steuerung",
    icon: <BarChart3 className="h-4 w-4" />
  },
  { 
    name: "Lead Management System", 
    href: "/platform/leads", 
    description: "Automatisierte Lead-Generierung",
    icon: <Target className="h-4 w-4" />
  },
  { 
    name: "Sales Pipeline Automation", 
    href: "/platform/sales", 
    description: "Verkaufsprozess-Optimierung",
    icon: <TrendingUp className="h-4 w-4" />
  },
  { 
    name: "WhatsApp Business Hub", 
    href: "/platform/whatsapp", 
    description: "Messenger Automatisierung",
    icon: <MessageSquare className="h-4 w-4" />
  },
  { 
    name: "Voice Automation", 
    href: "/platform/voice", 
    description: "KI-Telefonie",
    icon: <Phone className="h-4 w-4" />
  },
  { 
    name: "Contract & Billing Suite", 
    href: "/platform/contracts", 
    description: "Papierlose Vertragsabwicklung",
    icon: <FileText className="h-4 w-4" />
  },
  { 
    name: "Fulfillment Workflows", 
    href: "/platform/fulfillment", 
    description: "Projektabwicklung",
    icon: <Cog className="h-4 w-4" />
  },
  { 
    name: "Client Collaboration Hub", 
    href: "/platform/collaboration", 
    description: "Kunde-Agentur Zusammenarbeit",
    icon: <Users className="h-4 w-4" />
  },
  { 
    name: "Calendar & Scheduling", 
    href: "/platform/calendar", 
    description: "Terminmanagement",
    icon: <Calendar className="h-4 w-4" />
  }
]

const solutionsSubItems: SubItem[] = [
  { name: "Marketing Agencies", href: "/solutions/marketing-agencies", description: "Digital marketing agencies, content creators" },
  { name: "Sales Organizations", href: "/solutions/sales-organizations", description: "Sales-focused agencies, lead generation companies" },
  { name: "Service Providers", href: "/solutions/service-providers", description: "Web development, design, consulting agencies" }
]

const resourcesSubItems: SubItem[] = [
  { name: "Platform Demo", href: "/demo", description: "Interactive platform walkthrough" },
  { name: "Implementation Guide", href: "/resources/implementation", description: "Getting started guide" },
  { name: "Success Stories", href: "/resources/success-stories", description: "Customer case studies" },
  { name: "API Documentation", href: "/resources/api", description: "Developer resources" },
  { name: "Training Center", href: "/resources/training", description: "Learning materials" }
]

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { 
    name: "Plattform", 
    href: "/platform",
    subItems: platformSubItems
  },
  { 
    name: "Lösungen", 
    href: "/solutions",
    subItems: solutionsSubItems
  },
  { 
    name: "Resources", 
    href: "/resources",
    subItems: resourcesSubItems
  },
  { name: "Preise", href: "/preise" },
  { name: "Über uns", href: "/ueber-uns" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleDropdownClose = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <GlassSurface 
          width={900}
          height={56}
          borderRadius={28}
          backgroundOpacity={0.15}
          saturation={1.5}
          displace={5}
          distortionScale={-150}
          redOffset={2}
          greenOffset={8}
          blueOffset={15}
          brightness={70}
          opacity={0.9}
          className="border border-white/20"
        >
          <div className="px-6 w-full">
            <div className="flex h-14 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-lg font-bold text-white">
                  Lead<span className="text-purple-300">boom</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:space-x-4 relative">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.subItems ? (
                      <div className="relative">
                        <button
                          className={cn(
                            "flex items-center px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                            pathname.startsWith(item.href)
                              ? "text-purple-300 bg-white/10"
                              : "text-white hover:text-purple-300 hover:bg-white/5"
                          )}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDropdownToggle(item.name)
                          }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "ml-1 h-3 w-3 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180"
                          )} />
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                          pathname === item.href
                            ? "text-purple-300 bg-white/10"
                            : "text-white hover:text-purple-300 hover:bg-white/5"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
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
                  className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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

      {/* Dropdown Menus - Portal Style Outside Header */}
      {activeDropdown && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-[900px] px-6">
          <div className="flex justify-center">
            {navigation.map((item) => {
              if (item.name === activeDropdown && item.subItems) {
                return (
                  <div 
                    key={item.name}
                    className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2 w-80"
                    onMouseLeave={handleDropdownClose}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-start px-4 py-2 text-sm text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                        onClick={handleDropdownClose}
                      >
                        {subItem.icon && (
                          <span className="mr-3 mt-0.5 text-purple-500">
                            {subItem.icon}
                          </span>
                        )}
                        <div>
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-gray-600 mt-0.5">{subItem.description}</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      )}

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
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                        pathname.startsWith(item.href) && "text-purple-600",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile Submenu */}
                    {item.subItems && (
                      <div className="ml-4 space-y-1 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.icon && (
                              <span className="mr-2 text-purple-500">
                                {subItem.icon}
                              </span>
                            )}
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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