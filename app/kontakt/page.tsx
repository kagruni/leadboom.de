"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, Sparkles, HelpCircle, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  interest: string
  message: string
  privacy: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Deine Nachricht wurde erfolgreich gesendet!"
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          message: "",
          privacy: false
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Es ist ein Fehler aufgetreten. Bitte versuche es erneut."
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Netzwerkfehler. Bitte überprüfe deine Internetverbindung und versuche es erneut."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with better visuals */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-purple-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-200/30 rounded-tr-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Wir freuen uns auf Deine Nachricht</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Kontaktiere <span className="text-gradient-purple animate-gradient">Leadboom</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wir freuen uns, von Dir zu hören. Fordere eine kostenlose Demo an oder nutze eine unserer
              anderen Kontaktmöglichkeiten.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="purple-glow">
                <a href="#kontaktformular" className="flex items-center">
                  Zum Kontaktformular
                  <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Enhanced with better layout and visuals */}
      <section id="kontaktformular" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="mb-8">
                  <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
                    Kontakt
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Get Started</h2>
                  <p className="text-gray-600">
                    Füll das Formular aus und wir melden uns innerhalb von 24 Stunden bei Dir.
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success" ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Vorname <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nachname <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Agentur / Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                      Ich interessiere mich für
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="lead-lists">Lead-Listen</option>
                      <option value="lead-scraping">Lead-Scraping</option>
                      <option value="coldmailer">Coldmailer</option>
                      <option value="crm">CRM-System</option>
                      <option value="phone-bot">Telefon-Bot</option>
                      <option value="all">Komplettlösung</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-purple-600 focus:ring-purple-600 border-gray-300 rounded mt-1"
                      required
                      disabled={isSubmitting}
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      Ich habe die{" "}
                      <Link href="/datenschutz" className="text-purple-600 hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="purple-glow w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Get Started
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <div className="animate-fade-in animate-delay-300">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6" />,
                      title: "E-Mail",
                      content: "info@leadboom.de",
                      href: "mailto:info@leadboom.de",
                    },
                    {
                      icon: <Phone className="h-6 w-6" />,
                      title: "Telefon",
                      content: "+49 177 8710181",
                      href: "tel:+491778710181",
                    },
                    {
                      icon: <MapPin className="h-6 w-6" />,
                      title: "Adresse",
                      content: "Dortmunder Straße 2, 04357 Leipzig",
                      href: "#",
                    },
                    {
                      icon: <Clock className="h-6 w-6" />,
                      title: "Öffnungszeiten",
                      content: "Mo-Fr: 9:00 - 18:00 Uhr",
                      href: "#",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">{item.icon}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                            {item.href !== "#" ? (
                              <a
                                href={item.href}
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-600">{item.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600">Hier findest Du Antworten auf häufig gestellte Fragen.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Wie funktioniert der Prozess nach der Demo-Anfrage?",
                answer:
                  "Nach Deiner Demo-Anfrage kontaktieren wir Dich innerhalb von 24 Stunden, um einen Termin zu vereinbaren. In der Demo zeigen wir Dir unsere Produkte und wie sie Deinen spezifischen Anforderungen gerecht werden können.",
              },
              {
                question: "Kann ich den Coldmailer mit meinem bestehenden CRM-System verbinden?",
                answer:
                  "Ja, unser Coldmailer lässt sich über APIs mit den gängigsten CRM-Systemen verbinden. Alternativ kannst Du auch unser eigenes CRM-System nutzen, das nahtlos mit allen unseren Produkten integriert ist.",
              },
              {
                question: "Wie funktioniert der Telefon-Bot?",
                answer:
                  "Unser Telefon-Bot nutzt KI-Technologie, um automatisierte Gespräche zu führen, Leads zu qualifizieren und Termine zu vereinbaren. Er kann in verschiedenen Sprachen kommunizieren und passt sich an die Reaktionen des Gesprächspartners an.",
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
              <a href="tel:+491778710181">
                <span className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
