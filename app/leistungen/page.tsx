import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowRight,
  Database,
  Mail,
  Users,
  Phone,
  BarChart,
  Search,
  Shield,
  Zap,
  RefreshCw,
  Sparkles,
} from "lucide-react"

export default function Services() {
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
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Innovative Lösungen für Ihr Business</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Unsere <span className="text-gradient-purple animate-gradient">Produkte</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Entdecken Sie unsere leistungsstarken Tools für erfolgreiches Lead-Management und Kundengewinnung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="purple-glow">
                  <Link href="/kontakt" className="flex items-center">
                    Demo anfordern
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="purple-glow">
                  <Link href="#lead-listen">Zu den Produkten</Link>
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
                <span className="text-purple-600 font-bold text-xl">500+ Kunden</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Produkte im Überblick</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leadboom bietet eine umfassende Suite an Tools, die Marketing-Agenturen dabei unterstützen, mehr Leads zu
              generieren und zu konvertieren.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Database className="h-6 w-6 text-purple-600" />,
                title: "Lead-Listen",
                description: "Zielgruppenspezifische Lead-Listen mit privaten Kontaktdaten für maximalen Erfolg.",
                link: "#lead-listen",
              },
              {
                icon: <Search className="h-6 w-6 text-purple-600" />,
                title: "Lead-Scraping",
                description: "Automatisierte Tools zum Sammeln von qualifizierten Leads aus verschiedenen Quellen.",
                link: "#lead-scraping",
              },
              {
                icon: <Mail className="h-6 w-6 text-purple-600" />,
                title: "Coldmailer",
                description:
                  "Leistungsstarkes E-Mail-Marketing-Tool für personalisierte Kampagnen mit hohen Erfolgsquoten.",
                link: "#coldmailer",
              },
              {
                icon: <Users className="h-6 w-6 text-purple-600" />,
                title: "CRM-System",
                description:
                  "Intuitives CRM-System mit Telefon-Bot für effizientes Lead-Management und Nachverfolgung.",
                link: "#crm-system",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-white card-hover animate-fade-in border-none shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {product.icon}
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Button asChild variant="outline" className="w-full purple-glow">
                    <Link href={product.link} className="flex items-center justify-center">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Lists - Enhanced with better layout and visuals */}
      <section id="lead-listen" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Lead-Listen"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">5M+ Leads</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-600 text-sm font-medium">
                Lead-Listen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Qualifizierte Leads für jede Zielgruppe</h2>
              <p className="text-lg text-gray-600">
                Unsere Lead-Listen bieten Ihnen Zugang zu tausenden qualifizierten Kontakten mit privaten
                E-Mail-Adressen und detaillierten Informationen. Alle Listen sind nach Branchen, Positionen und Regionen
                segmentiert, um Ihnen genau die Leads zu liefern, die Sie benötigen.
              </p>
              <ul className="space-y-4">
                {[
                  "Über 5 Millionen verifizierte Kontakte im DACH-Raum",
                  "Private E-Mail-Adressen mit hoher Zustellrate",
                  "Detaillierte Informationen zu jedem Kontakt",
                  "Regelmäßige Updates und Verifizierung",
                  "Branchenspezifische Segmentierung",
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
                  Lead-Listen anfragen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Scraping - Enhanced with better layout and visuals */}
      <section id="lead-scraping" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-first order-last animate-slide-left">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Lead-Scraping
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Automatisierte Lead-Generierung</h2>
              <p className="text-lg text-gray-600">
                Unser Lead-Scraping-Tool sammelt automatisch qualifizierte Leads aus verschiedenen Quellen wie sozialen
                Netzwerken, Unternehmenswebseiten und Branchenverzeichnissen. Sie erhalten kontinuierlich frische Leads,
                die genau Ihren Zielgruppenkriterien entsprechen.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatisierte Lead-Generierung rund um die Uhr",
                  "Präzise Zielgruppendefinition",
                  "Extraktion von Kontaktdaten und relevanten Informationen",
                  "Automatische Verifizierung und Validierung der Kontaktdaten",
                  "Nahtlose Integration mit unserem CRM-System",
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
                  Lead-Scraping testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] animate-slide-right">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Lead-Scraping"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">24/7 Aktiv</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coldmailer - Enhanced with better layout and visuals */}
      <section id="coldmailer" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Coldmailer"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">35% Öffnungsrate</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Coldmailer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Professionelles E-Mail-Marketing</h2>
              <p className="text-lg text-gray-600">
                Unser Coldmailer ist ein leistungsstarkes E-Mail-Marketing-Tool, das speziell für die Erstansprache und
                Nachverfolgung von Leads entwickelt wurde. Mit personalisierten Kampagnen, automatisierten Follow-ups
                und detaillierten Analysen maximieren Sie Ihre Conversion-Rate.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalisierte E-Mail-Kampagnen",
                  "Automatisierte Follow-up-Sequenzen",
                  "A/B-Testing für optimale Ergebnisse",
                  "Detaillierte Analysen und Berichte",
                  "Hohe Zustellraten durch optimierte Versandinfrastruktur",
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
                  Coldmailer testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRM System - Enhanced with better layout and visuals */}
      <section id="crm-system" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-first order-last animate-slide-left">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                CRM-System
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Effizientes Lead-Management</h2>
              <p className="text-lg text-gray-600">
                Unser intuitives CRM-System hilft Ihnen, Ihre Leads effizient zu verwalten und zu konvertieren. Mit dem
                integrierten Telefon-Bot automatisieren Sie die Nachverfolgung und sparen wertvolle Zeit bei der
                Kundenakquise.
              </p>
              <ul className="space-y-4">
                {[
                  "Übersichtliches Lead-Management",
                  "Integrierter Telefon-Bot für automatisierte Anrufe",
                  "Nahtlose Integration mit Coldmailer und Lead-Listen",
                  "Automatisierte Workflows und Erinnerungen",
                  "Umfassende Reporting- und Analysefunktionen",
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
                  CRM-System testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] animate-slide-right">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="CRM-System"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">All-in-One</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telephone Bot - Enhanced with better layout and visuals */}
      <section id="telefon-bot" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] animate-slide-left">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Telefon-Bot"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">KI-gestützt</span>
              </div>
            </div>
            <div className="space-y-6 animate-slide-right">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                Telefon-Bot
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Automatisierte Telefonakquise</h2>
              <p className="text-lg text-gray-600">
                Unser innovativer Telefon-Bot revolutioniert Ihre Telefonakquise. Er führt automatisierte Erstgespräche,
                qualifiziert Leads und vereinbart Termine – rund um die Uhr und in mehreren Sprachen.
              </p>
              <ul className="space-y-4">
                {[
                  "KI-gestützte Gesprächsführung",
                  "Automatische Lead-Qualifizierung",
                  "Terminvereinbarung direkt im Kalender",
                  "Mehrsprachige Unterstützung (DE, AT, CH)",
                  "Nahtlose Integration mit dem CRM-System",
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
                  Telefon-Bot testen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Enhanced with better cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Vorteile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum Leadboom?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Plattform bietet einzigartige Vorteile, die Ihnen helfen, Ihre Lead-Generierung zu revolutionieren.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Datenschutzkonform",
                description:
                  "Unsere Prozesse sind so gestaltet, dass Sie rechtssicher arbeiten können. Wir bieten Ihnen alle notwendigen Informationen und Tools für eine datenschutzkonforme Nutzung.",
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Hohe Erfolgsquoten",
                description:
                  "Durch die Kombination aus qualitativ hochwertigen Leads und optimierten Kampagnen erzielen unsere Kunden überdurchschnittliche Erfolgsquoten bei der Neukundengewinnung.",
              },
              {
                icon: <RefreshCw className="h-6 w-6 text-primary" />,
                title: "All-in-One-Lösung",
                description:
                  "Von der Lead-Generierung über die Kontaktaufnahme bis hin zum Abschluss – unsere integrierte Plattform deckt den gesamten Prozess der Kundengewinnung ab.",
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Detaillierte Analysen",
                description:
                  "Umfassende Berichte und Analysen geben Ihnen tiefe Einblicke in die Performance Ihrer Kampagnen und helfen Ihnen, Ihre Strategie kontinuierlich zu optimieren.",
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Persönlicher Support",
                description:
                  "Unser erfahrenes Support-Team steht Ihnen jederzeit zur Verfügung, um Ihnen bei Fragen zu helfen und sicherzustellen, dass Sie das Maximum aus unseren Tools herausholen.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Spezialisiert auf Agenturen",
                description:
                  "Unsere Produkte sind speziell auf die Bedürfnisse von Marketing-Agenturen zugeschnitten und bieten Ihnen die Tools, die Sie benötigen, um Ihre Kunden erfolgreich zu machen.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                    <div className="group-hover:text-white transition-all duration-300">{feature.icon}</div>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Enhanced with better cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Preise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preismodelle</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "€499",
                popular: false,
                features: [
                  "500 verifizierte Leads pro Monat",
                  "Coldmailer mit 5.000 E-Mails/Monat",
                  "Basis CRM-Funktionen",
                  "E-Mail-Support",
                ],
              },
              {
                title: "Professional",
                price: "€999",
                popular: true,
                features: [
                  "2.000 verifizierte Leads pro Monat",
                  "Coldmailer mit 20.000 E-Mails/Monat",
                  "Vollständiges CRM-System",
                  "Telefon-Bot (100 Anrufe/Monat)",
                  "Prioritäts-Support",
                ],
              },
              {
                title: "Enterprise",
                price: "€2499",
                popular: false,
                features: [
                  "Unbegrenzte verifizierte Leads",
                  "Coldmailer mit unbegrenzten E-Mails",
                  "Premium CRM-System mit API-Zugang",
                  "Telefon-Bot (unbegrenzte Anrufe)",
                  "Dedizierter Account Manager",
                  "White-Label-Option",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`bg-white relative border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? "md:scale-105 z-10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </div>
                )}
                <CardHeader className={`text-center pb-2 ${plan.popular ? "bg-purple-50 rounded-t-lg" : ""}`}>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-4xl font-bold mt-4">
                    {plan.price}
                    <span className="text-base font-normal">/Monat</span>
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                    <Link href="/kontakt">Jetzt starten</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              Bereit, mit{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Leads</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              überschüttet zu werden?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Starten Sie noch heute mit Leadboom und revolutionieren Sie Ihre Lead-Generierung.
            </p>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine animate-fade-in animate-delay-400"
            >
              <Link href="/kontakt">
                <span className="flex items-center">
                  Kostenlose Demo anfordern
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
                <span className="font-bold">500+</span> zufriedene Kunden
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

