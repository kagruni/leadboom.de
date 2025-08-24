import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, XCircle, HelpCircle, ArrowRight, Sparkles, Shield, Clock, Zap, Users, Award } from "lucide-react"

export default function Preise() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-purple-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200/30 rounded-tr-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Transparente Preisgestaltung</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Unsere <span className="text-gradient-purple animate-gradient">Preise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt. Alle Pläne beinhalten Zugang zu unseren
              leistungsstarken Tools für Lead-Generierung und -Management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="purple-glow">
                <Link href="#preismodelle" className="flex items-center">
                  Preise ansehen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="purple-glow">
                <Link href="#vergleich">Leistungsvergleich</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="preismodelle" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Preismodelle
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wählen Sie Ihren Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir bieten flexible Preismodelle, die auf die Bedürfnisse von Marketing-Agenturen jeder Größe
              zugeschnitten sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "€499",
                period: "/Monat",
                description: "Ideal für kleine Agenturen, die gerade erst mit der Lead-Generierung beginnen.",
                popular: false,
                features: [
                  "500 verifizierte Leads pro Monat",
                  "Coldmailer mit 5.000 E-Mails/Monat",
                  "Basis CRM-Funktionen",
                  "E-Mail-Support",
                  "1 Benutzer-Zugang",
                  "Wöchentliche Lead-Updates",
                  "Grundlegende Reporting-Funktionen",
                ],
                cta: "Jetzt starten",
                link: "/kontakt?plan=starter",
              },
              {
                title: "Professional",
                price: "€999",
                period: "/Monat",
                description: "Perfekt für wachsende Agenturen mit steigendem Lead-Bedarf.",
                popular: true,
                features: [
                  "2.000 verifizierte Leads pro Monat",
                  "Coldmailer mit 20.000 E-Mails/Monat",
                  "Vollständiges CRM-System",
                  "Telefon-Bot (100 Anrufe/Monat)",
                  "Prioritäts-Support",
                  "5 Benutzer-Zugänge",
                  "Tägliche Lead-Updates",
                  "Erweiterte Reporting-Funktionen",
                  "A/B-Testing für E-Mail-Kampagnen",
                  "Integrationen mit gängigen Tools",
                ],
                cta: "Beliebteste Wahl",
                link: "/kontakt?plan=professional",
              },
              {
                title: "Enterprise",
                price: "€2499",
                period: "/Monat",
                description: "Die umfassende Lösung für etablierte Agenturen mit hohem Lead-Volumen.",
                popular: false,
                features: [
                  "Unbegrenzte verifizierte Leads",
                  "Coldmailer mit unbegrenzten E-Mails",
                  "Premium CRM-System mit API-Zugang",
                  "Telefon-Bot (unbegrenzte Anrufe)",
                  "Dedizierter Account Manager",
                  "White-Label-Option",
                  "Unbegrenzte Benutzer-Zugänge",
                  "Echtzeit-Lead-Updates",
                  "Benutzerdefinierte Reporting-Dashboards",
                  "Fortschrittliche A/B-Testing-Funktionen",
                  "Benutzerdefinierte Integrationen",
                  "Strategische Beratung",
                ],
                cta: "Kontakt aufnehmen",
                link: "/kontakt?plan=enterprise",
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
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
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
                    <Link href={plan.link}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Alle Preise verstehen sich zzgl. MwSt. Jährliche Abonnements erhalten 2 Monate gratis.
            </p>
            <p className="text-gray-600">
              Benötigen Sie eine individuelle Lösung?{" "}
              <Link href="/kontakt" className="text-purple-600 hover:underline">
                Kontaktieren Sie uns
              </Link>{" "}
              für ein maßgeschneidertes Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section id="vergleich" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Leistungsvergleich
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vergleichen Sie unsere Pläne</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detaillierter Vergleich aller Features und Leistungen unserer Preismodelle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-bold text-lg">Feature</div>
                <div className="text-center font-bold text-lg">Starter</div>
                <div className="text-center font-bold text-lg">Professional</div>
                <div className="text-center font-bold text-lg">Enterprise</div>
              </div>

              {[
                {
                  category: "Lead-Listen",
                  features: [
                    {
                      name: "Verifizierte Leads",
                      starter: "500/Monat",
                      professional: "2.000/Monat",
                      enterprise: "Unbegrenzt",
                    },
                    { name: "Lead-Updates", starter: "Wöchentlich", professional: "Täglich", enterprise: "Echtzeit" },
                    {
                      name: "Branchenspezifische Segmentierung",
                      starter: "Grundlegend",
                      professional: "Erweitert",
                      enterprise: "Premium",
                    },
                    {
                      name: "Benutzerdefinierte Lead-Filter",
                      starter: "Begrenzt",
                      professional: "Standard",
                      enterprise: "Unbegrenzt",
                    },
                  ],
                },
                {
                  category: "Coldmailer",
                  features: [
                    {
                      name: "E-Mail-Volumen",
                      starter: "5.000/Monat",
                      professional: "20.000/Monat",
                      enterprise: "Unbegrenzt",
                    },
                    { name: "E-Mail-Vorlagen", starter: "10", professional: "50", enterprise: "Unbegrenzt" },
                    { name: "A/B-Testing", starter: "Nein", professional: "Ja", enterprise: "Erweitert" },
                    {
                      name: "Automatisierte Sequenzen",
                      starter: "Basis",
                      professional: "Erweitert",
                      enterprise: "Premium",
                    },
                  ],
                },
                {
                  category: "CRM-System",
                  features: [
                    { name: "CRM-Funktionen", starter: "Basis", professional: "Vollständig", enterprise: "Premium" },
                    { name: "Benutzer-Zugänge", starter: "1", professional: "5", enterprise: "Unbegrenzt" },
                    { name: "API-Zugang", starter: "Nein", professional: "Begrenzt", enterprise: "Vollständig" },
                    {
                      name: "Integrationen",
                      starter: "Keine",
                      professional: "Standard",
                      enterprise: "Benutzerdefiniert",
                    },
                  ],
                },
                {
                  category: "Telefon-Bot",
                  features: [
                    {
                      name: "Anruf-Volumen",
                      starter: "Nicht enthalten",
                      professional: "100/Monat",
                      enterprise: "Unbegrenzt",
                    },
                    {
                      name: "Gesprächsskripte",
                      starter: "Nicht enthalten",
                      professional: "5",
                      enterprise: "Unbegrenzt",
                    },
                    {
                      name: "Sprachoptionen",
                      starter: "Nicht enthalten",
                      professional: "DE",
                      enterprise: "DE, EN, FR",
                    },
                    {
                      name: "KI-Anpassung",
                      starter: "Nicht enthalten",
                      professional: "Basis",
                      enterprise: "Erweitert",
                    },
                  ],
                },
                {
                  category: "Support & Service",
                  features: [
                    {
                      name: "Support",
                      starter: "E-Mail",
                      professional: "E-Mail & Telefon",
                      enterprise: "Dedizierter Manager",
                    },
                    {
                      name: "Reaktionszeit",
                      starter: "48 Stunden",
                      professional: "24 Stunden",
                      enterprise: "4 Stunden",
                    },
                    { name: "Onboarding", starter: "Selbst", professional: "Geführt", enterprise: "Persönlich" },
                    { name: "Strategische Beratung", starter: "Nein", professional: "Begrenzt", enterprise: "Ja" },
                  ],
                },
              ].map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <div className="grid grid-cols-4 gap-4 bg-purple-100 p-2 rounded-lg mb-2">
                    <div className="font-bold">{section.category}</div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  {section.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`grid grid-cols-4 gap-4 p-2 ${featureIndex % 2 === 0 ? "bg-gray-100" : "bg-white"} rounded-lg`}
                    >
                      <div>{feature.name}</div>
                      <div className="text-center">
                        {feature.starter === "Nein" || feature.starter === "Nicht enthalten" ? (
                          <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          feature.starter
                        )}
                      </div>
                      <div className="text-center">
                        {feature.professional === "Nein" || feature.professional === "Nicht enthalten" ? (
                          <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          feature.professional
                        )}
                      </div>
                      <div className="text-center">
                        {feature.enterprise === "Nein" || feature.enterprise === "Nicht enthalten" ? (
                          <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                        ) : (
                          feature.enterprise
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Sonderangebote
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Spezielle Angebote für Sie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitieren Sie von unseren exklusiven Sonderangeboten und Rabatten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-8 bg-gradient-to-r from-purple-600 to-purple-800"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jahresabonnement</h3>
                    <p className="text-purple-600">Sparen Sie 16%</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Bei Abschluss eines Jahresabonnements erhalten Sie 2 Monate gratis. Das entspricht einer Ersparnis von
                  16% gegenüber der monatlichen Zahlung.
                </p>
                <Button asChild className="w-full">
                  <Link href="/kontakt?offer=yearly">Angebot sichern</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-8 bg-gradient-to-r from-purple-600 to-purple-800"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Startup-Rabatt</h3>
                    <p className="text-purple-600">25% Rabatt für Startups</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Startups unter 2 Jahren erhalten 25% Rabatt auf alle Pläne im ersten Jahr. Unterstützen Sie Ihr
                  Wachstum mit unseren leistungsstarken Tools.
                </p>
                <Button asChild className="w-full">
                  <Link href="/kontakt?offer=startup">Rabatt beantragen</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold">Geld-zurück-Garantie</h3>
                </div>
                <p className="text-gray-600">
                  Testen Sie unsere Dienste risikofrei mit unserer 14-tägigen Geld-zurück-Garantie.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold">Kostenlose Migration</h3>
                </div>
                <p className="text-gray-600">
                  Wir unterstützen Sie kostenlos bei der Migration von Ihrem aktuellen Anbieter zu Leadboom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold">Empfehlungsprogramm</h3>
                </div>
                <p className="text-gray-600">
                  Empfehlen Sie uns weiter und erhalten Sie einen Monat kostenlos für jede erfolgreiche Empfehlung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Kundenstimmen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden über uns sagen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfahren Sie, wie Leadboom anderen Marketing-Agenturen geholfen hat, ihr Geschäft zu skalieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Leadboom hat unseren ROI um 300% gesteigert. Die Qualität der Leads ist hervorragend und der Support ist erstklassig. Das Professional-Paket bietet ein ausgezeichnetes Preis-Leistungs-Verhältnis.",
                author: "Sarah Müller",
                company: "Digital Marketing GmbH",
                image: "SM",
                plan: "Professional",
              },
              {
                quote:
                  "Wir haben mit dem Starter-Paket begonnen und sind schnell auf Enterprise umgestiegen. Die unbegrenzten Leads und der dedizierte Account Manager haben unsere Lead-Generierung revolutioniert.",
                author: "Thomas Schmidt",
                company: "Schmidt & Partner",
                image: "TS",
                plan: "Enterprise",
              },
              {
                quote:
                  "Als kleine Agentur war ich zunächst skeptisch, aber das Starter-Paket hat sich bereits im ersten Monat amortisiert. Die Lead-Qualität ist beeindruckend und der Preis absolut fair.",
                author: "Julia Wagner",
                company: "Wagner Marketing",
                image: "JW",
                plan: "Starter",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100/50 rounded-bl-full -z-10"></div>
                  <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-xs font-medium mb-4">
                    {testimonial.plan}-Paket
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen zu unseren Preisen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Preismodellen und Leistungen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Gibt es versteckte Kosten?",
                answer:
                  "Nein, bei Leadboom gibt es keine versteckten Kosten. Alle Preise sind transparent und beinhalten alle  bei Leadboom gibt es keine versteckten Kosten. Alle Preise sind transparent und beinhalten alle in den Paketen aufgeführten Leistungen. Zusätzliche Dienste oder Erweiterungen werden immer klar kommuniziert.",
              },
              {
                question: "Kann ich zwischen den Plänen wechseln?",
                answer:
                  "Ja, Sie können jederzeit zu einem höheren Plan upgraden. Ein Downgrade ist zum Ende der aktuellen Vertragslaufzeit möglich. Kontaktieren Sie einfach unseren Kundenservice, und wir helfen Ihnen beim Wechsel.",
              },
              {
                question: "Wie funktioniert die Abrechnung?",
                answer:
                  "Die Abrechnung erfolgt monatlich oder jährlich im Voraus. Sie können zwischen monatlicher und jährlicher Zahlung wählen, wobei die jährliche Zahlung einen Rabatt von 16% (2 Monate gratis) bietet. Wir akzeptieren alle gängigen Zahlungsmethoden wie Kreditkarte, PayPal und Überweisung.",
              },
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer:
                  "Bei monatlicher Zahlung beträgt die Mindestvertragslaufzeit einen Monat. Bei jährlicher Zahlung beträgt die Mindestvertragslaufzeit ein Jahr. Alle Verträge verlängern sich automatisch, können aber jederzeit vor der Verlängerung gekündigt werden.",
              },
              {
                question: "Sind die Lead-Listen DSGVO-konform?",
                answer:
                  "Ja, alle unsere Lead-Listen sind DSGVO-konform. Wir bieten Ihnen alle notwendigen Informationen und Tools für eine datenschutzkonforme Nutzung. Unsere Experten beraten Sie gerne zu den rechtlichen Aspekten der Lead-Nutzung im DACH-Raum.",
              },
              {
                question: "Kann ich ein individuelles Angebot erhalten?",
                answer:
                  "Ja, für spezielle Anforderungen erstellen wir gerne ein individuelles Angebot. Kontaktieren Sie uns einfach, und wir besprechen Ihre spezifischen Bedürfnisse, um eine maßgeschneiderte Lösung zu entwickeln.",
              },
              {
                question: "Wie kann ich die Dienste testen?",
                answer:
                  "Wir bieten eine kostenlose Demo an, bei der wir Ihnen alle Funktionen im Detail vorstellen. Zudem gewähren wir eine 14-tägige Geld-zurück-Garantie, sodass Sie unsere Dienste risikofrei testen können.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                        <HelpCircle className="h-4 w-4 text-purple-600 group-hover:text-white transition-all duration-300" />
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
            <p className="text-gray-600 mb-6">Haben Sie weitere Fragen? Wir sind gerne für Sie da.</p>
            <Button asChild variant="outline" className="purple-glow">
              <Link href="/kontakt" className="flex items-center">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              Wählen Sie den Plan, der zu Ihnen passt, und starten Sie noch heute mit Leadboom.
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
                <Link href="#preismodelle">
                  <span className="flex items-center">
                    Preise ansehen
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
    </div>
  )
}

