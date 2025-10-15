"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  MessageSquare, 
  Phone, 
  Package,
  Mail,
  Target,
  Users,
  Zap,
  ArrowRight,
  BarChart3,
  TrendingUp,
  FileText,
  Cog,
  Calendar
} from "lucide-react";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  features: string[];
}

const cardData: CardData[] = [
  {
    id: "dashboard",
    title: "Command Center Dashboard",
    subtitle: "Zentrale Steuerung",
    description: "Ihr zentrales Cockpit für alle geschäftskritischen Metriken, Cash Flow-Übersicht und Team-Performance mit Echtzeit-KPI-Dashboards.",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
    features: [
      "Cash Flow & Umsatz-Analyse",
      "Kundenakquisitionskosten (CAC) Tracking",
      "Customer Lifetime Value (LTV) Überwachung",
      "Team Performance Metriken",
      "Echtzeit-KPI-Dashboards"
    ]
  },
  {
    id: "lead-engine",
    title: "Lead Acquisition Engine",
    subtitle: "Automatisierte Lead-Generierung",
    description: "Intelligente Lead-Akquise mit KI-gestützter Voice-Automatisierung, Multi-Channel-Kampagnen und automatischer Lead-Qualifizierung.",
    icon: <Target className="h-8 w-8 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Lead-Kauf und Import-Funktionen",
      "KI-gestützte Anruf-Automatisierung",
      "Multi-Channel-Kampagnen",
      "Lead-Scoring und Qualifizierung"
    ]
  },
  {
    id: "whatsapp-hub",
    title: "WhatsApp Business Hub",
    subtitle: "Messenger Automatisierung",
    description: "Professionelle WhatsApp Business Integration mit KI-gesteuerten Unterhaltungen und automatisierter Terminbuchung für maximale Reichweite.",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    color: "from-purple-400 to-purple-600",
    gradient: "bg-gradient-to-br from-purple-300/20 to-purple-500/20",
    features: [
      "KI-gesteuerte Unterhaltungen",
      "Vorlagen-Nachrichten-Kampagnen",
      "Automatische Terminbuchung",
      "Gesprächsverfolgung & Analyse"
    ]
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline Automation",
    subtitle: "Verkaufsprozess-Optimierung",
    description: "Vollautomatisierte Sales-Pipeline mit intelligenten Follow-up-Sequenzen und Conversion-Optimierung für maximale Closing-Raten.",
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    color: "from-purple-700 to-purple-900",
    gradient: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    features: [
      "Automatisierte Follow-up-Sequenzen",
      "Abschlussraten-Optimierung",
      "Pipeline-Stufen-Management",
      "Conversion-Analysen"
    ]
  },
  {
    id: "contract-suite",
    title: "Digital Contract Suite",
    subtitle: "Papierlose Vertragsabwicklung",
    description: "Komplette digitale Vertragsabwicklung von der Angebotserstellung bis zur digitalen Signatur mit integriertem Payment-Tracking.",
    icon: <FileText className="h-8 w-8 text-white" />,
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
    features: [
      "Angebots- & Vorschlagserstellung",
      "Digitale Signatur-Workflows",
      "Rechnungs- & Gutschriftenverwaltung",
      "Zahlungsverfolgungsintegration"
    ]
  },
  {
    id: "fulfillment-automation",
    title: "Fulfillment Automation",
    subtitle: "Projektabwicklung",
    description: "Intelligente Projektabwicklung mit automatischer Task-Erstellung, Team-Kollaboration und Echtzeit-Progress-Tracking für effiziente Lieferung.",
    icon: <Cog className="h-8 w-8 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Kundenspezifische Aufgaben-Workflows",
      "Automatisierte Aufgabenerstellung",
      "Fortschrittsverfolgung & Berichterstattung",
      "Team-Kollaborationstools"
    ]
  },
  {
    id: "collaboration-hub",
    title: "Client Collaboration Hub",
    subtitle: "Kunde-Agentur Zusammenarbeit",
    description: "Zentrale Kollaborationsplattform mit digitalen Whiteboards, Dokumentenmanagement und Client-Portal für nahtlose Zusammenarbeit.",
    icon: <Users className="h-8 w-8 text-white" />,
    color: "from-purple-400 to-purple-600",
    gradient: "bg-gradient-to-br from-purple-300/20 to-purple-500/20",
    features: [
      "Gemeinsame digitale Whiteboards",
      "Dokumentenverwaltungssystem",
      "Projekt-Kommunikationszentrum",
      "Kunden-Portal-Zugang"
    ]
  },
  {
    id: "calendar-system",
    title: "Smart Calendar System",
    subtitle: "Terminmanagement",
    description: "Intelligentes Kalendersystem mit Google Calendar Integration, automatisierten Booking-Links und Meeting-Room-Management für optimale Terminplanung.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    color: "from-purple-700 to-purple-900",
    gradient: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    features: [
      "Google Calendar Integration",
      "Automatisierte Buchungslinks (wie Calendly)",
      "Besprechungsraum-Management",
      "Verfügbarkeits-Synchronisation"
    ]
  },
  {
    id: "voice-automation",
    title: "Voice Automation Engine",
    subtitle: "KI-Telefonie",
    description: "Hochmoderne KI-Telefonie mit Natural Language Processing, automatischer Terminbuchung und mehrsprachigem Support für professionelle Kommunikation.",
    icon: <Phone className="h-8 w-8 text-white" />,
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
    features: [
      "Natürliche Sprachverarbeitung",
      "Automatisierte Terminbuchung",
      "Mehrsprachiger Support",
      "Anruf-Analysen & Einblicke"
    ]
  }
];

export default function StackingCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-purple-100" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-purple-200/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-purple-300 transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:shadow-purple-200/50">

                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content Container */}
                <div className="relative z-10 p-8 h-full flex flex-col">

                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wider text-purple-600 font-medium">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center text-sm transition-all duration-300 ${
                          hoveredCard === card.id
                            ? 'text-gray-900 translate-x-2'
                            : 'text-gray-600'
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          hoveredCard === card.id
                            ? 'bg-purple-600 scale-125'
                            : 'bg-purple-400'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className={`transition-all duration-500 ${
                    hoveredCard === card.id
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-80 transform translate-y-2'
                  }`}>
                    <button className="w-full px-6 py-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-medium hover:bg-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group/btn">
                      <span className="flex items-center justify-center">
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent -skew-x-12 transition-all duration-700 ${
                  hoveredCard === card.id
                    ? 'translate-x-full'
                    : '-translate-x-full'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="inline-block px-8 py-4 rounded-2xl bg-purple-50 border border-purple-200">
            <p className="text-gray-700 text-lg mb-2">
              Bereit für die <span className="text-purple-700 font-semibold">ultimative Kombination</span>?
            </p>
            <button className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Alle Features entdecken <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}