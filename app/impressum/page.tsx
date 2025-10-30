import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white border-b border-gray-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impressum
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* Anbieter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anbieter</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-900 font-semibold text-lg mb-2">Leadboom GmbH</p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      Dortmunder Straße 2<br />
                      04357 Leipzig<br />
                      Deutschland
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <a href="tel:+491778710181" className="hover:text-purple-600 transition-colors">
                      +49 177 8710181
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <a href="mailto:info@leadboom.de" className="hover:text-purple-600 transition-colors">
                      info@leadboom.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Handelsregister */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registereintrag</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold text-gray-900">Registergericht:</span> Amtsgericht Berlin-Charlottenburg</p>
                  <p><span className="font-semibold text-gray-900">Registernummer:</span> HRB 123456 B</p>
                </div>
              </div>
            </div>

            {/* Vertretungsberechtigte */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vertretungsberechtigte</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Geschäftsführer:</span> Karel Grunert
                </p>
              </div>
            </div>

            {/* Umsatzsteuer-ID */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Umsatzsteuer-ID</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <span className="font-semibold text-gray-900">DE123456789</span>
                </p>
              </div>
            </div>

            {/* EU-Streitschlichtung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">EU-Streitschlichtung</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600 mb-3">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="text-gray-600 mt-3">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-600">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Haftungsausschluss</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
                  <p className="text-gray-600">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-gray-600 mt-3">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftung für Links</h3>
                  <p className="text-gray-600">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="text-gray-600 mt-3">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Urheberrecht</h3>
                  <p className="text-gray-600">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p className="text-gray-600 mt-3">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
