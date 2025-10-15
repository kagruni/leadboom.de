import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Clock,
  HelpCircle,
  Send,
  Sparkles
} from "lucide-react"
import StackingCards from "@/components/StackingCards"
import BusinessProcessFlow from "@/components/BusinessProcessFlow"
import StatsSection from "@/components/StatsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import TrustedBySection from "@/components/TrustedBySection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-24 md:py-32 animated-gradient-bg purple-grid">
        {/* Floating Orbs */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 glass-purple rounded-full text-purple-800 text-sm font-medium mb-2 pulse-glow">
                <Star className="h-4 w-4 mr-2 fill-purple-600" />
                <span>Die All-in-One Plattform für Agenturen</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Mit <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-glow-purple">Leads</span> überschüttet werden
              </h1>
              <p className="text-xl text-gray-700 max-w-md">
                Die All-in-One Plattform, die Ihren kompletten Geschäftsprozess automatisiert - von der Lead-Generierung bis zur Projektlieferung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="neon-button text-white rounded-full">
                  <Link href="#contact" className="flex items-center shine-sweep">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Demo anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full glass-card">
                  <Link href="#features">Unsere Features</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                      <div className="absolute inset-0 bg-purple-600 flex items-center justify-center text-white font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">500+</span> zufriedene Kunden
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Leadboom Platform"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Über Leadboom Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Über Leadboom"
                fill
                className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-sm font-medium mb-2">
                Über uns
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ihr Partner für Wachstum</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Leadboom wurde 2018 mit einer klaren Vision gegründet: Marketing-Agenturen dabei zu helfen, mehr qualifizierte Leads zu generieren und ihre Kunden erfolgreicher zu machen.
                </p>
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Was als kleines Team von Lead-Generierungs-Experten begann, hat sich zu einem umfassenden Anbieter entwickelt, der innovative Lösungen in den Bereichen Lead-Generierung, E-Mail-Marketing und CRM anbietet.
                </p>
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Heute arbeiten wir mit hunderten Marketing-Agenturen im gesamten DACH-Raum zusammen und helfen ihnen, mit qualifizierten Leads überschüttet zu werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section mit StackingCards */}
      <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/40 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Unsere Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Alles was Sie brauchen, <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">an einem Ort</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Plattform bietet Ihnen alle Tools, die Sie für erfolgreiches Agentur-Wachstum benötigen.
            </p>
          </div>

          {/* StackingCards Komponente */}
          <StackingCards />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Business Process Flow Section */}
      <section id="process" className="relative">
        <BusinessProcessFlow />
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Preise Section */}
      <section id="pricing" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/40 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Preise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Flexible Preise für <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">jede Agentur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Paket */}
            <Card className="relative overflow-hidden glass-card border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 card-3d">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600">Perfekt für kleinere Agenturen</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">€499</span>
                    <span className="text-gray-600 ml-2">/Monat</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Bis zu 500 Leads/Monat",
                    "Lead Management System",
                    "E-Mail-Kampagnen",
                    "Basis CRM-Integration",
                    "Support per E-Mail"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full neon-button text-white rounded-full shine-sweep" asChild>
                  <Link href="#contact">Jetzt starten</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Paket - Featured */}
            <Card className="relative overflow-hidden glass-purple border-2 border-purple-500 shadow-2xl transform scale-105 card-3d gradient-border">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-medium rounded-bl-xl pulse-glow">
                ⭐ Beliebt
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600">Für wachsende Agenturen</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">€999</span>
                    <span className="text-gray-600 ml-2">/Monat</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Bis zu 2.000 Leads/Monat",
                    "Alle Starter Features",
                    "WhatsApp Business Hub",
                    "Voice Automation",
                    "Sales Pipeline Automation",
                    "Priority Support"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full neon-button text-white rounded-full shine-sweep" asChild>
                  <Link href="#contact">Jetzt starten</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Paket */}
            <Card className="relative overflow-hidden glass-card border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 card-3d">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600">Für große Organisationen</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">Individuell</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Unbegrenzte Leads",
                    "Alle Professional Features",
                    "Custom Workflows",
                    "Dedicated Account Manager",
                    "24/7 Premium Support",
                    "Individuelle Anpassungen"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link href="#contact">Kontakt aufnehmen</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/40 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600">Hier finden Sie Antworten auf die wichtigsten Fragen.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Wie funktioniert der Prozess nach der Demo-Anfrage?",
                answer: "Nach Ihrer Demo-Anfrage kontaktieren wir Sie innerhalb von 24 Stunden, um einen Termin zu vereinbaren. In der Demo zeigen wir Ihnen unsere Produkte und wie sie Ihren spezifischen Anforderungen gerecht werden können."
              },
              {
                question: "Sind die Lead-Listen DSGVO-konform?",
                answer: "Wir bieten Ihnen alle notwendigen Informationen und Tools für eine datenschutzkonforme Nutzung unserer Lead-Listen. Unsere Experten beraten Sie gerne zu den rechtlichen Aspekten der Lead-Nutzung im DACH-Raum."
              },
              {
                question: "Wie oft werden die Lead-Listen aktualisiert?",
                answer: "Unsere Lead-Listen werden kontinuierlich aktualisiert und verifiziert, um sicherzustellen, dass Sie stets Zugang zu aktuellen und qualitativ hochwertigen Kontakten haben."
              },
              {
                question: "Kann ich das System mit meinem bestehenden CRM verbinden?",
                answer: "Ja, unser System lässt sich über APIs mit den gängigsten CRM-Systemen verbinden. Alternativ können Sie auch unser eigenes CRM-System nutzen, das nahtlos mit allen unseren Produkten integriert ist."
              },
              {
                question: "Wie funktioniert die Voice Automation?",
                answer: "Unsere Voice Automation nutzt KI-Technologie, um automatisierte Gespräche zu führen, Leads zu qualifizieren und Termine zu vereinbaren. Sie kann in verschiedenen Sprachen kommunizieren und passt sich an die Reaktionen des Gesprächspartners an."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                        <HelpCircle className="h-4 w-4 text-purple-600 group-hover:text-white transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="py-20 animated-gradient-bg purple-grid relative overflow-hidden">
        {/* Floating Orbs */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 glass-purple rounded-full text-purple-800 text-sm font-medium mb-4 pulse-glow">
              <Sparkles className="h-4 w-4 mr-2 fill-purple-600" />
              <span>Wir freuen uns auf Ihre Nachricht</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-gray-900">
              Kontaktieren Sie <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-glow-purple">Leadboom</span>
            </h2>
            <p className="text-xl text-gray-700">
              Wir freuen uns, von Ihnen zu hören. Fordern Sie eine kostenlose Demo an.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl shadow-2xl p-8 border-2 border-purple-200 card-3d">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Vorname
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Nachname
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Agentur / Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full neon-button text-white rounded-full shine-sweep flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Demo anfordern
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Kontaktinformationen</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-purple-600" />,
                      title: "E-Mail",
                      content: "info@leadboom.de",
                      action: "mailto:info@leadboom.de"
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-purple-600" />,
                      title: "Telefon",
                      content: "+49 30 1234567",
                      action: "tel:+4930123456"
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-purple-600" />,
                      title: "Adresse",
                      content: "Musterstraße 123\n10115 Berlin\nDeutschland",
                      action: null
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-purple-600" />,
                      title: "Öffnungszeiten",
                      content: "Montag - Freitag\n9:00 - 18:00 Uhr",
                      action: null
                    }
                  ].map((item, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                            {item.action && (
                              <a
                                href={item.action}
                                className="inline-flex items-center mt-2 text-purple-600 hover:text-purple-800 transition-colors"
                              >
                                <span className="text-sm">Kontaktieren</span>
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
