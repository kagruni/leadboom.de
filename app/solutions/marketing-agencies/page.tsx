import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, BarChart3, Users, Zap, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Marketing Agencies - Spezialisierte Automatisierung | Leadboom",
  description: "Campaign Management Automation, Client Reporting Dashboards, Lead Nurturing Workflows für Digital Marketing Agencies und Content Creators.",
}

const features = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Campaign Management Automation",
    description: "Automatisierte Kampagnen-Orchestrierung",
    details: [
      "Multi-Channel Campaign Orchestration",
      "Automated A/B Testing Setup", 
      "Performance-Based Budget Allocation",
      "Creative Asset Management",
      "Campaign Performance Optimization"
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Client Reporting Dashboards", 
    description: "Professionelle Kundenberichte in Echtzeit",
    details: [
      "White-Label Client Dashboards",
      "Automated Monthly Reporting",
      "Custom KPI Tracking",
      "ROI & ROAS Visualization", 
      "Performance Trend Analysis"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Lead Nurturing Workflows",
    description: "Intelligente Lead-Pflege-Systeme", 
    details: [
      "Behavioral Trigger Automation",
      "Personalized Content Delivery",
      "Lead Scoring & Segmentation",
      "Multi-Touch Attribution",
      "Conversion Optimization"
    ]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Content Delivery Automation",
    description: "Automatisierte Content-Distribution",
    details: [
      "Cross-Platform Content Publishing",
      "Content Calendar Management", 
      "Automated Social Media Posting",
      "Content Performance Tracking",
      "Brand Consistency Enforcement"
    ]
  }
]

const useCases = [
  {
    title: "Digital Marketing Agency (15 Mitarbeiter)",
    challenge: "Manueller Kampagnen-Setup kostete 8 Stunden pro Kunde",
    solution: "Automatisierte Template-basierte Kampagnen-Erstellung",
    result: "85% Zeitersparnis, 40% mehr Kunden betreut"
  },
  {
    title: "Content Creator Agency (8 Mitarbeiter)", 
    challenge: "Client Reporting nahm 12 Stunden pro Woche in Anspruch",
    solution: "Automatisierte White-Label Dashboard-Generierung",
    result: "95% weniger Reporting-Zeit, höhere Kundenzufriedenheit"
  },
  {
    title: "Performance Marketing Agency (25 Mitarbeiter)",
    challenge: "Lead-Qualifizierung und -Verteilung war ineffizient",
    solution: "KI-basierte Lead Scoring und Automation",
    result: "60% höhere Conversion Rate, 30% mehr qualifizierte Leads"
  }
]

const benefits = [
  "40% Steigerung der Kampagnen-Performance",
  "60% weniger Zeit für Routine-Tasks", 
  "85% automatisierte Client-Kommunikation",
  "300% ROI innerhalb von 6 Monaten"
]

export default function MarketingAgenciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="h-4 w-4" />
            Marketing Agencies
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionieren Sie Ihr{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Marketing Agency
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automatisieren Sie Kampagnen-Management, erstellen Sie professionelle Client-Berichte 
            und optimieren Sie Ihre Lead-Nurturing-Prozesse für maximalen ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Kostenlose Demo anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">
                Andere Branchen ansehen
              </Link>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {benefit.split(' ')[0]}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spezialisiert für Marketing Agencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Plattform wurde speziell für die einzigartigen Herausforderungen 
              von Marketing Agencies entwickelt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Erfolgsgeschichten aus der Praxis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Erfahren Sie, wie andere Marketing Agencies ihre Effizienz und Profitabilität 
              mit Leadboom gesteigert haben.
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="text-red-300">
                        <strong>Herausforderung:</strong>
                        <p className="text-sm mt-1">{useCase.challenge}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-300">
                        <strong>Lösung:</strong>
                        <p className="text-sm mt-1">{useCase.solution}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-green-300">
                        <strong>Ergebnis:</strong>
                        <p className="text-sm mt-1">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihr Weg zur Automatisierung
            </h2>
            <p className="text-xl text-gray-600">
              In nur 4 Wochen von der ersten Demo zur vollständigen Implementierung.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Woche 1: Demo & Analyse</h3>
                <p className="text-gray-600">Kostenlose Demo Ihrer aktuellen Prozesse und Identifikation von Automatisierungsmöglichkeiten.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Woche 2: Setup & Integration</h3>
                <p className="text-gray-600">Plattform-Setup, Integration Ihrer bestehenden Tools und Konfiguration der Workflows.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Woche 3: Training & Testing</h3>
                <p className="text-gray-600">Umfassendes Team-Training und ausgiebiges Testen aller automatisierten Prozesse.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Woche 4: Go-Live & Optimierung</h3>
                <p className="text-gray-600">Vollständige Aktivierung und kontinuierliche Optimierung basierend auf ersten Ergebnissen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit, Ihre Marketing Agency zu transformieren?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schließen Sie sich 200+ Marketing Agencies an, die bereits mit Leadboom automatisieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/demo">
                Kostenlose Demo anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
              <Link href="/kontakt">
                Expertenberatung buchen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}