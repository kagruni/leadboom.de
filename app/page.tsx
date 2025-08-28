"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BlurText from "@/components/BlurText"
import TrueFocus from "@/components/TrueFocus"
import GradientBlinds from "@/components/GradientBlinds"
import TargetCursor from "@/components/TargetCursor"
import {
  ArrowRight,
  Database,
  Mail,
  Users,
  Phone,
  Search,
  Zap,
  RefreshCw,
  Star,
  Sparkles,
  Award,
  MessageSquare,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden" 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = rect.height - (e.clientY - rect.top);
          
          // Dispatch custom event to the GradientBlinds component
          const canvas = document.querySelector('.gradient-blinds-container canvas') as HTMLCanvasElement;
          if (canvas) {
            const customEvent = new CustomEvent('heroMouseMove', {
              detail: { x, y, width: rect.width, height: rect.height }
            });
            canvas.dispatchEvent(customEvent);
          }
        }}>
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
          <GradientBlinds
            gradientColors={['#000000', '#4c1d95', '#7c3aed', '#a855f7']}
            angle={45}
            noise={0.1}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.3}
            spotlightSoftness={2}
            spotlightOpacity={2}
            mouseDampening={0.05}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
          <div className="w-full mx-auto">
            <BlurText
              text="Bereit für die volle Kontrolle?"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-8 whitespace-nowrap"
            />
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed">
              Die ultimative Plattform für 
              <span className="text-white font-semibold"> Lead-Generierung</span> und 
              <span className="text-white font-semibold"> Kundengewinnung</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full">
                <Link href="/kontakt" className="flex items-center">
                  Jetzt starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-4 text-lg rounded-full">
                <Link href="/leistungen">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5M+</div>
                <div className="text-sm">Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">35%</div>
                <div className="text-sm">Öffnungsrate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle background animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-pulse"></div>
      </section>

      {/* TrueFocus Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <TrueFocus 
                sentence="Echter Focus"
                manualMode={false}
                blurAmount={5}
                borderColor="#a855f7"
                glowColor="rgba(168, 85, 247, 0.6)"
                animationDuration={0.8}
                pauseBetweenAnimations={1.5}
              />
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-light mt-4">
                auf das Wesentliche im Geschäft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with better visuals and layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Unsere Lösungen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Alles, was Sie für erfolgreiches Lead-Management brauchen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leadboom bietet eine umfassende Suite an Tools, die speziell für Marketing-Agenturen entwickelt wurden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-8 w-8 text-white" />,
                title: "Lead-Listen & Scraping",
                description:
                  "Zielgruppenspezifische Lead-Listen mit privaten Kontaktdaten und automatisierte Tools zum Sammeln von qualifizierten Leads.",
                color: "from-purple-600 to-purple-800",
                delay: 0,
              },
              {
                icon: <Mail className="h-8 w-8 text-white" />,
                title: "Coldmailer",
                description:
                  "Leistungsstarkes E-Mail-Marketing-Tool für personalisierte Kampagnen mit hohen Öffnungs- und Antwortquoten.",
                color: "from-purple-500 to-purple-700",
                delay: 100,
              },
              {
                icon: <Phone className="h-8 w-8 text-white" />,
                title: "CRM & Telefon-Bot",
                description:
                  "Intuitives CRM-System mit integriertem Telefon-Bot für automatisierte Anrufe und effizientes Lead-Management.",
                color: "from-purple-400 to-purple-600",
                delay: 200,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div
                  className={`h-24 bg-gradient-to-r ${feature.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10"></div>
                  <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Button asChild variant="outline" className="w-full purple-glow">
                    <Link
                      href={`/leistungen#${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-center"
                    >
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section with better visuals */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-left">
              <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                Ihre Vorteile
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Marketing-Agenturen Leadboom lieben</h2>
              <p className="text-lg text-gray-600 mb-8">
                Unsere Kunden schätzen die Qualität unserer Leads, die Effizienz unserer Tools und den persönlichen
                Support, den wir bieten. Mit Leadboom können Sie:
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="h-6 w-6 text-purple-600" />,
                    title: "Zielgerichtete Lead-Generierung",
                    description:
                      "Erhalten Sie Zugang zu qualifizierten Leads, die genau Ihren Zielgruppenkriterien entsprechen.",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-purple-600" />,
                    title: "Zeit und Ressourcen sparen",
                    description:
                      "Automatisieren Sie Ihre Lead-Generierung und -Nachverfolgung und konzentrieren Sie sich auf das Wesentliche.",
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
                    title: "Umsatz steigern",
                    description:
                      "Erhöhen Sie Ihre Conversion-Rate und gewinnen Sie mehr Kunden mit unseren leistungsstarken Tools.",
                  },
                  {
                    icon: <Award className="h-6 w-6 text-purple-600" />,
                    title: "Wettbewerbsvorteil sichern",
                    description: "Heben Sie sich von der Konkurrenz ab und bieten Sie Ihren Kunden einen Mehrwert.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mt-1 mr-4 flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                      <div className="group-hover:text-white transition-colors duration-300">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-right">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/30 rounded-full blur-xl"></div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="Marketing-Agenturen lieben Leadboom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center rotate-6 animate-float-slow">
                  <span className="text-purple-600 font-bold text-3xl">95%</span>
                  <span className="text-gray-600 text-sm">Kundenzufriedenheit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section with better visuals */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Zahlen & Fakten
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadboom in Zahlen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere Erfolge sprechen für sich. Hier sind einige Zahlen, die unsere Leistung belegen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5M+",
                label: "Verifizierte Leads",
                icon: <Database className="h-8 w-8 text-purple-600" />,
                delay: 0,
              },
              {
                number: "500+",
                label: "Zufriedene Kunden",
                icon: <Users className="h-8 w-8 text-purple-600" />,
                delay: 200,
              },
              {
                number: "35%",
                label: "Ø Öffnungsrate",
                icon: <Mail className="h-8 w-8 text-purple-600" />,
                delay: 400,
              },
              {
                number: "24/7",
                label: "Support & Service",
                icon: <Phone className="h-8 w-8 text-purple-600" />,
                delay: 600,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-gradient-purple">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section with better visuals */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Prozess
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So funktioniert's</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In nur wenigen Schritten zu mehr qualifizierten Leads und neuen Kunden.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {[
                {
                  step: "01",
                  title: "Bedarfsanalyse",
                  description:
                    "Wir analysieren Ihre Zielgruppe und Ihre Anforderungen, um die optimale Lösung für Sie zu finden.",
                  icon: <Search className="h-6 w-6 text-white" />,
                  align: "right",
                },
                {
                  step: "02",
                  title: "Maßgeschneiderte Lösung",
                  description:
                    "Basierend auf Ihrer Bedarfsanalyse stellen wir Ihnen eine maßgeschneiderte Lösung zusammen.",
                  icon: <Target className="h-6 w-6 text-white" />,
                  align: "left",
                },
                {
                  step: "03",
                  title: "Implementierung",
                  description: "Wir implementieren die Lösung und schulen Ihr Team, damit Sie sofort starten können.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                  align: "right",
                },
                {
                  step: "04",
                  title: "Kontinuierliche Optimierung",
                  description: "Wir optimieren Ihre Lösung kontinuierlich, um maximale Ergebnisse zu erzielen.",
                  icon: <RefreshCw className="h-6 w-6 text-white" />,
                  align: "left",
                },
              ].map((step, index) => (
                <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  <div
                    className={`md:col-span-1 ${step.align === "left" ? "md:order-2" : "md:order-1"} animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-white p-8 rounded-2xl shadow-xl ${step.align === "left" ? "md:ml-8" : "md:mr-8"}`}
                    >
                      <div className="flex items-start">
                        <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`hidden md:flex md:col-span-1 ${step.align === "left" ? "md:order-1 md:justify-end" : "md:order-2 md:justify-start"} items-center`}
                  >
                    <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl z-10">
                      {step.step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with better visuals */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Kundenstimmen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfahren Sie, wie Leadboom Marketing-Agenturen dabei hilft, mehr Kunden zu gewinnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Dank Leadboom konnten wir unsere Neukundengewinnung um 300% steigern. Die Qualität der Leads ist hervorragend und der Support ist erstklassig.",
                author: "Sarah Müller",
                company: "Digital Marketing GmbH",
                image: "SM",
                stars: 5,
                delay: 0,
              },
              {
                quote:
                  "Der Telefon-Bot hat unsere Telefonakquise revolutioniert. Wir sparen Zeit und Ressourcen und können uns auf das Wesentliche konzentrieren.",
                author: "Thomas Schmidt",
                company: "Schmidt & Partner",
                image: "TS",
                stars: 5,
                delay: 200,
              },
              {
                quote:
                  "Die Lead-Listen von Leadboom sind von höchster Qualität. Die privaten E-Mail-Adressen und detaillierten Informationen helfen uns, unsere Zielgruppe präzise anzusprechen.",
                author: "Julia Wagner",
                company: "Wagner Marketing",
                image: "JW",
                stars: 5,
                delay: 400,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${testimonial.delay}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100/50 rounded-bl-full -z-10"></div>

                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-8 relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-purple-200">"</span>
                    <span className="relative z-10">{testimonial.quote}</span>
                    <span className="absolute -bottom-6 -right-2 text-4xl text-purple-200">"</span>
                  </p>

                  <div className="flex items-center mt-8">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 border-2 border-purple-200">
                      <div className="absolute inset-0 bg-purple-600 flex items-center justify-center text-white font-bold">
                        {testimonial.image}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="purple-glow">
              <Link href="/ueber-uns#testimonials" className="flex items-center">
                Mehr Kundenstimmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with better visuals */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Produkten und Dienstleistungen.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Wie funktioniert der Prozess nach der Demo-Anfrage?",
                  answer:
                    "Nach Ihrer Demo-Anfrage kontaktieren wir Sie innerhalb von 24 Stunden, um einen Termin zu vereinbaren. In der Demo zeigen wir Ihnen unsere Produkte und wie sie Ihren spezifischen Anforderungen gerecht werden können.",
                },
                {
                  question: "Sind die Lead-Listen DSGVO-konform?",
                  answer:
                    "Wir bieten Ihnen alle notwendigen Informationen und Tools für eine datenschutzkonforme Nutzung unserer Lead-Listen. Unsere Experten beraten Sie gerne zu den rechtlichen Aspekten der Lead-Nutzung im DACH-Raum.",
                },
                {
                  question: "Wie oft werden die Lead-Listen aktualisiert?",
                  answer:
                    "Unsere Lead-Listen werden kontinuierlich aktualisiert und verifiziert, um sicherzustellen, dass Sie stets Zugang zu aktuellen und qualitativ hochwertigen Kontakten haben. Je nach Paket erhalten Sie täglich, wöchentlich oder monatlich neue Leads.",
                },
                {
                  question: "Kann ich den Coldmailer mit meinem bestehenden CRM-System verbinden?",
                  answer:
                    "Ja, unser Coldmailer lässt sich über APIs mit den gängigsten CRM-Systemen verbinden. Alternativ können Sie auch unser eigenes CRM-System nutzen, das nahtlos mit allen unseren Produkten integriert ist.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                          <MessageSquare className="h-4 w-4 text-purple-600 group-hover:text-white transition-all duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="purple-glow">
                <Link href="/kontakt#faq" className="flex items-center">
                  Mehr FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
              Bereit, mit{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Leads</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              überschüttet zu werden?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Starten Sie noch heute mit Leadboom und revolutionieren Sie Ihre Lead-Generierung mit unseren innovativen
              Tools und Lösungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine"
              >
                <Link href="/kontakt">
                  <span className="flex items-center">
                    Demo anfordern
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="gradient"
                className="group border-2 border-purple-400/30 hover:border-purple-400/50 cta-button btn-pulse"
              >
                <Link href="/leistungen">
                  <span className="flex items-center">
                    Produkte entdecken
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Button>
            </div>

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

      {/* Target Cursor Effect */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
    </div>
  )
}

