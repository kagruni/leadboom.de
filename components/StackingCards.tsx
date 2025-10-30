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
  BarChart3,
  TrendingUp,
  FileText,
  Cog,
  Calendar,
  PenTool
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
    icon: <BarChart3 className="h-6 w-6 text-white" />,
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
    id: "lead-scraping",
    title: "Lead Scraping",
    subtitle: "Hochqualitative Datensätze",
    description: "Self-Service Scraping-Tools für hochqualitative Datensätze. Extrahieren Sie selbst alle relevanten Unternehmensdaten für erfolgreiche Kaltakquise.",
    icon: <Target className="h-6 w-6 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Self-Service Scraping-Tools für Firmendaten",
      "Hochqualitative Datensätze extrahieren",
      "Vollständige Unternehmensinformationen scrapen",
      "Daten für Kaltakquise nutzen"
    ]
  },
  {
    id: "sales",
    title: "Sales",
    subtitle: "Verkaufsprozess-Optimierung",
    description: "Professionelles Sales-Management mit automatisierten Follow-ups und Pipeline-Verwaltung für maximale Abschlussraten.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    color: "from-purple-700 to-purple-900",
    gradient: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    features: [
      "Automatisierte Follow-up-Sequenzen",
      "Abschlussraten-Optimierung",
      "Pipeline-Stufen-Management",
      "Conversion-Analysen",
      "Power Dialer",
      "Tracking von Call-Aufnahmen",
      "Transkripte",
      "Und vieles mehr"
    ]
  },
  {
    id: "invoicing",
    title: "Invoicing",
    subtitle: "Rechnungsmanagement",
    description: "Professionelles Rechnungsmanagement von der Angebotserstellung bis zur Zahlungsverfolgung mit digitalen Workflows.",
    icon: <FileText className="h-6 w-6 text-white" />,
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
    id: "leadsign",
    title: "Leadsign",
    subtitle: "Digitale Vertragsunterschrift",
    description: "Versende Angebote digital und hole rechtssichere Unterschriften ein – wie DocuSign, nahtlos integriert in deinen Workflow.",
    icon: <PenTool className="h-6 w-6 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Angebote digital versenden",
      "Rechtssichere digitale Signaturen",
      "Automatische Erinnerungen & Follow-ups",
      "Echtzeit-Status-Tracking",
      "Audit Trail & Compliance"
    ]
  },
  {
    id: "projektmanagement",
    title: "Projektmanagement",
    subtitle: "Projekt- & Teamkollaboration",
    description: "Umfassendes Projektmanagement mit automatischer Task-Erstellung, Team-Kollaboration, Whiteboards und Client-Portal für effiziente Projektabwicklung.",
    icon: <Cog className="h-6 w-6 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Kundenspezifische Aufgaben-Workflows",
      "Team-Kollaborationstools",
      "Gemeinsame digitale Whiteboards",
      "Kunden-Portal-Zugang",
      "Fortschrittsverfolgung & Berichterstattung"
    ]
  },
  {
    id: "calendar-system",
    title: "Smart Calendar System",
    subtitle: "Terminmanagement",
    description: "Intelligentes Kalendersystem mit Google Calendar Integration, automatisierten Booking-Links und Meeting-Room-Management für optimale Terminplanung.",
    icon: <Calendar className="h-6 w-6 text-white" />,
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
    id: "email-client",
    title: "E-Mail Client",
    subtitle: "Integrierter E-Mail-Client",
    description: "Vollständig integrierter E-Mail-Client mit der Möglichkeit, eigene E-Mail-Konten zu hinterlegen und professionelle E-Mail-Kommunikation direkt aus der Plattform zu verwalten.",
    icon: <Mail className="h-6 w-6 text-white" />,
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
    features: [
      "Eigene E-Mail-Adressen hinterlegen",
      "SMTP/IMAP-Integration",
      "Posteingang & Postausgang Verwaltung",
      "E-Mail-Templates & Vorlagen",
      "Automatische E-Mail-Synchronisation"
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
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-gray-100" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-purple-200/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Lift & Glow Animation */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-white border-2 border-purple-200 hover:border-purple-500 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">

                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content Container */}
                <div className="relative z-10 p-6 h-full flex flex-col">

                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wider text-purple-600 font-medium">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center text-sm transition-all duration-300 ${
                          hoveredCard === card.id
                            ? 'text-gray-900 font-semibold translate-x-2'
                            : 'text-gray-700'
                        }`}
                        style={{ transitionDelay: `${idx * 80}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          hoveredCard === card.id
                            ? 'bg-purple-600 scale-125'
                            : 'bg-purple-500'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}