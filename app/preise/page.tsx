"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, HelpCircle, ArrowRight, Sparkles, Shield, Clock, Zap, Users, Award, Building2, Star, Package, Mail, Phone, MessageSquare, Workflow } from "lucide-react"
import { useState } from "react"

export default function Preise() {
  // State for Credits Calculator
  const [creditsAmount, setCreditsAmount] = useState(1000)
  const [creditsPlan, setCreditsPlan] = useState<'flex' | 'grow3' | 'grow6' | 'grow12'>('flex')

  // Staffelpreise für FLEX
  const getFlexPrice = (amount: number): number => {
    if (amount >= 19000) return 0.15
    if (amount >= 16000) return 0.16
    if (amount >= 13000) return 0.18
    if (amount >= 9000) return 0.20
    if (amount >= 6000) return 0.22
    if (amount >= 3000) return 0.23
    if (amount >= 1000) return 0.25
    return 0.30
  }

  // Berechnung für GROW Abo (monatliche Zahlung)
  const getGrowPrice = (monthlyAmount: number, months: 3 | 6 | 12): number => {
    const basePrice = getFlexPrice(monthlyAmount)
    const discounts = { 3: 0.05, 6: 0.08, 12: 0.10 }
    return monthlyAmount * basePrice * (1 - discounts[months])
  }

  // Haupt-Berechnung für Display
  const calculatePrice = (): { total: number; perCredit: number; period: string } => {
    switch (creditsPlan) {
      case 'flex':
        const flexPrice = getFlexPrice(creditsAmount)
        return {
          total: creditsAmount * flexPrice,
          perCredit: flexPrice,
          period: 'Einmalig'
        }
      case 'grow3':
        const grow3 = getGrowPrice(creditsAmount, 3)
        return {
          total: grow3,
          perCredit: grow3 / creditsAmount,
          period: 'pro Monat (3 Monate)'
        }
      case 'grow6':
        const grow6 = getGrowPrice(creditsAmount, 6)
        return {
          total: grow6,
          perCredit: grow6 / creditsAmount,
          period: 'pro Monat (6 Monate)'
        }
      case 'grow12':
        const grow12 = getGrowPrice(creditsAmount, 12)
        return {
          total: grow12,
          perCredit: grow12 / creditsAmount,
          period: 'pro Monat (12 Monate)'
        }
    }
  }

  const price = calculatePrice()

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
              <span>Flexible Preismodelle für jedes Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Investiere in <span className="text-gradient-purple animate-gradient">Wachstum</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Von kleinen Teams bis zu großen Organisationen – wähle das Abo, das zu Dir passt,
              und kaufe Credits nach Bedarf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="purple-glow">
                <Link href="#abos" className="flex items-center">
                  Abos ansehen
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="purple-glow">
                <Link href="#credits">Credits-System</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Abo-Pläne Section */}
      <section id="abos" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Abo-Pläne
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wähle dein Abo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Drei leistungsstarke Pläne für Teams jeder Größe. Alle Preise zzgl. MwSt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Essentials",
                price: "59,99€",
                period: "/Monat",
                additionalUser: "+29,99€ pro User",
                description: "Perfekt für kleine Teams, die mit den Grundlagen starten möchten.",
                popular: false,
                badge: "Starter",
                features: [
                  "Vollständiges Dashboard",
                  "Sales Modul mit Power Dialer",
                  "100 kostenlose Lead Credits bei Sign-Up",
                  "AI Actions",
                  "Basis CRM & Pipeline Management",
                  "E-Mail Support",
                ],
                cta: "Jetzt starten",
                link: "https://app.leadboom.de/sign-up",
              },
              {
                title: "Growth",
                price: "139,99€",
                period: "/Monat",
                additionalUser: "+69,99€ pro User",
                description: "Die beliebteste Wahl für wachsende Teams mit erweiterten Anforderungen.",
                popular: true,
                badge: "MOST POPULAR",
                features: [
                  "Alles aus Essentials +",
                  "500 kostenlose Lead Credits bei Sign-Up",
                  "E-Mail-Client & Kalender",
                  "Fakturierung (Invoicing)",
                  "Teamchat & Collaboration",
                  "Erweiterte Analytics",
                  "Prioritäts-Support",
                ],
                cta: "Beliebteste Wahl",
                link: "https://app.leadboom.de/sign-up",
              },
              {
                title: "Enterprise",
                price: "Individuell",
                period: "",
                additionalUser: "Auf Anfrage",
                description: "Für große Organisationen mit individuellen Anforderungen.",
                popular: false,
                badge: "Maximale Skalierung",
                features: [
                  "Alles aus Growth +",
                  "Unbegrenzte Lead Credits",
                  "Zusätzliche Enterprise-Funktionen",
                  "White-Label Möglichkeiten",
                  "Dedizierter Success Manager",
                  "Custom Onboarding & Training",
                  "SLA-Garantien",
                  "Multi-Standort Management",
                ],
                cta: "Kontakt aufnehmen",
                link: "https://app.leadboom.de/sign-up",
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
                  <CardTitle className="text-2xl mb-4">{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <div className="text-sm text-purple-600 font-medium mt-2">{plan.additionalUser}</div>
                  <CardDescription className="mt-3 text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className={feature.includes("Alles") ? "font-semibold text-purple-700" : ""}>{feature}</span>
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
        </div>
      </section>

      {/* Credits System Section */}
      <section id="credits" className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 inline mr-2" />
              Credits-System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Credits nach Bedarf</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kaufe Credits flexibel oder im Abo. Je mehr du kaufst, desto günstiger wird es.
            </p>
          </div>

          {/* Interactive Credits Calculator */}
          <Card className="max-w-4xl mx-auto mb-16 border-none shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Credits-Rechner</CardTitle>
              <CardDescription>Berechne den besten Preis für deine Bedürfnisse</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Credits Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Anzahl Credits</label>
                <input
                  type="range"
                  min="1"
                  max="20000"
                  step="100"
                  value={creditsAmount}
                  onChange={(e) => setCreditsAmount(Number(e.target.value))}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-600">1</span>
                  <input
                    type="number"
                    value={creditsAmount}
                    onChange={(e) => setCreditsAmount(Math.min(20000, Math.max(1, Number(e.target.value))))}
                    className="text-2xl font-bold text-center border-2 border-purple-200 rounded-lg px-4 py-2 w-32 focus:border-purple-600 outline-none"
                  />
                  <span className="text-sm text-gray-600">20.000+</span>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Credit-Modell wählen</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { value: 'flex', label: 'FLEX', subtitle: 'Sofortkauf' },
                    { value: 'grow3', label: 'GROW 3M', subtitle: '-5%' },
                    { value: 'grow6', label: 'GROW 6M', subtitle: '-8%' },
                    { value: 'grow12', label: 'GROW 12M', subtitle: '-10%' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCreditsPlan(option.value as any)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        creditsPlan === option.value
                          ? 'border-purple-600 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="font-semibold text-sm">{option.label}</div>
                      <div className="text-xs text-gray-600">{option.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Gesamtpreis</div>
                    <div className="text-4xl font-bold">{price.total.toFixed(2)}€</div>
                    <div className="text-sm opacity-75 mt-1">{price.period}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Preis pro Credit</div>
                    <div className="text-4xl font-bold">{price.perCredit.toFixed(2)}€</div>
                    <div className="text-sm opacity-75 mt-1">pro Credit</div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-white text-purple-700 hover:bg-purple-50">
                  <Link href="https://app.leadboom.de/sign-up">Credits kaufen</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Tables */}
          <div className="space-y-8">
            {/* FLEX Pricing Table */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-purple-600" />
                  Credits FLEX – Sofortkauf
                </CardTitle>
                <CardDescription>Sofortige Freischaltung aller Credits. Top-ups jederzeit möglich.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-purple-100">
                        <th className="text-left py-3 px-4">Credits</th>
                        <th className="text-right py-3 px-4">€ pro Credit</th>
                        <th className="text-right py-3 px-4">Gesamtpreis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { range: '1–999', price: 0.30 },
                        { range: '1.000–2.999', price: 0.25 },
                        { range: '3.000–5.999', price: 0.23 },
                        { range: '6.000–8.999', price: 0.22 },
                        { range: '9.000–12.999', price: 0.20 },
                        { range: '13.000–15.999', price: 0.18 },
                        { range: '16.000–18.999', price: 0.16 },
                        { range: '≥ 19.000', price: 0.15 },
                      ].map((tier, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-3 px-4 font-medium">{tier.range}</td>
                          <td className="text-right py-3 px-4">{tier.price.toFixed(2)}€</td>
                          <td className="text-right py-3 px-4 text-gray-600">
                            ab {(tier.price * parseInt(tier.range.replace(/[^\d]/g, '')) || 0).toFixed(2)}€
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* GROW Abo Pricing Table */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  Credits GROW – Abo (monatliche Zahlung)
                </CardTitle>
                <CardDescription>Monatliche Credits-Zuteilung mit Laufzeitrabatt. 3, 6 oder 12 Monate. Nur mit Launch, Scale oder Business Plan verfügbar.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-purple-100">
                        <th className="text-left py-3 px-4">Monatscredits</th>
                        <th className="text-right py-3 px-4">3 Mon (-5%)</th>
                        <th className="text-right py-3 px-4">6 Mon (-8%)</th>
                        <th className="text-right py-3 px-4">12 Mon (-10%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { credits: 1000, base: 0.25 },
                        { credits: 3000, base: 0.23 },
                        { credits: 6000, base: 0.22 },
                        { credits: 9000, base: 0.20 },
                      ].map((tier, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-3 px-4 font-medium">{tier.credits.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">
                            {(tier.credits * tier.base * 0.95).toFixed(2)}€/Mon
                          </td>
                          <td className="text-right py-3 px-4">
                            {(tier.credits * tier.base * 0.92).toFixed(2)}€/Mon
                          </td>
                          <td className="text-right py-3 px-4 text-purple-600 font-semibold">
                            {(tier.credits * tier.base * 0.90).toFixed(2)}€/Mon
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Module Section */}
      <section id="addons" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              <Package className="h-4 w-4 inline mr-2" />
              Add-On Module
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Erweitere dein Abo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extra-Module für spezielle Anforderungen. Jederzeit hinzufügbar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "E-Mail Marketing",
                price: "59,99€",
                icon: Mail,
                features: [
                  "Unbegrenzte E-Mail-Kampagnen",
                  "E-Mail-Vorlagen & Editor",
                  "A/B Testing",
                  "Performance-Tracking",
                ],
              },
              {
                title: "AI Voice Agent",
                price: "79,99€",
                icon: Phone,
                features: [
                  "KI-gestützte Anrufautomatisierung",
                  "Natural Language Processing",
                  "Call Recording & Transcription",
                  "Sentiment Analysis",
                ],
              },
              {
                title: "Marketing Hub",
                price: "49,99€",
                icon: Sparkles,
                features: [
                  "Social Media Management",
                  "Content-Planer",
                  "Marketing-Analytics",
                  "Lead-Nurturing Kampagnen",
                ],
              },
              {
                title: "Workflow-Modul",
                price: "19,99€",
                icon: Workflow,
                features: [
                  "Custom Workflow Builder",
                  "Erweiterte Automatisierungen",
                  "Multi-Step Workflows",
                  "Integration mit externen Tools",
                ],
              },
            ].map((addon, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <addon.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
                      <div className="text-xs text-gray-600">/Monat</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{addon.title}</h3>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-4">
                    <Link href={`/kontakt?addon=${addon.title.toLowerCase()}`}>Hinzufügen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hier findest du Antworten auf die häufigsten Fragen zu unseren Preisen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Wie funktioniert das Credits-System?",
                answer:
                  "Credits sind deine Währung für Lead-Generierung auf unserer Plattform. Du kannst Credits entweder flexibel als FLEX-Paket sofort kaufen, oder als GROW-Abo mit monatlicher Zuteilung und Laufzeitrabatt. Je mehr Credits du kaufst, desto günstiger wird der Stückpreis durch unsere Staffelpreise.",
              },
              {
                question: "Was ist der Unterschied zwischen FLEX und GROW?",
                answer:
                  "FLEX ist ein Sofortkauf – du erhältst alle Credits sofort und kannst jederzeit nachkaufen. GROW ist ein Abo mit monatlicher Credits-Zuteilung über 3, 6 oder 12 Monate. GROW bietet Laufzeitrabatte (5-10%) und bei Upfront-Zahlung zusätzlich -8% auf den Jahrespreis. Nur mit Launch, Scale oder Business Plan verfügbar.",
              },
              {
                question: "Kann ich Credits und Abos kombinieren?",
                answer:
                  "Ja, absolut! Du wählst zuerst dein Basis-Abo (Essentials, Growth oder Enterprise) und kaufst dann Credits nach Bedarf – entweder als FLEX oder GROW. Die Add-On Module kannst du ebenfalls jederzeit hinzufügen.",
              },
              {
                question: "Was passiert mit ungenutzten Credits?",
                answer:
                  "FLEX-Credits verfallen nicht und bleiben solange auf deinem Konto, bis du sie nutzt. Bei GROW-Abos werden die Credits monatlich zugeteilt. Ungenutzte Credits aus dem jeweiligen Monat verfallen am Monatsende nicht, sondern bleiben bis zum Ende der Abo-Laufzeit erhalten.",
              },
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer:
                  "Bei Abos mit monatlicher Zahlung beträgt die Mindestlaufzeit einen Monat. Bei GROW-Abos verpflichtest du dich zur gewählten Laufzeit (3, 6 oder 12 Monate). FLEX-Credits kannst du jederzeit ohne Vertragsbindung kaufen.",
              },
              {
                question: "Wie kann ich upgraden oder downgraden?",
                answer:
                  "Du kannst dein Abo jederzeit zum nächsthöheren Plan upgraden. Der neue Preis gilt ab dem nächsten Abrechnungszyklus. Ein Downgrade ist zum Ende der aktuellen Vertragslaufzeit möglich. Add-On Module kannst du jederzeit hinzufügen oder kündigen.",
              },
              {
                question: "Was bekomme ich bei Enterprise?",
                answer:
                  "Enterprise ist unser individuelles Paket für große Organisationen. Es enthält alle Features aus Growth, unbegrenzte Credits, White-Label-Möglichkeiten, einen dedizierten Success Manager, SLA-Garantien und vieles mehr. Kontaktiere uns für ein maßgeschneidertes Angebot.",
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
            <p className="text-gray-600 mb-6">Hast du weitere Fragen? Wir sind gerne für dich da.</p>
            <Button asChild variant="outline" className="purple-glow">
              <Link href="/kontakt" className="flex items-center">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 animate-gradient"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Animated blobs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl animate-blob"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white animate-fade-in">
              Bereit für{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Wachstum</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              ?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Wähle dein Abo, kaufe Credits nach Bedarf und starte noch heute.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine"
              >
                <Link href="https://app.leadboom.de/sign-up">
                  <span className="flex items-center">
                    Get Leadboom
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
                <Link href="#abos">
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
