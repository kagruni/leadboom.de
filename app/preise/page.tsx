import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, XCircle, HelpCircle, ArrowRight, Sparkles, Shield, Clock, Zap, Users, Award, Building2, TrendingUp, Star } from "lucide-react"

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
              <Building2 className="h-4 w-4 mr-2" />
              <span>Agentur-optimierte Preismodelle</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Das <span className="text-gradient-purple animate-gradient">Betriebssystem</span> für Ihre Agentur
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Von der Lead-Generierung bis zur Projekt-Lieferung – eine Plattform für alles. 
              Preise basierend auf Ihrer Teamgröße, nicht auf Lead-Volumen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="purple-glow">
                <Link href="#preismodelle" className="flex items-center">
                  Preise ansehen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="purple-glow">
                <Link href="#roi-garantie">ROI Garantie</Link>
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
              Agentur-Preismodelle
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wählen Sie Ihre Agentur-Größe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Preismodelle basierend auf Teamgröße und Automatisierungsgrad - nicht auf Lead-Volumen.
              Skalieren Sie Ihr Business, ohne linear mehr zu bezahlen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter Agency",
                price: "€799",
                period: "/Monat",
                teamSize: "1-5 Mitarbeiter",
                description: "Perfekt für kleine Agenturen, die ihre Prozesse automatisieren wollen.",
                popular: false,
                badge: "Ideal für Start-ups",
                features: [
                  "Vollständige Plattform-Zugriffe",
                  "1.000 qualifizierte Leads/Monat",
                  "Basic Workflow-Automatisierung",
                  "WhatsApp Business Integration",
                  "Lead-Scoring & Qualifizierung",
                  "Basis CRM & Pipeline Management",
                  "E-Mail Outreach Kampagnen",
                  "Standard Reporting Dashboard",
                  "E-Mail Support",
                ],
                cta: "Jetzt starten",
                link: "/kontakt?plan=starter-agency",
              },
              {
                title: "Growth Agency",
                price: "€1.499",
                period: "/Monat",
                teamSize: "6-15 Mitarbeiter",
                description: "Die beliebteste Wahl für wachsende Agenturen mit erweiterten Anforderungen.",
                popular: true,
                badge: "MOST POPULAR",
                features: [
                  "Alle Starter Features +",
                  "5.000 qualifizierte Leads/Monat",
                  "Erweiterte Workflow-Automatisierung + KI",
                  "Voice Automation Engine",
                  "Digital Contract Suite",
                  "Fulfillment Automation",
                  "Client Collaboration Hub",
                  "Erweiterte Analytics & KPIs",
                  "Prioritäts-Support + Training",
                  "API Zugang & Integrationen",
                ],
                cta: "Beliebteste Wahl",
                link: "/kontakt?plan=growth-agency",
              },
              {
                title: "Enterprise Agency",
                price: "€2.999",
                period: "/Monat",
                teamSize: "16+ Mitarbeiter",
                description: "Für etablierte Agenturen, die maximale Automatisierung und Skalierung benötigen.",
                popular: false,
                badge: "Maximale Skalierung",
                features: [
                  "Alle Growth Features +",
                  "Unbegrenzte qualifizierte Leads",
                  "Custom Workflows + White-Label",
                  "Vollständiger API-Zugang",
                  "Benutzerdefinierte Integrationen",
                  "Dedizierter Success Manager",
                  "Custom Onboarding & Training",
                  "Strategische Beratung",
                  "SLA-Garantien (4h Response)",
                  "Multi-Standort Management",
                  "Enterprise Security Features",
                ],
                cta: "Kontakt aufnehmen",
                link: "/kontakt?plan=enterprise-agency",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`bg-white relative border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? "md:scale-105 z-10 ring-2 ring-purple-500/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Star className="h-3 w-3 inline mr-1" />
                    {plan.badge}
                  </div>
                )}
                <CardHeader className={`text-center pb-2 ${plan.popular ? "bg-purple-50/50 rounded-t-lg" : ""}`}>
                  <div className="inline-block bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-xs font-medium mb-2">
                    {plan.teamSize}
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className={feature.includes("Alle") ? "font-semibold text-purple-700" : ""}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg" : ""}`}>
                    <Link href={plan.link}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Alle Preise verstehen sich zzgl. MwSt. Jährliche Abonnements erhalten 2 Monate gratis (16% Ersparnis).
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

      {/* ROI Guarantee Section */}
      <section id="roi-garantie" className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full text-green-800 text-sm font-medium mb-4">
                <TrendingUp className="h-4 w-4 inline mr-2" />
                ROI Garantie
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wir garantieren Ihren <span className="text-gradient-purple">Erfolg</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leadboom ist so effektiv, dass wir eine ROI-Garantie geben können. 
                Oder wir erstatten die Differenz zurück.
              </p>
            </div>

            <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg mb-6">
                    <Award className="h-5 w-5 mr-2" />
                    3x ROI in 90 Tagen - Garantiert!
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Unsere durchschnittlichen Kunden sehen eine <strong>3-fache Rendite ihrer Investition</strong> innerhalb der ersten 90 Tage.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">85% Zeitersparnis</h3>
                    <p className="text-gray-600">
                      Automatisierung eliminiert manuelle Routineaufgaben und gibt Ihnen Zeit für strategisches Wachstum.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">40% mehr Umsatz</h3>
                    <p className="text-gray-600">
                      Durch optimierte Prozesse und bessere Lead-Conversion steigt Ihr Umsatz nachweislich.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">25% höhere Margen</h3>
                    <p className="text-gray-600">
                      Reduzierte operative Kosten und effizientere Prozesse verbessern Ihre Gewinnmargen deutlich.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-purple-800 mb-2">
                    Garantie-Bedingungen
                  </p>
                  <p className="text-gray-700">
                    Falls Sie in den ersten 90 Tagen nicht mindestens das 3-fache Ihrer monatlichen Investition 
                    als zusätzlichen Umsatz generieren, erstatten wir Ihnen die Differenz zurück.
                  </p>
                </div>

                <div className="text-center mt-8">
                  <Button asChild size="lg" className="purple-glow">
                    <Link href="/kontakt?guarantee=true" className="flex items-center">
                      ROI Garantie einlösen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              Agentur-Vergleich
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detaillierter Funktionsvergleich</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Verstehen Sie genau, welche Automatisierungsfeatures in jedem Agentur-Paket enthalten sind.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-bold text-lg">Feature</div>
                <div className="text-center font-bold text-lg">Starter Agency</div>
                <div className="text-center font-bold text-lg">Growth Agency</div>
                <div className="text-center font-bold text-lg">Enterprise Agency</div>
              </div>

              {[
                {
                  category: "Team & Benutzer",
                  features: [
                    {
                      name: "Team-Mitglieder",
                      starter: "1-5 Benutzer",
                      professional: "6-15 Benutzer",
                      enterprise: "16+ Benutzer",
                    },
                    { name: "Rollen & Berechtigungen", starter: "Basic", professional: "Erweitert", enterprise: "Vollständig" },
                    {
                      name: "Multi-Standort Management",
                      starter: "Nein",
                      professional: "Nein",
                      enterprise: "Ja",
                    },
                    {
                      name: "Team Performance Analytics",
                      starter: "Basic",
                      professional: "Erweitert",
                      enterprise: "Custom Dashboards",
                    },
                  ],
                },
                {
                  category: "Lead Acquisition Engine",
                  features: [
                    {
                      name: "Qualifizierte Leads/Monat",
                      starter: "1.000",
                      professional: "5.000",
                      enterprise: "Unbegrenzt",
                    },
                    { name: "KI-Voice Call Automation", starter: "Basic", professional: "Erweitert + KI", enterprise: "Premium + Custom" },
                    { name: "Multi-Channel Outreach", starter: "E-Mail + WhatsApp", professional: "Alle Kanäle", enterprise: "Custom Channels" },
                    {
                      name: "Lead-Scoring & Qualifizierung",
                      starter: "Regelbasiert",
                      professional: "KI-gestützt",
                      enterprise: "Custom AI Models",
                    },
                  ],
                },
                {
                  category: "Workflow Automation",
                  features: [
                    { name: "Workflow Templates", starter: "10 Standard", professional: "50 + Custom", enterprise: "Unbegrenzt + White-Label" },
                    { name: "WhatsApp Business Hub", starter: "Basic", professional: "Vollständig", enterprise: "Premium + Templates" },
                    { name: "Sales Pipeline Automation", starter: "Standard", professional: "Erweitert + KI", enterprise: "Vollständig + Custom" },
                    {
                      name: "Contract & Billing Suite",
                      starter: "Basic",
                      professional: "Vollständig",
                      enterprise: "Premium + Custom",
                    },
                  ],
                },
                {
                  category: "Client Management",
                  features: [
                    {
                      name: "Client Collaboration Hub",
                      starter: "Basic",
                      professional: "Erweitert",
                      enterprise: "Premium + Whiteboards",
                    },
                    {
                      name: "Project Management",
                      starter: "Task Workflows",
                      professional: "Vollständig",
                      enterprise: "Custom + Automation",
                    },
                    {
                      name: "Document Management",
                      starter: "Basic",
                      professional: "Vollständig",
                      enterprise: "Enterprise + Security",
                    },
                    {
                      name: "Client Portal",
                      starter: "Standard",
                      professional: "Erweitert",
                      enterprise: "White-Label",
                    },
                  ],
                },
                {
                  category: "Analytics & Reporting",
                  features: [
                    {
                      name: "Dashboard Analytics",
                      starter: "Standard Reports",
                      professional: "Erweiterte KPIs",
                      enterprise: "Custom Dashboards",
                    },
                    {
                      name: "ROI Tracking",
                      starter: "Basic",
                      professional: "Erweitert",
                      enterprise: "Real-time + Predictions",
                    },
                    { name: "Performance Monitoring", starter: "Team-Level", professional: "Projekt-Level", enterprise: "Granular + AI Insights" },
                    { name: "API & Integrationen", starter: "Nein", professional: "Standard", enterprise: "Vollständig + Custom" },
                  ],
                },
                {
                  category: "Support & Service",
                  features: [
                    {
                      name: "Support-Level",
                      starter: "E-Mail Support",
                      professional: "Priorität + Training",
                      enterprise: "Dedicated Manager",
                    },
                    {
                      name: "Reaktionszeit",
                      starter: "24-48h",
                      professional: "4-8h",
                      enterprise: "4h SLA",
                    },
                    { name: "Onboarding", starter: "Self-Service", professional: "Geführt + Training", enterprise: "Custom + Strategisch" },
                    { name: "Strategische Beratung", starter: "Nein", professional: "Basis", enterprise: "Vollständig" },
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
              Agentur-Vorteile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zusätzliche Vorteile für Agenturen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profitieren Sie von unseren exklusiven Vorteilen und Garantien für Agenturen.
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
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Agentur-Startup Bonus</h3>
                    <p className="text-purple-600">25% Rabatt für neue Agenturen</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Agenturen unter 2 Jahren erhalten 25% Rabatt auf alle Pläne im ersten Jahr. 
                  Starten Sie Ihre Automatisierungs-Reise mit einem besonderen Vorteil.
                </p>
                <Button asChild className="w-full">
                  <Link href="/kontakt?offer=agency-startup">Agentur-Bonus sichern</Link>
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
              Erfolgsgeschichten
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenturen, die bereits profitieren</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfahren Sie, wie andere Agenturen mit Leadboom ihr Business automatisiert und skaliert haben.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Das Growth Agency Paket hat unsere komplette Agentur transformiert. 85% weniger manuelle Arbeit, 40% mehr Umsatz und unsere Kunden sind glücklicher als je zuvor. Die Automatisierung ist ein Gamechanger!",
                author: "Sarah Müller",
                company: "Digital Growth Agency (12 Mitarbeiter)",
                image: "SM",
                plan: "Growth Agency",
              },
              {
                quote:
                  "Wir haben von mehreren Tools auf Leadboom gewechselt und konnten unsere operativen Kosten um 60% reduzieren. Der dedicated Success Manager hilft uns, ständig neue Optimierungen zu finden. ROI nach 2 Monaten erreicht.",
                author: "Thomas Schmidt",
                company: "Schmidt Digital Solutions (25 Mitarbeiter)",
                image: "TS",
                plan: "Enterprise Agency",
              },
              {
                quote:
                  "Als kleine 4-Personen-Agentur waren wir überwältigt von der Komplexität des Geschäfts. Leadboom hat uns das Betriebssystem gegeben, das wir brauchten. Jetzt skalieren wir endlich profitabel!",
                author: "Julia Wagner",
                company: "Wagner Creative Studio (4 Mitarbeiter)",
                image: "JW",
                plan: "Starter Agency",
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
                question: "Sind die Preise wirklich teamgrößen-basiert?",
                answer:
                  "Ja! Anders als andere Anbieter berechnen wir nicht nach Lead-Volumen, sondern nach Ihrer Teamgröße. Das bedeutet: Egal ob Sie 100 oder 10.000 Leads verarbeiten - der Preis bleibt gleich. So können Sie profitabel skalieren ohne lineare Kostensteigerung.",
              },
              {
                question: "Was passiert, wenn mein Team wächst?",
                answer:
                  "Perfekt! Das ist genau unser Ziel. Sie können jederzeit zum nächsthöheren Paket upgraden, wenn Ihr Team die Grenze überschreitet. Bei 6 Mitarbeitern wechseln Sie von Starter zu Growth Agency, bei 16+ zu Enterprise Agency. Ein Downgrade ist zum Ende der Vertragslaufzeit möglich.",
              },
              {
                question: "Wie funktioniert die ROI-Garantie?",
                answer:
                  "Unsere ROI-Garantie ist einfach: Wenn Sie in den ersten 90 Tagen nicht mindestens das 3-fache Ihrer monatlichen Investition als zusätzlichen Umsatz generieren, erstatten wir die Differenz. Diese Garantie gilt für alle Pakete und zeigt unser Vertrauen in die Plattform.",
              },
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer:
                  "Bei monatlicher Zahlung beträgt die Mindestvertragslaufzeit einen Monat. Bei jährlicher Zahlung beträgt die Mindestvertragslaufzeit ein Jahr. Alle Verträge verlängern sich automatisch, können aber jederzeit vor der Verlängerung gekündigt werden.",
              },
              {
                question: "Wie schnell kann ich mit der Automatisierung starten?",
                answer:
                  "Sehr schnell! Das Starter Agency Paket kann sofort eingerichtet werden. Growth Agency Kunden erhalten ein geführtes Onboarding innerhalb von 5-7 Werktagen. Enterprise Kunden bekommen einen dedizierten Success Manager für ein vollständig maßgeschneidertes Setup binnen 2 Wochen.",
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
              Bereit, Ihre Agentur zu{" "}
              <span className="relative inline-block">
                <span className="relative z-10">automatisieren</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              ?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Wählen Sie das Agentur-Paket, das zu Ihrer Teamgröße passt, und starten Sie noch heute Ihre Automatisierungs-Reise.
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

