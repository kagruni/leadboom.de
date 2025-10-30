import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Code, GraduationCap, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Resources - Dein Leadboom Lernzentrum | Leadboom",
  description: "Entdecke unsere umfassende Resource-Bibliothek: Platform Demo, Implementation Guide, Success Stories, API Documentation und Training Center.",
}

const resourceCategories = [
  {
    icon: <Play className="h-12 w-12" />,
    title: "Platform Demo",
    description: "Interactive platform walkthrough",
    href: "/demo",
    items: [
      "25-minütige Live-Demo",
      "Interaktive Plattform-Tour", 
      "ROI-Kalkulation",
      "Individuelle Angebotserstellung"
    ]
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Implementation Guide",
    description: "Getting started guide",
    href: "/resources/implementation",
    items: [
      "Schritt-für-Schritt Setup",
      "Integration Checklisten",
      "Best Practices Guide",
      "Team Onboarding Prozess"
    ]
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Success Stories",
    description: "Customer case studies", 
    href: "/resources/success-stories",
    items: [
      "Detaillierte Case Studies",
      "ROI-Analysen",
      "Branchen-spezifische Erfolge",
      "Video-Testimonials"
    ]
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "API Documentation",
    description: "Developer resources",
    href: "/resources/api",
    items: [
      "REST API Referenz",
      "Webhook Integration",
      "SDK Downloads",
      "Code Beispiele"
    ]
  },
  {
    icon: <GraduationCap className="h-12 w-12" />,
    title: "Training Center",
    description: "Learning materials",
    href: "/resources/training",
    items: [
      "Video Tutorials",
      "Webinar Aufzeichnungen",
      "User Guides",
      "Zertifizierungsprogramm"
    ]
  }
]

const featuredResources = [
  {
    category: "Guide",
    title: "Der komplette Agentur-Automatisierungs-Guide",
    description: "Erfahren Sie in 50 Seiten, wie Sie Ihre Agentur Schritt für Schritt automatisieren.",
    readTime: "25 Min Lesezeit",
    href: "/resources/automation-guide"
  },
  {
    category: "Case Study", 
    title: "Wie Weber Digital 300% ROI erreichte",
    description: "Detaillierte Analyse einer kompletten Agentur-Transformation mit Leadboom.",
    readTime: "15 Min Lesezeit",
    href: "/resources/weber-case-study"
  },
  {
    category: "Video",
    title: "Platform Deep Dive Webinar",
    description: "60-minütiges Webinar mit allen Features und Live-Demos.",
    readTime: "60 Min Video",
    href: "/resources/platform-webinar"
  }
]

const quickLinks = [
  { title: "System Status", href: "/status", description: "Aktuelle Verfügbarkeit" },
  { title: "Release Notes", href: "/releases", description: "Neue Features & Updates" },
  { title: "Support Portal", href: "/support", description: "Hilfe & FAQ" },
  { title: "Community Forum", href: "/forum", description: "Austausch mit anderen" },
  { title: "Feature Requests", href: "/feedback", description: "Ihre Ideen einreichen" },
  { title: "Integrations", href: "/integrations", description: "Verfügbare Integrationen" }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dein Leadboom{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Lernzentrum
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Entdecken Sie unsere umfassende Resource-Bibliothek mit Guides, Case Studies, 
            Trainingsmaterialien und Entwickler-Dokumentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/demo">
                Platform Demo starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#featured">
                Featured Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resource Kategorien
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finden Sie schnell die Informationen, die Sie benötigen – 
              von ersten Einblicken bis hin zur technischen Implementierung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.slice(0, 3).map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-4 bg-purple-100 text-purple-600 rounded-2xl w-fit group-hover:bg-purple-600 group-hover:text-white transition-colors mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-purple-600 group-hover:text-white">
                    <Link href={category.href}>
                      Erkunden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {resourceCategories.slice(3).map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-purple-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-purple-600 group-hover:text-white">
                    <Link href={category.href}>
                      Erkunden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unsere beliebtesten und wertvollsten Inhalte für deinen Erfolg mit Leadboom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{resource.readTime}</span>
                    <Button asChild size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <Link href={resource.href}>
                        Lesen <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schnellzugriff
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Häufig benötigte Links und Ressourcen für den täglichen Gebrauch.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <Link href={link.href} className="text-center block">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-600">{link.description}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}