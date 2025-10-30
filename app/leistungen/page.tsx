import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  MessageSquare,
  TrendingUp,
  FileText,
  Cog,
  Users,
  Calendar,
  Phone,
  Shield,
  Zap,
  RefreshCw,
  Sparkles,
  Building2,
  Workflow,
  Clock,
  PenTool,
} from "lucide-react"

export default function PlatformOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with better visuals */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-purple-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200/30 rounded-tr-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-2">
                <Building2 className="h-4 w-4 mr-2" />
                <span>Das Betriebssystem für erfolgreiche Agenturen</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Die komplette <span className="text-gradient-purple animate-gradient">Plattform</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Von der Lead-Generierung bis zur Projekt-Lieferung – eine einzige Plattform für Ihr gesamtes Agentur-Management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="purple-glow">
                  <Link href="/kontakt" className="flex items-center">
                    Platform Get Started
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="purple-glow">
                  <Link href="#platform-modules">Zu den Modulen</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] animate-float">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Leadboom Produkte"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-sm text-center">500+ Agenturen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview - Enhanced with better cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Übersicht
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plattform-Module im Überblick</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eine einzige Plattform für alle Geschäftsprozesse – vom ersten Kundenkontakt bis zur erfolgreichen Projektlieferung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" id="platform-modules">
            {[
              {
                icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
                title: "Command Center",
                description: "Zentrale Steuerung mit Cash Flow Analytics, KPI-Dashboards und Team Performance Metrics.",
                link: "#command-center",
              },
              {
                icon: <Target className="h-6 w-6 text-purple-600" />,
                title: "Lead Scraping",
                description: "Self-Service Lead-Scraping mit professionellen Scraping-Tools für hochqualitative Datensätze.",
                link: "#lead-scraping",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
                title: "Sales Pipeline",
                description: "Verkaufsprozess-Optimierung mit automatischen Follow-ups und Conversion Analytics.",
                link: "#sales-pipeline",
              },
              {
                icon: <FileText className="h-6 w-6 text-purple-600" />,
                title: "Digital Contract Suite",
                description: "Papierlose Vertragsabwicklung mit Quote Generation, Digital Signatures und Payment Tracking.",
                link: "#contract-suite",
              },
              {
                icon: <PenTool className="h-6 w-6 text-purple-600" />,
                title: "Leadsign",
                description: "Digitale Vertragsunterschrift - Versende Angebote und hole rechtssichere Signaturen ein wie DocuSign.",
                link: "#leadsign",
              },
              {
                icon: <Cog className="h-6 w-6 text-purple-600" />,
                title: "Fulfillment Automation",
                description: "Projektabwicklung mit automatisierten Workflows, Progress Tracking und Team Collaboration.",
                link: "#fulfillment-automation",
              },
              {
                icon: <Users className="h-6 w-6 text-purple-600" />,
                title: "Client Collaboration",
                description: "Kunde-Agentur Zusammenarbeit mit Digital Whiteboards und Project Communication Center.",
                link: "#client-collaboration",
              },
              {
                icon: <Calendar className="h-6 w-6 text-purple-600" />,
                title: "Smart Calendar",
                description: "Intelligentes Terminmanagement mit Google Integration und automatischen Booking Links.",
                link: "#smart-calendar",
              },
              {
                icon: <Phone className="h-6 w-6 text-purple-600" />,
                title: "Voice Automation",
                description: "KI-Telefonie mit Natural Language Processing und Multi-Language Support.",
                link: "#voice-automation",
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="bg-white card-hover animate-fade-in border-none shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {module.icon}
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-sm">{module.description}</p>
                  <Button asChild variant="outline" className="w-full purple-glow">
                    <Link href={module.link} className="flex items-center justify-center">
                      Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Dashboard - Enhanced with better layout and visuals */}
      <section id="command-center" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Command Center Dashboard"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-sm text-center">Real-time KPIs</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-600 text-sm font-medium">
                Command Center
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Zentrale Steuerung Deiner Agentur</h2>
              <p className="text-lg text-gray-600">
                Behalte den Überblick über alle wichtigen Kennzahlen Deiner Agentur. Von Cash Flow Analytics bis zu Team Performance Metrics – alles in einem zentralen Dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  "Cash Flow & Revenue Analytics in Echtzeit",
                  "Customer Acquisition Cost (CAC) Tracking",
                  "Lifetime Value (LTV) Monitoring",
                  "Team Performance Metrics & Auslastung",
                  "Automatische KPI-Berichte und Alerts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="purple-glow mt-4">
                <Link href="/kontakt" className="flex items-center">
                  Dashboard Get Started
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Contract Suite - Enhanced with better layout and visuals */}
      <section id="contract-suite" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital Contract Suite"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-sm text-center">Papierlos</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Digital Contract Suite
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Papierlose Vertragsabwicklung</h2>
              <p className="text-lg text-gray-600">
                Revolutioniere Deinen Vertragsabschluss mit automatischer Quote Generation, digitalen Signaturen und integriertem Payment Tracking. Von der Anfrage bis zur Bezahlung – alles digital.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatische Quote & Proposal Generation",
                  "Digitale Signatur-Workflows mit Rechtssicherheit",
                  "Invoice & Credit Note Management",
                  "Integriertes Payment Tracking",
                  "Compliance-konforme Dokumentenverwaltung",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4">
                <Link href="/kontakt" className="flex items-center">
                  Contract Suite testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment Automation - Enhanced with better layout and visuals */}
      <section id="fulfillment-automation" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-first order-last animate-slide-left">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Fulfillment Automation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Automatisierte Projektabwicklung</h2>
              <p className="text-lg text-gray-600">
                Revolutioniere Deine Projektabwicklung mit kundenspezifischen Task-Workflows. Automatische Task-Population, Progress Tracking und nahtlose Team Collaboration für maximale Effizienz.
              </p>
              <ul className="space-y-4">
                {[
                  "Client-specific Task Workflows mit Automatisierung",
                  "Intelligente automatische Task Population",
                  "Real-time Progress Tracking & Reporting",
                  "Team Collaboration Tools mit Kommentaren",
                  "Deadline-Management mit automatischen Alerts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4">
                <Link href="/kontakt" className="flex items-center">
                  Fulfillment System testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] animate-slide-right">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fulfillment Automation"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-sm text-center">85% Automatisiert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Collaboration Hub - Enhanced with better layout and visuals */}
      <section id="client-collaboration" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Client Collaboration Hub"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-sm text-center">Kollaborativ</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Client Collaboration Hub
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Kunde-Agentur Zusammenarbeit</h2>
              <p className="text-lg text-gray-600">
                Fördere die Zusammenarbeit mit Deinen Kunden durch gemeinsame Digital Whiteboards, zentrales Document Management und ein integriertes Project Communication Center.
              </p>
              <ul className="space-y-4">
                {[
                  "Shared Digital Whiteboards für Brainstorming",
                  "Zentrales Document Management System",
                  "Project Communication Center mit Chat",
                  "Client Portal Access für Transparenz",
                  "Feedback-Workflows mit Approval-System",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4">
                <Link href="/kontakt" className="flex items-center">
                  Collaboration Hub testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Process Flow - New Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Prozess-Automatisierung
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vom Lead bis zur Lieferung – alles automatisiert</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sieh, wie unsere Platform jeden Schritt Deines Geschäftsprozesses optimiert und automatisiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Lead Scraping",
                description: "Scrape hochqualitative Datensätze selbst mit unseren Tools für erfolgreiche Kaltakquise",
                icon: <Target className="h-8 w-8 text-purple-600" />,
                automation: "85% automatisiert"
              },
              {
                step: "02",
                title: "Qualification",
                description: "Voice Automation qualifiziert Leads und bucht Termine direkt in Deinen Kalender",
                icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
                automation: "90% automatisiert"
              },
              {
                step: "03",
                title: "Contract & Payment",
                description: "Digitale Vertragsabwicklung mit automatischen Quotes, Signaturen und Payment Tracking",
                icon: <FileText className="h-8 w-8 text-purple-600" />,
                automation: "95% automatisiert"
              },
              {
                step: "04",
                title: "Fulfillment & Delivery",
                description: "Client-spezifische Workflows mit automatischer Task-Population und Progress Tracking",
                icon: <Cog className="h-8 w-8 text-purple-600" />,
                automation: "80% automatisiert"
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <Card className="h-full bg-white shadow-lg border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      {process.icon}
                    </div>
                    <div className="text-sm font-bold text-purple-600 mb-2">{process.step}</div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm mb-4">{process.description}</p>
                    <div className="inline-block bg-purple-50 px-3 py-1 rounded-full text-purple-700 text-xs font-medium">
                      {process.automation}
                    </div>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Prozess-Automatisierung Statistiken</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">85%</div>
                  <div className="text-sm text-purple-600">Routine-Tasks automatisiert</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">60%</div>
                  <div className="text-sm text-purple-600">Schnellere Projektlieferung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">40%</div>
                  <div className="text-sm text-purple-600">Höhere Kundenzufriedenheit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">25%</div>
                  <div className="text-sm text-purple-600">Höhere Gewinnmargen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits - Enhanced with better cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Vorteile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform-Vorteile</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Das einzige System, das Agenturen brauchen, um ihr gesamtes Geschäft zu betreiben, zu wachsen und zu skalieren.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Workflow className="h-6 w-6 text-primary" />,
                title: "85% Prozessautomatisierung",
                description:
                  "Automatisiere 85% Deiner Routine-Tasks und gewinne 20+ Stunden pro Woche für strategische Arbeit zurück.",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: "25% Höhere Gewinnmargen",
                description:
                  "Durch optimierte Workflows und reduzierte manuelle Arbeit steigern unsere Kunden ihre Profitabilität um durchschnittlich 25%.",
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "60% Schnellere Projektlieferung",
                description:
                  "Mit automatisierten Fulfillment-Workflows lieferst Du Projekte 60% schneller und steigerst die Kundenzufriedenheit nachhaltig.",
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
                title: "Real-time Analytics",
                description:
                  "Behalte mit unserem Command Center Dashboard alle wichtigen KPIs im Blick – von Cash Flow bis Team Performance.",
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Enterprise-Security",
                description:
                  "DSGVO-konform und bankensicher – unsere Plattform erfüllt höchste Sicherheitsstandards für Deine sensiblen Geschäftsdaten.",
              },
              {
                icon: <Building2 className="h-6 w-6 text-primary" />,
                title: "Skalierbarkeit ohne Grenzen",
                description:
                  "Wachse ohne lineare Kostensteigerung – unsere Plattform skaliert mit Deinem Erfolg und unterstützt Agenturen von 5 bis 500+ Mitarbeiter.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                    <div className="group-hover:text-white transition-all duration-300">{benefit.icon}</div>
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Preise & Pakete
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für <span className="text-gradient-purple">Leadboom</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entdecke unsere flexiblen Abo-Modelle und das Credits-System. Von kleinen Teams bis zu großen Organisationen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="purple-glow">
                <Link href="/preise" className="flex items-center">
                  Alle Preise ansehen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="purple-glow">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">ab 59,99€</div>
                  <div className="text-sm text-gray-600">Monatlich starten</div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Flexible Credits</div>
                  <div className="text-sm text-gray-600">Kaufen oder Abo</div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5 Add-Ons</div>
                  <div className="text-sm text-gray-600">Jederzeit erweiterbar</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with better visuals */}
      <section className="relative overflow-hidden py-24">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 animate-gradient"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Animated blobs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl animate-blob"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white animate-fade-in">
              Bereit, Deine{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Agentur</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              zu revolutionieren?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Entdecke das Betriebssystem für erfolgreiche Agenturen und steigere Deine Effizienz um 85%.
            </p>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine animate-fade-in animate-delay-400"
            >
              <Link href="/kontakt">
                <span className="flex items-center">
                  Platform Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>

            <div className="mt-12 flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <div className="absolute inset-0 bg-purple-600 flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-purple-100">
                <span className="font-bold">500+</span> erfolgreiche Agenturen
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

