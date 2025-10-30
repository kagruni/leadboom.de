import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-white border-t border-purple-200">
      {/* Decorative overlay elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/40 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-50/40 rounded-tr-full blur-3xl"></div>


      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/leadboom-logo.png"
                alt="Leadboom"
                width={300}
                height={90}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-700">
              Leadboom ist dein Partner für innovative Lead-Generierung und zukunftsorientierte Marketing-Strategien. Wir
              helfen dir, deine Ziele zu erreichen und dein Geschäft auf die nächste Stufe zu bringen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#contact"
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
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
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Alle Features
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
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
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-3"></span>
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="group flex items-center text-gray-700 transition-colors hover:text-purple-600"
                >
                  <span className="mr-2 h-1 w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-3"></span>
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
                <span className="text-gray-700">
                  Dortmunder Straße 2
                  <br />
                  04357 Leipzig
                  <br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
                <a href="mailto:info@leadboom.de" className="text-gray-700 transition-colors hover:text-purple-600">
                  info@leadboom.de
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
                <a href="tel:+491778710181" className="text-gray-700 transition-colors hover:text-purple-600">
                  +49 177 8710181
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-purple-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-700">
              &copy; {new Date().getFullYear()} Leadboom. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/datenschutz" className="text-sm text-gray-700 hover:text-purple-600">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-gray-700 hover:text-purple-600">
                AGB
              </Link>
              <Link href="/impressum" className="text-sm text-gray-700 hover:text-purple-600">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

