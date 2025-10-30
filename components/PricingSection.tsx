"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Sparkles, Clock, Zap, Award, Star, Package, Mail, Phone, MessageSquare, Workflow } from "lucide-react"
import { useState } from "react"

export function PricingSection() {
  // State for Abo billing period (default: yearly)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')

  // State for Credits Calculator
  const [creditsAmount, setCreditsAmount] = useState(1000)
  const [creditsPlan, setCreditsPlan] = useState<'flex' | 'grow3' | 'grow6' | 'grow12'>('flex')

  // State for Pricing Tables Tab
  const [pricingTab, setPricingTab] = useState<'flex' | 'grow'>('flex')

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
      case 'flex': {
        const flexPrice = getFlexPrice(creditsAmount)
        return {
          total: creditsAmount * flexPrice,
          perCredit: flexPrice,
          period: 'Einmalig'
        }
      }
      case 'grow3': {
        const grow3 = getGrowPrice(creditsAmount, 3)
        return {
          total: grow3,
          perCredit: grow3 / creditsAmount,
          period: 'pro Monat (3 Monate)'
        }
      }
      case 'grow6': {
        const grow6 = getGrowPrice(creditsAmount, 6)
        return {
          total: grow6,
          perCredit: grow6 / creditsAmount,
          period: 'pro Monat (6 Monate)'
        }
      }
      case 'grow12': {
        const grow12 = getGrowPrice(creditsAmount, 12)
        return {
          total: grow12,
          perCredit: grow12 / creditsAmount,
          period: 'pro Monat (12 Monate)'
        }
      }
      default: {
        const flexPrice = getFlexPrice(creditsAmount)
        return {
          total: creditsAmount * flexPrice,
          perCredit: flexPrice,
          period: 'Einmalig'
        }
      }
    }
  }

  const price = calculatePrice()

  return (
    <>
      {/* Abo-Pläne Section */}
      <section id="pricing" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Abo-Pläne
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wähle dein Abo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Drei leistungsstarke Pläne für Teams jeder Größe. Alle Preise zzgl. MwSt.
            </p>

            {/* Billing Period Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 border-2 border-purple-200 shadow-lg mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monatlich
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${
                  billingPeriod === 'yearly'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Jährlich
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -10%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Launch",
                priceMonthly: 59.99,
                priceYearly: 53.99,
                additionalUserMonthly: 39.99,
                additionalUserYearly: 39.99,
                description: "Perfekt für kleine Teams, die mit den Grundlagen starten möchten.",
                popular: false,
                badge: "Starter",
                hasTrial: true,
                features: [
                  "Dashboard",
                  "Sales Modul mit Power Dialer",
                  "100 kostenlose Compute Credits bei Sign-Up",
                  "AI Actions",
                  "Basis CRM & Pipeline Management",
                  "E-Mail Support",
                ],
                cta: "Jetzt starten",
                link: "https://app.leadboom.de/sign-up",
              },
              {
                title: "Scale",
                priceMonthly: 139.99,
                priceYearly: 125.99,
                additionalUserMonthly: 99.99,
                additionalUserYearly: 99.99,
                description: "Die beliebteste Wahl für wachsende Teams mit erweiterten Anforderungen.",
                popular: true,
                badge: "MOST POPULAR",
                hasTrial: true,
                features: [
                  "Alles aus Launch +",
                  "Vollständiges Dashboard",
                  "500 kostenlose Compute Credits bei Sign-Up",
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
                title: "Business",
                priceMonthly: null,
                priceYearly: null,
                additionalUserMonthly: null,
                additionalUserYearly: null,
                description: "Für große Organisationen mit individuellen Anforderungen.",
                popular: false,
                badge: "Maximale Skalierung",
                features: [
                  "Alles aus Scale +",
                  "Unbegrenzte Compute Credits",
                  "Zusätzliche Enterprise-Funktionen",
                  "White-Label Möglichkeiten",
                  "Dedizierter Success Manager",
                  "Custom Onboarding & Training",
                  "SLA-Garantien",
                  "Multi-Standort Management",
                ],
                cta: "Kontakt aufnehmen",
                link: "#contact",
              },
            ].map((plan, index) => {
              const currentPrice = plan.priceMonthly ? (billingPeriod === 'yearly' ? plan.priceYearly : plan.priceMonthly) : null
              const currentAdditionalUser = plan.additionalUserMonthly ? (billingPeriod === 'yearly' ? plan.additionalUserYearly : plan.additionalUserMonthly) : null

              return (
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
                    {plan.isFree ? (
                      <span className="text-4xl font-bold text-green-600">Kostenlos</span>
                    ) : currentPrice ? (
                      <>
                        <span className="text-4xl font-bold">{currentPrice.toFixed(2).replace('.', ',')}€</span>
                        <span className="text-base font-normal text-gray-500">/Monat</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">Individuell</span>
                    )}
                  </div>
                  {billingPeriod === 'yearly' && currentPrice && currentPrice > 0 && (
                    <div className="text-xs text-gray-500 mt-1">
                      Jährliche Zahlung: {(currentPrice * 12).toFixed(2).replace('.', ',')}€
                    </div>
                  )}
                  {plan.hasTrial && (
                    <div className="text-xs text-green-600 font-semibold mt-2">
                      7 Tage kostenlos testen
                    </div>
                  )}
                  <div className="text-sm text-purple-600 font-medium mt-2">
                    {plan.isFree ? 'Keine Kreditkarte erforderlich' : currentAdditionalUser ? `+${currentAdditionalUser.toFixed(2).replace('.', ',')}€ pro User` : 'Auf Anfrage'}
                  </div>
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Logo Divider between Sections */}
      <div className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
          <div className="bg-white px-8 py-4 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/leadboom-logo.png"
              alt="Leadboom"
              width={150}
              height={45}
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      {/* Marketplace / Free Account Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              Leads Scraping
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kostenloser <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Leads Scraping Zugang</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zugriff zum Leads Scraping - Scrape deine eigenen Leads in der Plattform selbst
            </p>
          </div>

          {/* Free Account Card - Centered */}
          <div className="max-w-md mx-auto">
            <Card className="bg-white relative border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Kostenlos
                </span>
              </div>

              <CardHeader className="text-center pt-8 pb-4">
                <CardTitle className="text-3xl font-bold mb-2">Free Account</CardTitle>
                <CardDescription className="text-base">
                  Zugriff zum Leads Scraping - Scrape deine eigenen Leads ohne Plattform-Funktionen.
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-8">
                {/* Price Display */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">0€</div>
                  <div className="text-gray-500">Immer kostenlos</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  {[
                    "Leads Scraping Zugriff",
                    "Scrape deine eigenen Leads in der Plattform",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                  <Link href="https://app.leadboom.de/sign-up">Kostenlos starten</Link>
                </Button>
              </CardContent>
            </Card>
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
              Compute Credits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compute Credits für on-demand Scraping</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Starte Scraper nach deinen Kriterien. Wähle gewünschte Datenpunkte und erhalte frisch gesammelte Firmendaten. Je mehr Compute Credits, desto günstiger. Alle Preise zzgl. MwSt.
            </p>
          </div>

          {/* Interactive Credits Calculator */}
          <Card className="max-w-4xl mx-auto mb-16 border-none shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Compute Credits-Rechner</CardTitle>
              <CardDescription>Berechne die Compute Credits für deine Scraping-Anforderungen</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Credits Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Anzahl Compute Credits</label>
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
                <label className="block text-sm font-medium mb-3">Compute Credit-Modell wählen</label>
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
                {creditsPlan !== 'flex' && (
                  <div className="mt-2 text-xs text-gray-600 text-center">
                    <span className="inline-flex items-center">
                      ℹ️ Nur mit Launch, Scale oder Business Plan verfügbar
                    </span>
                  </div>
                )}
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Gesamtpreis</div>
                    <div className="text-4xl font-bold">{price.total.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</div>
                    <div className="text-sm opacity-75 mt-1">{price.period}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Preis pro Credit</div>
                    <div className="text-4xl font-bold">{price.perCredit.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</div>
                    <div className="text-sm opacity-75 mt-1">pro Credit</div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-white text-purple-700 hover:bg-purple-50">
                  <Link href="https://app.leadboom.de/sign-up">Compute Credits kaufen</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Credit System Information */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* What is a Compute Credit - Explanation */}
            <Card className="border-2 border-purple-400 shadow-2xl bg-gradient-to-br from-purple-600 to-purple-700 mb-8">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 text-white">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">Was ist ein Compute Credit?</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-3">
                      Ein <span className="font-bold">Compute Credit entspricht genau einem vollständigen Datensatz</span> beim Scraping.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-white font-semibold mb-1 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Beispiel:
                      </p>
                      <p className="text-white/95 text-sm">
                        Mit <span className="font-bold">100 Compute Credits</span> erhältst du <span className="font-bold">100 hochqualitative Unternehmensdaten</span> mit allen relevanten Informationen wie Kontaktdaten, Adressen, Brancheninfos und mehr.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Was kannst du scrapen */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl justify-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                  Was kannst du scrapen?
                </CardTitle>
                <CardDescription className="text-center">
                  Scrape umfassende Unternehmensdaten mit Compute Credits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Unternehmensinformationen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Kontaktinformationen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Adressinformationen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Stellenanzeigen</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Faxnummern</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Branchendaten</span>
                  </div>
                  <div className="flex items-start col-span-2">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="font-medium">Und vieles mehr</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Tables - Tabbed View */}
          <Card className="border-none shadow-xl">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setPricingTab('flex')}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-all ${
                    pricingTab === 'flex'
                      ? 'border-b-2 border-purple-600 text-purple-600'
                      : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  FLEX Sofortkauf
                </button>
                <button
                  onClick={() => setPricingTab('grow')}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-all ${
                    pricingTab === 'grow'
                      ? 'border-b-2 border-purple-600 text-purple-600'
                      : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  GROW Abo
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <CardContent className="pt-6">
              {/* FLEX Tab */}
              {pricingTab === 'flex' && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Compute Credits FLEX – Sofortkauf</h3>
                    <p className="text-sm text-gray-600">Sofortige Freischaltung. Starte Scraper jederzeit on-demand nach deinen Kriterien.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-purple-100">
                          <th className="text-left py-3 px-4">Compute Credits</th>
                          <th className="text-right py-3 px-4">€ pro Compute Credit</th>
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
                            <td className="text-right py-3 px-4">{tier.price.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* GROW Abo Tab */}
              {pricingTab === 'grow' && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Compute Credits GROW – Abo (monatliche Zahlung)</h3>
                    <p className="text-sm text-gray-600">Monatliche Compute Credits für kontinuierliches Scraping. Laufzeitrabatt: 3, 6 oder 12 Monate.</p>
                    <p className="text-sm text-purple-700 font-medium mt-1">Nur mit Launch, Scale oder Business Plan verfügbar</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-purple-100">
                          <th className="text-left py-3 px-4">Monats-Compute-Credits</th>
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
                            <td className="py-3 px-4 font-medium">{tier.credits.toLocaleString('de-DE')}</td>
                            <td className="text-right py-3 px-4">
                              {(tier.credits * tier.base * 0.95).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€/Mon
                            </td>
                            <td className="text-right py-3 px-4">
                              {(tier.credits * tier.base * 0.92).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€/Mon
                            </td>
                            <td className="text-right py-3 px-4 text-purple-600 font-semibold">
                              {(tier.credits * tier.base * 0.90).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€/Mon
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

    </>
  )
}
