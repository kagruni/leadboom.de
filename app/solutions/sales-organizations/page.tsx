import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, BarChart3, Users, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sales Organizations - Spezialisierte Verkaufsautomatisierung | Leadboom",
  description: "Sales Pipeline Optimization, Automated Follow-up Sequences, Performance Tracking für Sales-focused Agencies und Lead Generation Companies.",
}

const features = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Sales Pipeline Optimization",
    description: "Intelligente Verkaufsprozess-Optimierung",
    details: [
      "Automated Lead Qualification",
      "Stage-Based Workflow Automation",
      "Bottleneck Identification & Resolution",
      "Conversion Rate Optimization",
      "Pipeline Velocity Tracking"
    ]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Automated Follow-up Sequences", 
    description: "Niemals einen Lead verlieren",
    details: [
      "Multi-Channel Follow-up Campaigns",
      "Behavioral Trigger Automation",
      "Personalized Outreach Sequences",
      "Optimal Timing Algorithms",
      "A/B Testing for Sequences"
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Performance Tracking",
    description: "Detaillierte Sales Analytics", 
    details: [
      "Individual Sales Rep Performance",
      "Team Performance Benchmarks",
      "Revenue Attribution Tracking",
      "Activity-Based Reporting",
      "Predictive Sales Forecasting"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Commission Management",
    description: "Automatisierte Provisionsabrechnung",
    details: [
      "Automated Commission Calculation",
      "Multi-Tier Commission Structures", 
      "Real-Time Commission Tracking",
      "Dispute Resolution Workflows",
      "Payout Automation Integration"
    ]
  }
]

const salesMetrics = [
  { metric: "50%", description: "höhere Closing Rate" },
  { metric: "75%", description: "weniger verlorene Leads" },
  { metric: "3x", description: "schnellere Follow-up Zeit" }, 
  { metric: "40%", description: "mehr Umsatz pro Rep" }
]

const useCases = [
  {
    title: "Lead Generation Agency (20 Sales Reps)",
    challenge: "30% der Leads gingen durch langsame Follow-ups verloren",
    solution: "Automatisierte Multi-Channel Follow-up Sequences",
    result: "85% weniger verlorene Leads, 60% höhere Conversion Rate"
  },
  {
    title: "B2B Sales Organization (50 Mitarbeiter)", 
    challenge: "Provisionsabrechnungen nahmen 2 Tage pro Monat in Anspruch",
    solution: "Vollständig automatisierte Commission Management",
    result: "99% Zeitersparnis bei Provisionen, keine Abrechnungsfehler mehr"
  },
  {
    title: "Software Sales Team (12 Mitarbeiter)",
    challenge: "Inkonsistente Sales-Prozesse führten zu variabler Performance", 
    solution: "Standardisierte Pipeline mit automatisierten Workflows",
    result: "40% konsistentere Performance, 25% höhere Team-Produktivität"
  }
]

export default function SalesOrganizationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Sales Organizations
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maximieren Sie Ihre{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Sales Performance
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automatisieren Sie Ihre Sales Pipeline, optimieren Sie Follow-up Sequenzen 
            und steigern Sie die Performance Ihres gesamten Sales Teams.
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

          {/* Sales Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {salesMetrics.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
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
              Spezialisiert für Sales Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Sales-fokussierten Features sind darauf ausgelegt, 
              jeden Aspekt Ihres Verkaufsprozesses zu optimieren.
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

      {/* Sales Process Automation */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Vollständig automatisierter Sales Funnel
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Von der Lead-Qualifizierung bis zum Vertragsabschluss – jeder Schritt optimiert und automatisiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Lead Capture</h3>
              <p className="text-sm text-purple-100">Automatische Lead-Erfassung aus allen Quellen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Qualification</h3>
              <p className="text-sm text-purple-100">KI-basierte Lead-Scoring und Qualifizierung</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Follow-up</h3>
              <p className="text-sm text-purple-100">Automatisierte Multi-Channel Follow-up Sequences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Nurturing</h3>
              <p className="text-sm text-purple-100">Personalisierte Lead-Nurturing Kampagnen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Closing</h3>
              <p className="text-sm text-purple-100">Automatisierte Vertragsabwicklung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Erfolgsgeschichten aus dem Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie andere Sales Organizations ihre Performance 
              und Effizienz mit Leadboom maximiert haben.
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <div className="text-red-600">
                        <strong>Herausforderung:</strong>
                        <p className="text-sm mt-1 text-gray-600">{useCase.challenge}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-600">
                        <strong>Lösung:</strong>
                        <p className="text-sm mt-1 text-gray-600">{useCase.solution}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-green-600">
                        <strong>Ergebnis:</strong>
                        <p className="text-sm mt-1 text-gray-600">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Berechnen Sie Ihren ROI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Finden Sie heraus, wie viel Sie mit Sales Automation sparen können.
          </p>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25 Reps</div>
                <div className="text-gray-600">Durchschnittliches Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">€120k</div>
                <div className="text-gray-600">Jährliche Zeitersparnis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
                <div className="text-gray-600">ROI im ersten Jahr</div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Ihren ROI berechnen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Sales Excellence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schließen Sie sich 150+ Sales Organizations an, die bereits mit Leadboom skalieren.
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
                Sales Experten sprechen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}