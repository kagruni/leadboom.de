import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      {/* Decorative overlay elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/30 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200/20 rounded-tr-full blur-3xl"></div>


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
                <span className="text-2xl font-bold text-gray-900">
                  Lead
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    boom
                  </span>
                </span>
              </div>
            </Link>
            <p className="text-gray-600">
              Leadboom ist Ihr Partner für innovative Lead-Generierung und zukunftsorientierte Marketing-Strategien. Wir
              helfen Ihnen, Ihre Ziele zu erreichen und Ihr Geschäft auf die nächste Stufe zu bringen.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-purple-600"
              >
                <Facebook className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-purple-600"
              >
                <Instagram className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-purple-600"
              >
                <Twitter className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-purple-600"
              >
                <Linkedin className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Alle Features
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Prozess
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Service</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#contact"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Demo anfordern
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="group flex items-center text-gray-600 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Preise ansehen
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
                <span className="text-gray-600">
                  Musterstraße 123
                  <br />
                  10115 Berlin
                  <br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
                <a href="mailto:info@leadboom.de" className="text-gray-600 transition-colors hover:text-purple-600">
                  info@leadboom.de
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
                <a href="tel:+4930123456" className="text-gray-600 transition-colors hover:text-purple-600">
                  +49 30 1234567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Leadboom. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-purple-600">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-gray-600 hover:text-purple-600">
                AGB
              </Link>
              <Link href="/impressum" className="text-sm text-gray-600 hover:text-purple-600">
                Impressum
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
            <span className="flex items-center">
              Mit <Heart className="mx-1 h-4 w-4 text-purple-600" /> erstellt in Berlin
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

