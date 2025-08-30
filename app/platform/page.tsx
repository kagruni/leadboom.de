import { Metadata } from "next"
import Link from "next/link"
import { 
  BarChart3, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  FileText, 
  Cog, 
  Users, 
  Calendar, 
  Phone,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateSEOMetadata({
  title: "Agency Management Platform - Complete Digital Agency Operating System",
  description: "Das führende Betriebssystem für erfolgreiche Agenturen. Sales automation software, client fulfillment system und business process automation in einer Plattform. Von der Lead-Generierung bis zur Projekt-Lieferung – alles automatisiert.",
  keywords: [
    "Agency management platform",
    "Digital agency operating system",
    "Sales automation software", 
    "Client fulfillment system",
    "Business process automation",
    "Lead generation automation",
    "Agency dashboard",
    "Project management for agencies"
  ],
  canonical: "/platform"
})

const platformModules = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Command Center Dashboard",
    description: "Zentrale Steuerung",
    href: "/platform/dashboard",
    features: [
      "Cash Flow & Revenue Analytics",
      "Customer Acquisition Cost (CAC) Tracking", 
      "Lifetime Value (LTV) Monitoring",
      "Team Performance Metrics",
      "Real-time KPI Dashboards"
    ]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Lead Acquisition Engine", 
    description: "Automatisierte Lead-Generierung",
    href: "/platform/leads",
    features: [
      "Lead-Kauf und Import-Funktionen",
      "KI-gestützte Voice Call Automation", 
      "Multi-Channel Outreach Campaigns",
      "Lead-Scoring und Qualifizierung"
    ]
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "WhatsApp Business Hub",
    description: "Messenger Automatisierung", 
    href: "/platform/whatsapp",
    features: [
      "KI-gesteuerte Unterhaltungen",
      "Template Message Campaigns",
      "Automatische Terminbuchung", 
      "Conversation Tracking & Analytics"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Sales Pipeline Automation",
    description: "Verkaufsprozess-Optimierung",
    href: "/platform/sales", 
    features: [
      "Automated Follow-up Sequences",
      "Closing Rate Optimization",
      "Pipeline Stage Management",
      "Conversion Analytics"
    ]
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Digital Contract Suite",
    description: "Papierlose Vertragsabwicklung",
    href: "/platform/contracts",
    features: [
      "Quote & Proposal Generation", 
      "Digital Signature Workflows",
      "Invoice & Credit Note Management",
      "Payment Tracking Integration"
    ]
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Fulfillment Automation", 
    description: "Projektabwicklung",
    href: "/platform/fulfillment",
    features: [
      "Client-specific Task Workflows",
      "Automated Task Population",
      "Progress Tracking & Reporting", 
      "Team Collaboration Tools"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client Collaboration Hub",
    description: "Kunde-Agentur Zusammenarbeit",
    href: "/platform/collaboration",
    features: [
      "Shared Digital Whiteboards",
      "Document Management System",
      "Project Communication Center",
      "Client Portal Access"
    ]
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Smart Calendar System", 
    description: "Terminmanagement",
    href: "/platform/calendar",
    features: [
      "Google Calendar Integration",
      "Automated Booking Links (Calendly-like)",
      "Meeting Room Management",
      "Availability Synchronization"
    ]
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Voice Automation Engine",
    description: "KI-Telefonie", 
    href: "/platform/voice",
    features: [
      "Natural Language Processing",
      "Automated Appointment Booking",
      "Multi-language Support",
      "Call Analytics & Insights"
    ]
  }
]

const platformStats = [
  { number: "500+", label: "Agenturen vertrauen uns" },
  { number: "5M+", label: "verarbeitete Leads" }, 
  { number: "85%", label: "Prozessautomatisierung" },
  { number: "40%", label: "höhere Profit Margins" }
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Das Betriebssystem für{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              erfolgreiche Agenturen
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Von der Lead-Generierung bis zur Projekt-Lieferung – eine Plattform für alles.
            Automatisieren Sie 85% Ihrer Routineaufgaben und fokussieren Sie sich auf das Wachstum.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Kostenlose Demo anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/preise">
                Preise ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Modules Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              9 Kraftvolle Module
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jedes Modul wurde entwickelt, um einen spezifischen Aspekt Ihres Agentur-Betriebs zu automatisieren und zu optimieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-purple-50">
                    <Link href={module.href}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit, Ihre Agentur zu transformieren?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Starten Sie noch heute und erleben Sie, wie Leadboom Ihren gesamten Geschäftsbetrieb revolutioniert.
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
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}