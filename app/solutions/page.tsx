import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { generateMetadata as generateSEOMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generateSEOMetadata({
  title: "Industry Solutions - Specialized Agency Management Platform",
  description: "Spezialisierte agency management platform Lösungen für Marketing Agencies, Sales Organizations und Service Providers. Maßgeschneiderte sales automation software und business process automation für deine Branche.",
  keywords: [
    "Industry specific agency management",
    "Marketing agency automation",
    "Sales organization software",
    "Service provider management",
    "Specialized business automation",
    "Industry-tailored digital tools"
  ],
  canonical: "/solutions"
})

const solutions = [
  {
    icon: <Target className="h-12 w-12" />,
    title: "Marketing Agencies",
    description: "Digital marketing agencies, content creators",
    href: "/solutions/marketing-agencies",
    features: [
      "Campaign Management Automation",
      "Client Reporting Dashboards", 
      "Lead Nurturing Workflows",
      "Content Delivery Automation",
      "Multi-Channel Attribution",
      "Performance Analytics"
    ],
    ideal: "Ideal für Agenturen mit 5-50+ Mitarbeitern"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Sales Organizations", 
    description: "Sales-focused agencies, lead scraping companies",
    href: "/solutions/sales-organizations",
    features: [
      "Sales Pipeline Optimization",
      "Automated Follow-up Sequences",
      "Performance Tracking",
      "Commission Management",
      "Lead Scoring & Distribution",
      "Conversion Rate Optimization"
    ],
    ideal: "Perfekt für Sales-Teams und Lead-Gen Unternehmen"
  },
  {
    icon: <Briefcase className="h-12 w-12" />,
    title: "Service Providers",
    description: "Web development, design, consulting agencies", 
    href: "/solutions/service-providers",
    features: [
      "Project Management Workflows",
      "Client Communication Hubs",
      "Delivery Automation",
      "Scope Management",
      "Time Tracking Integration",
      "Quality Assurance Processes"
    ],
    ideal: "Optimiert für Service-basierte Geschäftsmodelle"
  }
]

const industryStats = [
  { number: "300%", label: "durchschnittliche ROI-Steigerung" },
  { number: "60%", label: "weniger manuelle Arbeit" },
  { number: "40%", label: "kürzere Projektlaufzeiten" },
  { number: "25%", label: "höhere Kundenzufriedenheit" }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Maßgeschneiderte Lösungen für{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              deinen Erfolg
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Jede Branche hat ihre eigenen Herausforderungen. Unsere spezialisierten Lösungen
            sind darauf ausgelegt, genau die Probleme zu lösen, die in deiner Branche auftreten.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wähle deine Branche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecke, wie Leadboom speziell für deine Branche optimiert wurde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto p-4 bg-purple-100 text-purple-600 rounded-2xl w-fit group-hover:bg-purple-600 group-hover:text-white transition-colors mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <p className="text-sm font-medium text-purple-800">{solution.ideal}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-purple-600 group-hover:text-white mt-6">
                      <Link href={solution.href}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Industry-Specific */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Warum branchenspezifische Lösungen?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jede Branche hat einzigartige Workflows, Herausforderungen und Erfolgskennzahlen. 
              Unsere spezialisierten Lösungen berücksichtigen genau diese Unterschiede.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Branchenspezifische Workflows</h3>
              <p className="text-gray-300">
                Vorkonfigurierte Prozesse, die auf bewährte Praktiken deiner Branche abgestimmt sind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Relevante Integrationen</h3>
              <p className="text-gray-300">
                Nahtlose Verbindungen zu den Tools, die in deiner Branche am häufigsten verwendet werden.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Branchenspezifische KPIs</h3>
              <p className="text-gray-300">
                Dashboards und Berichte, die die für deine Branche wichtigsten Kennzahlen hervorheben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bereit für deine branchenspezifische Lösung?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lass uns gemeinsam die perfekte Lösung für dein Unternehmen entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Kostenlose Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kontakt">
                Beratungsgespräch buchen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}