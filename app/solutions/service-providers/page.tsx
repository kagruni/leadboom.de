import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, Users, Cog, Clock, CheckCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Service Providers - Spezialisierte Projektautomatisierung | Leadboom",
  description: "Project Management Workflows, Client Communication Hubs, Delivery Automation für Web Development, Design und Consulting Agencies.",
}

const features = [
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Project Management Workflows",
    description: "Automatisierte Projekt-Orchestrierung",
    details: [
      "Template-Based Project Setup",
      "Automated Task Generation",
      "Milestone & Deadline Tracking",
      "Resource Allocation Optimization",
      "Progress Reporting Automation"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client Communication Hubs", 
    description: "Zentrale Kommunikationsplattform",
    details: [
      "Branded Client Portals",
      "Real-Time Project Updates",
      "Document Sharing & Approval",
      "Feedback Collection Workflows",
      "Communication History Tracking"
    ]
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Delivery Automation",
    description: "Automatisierte Projektlieferung", 
    details: [
      "Automated Quality Checks",
      "Deployment Automation",
      "Client Handoff Workflows",
      "Post-Delivery Follow-up",
      "Maintenance Scheduling"
    ]
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Scope Management",
    description: "Intelligente Scope-Verwaltung",
    details: [
      "Automated Scope Documentation",
      "Change Request Workflows", 
      "Budget Impact Analysis",
      "Scope Creep Prevention",
      "Client Approval Processes"
    ]
  }
]

const serviceMetrics = [
  { metric: "60%", description: "kürzere Projektlaufzeiten" },
  { metric: "80%", description: "weniger Scope Creep" },
  { metric: "45%", description: "höhere Client Satisfaction" }, 
  { metric: "35%", description: "mehr Projekte pro Jahr" }
]

const projectTypes = [
  {
    type: "Web Development",
    challenges: [
      "Komplexe Requirement Gathering",
      "Frequent Client Revisions", 
      "Timeline Management"
    ],
    solutions: [
      "Automated Project Templates",
      "Structured Feedback Workflows",
      "Milestone-Based Automation"
    ]
  },
  {
    type: "Design Agency",
    challenges: [
      "Creative Review Processes",
      "Asset Management",
      "Brand Consistency"
    ],
    solutions: [
      "Visual Approval Workflows", 
      "Centralized Asset Libraries",
      "Brand Guideline Enforcement"
    ]
  },
  {
    type: "Consulting Services",
    challenges: [
      "Knowledge Documentation",
      "Deliverable Tracking",
      "Client Onboarding"
    ], 
    solutions: [
      "Automated Documentation",
      "Progress Tracking Systems",
      "Standardized Onboarding"
    ]
  }
]

const useCases = [
  {
    title: "Web Development Agency (12 Entwickler)",
    challenge: "Projekt-Setup nahm 6 Stunden pro neuem Kunde in Anspruch",
    solution: "Template-basierte Projekt-Automation mit automatischer Task-Generierung",
    result: "90% weniger Setup-Zeit, 40% mehr Projekte gleichzeitig"
  },
  {
    title: "Design Studio (8 Designer)", 
    challenge: "Client Feedback-Zyklen dauerten durchschnittlich 5 Tage",
    solution: "Strukturierte Feedback-Workflows mit automatischen Reminders",
    result: "70% schnellere Feedback-Zyklen, 25% höhere Client Satisfaction"
  },
  {
    title: "IT Consulting Firm (15 Berater)",
    challenge: "Scope Creep verursachte 30% Budget-Überschreitungen", 
    solution: "Automatisierte Scope Management und Change Request Workflows",
    result: "85% weniger Scope Creep, 20% höhere Projekt-Margen"
  }
]

export default function ServiceProvidersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            Service Providers
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Perfektionieren Sie Ihre{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Projektabwicklung
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automatisieren Sie Projektmanagement, optimieren Sie Client-Kommunikation 
            und liefern Sie konsistent exzellente Ergebnisse – pünktlich und im Budget.
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

          {/* Service Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceMetrics.map((item, index) => (
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
              Spezialisiert für Service Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere projektorientierten Features sind darauf ausgelegt, 
              jeden Aspekt Ihrer Servicelieferung zu optimieren.
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

      {/* Project Types Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Lösungen für jeden Service-Typ
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Egal ob Development, Design oder Consulting – wir haben die passenden Workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl text-white text-center">{project.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-300 mb-3">Häufige Herausforderungen:</h4>
                    <ul className="space-y-1">
                      {project.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-300 mb-3">Leadboom Lösungen:</h4>
                    <ul className="space-y-1">
                      {project.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-gray-300 flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lifecycle Automation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kompletter Projekt-Lifecycle automatisiert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der ersten Anfrage bis zur finalen Lieferung – jeder Schritt optimiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Inquiry", desc: "Automatische Lead-Qualifizierung" },
              { step: "2", title: "Proposal", desc: "Template-basierte Angebote" },
              { step: "3", title: "Kickoff", desc: "Automatischer Projekt-Setup" },
              { step: "4", title: "Execution", desc: "Workflow-basierte Abwicklung" },
              { step: "5", title: "Review", desc: "Strukturierte Client-Reviews" },
              { step: "6", title: "Delivery", desc: "Automatisierte Lieferung" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Erfolgsgeschichten von Service Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie andere Service Providers ihre Effizienz 
              und Client Satisfaction mit Leadboom gesteigert haben.
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

      {/* Implementation Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihr Weg zur Automatisierung
            </h2>
            <p className="text-xl text-gray-600">
              Von der Analyse bis zur vollständigen Implementierung in nur 3 Wochen.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: "Woche 1",
                title: "Projekt-Analyse & Setup",
                description: "Analyse Ihrer aktuellen Projektworkflows und Konfiguration der Automation-Templates."
              },
              {
                week: "Woche 2", 
                title: "Integration & Training",
                description: "Integration Ihrer Tools und umfassendes Team-Training für alle Workflows."
              },
              {
                week: "Woche 3",
                title: "Go-Live & Optimierung", 
                description: "Vollständige Aktivierung und erste Optimierungen basierend auf Live-Daten."
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-lg px-3 py-2 font-bold text-sm">
                  {phase.week}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für perfekte Projektabwicklung?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schließen Sie sich 100+ Service Providers an, die bereits mit Leadboom liefern.
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
                Projekt-Experten sprechen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}