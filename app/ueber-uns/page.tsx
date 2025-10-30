import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Compass, Rocket, ArrowRight, Star } from "lucide-react"

export default function AboutUs() {
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
                <Star className="h-4 w-4 mr-2" />
                <span>Seit 2018 im DACH-Raum</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Über <span className="text-gradient-purple animate-gradient">Leadboom</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Wir sind Experten für Lead-Generierung und unterstützen Marketing-Agenturen im DACH-Raum dabei, mehr
                Kunden zu gewinnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="purple-glow">
                  <Link href="/kontakt" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="purple-glow">
                  <Link href="/leistungen">Unsere Produkte</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] animate-float">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Leadboom Team"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">5+ Jahre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Improved layout and visuals */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-purple-100/20 backdrop-blur-sm z-10 rounded-2xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Unsere Geschichte"
                fill
                className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/70 to-transparent p-6 z-20">
                <h3 className="text-white text-xl font-bold">Unsere Reise seit 2025</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-sm font-medium mb-2">
                Unsere Geschichte
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Von der Vision zur Realität</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Leadboom wurde 2025 mit einer klaren Vision gegründet: Marketing-Agenturen dabei zu helfen, mehr
                  qualifizierte Leads zu generieren und ihre Kunden erfolgreicher zu machen.
                </p>
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Was als kleines Team von Lead-Generierungs-Experten begann, hat sich zu einem umfassenden Anbieter
                  entwickelt, der innovative Lösungen in den Bereichen Lead-Generierung und CRM
                  anbietet.
                </p>
                <p className="relative pl-6 border-l-2 border-purple-200">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 transform -translate-x-[5px] mt-2"></span>
                  Heute arbeiten wir mit unzähligen Marketing-Agenturen im gesamten DACH-Raum zusammen und helfen ihnen,
                  mit qualifizierten Leads überschüttet zu werden.
                </p>
              </div>
              <Button asChild variant="outline" className="mt-4 purple-glow">
                <Link href="/karriere">Karriere bei Leadboom</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Enhanced with better cards and animations */}
      <section id="vision-mission" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Unsere Werte
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Vision und Mission leiten uns bei allem, was wir tun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-left">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Unsere Vision</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Wir streben danach, der führende Anbieter für Lead-Generierung und -Management im DACH-Raum zu sein
                  und Marketing-Agenturen mit den besten Tools für ihre Kundengewinnung auszustatten.
                </p>
                <ul className="space-y-4">
                  {[
                    "Revolutionierung der Lead-Generierung",
                    "Maximierung des Erfolgs unserer Kunden",
                    "Entwicklung innovativer Lead-Management-Lösungen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                        <CheckCircle className="h-3 w-3 text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-right">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <Compass className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Unsere Mission</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Unsere Mission ist es, Marketing-Agenturen mit qualitativ hochwertigen Leads und leistungsstarken
                  Tools auszustatten, damit sie mehr Kunden gewinnen und ihr Geschäft ausbauen können.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bereitstellung qualifizierter Leads für jede Zielgruppe",
                    "Entwicklung effektiver E-Mail-Marketing-Tools",
                    "Aufbau langfristiger Partnerschaften mit Agenturen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                        <CheckCircle className="h-3 w-3 text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Improved layout and card design */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Das Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Die Menschen hinter Leadboom</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lerne die Menschen kennen, die Leadboom zu dem machen, was es ist.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Geschäftsführung</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Thomas Müller",
                  position: "CEO & Gründer",
                  bio: "Dr. Thomas Müller bringt über 10 Jahre Erfahrung in der Lead-Generierung mit. Er hat Leadboom mit der Vision gegründet, Marketing-Agenturen mit qualifizierten Leads zu versorgen.",
                },
                {
                  name: "Sarah Schmidt",
                  position: "COO",
                  bio: "Sarah Schmidt ist verantwortlich für die operativen Geschäfte bei Leadboom. Mit ihrer Expertise in E-Mail-Marketing sorgt sie für optimale Kampagnen und Kundenzufriedenheit.",
                },
                {
                  name: "Michael Weber",
                  position: "CTO",
                  bio: "Michael Weber leitet die technologische Entwicklung bei Leadboom. Er ist ein Visionär im Bereich der Lead-Scraping-Technologie und treibt die Entwicklung neuer Tools voran.",
                },
              ].map((executive, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${executive.name}`}
                      alt={executive.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm">{executive.bio}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h4 className="text-xl font-bold">{executive.name}</h4>
                    <p className="text-purple-600 font-medium">{executive.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Unser Expertenteam</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Anna Becker", position: "Lead-Generierungs-Expertin" },
                { name: "Markus Klein", position: "E-Mail-Marketing-Spezialist" },
                { name: "Julia Schneider", position: "CRM-Entwicklerin" },
                { name: "David Wagner", position: "Datenanalyst" },
                { name: "Laura Hoffmann", position: "Kundenbetreuerin" },
                { name: "Felix Richter", position: "Lead-Scraping-Experte" },
                { name: "Nina Schulz", position: "Vertriebsleiterin" },
                { name: "Robert Fischer", position: "Telefon-Bot-Entwickler" },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=${member.name.charAt(0)}`}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-4 bg-white">
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-gray-600">{member.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects - Enhanced with better visuals */}
      <section id="zukunftsprojekte" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200/30 rounded-tr-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Die Zukunft
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zukunftsprojekte</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecke, woran wir arbeiten und wie wir die Zukunft der Lead-Generierung gestalten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "KI-gestützte Lead-Qualifizierung",
                description:
                  "Wir entwickeln KI-gestützte Lösungen, die Leads automatisch qualifizieren und nach Kaufwahrscheinlichkeit bewerten, um deine Conversion-Rate zu maximieren.",
                image: "KI-Lösungen",
              },
              {
                title: "Internationale Lead-Listen",
                description:
                  "Wir erweitern unser Angebot um internationale Lead-Listen, um Agenturen dabei zu unterstützen, ihre Kunden auch über den DACH-Raum hinaus zu bedienen.",
                image: "Internationale Expansion",
              },
              {
                title: "Erweiterte Automatisierung",
                description:
                  "Wir arbeiten an noch umfassenderen Automatisierungslösungen, die den gesamten Prozess von der Lead-Generierung bis zum Abschluss nahtlos integrieren.",
                image: "Erweiterte Automatisierung",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center">
                      <div className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Rocket className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-gray-600">{project.description}</p>
                  <Button variant="link" className="p-0 mt-4 text-purple-600 hover:text-purple-800 transition-colors">
                    Mehr erfahren →
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
              Kontaktiere uns noch heute für eine kostenlose Demo unserer Produkte.
            </p>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine animate-fade-in animate-delay-400"
            >
              <Link href="/kontakt">
                <span className="flex items-center">
                  Get Started
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

