import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Play, Calendar, CheckCircle, BarChart3, Users, Target, Phone, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateSEOMetadata({
  title: "Live Demo - Agency Management Platform | Leadboom",
  description: "Buche Deine persönliche Live-Demo der führenden agency management platform. Erlebe sales automation software und client fulfillment system in Aktion. Interaktive Plattform-Tour und ROI-Kalkulation für Deine Agentur.",
  keywords: [
    "Agency management platform demo",
    "Sales automation software demo",
    "Live platform demonstration",
    "Agency automation preview",
    "ROI calculator agencies",
    "Digital agency tools demo",
    "Business process automation demo"
  ],
  canonical: "/demo"
})

const demoFeatures = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Live Dashboard Tour",
    description: "Sehen Sie das Command Center Dashboard in Aktion mit Echtzeit-Daten"
  },
  {
    icon: <Target className="h-6 w-6" />, 
    title: "Lead Automation Demo",
    description: "Erleben Sie, wie Leads automatisch qualifiziert und verteilt werden"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Voice AI Showcase", 
    description: "Hören Sie unsere KI-Telefonie in Aktion mit natürlichen Gesprächen"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Portal Preview",
    description: "Entdecken Sie die Client Collaboration Features und Workflows"
  }
]

const demoStats = [
  { number: "25 Min", label: "Durchschnittliche Demo-Dauer" },
  { number: "1:1", label: "Persönliche Betreuung" },
  { number: "0€", label: "Komplett kostenlos" },
  { number: "3 Tage", label: "Bis zum Angebot" }
]

const testimonials = [
  {
    quote: "Die Demo hat uns sofort überzeugt. Wir konnten genau sehen, wie viel Zeit und Geld wir sparen würden.",
    name: "Marcus Weber", 
    company: "Weber Digital Marketing",
    savings: "€45k jährlich gespart"
  },
  {
    quote: "Endlich eine Plattform, die alle unsere Prozesse abbildet. Die Live-Demo war der Wendepunkt.",
    name: "Sarah Klein",
    company: "Klein Consulting",
    savings: "60% weniger Verwaltung"
  },
  {
    quote: "Nach der Demo war uns klar: Das ist die Zukunft der Agentur-Automatisierung.",
    name: "Thomas Müller",
    company: "Müller Sales Agency", 
    savings: "40% mehr Leads converted"
  }
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Erleben Sie Leadboom{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              live in Aktion
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buche Deine persönliche 25-minütige Demo und entdecke,
            wie Leadboom Deine Agentur transformieren kann. Kostenlos und unverbindlich.
          </p>

          {/* Demo Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {demoStats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
              <Calendar className="mr-3 h-5 w-5" />
              Jetzt Demo buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg py-6 px-8">
              <Play className="mr-3 h-5 w-5" />
              Video-Tour ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Was Dich in der Demo erwartet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deine persönliche Tour durch alle wichtigen Features der Plattform,
              zugeschnitten auf Deine spezifischen Anforderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              So läuft Deine Demo ab
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ein strukturierter 25-minütiger Durchgang durch die Plattform,
              der genau auf Deine Branche und Herausforderungen zugeschnitten ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-3">Minuten</h3>
              <p className="text-gray-300 text-sm">
                Kurzes Kennenlernen und Verständnis Deiner aktuellen Herausforderungen
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                15
              </div>
              <h3 className="text-lg font-semibold mb-3">Minuten</h3>
              <p className="text-gray-300 text-sm">
                Live-Tour durch die Plattform mit Fokus auf Deine Branchen-spezifischen Features
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Minuten</h3>
              <p className="text-gray-300 text-sm">
                ROI-Kalkulation basierend auf Deinen aktuellen Zahlen und Prozessen
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Minuten</h3>
              <p className="text-gray-300 text-sm">
                Nächste Schritte besprechen und individuelle Angebotserstellung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Berechne Deinen ROI vorab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nutze unseren interaktiven ROI-Rechner, um eine erste Einschätzung
              Deiner möglichen Einsparungen zu erhalten.
            </p>
          </div>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
                  <div className="text-gray-600 mb-4">Mitarbeiter</div>
                  <div className="text-sm text-gray-500">Beispiel-Agentur</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">€156k</div>
                  <div className="text-gray-600 mb-4">Jährliche Einsparungen</div>
                  <div className="text-sm text-gray-500">Durch Automatisierung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">450%</div>
                  <div className="text-gray-600 mb-4">ROI im ersten Jahr</div>
                  <div className="text-sm text-gray-500">Investition vs. Einsparung</div>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calculator className="mr-2 h-5 w-5" />
                  Deinen ROI berechnen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Was andere über die Demo sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Echte Erfahrungen von Agenturen, die nach der Demo zu Leadboom gewechselt sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-purple-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Ergebnis:</div>
                    <div className="text-sm text-green-700">{testimonial.savings}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zur Demo
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Ist die Demo wirklich kostenlos?",
                answer: "Ja, die Demo ist 100% kostenlos und unverbindlich. Es entstehen keinerlei Kosten oder Verpflichtungen."
              },
              {
                question: "Wie lange dauert die Demo?",
                answer: "Die Demo dauert etwa 25 Minuten. Wir können sie aber je nach Deinen Fragen auch verkürzen oder verlängern."
              },
              {
                question: "Kann ich die Demo aufzeichnen?",
                answer: "Gerne! Wir können die Demo auf Wunsch aufzeichnen, damit Du sie mit Deinem Team teilen kannst."
              },
              {
                question: "Bekomme ich danach ein Angebot?",
                answer: "Nur wenn Du möchtest. Nach der Demo besprechen wir, ob Leadboom für Dich interessant ist. Ein Angebot erhältst Du nur auf Anfrage."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Deine persönliche Demo?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Buche noch heute Deinen Termin und erfahre,
            wie Leadboom Deine Agentur revolutionieren kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg py-6 px-8">
              <Calendar className="mr-3 h-5 w-5" />
              Demo jetzt buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 text-lg py-6 px-8">
              <Link href="/kontakt">
                Fragen per E-Mail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}