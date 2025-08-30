import { Metadata } from "next"
import Link from "next/link"
import { BarChart3, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Command Center Dashboard - Zentrale Steuerung | Leadboom",
  description: "Cash Flow & Revenue Analytics, Customer Acquisition Cost (CAC) Tracking, Lifetime Value (LTV) Monitoring, Team Performance Metrics",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4" />
            Command Center Dashboard
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Zentrale Steuerung für{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Ihre Agentur
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Behalten Sie alle wichtigen Kennzahlen Ihres Unternehmens im Blick. 
            Von Cash Flow bis Team Performance – alles auf einen Blick.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Live Demo ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/platform">
                Zurück zur Plattform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Cash Flow & Revenue Analytics</CardTitle>
                    <CardDescription>Finanzielle Kennzahlen in Echtzeit</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Überwachen Sie Ihren Cash Flow, Umsatz und Gewinn in Echtzeit. 
                  Prognosen und Trends helfen bei strategischen Entscheidungen.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Echtzeit Cash Flow Monitoring</li>
                  <li>• Revenue Forecasting</li>
                  <li>• Profit Margin Analysis</li>
                  <li>• Financial KPI Tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Customer Acquisition Cost (CAC) Tracking</CardTitle>
                    <CardDescription>Optimierung der Kundenakquisition</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Verstehen Sie, wie viel es kostet, neue Kunden zu gewinnen und 
                  optimieren Sie Ihre Marketing-Ausgaben entsprechend.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CAC pro Kanal berechnen</li>
                  <li>• ROI-Analyse von Kampagnen</li>
                  <li>• Lifetime Value Vergleich</li>
                  <li>• Cost Efficiency Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Lifetime Value (LTV) Monitoring</CardTitle>
                    <CardDescription>Langfristige Kundenwert-Analyse</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Berechnen und verfolgen Sie den langfristigen Wert Ihrer Kunden. 
                  Identifizieren Sie die wertvollsten Kundensegmente.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• LTV Calculation & Tracking</li>
                  <li>• Customer Segmentation</li>
                  <li>• Retention Rate Analysis</li>
                  <li>• Upselling Opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Team Performance Metrics</CardTitle>
                    <CardDescription>Mitarbeiter-Leistung optimieren</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Verfolgen Sie die Leistung Ihres Teams mit detaillierten Metriken 
                  und identifizieren Sie Verbesserungsmöglichkeiten.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Individual Performance Tracking</li>
                  <li>• Team Productivity Analytics</li>
                  <li>• Goal Achievement Monitoring</li>
                  <li>• Performance Benchmarking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für vollständige Transparenz?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Erleben Sie, wie das Command Center Dashboard Ihre Entscheidungsfindung revolutioniert.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/demo">
              Kostenloses Demo anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}