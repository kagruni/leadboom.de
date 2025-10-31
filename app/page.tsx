import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Clock,
  HelpCircle,
  Send,
  Sparkles
} from "lucide-react"
import StackingCards from "@/components/StackingCards"
import BusinessProcessFlow from "@/components/BusinessProcessFlow"
import StatsSection from "@/components/StatsSection"
import RevenueDashboard from "@/components/RevenueDashboard"
import DarkShaderBackground from "@/components/ui/dark-shader-background"
import AppointmentAnimation from "@/components/AppointmentAnimation"
import { TiltedScroll } from "@/components/ui/tilted-scroll"
import { PricingSection } from "@/components/PricingSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 min-h-[60vh] bg-gradient-to-b from-white via-white to-gray-50/40">
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/50 z-[1] pointer-events-none"></div>

        {/* Sanfter Übergang zur Stats Section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-purple-50/10 to-purple-50/30 z-[1] pointer-events-none"></div>

        {/* Watermark Logo - Subtle Branding (wie in Stats Section) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <Image
            src="/leadboom-logo.png"
            alt=""
            width={600}
            height={180}
            className="opacity-[0.04] select-none"
          />
        </div>

        {/* Floating Orbs */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 border-2 border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-2 pulse-glow backdrop-blur-sm shadow-lg shadow-purple-200/50">
                <Star className="h-4 w-4 mr-2 fill-purple-600 text-purple-600" />
                <span>Die All-in-One Plattform für Agenturen</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                Mit <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] relative inline-block">Leads</span> überschüttet werden
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-md drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
                Die All-in-One Plattform, die deinen kompletten Geschäftsprozess automatisiert - vom Lead-Scraping bis zur Projektlieferung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <LiquidButton asChild size="xxl" className="bg-purple-700 border border-purple-900 text-white font-medium hover:bg-purple-800 hover:scale-[1.02] transition-all duration-200 shadow-xl hover:shadow-2xl">
                  <Link href="https://app.leadboom.de/sign-up" className="flex items-center justify-center">
                    Get Leadboom
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </LiquidButton>
                <LiquidButton asChild size="xxl" className="bg-white border border-purple-800 text-purple-900 font-medium hover:bg-purple-50 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Link href="#features" className="flex items-center justify-center">
                    Unsere Features
                  </Link>
                </LiquidButton>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {/* Avatar 1 - redline.png */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-purple-200 bg-white p-2 flex items-center justify-center">
                    <Image
                      src="/redline.png"
                      alt=""
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Avatar 2 - close consulting-01.png */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-purple-200 bg-white p-2 flex items-center justify-center">
                    <Image
                      src="/close consulting-01.png"
                      alt=""
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Avatar 3 - talente-gewinnen.png */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-purple-200 bg-white p-2 flex items-center justify-center">
                    <Image
                      src="/talente-gewinnen.png"
                      alt=""
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Avatar 4 - akquisewerk.png */}
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-purple-200 bg-white p-2 flex items-center justify-center">
                    <Image
                      src="/akquisewerk.png"
                      alt=""
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">50+</span> zufriedene Kunden
                </p>
              </div>
            </div>

            {/* Right Column - Features Scroll */}
            <div className="hidden lg:flex items-center justify-center">
              <TiltedScroll
                items={[
                  { id: "1", text: "Lead Scraping" },
                  { id: "2", text: "Vertrieb" },
                  { id: "3", text: "Kalender" },
                  { id: "4", text: "Fakturierung" },
                  { id: "5", text: "Leadsign" },
                  { id: "6", text: "Projektmanagement" },
                  { id: "7", text: "Dashboard" },
                  { id: "8", text: "Teamchat" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Quote Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Decorative Quote Icon */}
            <div className="mb-6 flex justify-center">
              <svg className="w-12 h-12 text-purple-600/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Main Quote */}
            <blockquote className="relative">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Die <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">All-in-One Plattform</span> für professionellen Vertrieb.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Premium-Datensätze vom eigenen Scraping, KI-gestütztes CRM und automatisierte Workflows – entwickelt für maximalen Erfolg im DACH-Markt.
              </p>
            </blockquote>

            {/* Decorative underline */}
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section mit StackingCards */}
      <section id="features" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/30 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-3">
              Unsere Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Alles was du brauchst, <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">an einem Ort</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Unsere Plattform bietet dir alle Tools, die du für erfolgreiches Agentur-Wachstum benötigen.
            </p>
          </div>

          {/* StackingCards Komponente */}
          <StackingCards />
        </div>
      </section>

      {/* Business Process Flow Section */}
      <section id="process" className="relative">
        <BusinessProcessFlow />
      </section>

      {/* Pricing Section - Complete new structure */}
      <PricingSection />

      {/* FAQ Section - Kategorisiert nach Themen */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/30 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Häufig gestellte Fragen</h2>
            <p className="text-lg text-gray-700">Hier findest Du Antworten auf die wichtigsten Fragen.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Linke Spalte */}
            <div className="space-y-6">
              {/* Pricing & Pläne */}
              <div>
                <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">📊</span> Pricing & Pläne
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Was ist der Unterschied zwischen FLEX und GROW?",
                      answer: "FLEX ist ein Sofortkauf – Du erhältst alle Credits sofort und kannst jederzeit nachkaufen. GROW ist ein Abo mit monatlicher Credits-Zuteilung über 3, 6 oder 12 Monate. GROW bietet Laufzeitrabatte von 5-10% und ist nur mit einem Plattform-Plan (Launch, Scale oder Business) verfügbar."
                    },
                    {
                      question: "Wie funktioniert das Credits-System?",
                      answer: "Credits sind deine Währung für Lead-Scraping auf unserer Plattform. Du kannst Credits entweder flexibel als FLEX-Paket sofort kaufen, oder als GROW-Abo mit monatlicher Zuteilung und Laufzeitrabatt. Je mehr Credits du kaufst, desto günstiger wird der Stückpreis durch unsere Staffelpreise."
                    },
                    {
                      question: "Kann ich Credits und Abos kombinieren?",
                      answer: "Ja, absolut! Du wählst zuerst dein Basis-Abo (Launch, Scale oder Business) und kaufst dann Credits nach Bedarf – entweder als FLEX oder GROW. Die Add-On Module kannst du ebenfalls jederzeit hinzufügen."
                    },
                    {
                      question: "Was passiert mit ungenutzten Credits?",
                      answer: "FLEX-Credits verfallen nicht und bleiben solange auf deinem Konto, bis du sie nutzt. Bei GROW-Abos werden die Credits monatlich zugeteilt. Ungenutzte Credits aus dem jeweiligen Monat verfallen am Monatsende nicht, sondern bleiben bis zum Ende der Abo-Laufzeit erhalten."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={`pricing-${index}`} value={`pricing-${index}`} className="border-b border-purple-100">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-purple-700 font-semibold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Features & Funktionen */}
              <div>
                <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">⚙️</span> Features & Funktionen
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Was ist Leadsign und wie funktioniert die digitale Unterschrift?",
                      answer: "Leadsign ist unsere integrierte Lösung für digitale Vertragsunterschriften - ähnlich wie DocuSign. Du kannst Angebote digital versenden, rechtssichere Unterschriften einholen, automatische Erinnerungen senden und den Status in Echtzeit verfolgen. Alle Signaturen sind rechtsgültig und audit-compliant."
                    },
                    {
                      question: "Welche Daten kann ich mit Compute Credits scrapen?",
                      answer: "Mit Compute Credits kannst du umfassende Unternehmensdaten scrapen: Firmennamen, Kontaktinformationen, E-Mail-Adressen, Telefonnummern, Adressen, Brancheninformationen und mehr. Ein Credit entspricht einem vollständigen, qualifizierten Datensatz."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={`features-${index}`} value={`features-${index}`} className="border-b border-purple-100">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-purple-700 font-semibold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Rechte Spalte */}
            <div className="space-y-6">
              {/* Technisches & Integration */}
              <div>
                <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">🔧</span> Technisches & Integration
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Hat Leadboom ein eigenes CRM oder brauche ich eine Integration?",
                      answer: "Leadboom hat ein vollständiges, integriertes CRM-System. Du kannst sofort starten ohne externe Tools. Falls du ein bestehendes CRM nutzt, bieten wir auch API-Integration an, um deine Systeme zu verbinden."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={`tech-${index}`} value={`tech-${index}`} className="border-b border-purple-100">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-purple-700 font-semibold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Getting Started */}
              <div>
                <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center">
                  <span className="mr-2">🚀</span> Getting Started
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Was kann ich mit dem kostenlosen Free Account machen?",
                      answer: "Mit dem Free Account erhältst du Zugriff auf unser Lead Scraping-Tool und kannst Compute Credits kaufen. Plattform-Features wie Dashboard, CRM, Sales, Invoicing oder Projektmanagement sind ab dem Launch-Plan (€59.99/Monat) verfügbar."
                    },
                    {
                      question: "Wie funktioniert der Prozess nach der Demo-Anfrage?",
                      answer: "Nach deiner Demo-Anfrage kontaktieren wir dich innerhalb von 24 Stunden, um einen Termin zu vereinbaren. In der Demo zeigen wir dir unsere Produkte und wie sie deinen spezifischen Anforderungen gerecht werden können."
                    },
                    {
                      question: "Gibt es eine Mindestvertragslaufzeit?",
                      answer: "Bei Abos mit monatlicher Zahlung beträgt die Mindestlaufzeit einen Monat. Bei GROW-Abos verpflichtest du dich zur gewählten Laufzeit (3, 6 oder 12 Monate). FLEX-Credits kannst du jederzeit ohne Vertragsbindung kaufen."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={`start-${index}`} value={`start-${index}`} className="border-b border-purple-100">
                      <AccordionTrigger className="text-left text-gray-900 hover:text-purple-700 font-semibold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
