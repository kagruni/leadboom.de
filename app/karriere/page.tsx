import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Coffee, Clock, Users, Heart, Zap, Award, Star, ChevronDown, Sparkles } from "lucide-react"

export default function Career() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhance  {
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
                <span>Wachse mit uns</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Karriere bei <span className="text-gradient-purple animate-gradient">Leadboom</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Werde Teil eines innovativen Teams und gestalte mit uns die Zukunft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="purple-glow">
                  <Link href="#stellenangebote" className="flex items-center">
                    Offene Stellen
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="purple-glow">
                  <Link href="#bewerbungsprozess">Bewerbungsprozess</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] animate-float">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Karriere bei Leadboom"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
                <span className="text-purple-600 font-bold text-xl">Join us!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-600" />
        </div>
      </section>

      {/* Why Join Us - Enhanced with better cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Vorteile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum Leadboom?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bei Leadboom bieten wir mehr als nur einen Job. Entdecke die Vorteile, die unsere Mitarbeiter
              genießen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="h-6 w-6 text-purple-600" />,
                title: "Work-Life-Balance",
                description:
                  "Wir legen großen Wert auf eine gesunde Work-Life-Balance. Flexible Arbeitszeiten und Home-Office-Möglichkeiten gehören bei uns zum Standard.",
              },
              {
                icon: <Clock className="h-6 w-6 text-purple-600" />,
                title: "Flexible Arbeitszeiten",
                description:
                  "Wir bieten flexible Arbeitszeiten, damit Du Deine beruflichen und privaten Verpflichtungen optimal miteinander vereinbaren kannst.",
              },
              {
                icon: <Users className="h-6 w-6 text-purple-600" />,
                title: "Teamarbeit",
                description:
                  "Bei uns arbeitest Du in einem dynamischen Team mit flachen Hierarchien und einer offenen Kommunikationskultur.",
              },
              {
                icon: <Zap className="h-6 w-6 text-purple-600" />,
                title: "Innovative Projekte",
                description:
                  "Arbeite an spannenden und innovativen Projekten, die einen echten Unterschied machen und die Zukunft gestalten.",
              },
              {
                icon: <Award className="h-6 w-6 text-purple-600" />,
                title: "Weiterbildung",
                description:
                  "Wir fördern Deine persönliche und berufliche Entwicklung durch regelmäßige Weiterbildungsmöglichkeiten und Schulungen.",
              },
              {
                icon: <Heart className="h-6 w-6 text-purple-600" />,
                title: "Gesundheitsförderung",
                description:
                  "Wir bieten verschiedene Programme zur Gesundheitsförderung, von Sportangeboten bis hin zu ergonomischen Arbeitsplätzen.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="card-hover animate-fade-in border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-all duration-300">
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

      {/* Job Listings - Enhanced with better cards */}
      <section id="stellenangebote" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Jobs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Offene Stellen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecke unsere aktuellen Stellenangebote und finde die Position, die zu Dir passt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Senior Berater (m/w/d)",
                department: "Beratung",
                location: "Berlin",
                type: "Vollzeit",
                description:
                  "Als Senior Berater bist Du verantwortlich für die strategische Beratung unserer Kunden und die Leitung von Projekten.",
              },
              {
                title: "Softwareentwickler (m/w/d)",
                department: "Entwicklung",
                location: "München",
                type: "Vollzeit",
                description:
                  "Als Softwareentwickler arbeitest Du an der Entwicklung innovativer Lösungen für unsere Kunden.",
              },
              {
                title: "UX/UI Designer (m/w/d)",
                department: "Design",
                location: "Hamburg",
                type: "Vollzeit",
                description:
                  "Als UX/UI Designer gestaltest Du benutzerfreundliche und ästhetisch ansprechende Interfaces für unsere digitalen Produkte.",
              },
              {
                title: "Marketing Manager (m/w/d)",
                department: "Marketing",
                location: "Berlin",
                type: "Vollzeit",
                description:
                  "Als Marketing Manager bist Du verantwortlich für die Planung und Umsetzung unserer Marketingstrategien.",
              },
              {
                title: "Werkstudent (m/w/d)",
                department: "Verschiedene Abteilungen",
                location: "Berlin, München, Hamburg",
                type: "Teilzeit",
                description:
                  "Als Werkstudent unterstützt Du unser Team in verschiedenen Projekten und sammelst wertvolle praktische Erfahrungen.",
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <Button asChild className="mt-4 md:mt-0 purple-glow">
                      <Link href={`/karriere/jobs/${index + 1}`} className="flex items-center">
                        Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in animate-delay-700">
            <p className="text-gray-600 mb-6">
              Keine passende Stelle gefunden? Wir freuen uns auch über Initiativbewerbungen!
            </p>
            <Button asChild variant="outline" className="purple-glow">
              <Link href="/kontakt" className="flex items-center">
                Initiativbewerbung senden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process - Enhanced with better visuals */}
      <section id="bewerbungsprozess" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Prozess
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Bewerbungsprozess</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">So läuft der Bewerbungsprozess bei Leadboom ab.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {[
                {
                  step: "1",
                  title: "Bewerbung einreichen",
                  description:
                    "Reiche Deine Bewerbung online ein. Bitte füge Deinen Lebenslauf und ein Anschreiben bei.",
                },
                {
                  step: "2",
                  title: "Erstes Gespräch",
                  description:
                    "Bei Interesse laden wir Dich zu einem ersten Gespräch ein, das telefonisch oder per Videocall stattfinden kann.",
                },
                {
                  step: "3",
                  title: "Persönliches Kennenlernen",
                  description:
                    "Im nächsten Schritt lernst Du unser Team persönlich kennen und erhältst einen Einblick in unsere Arbeitsweise.",
                },
                {
                  step: "4",
                  title: "Angebot & Onboarding",
                  description:
                    "Bei gegenseitigem Interesse unterbreiten wir Dir ein Angebot und starten den Onboarding-Prozess.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16 md:row-start-2"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`md:absolute md:top-0 ${index % 2 === 0 ? "md:right-0" : "md:left-0"} md:transform ${index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"} bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10`}
                  >
                    {step.step}
                  </div>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials - Enhanced with better cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Erfahrungen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Mitarbeiter sagen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfahre aus erster Hand, wie es ist, bei Leadboom zu arbeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Julia Becker",
                position: "Senior Beraterin",
                testimonial:
                  "Bei Leadboom habe ich die Möglichkeit, an spannenden Projekten zu arbeiten und mich kontinuierlich weiterzuentwickeln. Die Arbeitsatmosphäre ist großartig und die Work-Life-Balance wird wirklich gelebt.",
              },
              {
                name: "Markus Schmidt",
                position: "Softwareentwickler",
                testimonial:
                  "Was mir an Leadboom besonders gefällt, ist die Möglichkeit, mit den neuesten Technologien zu arbeiten und innovative Lösungen zu entwickeln. Das Team ist großartig und die Zusammenarbeit macht wirklich Spaß.",
              },
              {
                name: "Laura Wagner",
                position: "UX Designerin",
                testimonial:
                  "Leadboom bietet mir die perfekte Umgebung, um kreativ zu sein und meine Ideen einzubringen. Die flachen Hierarchien und die offene Kommunikationskultur schätze ich besonders.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100/50 rounded-bl-full -z-10"></div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-purple-200">"</span>
                    <span className="relative z-10">{testimonial.testimonial}</span>
                    <span className="absolute -bottom-6 -right-2 text-4xl text-purple-200">"</span>
                  </p>
                  <div className="flex items-center mt-8">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 border-2 border-purple-200">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better visuals */}
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
              Bereit, Teil unseres{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Teams</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              zu werden?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Bewirb Dich jetzt und starte Deine Karriere bei Leadboom.
            </p>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine animate-fade-in animate-delay-400"
            >
              <Link href="#stellenangebote" className="flex items-center px-8 py-4 text-base">
                <span>Offene Stellen ansehen</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
                <span className="font-bold">Werde Teil</span> unseres Teams
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

