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
  ArrowRight
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
    id: "sales",
    title: "Sales Component",
    subtitle: "Verkaufs-Engine",
    description: "Vollautomatisierte Sales-Pipeline mit KI-gestützter Lead-Qualifizierung und personalisierten Verkaufsgesprächen für maximale Conversion-Raten.",
    icon: <Target className="h-8 w-8 text-white" />,
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
    features: [
      "KI-gestützte Lead-Qualifizierung",
      "Automatisierte Follow-up Sequenzen",
      "Personalisierte Verkaufsskripte",
      "Real-time Conversion Analytics"
    ]
  },
  {
    id: "fulfillment",
    title: "Fulfillment System",
    subtitle: "Auftragsabwicklung",
    description: "Nahtlose Auftragsabwicklung von der Bestellung bis zur Lieferung mit vollständiger Transparenz und intelligenter Automatisierung.",
    icon: <Package className="h-8 w-8 text-white" />,
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    features: [
      "Automatische Bestellabwicklung",
      "Real-time Liefertracking",
      "Intelligentes Inventory Management",
      "Proaktive Kundenbenachrichtigungen"
    ]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business",
    subtitle: "Messenger-Marketing",
    description: "Professionelle WhatsApp Business Integration für direkte Kundenkommunikation und automatisierte Nachrichten mit hohen Öffnungsraten.",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    color: "from-purple-400 to-purple-600",
    gradient: "bg-gradient-to-br from-purple-300/20 to-purple-500/20",
    features: [
      "WhatsApp Business API Integration",
      "KI-gesteuerte Chatbots",
      "Personalisierte Broadcast-Kampagnen",
      "Multi-Media Content Support"
    ]
  },
  {
    id: "voice",
    title: "Voice Outreach",
    subtitle: "Anruf-Automatisierung",
    description: "Intelligente Telefon-Bots für automatisierte Anrufe, Terminvereinbarungen und Kundenbetreuung mit natürlicher Sprachverarbeitung.",
    icon: <Phone className="h-8 w-8 text-white" />,
    color: "from-purple-700 to-purple-900",
    gradient: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    features: [
      "KI-gesteuerte natürliche Gespräche",
      "Automatische Terminbuchung",
      "Mehrsprachiger Support",
      "Detaillierte Call-Analytics"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-purple-600/20" />
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Glass Effect */}
              <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-black/40 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content Container */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-wider text-purple-400 font-medium">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center text-sm transition-all duration-300 ${
                          hoveredCard === card.id 
                            ? 'text-white translate-x-2' 
                            : 'text-gray-400'
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          hoveredCard === card.id 
                            ? 'bg-purple-400 scale-125' 
                            : 'bg-purple-500/50'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className={`transition-all duration-500 ${
                    hoveredCard === card.id 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-70 transform translate-y-2'
                  }`}>
                    <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-400/30 text-white font-medium hover:from-purple-600/30 hover:to-purple-500/30 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm group/btn">
                      <span className="flex items-center justify-center">
                        Mehr erfahren 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-all duration-700 ${
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
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-2">
              Bereit für die <span className="text-purple-400 font-semibold">ultimative Kombination</span>?
            </p>
            <button className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Alle Features entdecken <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}