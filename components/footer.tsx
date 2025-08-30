import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-900/50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/10 rounded-tr-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-2"></div>


      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                    L
                  </div>
                </div>
                <span className="text-2xl font-bold text-white">
                  Lead
                  <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                    boom
                  </span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400">
              Leadboom ist Ihr Partner für innovative Lead-Generierung und zukunftsorientierte Marketing-Strategien. Wir
              helfen Ihnen, Ihre Ziele zu erreichen und Ihr Geschäft auf die nächste Stufe zu bringen.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-purple-600"
              >
                <Facebook className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-purple-600"
              >
                <Instagram className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-purple-600"
              >
                <Twitter className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-purple-600"
              >
                <Linkedin className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/ueber-uns"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Karriere
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Plattform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/platform"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Übersicht
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/dashboard"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Command Center
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/leads"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Lead Management
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/whatsapp"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  WhatsApp Hub
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Lösungen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Übersicht
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/marketing-agencies"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Marketing Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sales-organizations"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Sales Organizations
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/service-providers"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Service Providers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Platform Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/success-stories"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/api"
                  className="group flex items-center text-gray-400 transition-colors hover:text-purple-300"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-purple-400" />
                <span className="text-gray-400">
                  Musterstraße 123
                  <br />
                  10115 Berlin
                  <br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-purple-400" />
                <a href="mailto:info@leadboom.de" className="text-gray-400 transition-colors hover:text-purple-300">
                  info@leadboom.de
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-purple-400" />
                <a href="tel:+4930123456" className="text-gray-400 transition-colors hover:text-purple-300">
                  +49 30 1234567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Leadboom. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-300">
                Datenschutz
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-300">
                AGB
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-300">
                Impressum
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <span className="flex items-center">
              Mit <Heart className="mx-1 h-4 w-4 text-purple-500" /> erstellt in Berlin
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

