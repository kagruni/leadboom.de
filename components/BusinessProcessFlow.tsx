"use client";

import { useState } from "react";
import { 
  Target, 
  MessageSquare, 
  FileText, 
  PenTool, 
  Cog, 
  CheckCircle, 
  TrendingUp,
  ArrowRight,
  BarChart3
} from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tool: string;
  color: string;
  stats?: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "KI-gestützte Lead-Akquise über Multiple-Channels",
    icon: <Target className="h-6 w-6" />,
    tool: "AI Voice Outreach",
    color: "from-purple-600 to-purple-700",
    stats: "500+ täglich"
  },
  {
    id: "qualification",
    title: "Qualification",
    description: "Automatische Lead-Qualifizierung und Scoring",
    icon: <MessageSquare className="h-6 w-6" />,
    tool: "WhatsApp Campaigns",
    color: "from-purple-500 to-purple-600",
    stats: "85% Genauigkeit"
  },
  {
    id: "proposal",
    title: "Proposal",
    description: "Intelligente Angebotserstellung mit personalisierten Inhalten",
    icon: <FileText className="h-6 w-6" />,
    tool: "Quote Builder",
    color: "from-purple-400 to-purple-500",
    stats: "60% schneller"
  },
  {
    id: "contract",
    title: "Contract",
    description: "Digitale Vertragsabwicklung und E-Signatur",
    icon: <PenTool className="h-6 w-6" />,
    tool: "Digital Signing",
    color: "from-purple-700 to-purple-800",
    stats: "99.2% Erfolgsrate"
  },
  {
    id: "fulfillment",
    title: "Fulfillment",
    description: "Automatisierte Projektabwicklung und Task-Management",
    icon: <Cog className="h-6 w-6" />,
    tool: "Task Workflows",
    color: "from-purple-600 to-purple-700",
    stats: "40% Zeit gespart"
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "Nahtlose Projektlieferung über Client Portal",
    icon: <CheckCircle className="h-6 w-6" />,
    tool: "Client Portal",
    color: "from-purple-500 to-purple-600",
    stats: "98% Zufriedenheit"
  },
  {
    id: "upselling",
    title: "Upselling",
    description: "Intelligente Upselling-Opportunities durch Analytics",
    icon: <TrendingUp className="h-6 w-6" />,
    tool: "Analytics Dashboard",
    color: "from-purple-400 to-purple-500",
    stats: "35% mehr Revenue"
  }
];

const automationStats = [
  {
    stat: "85%",
    label: "der Routine-Tasks automatisiert",
    description: "Massive Zeitersparnis durch intelligente Automatisierung"
  },
  {
    stat: "60%",
    label: "schnellere Projektlieferung",
    description: "Optimierte Workflows verkürzen Lieferzeiten erheblich"
  },
  {
    stat: "40%",
    label: "höhere Kundenzufriedenheit",
    description: "Transparenz und Qualität steigern Kundenerfahrung"
  },
  {
    stat: "25%",
    label: "höhere Gewinnmargen",
    description: "Effizienzsteigerung führt zu besserer Profitabilität"
  }
];

export default function BusinessProcessFlow() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100/10 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-4">
            Geschäftsprozess-Automatisierung
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Von Lead zu{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Erfolg
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ein nahtloser, vollautomatisierter Workflow von der ersten Kontaktaufnahme bis zur erfolgreichen Projektlieferung.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <div className="relative">
            {/* Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 transform -translate-y-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative z-10"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Container */}
                  <div className="text-center">
                    {/* Icon Container */}
                    <div className="relative mx-auto mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                        hoveredStep === step.id ? 'scale-110 shadow-2xl shadow-purple-500/30' : 'hover:scale-105'
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>

                      {/* Arrow (except for last item) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                          <ArrowRight className="h-5 w-5 text-purple-400" />
                        </div>
                      )}
                    </div>

                    {/* Step Info */}
                    <div className={`transition-all duration-300 ${
                      hoveredStep === step.id ? 'transform -translate-y-2' : ''
                    }`}>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{step.description}</p>
                      <div className="text-xs text-purple-400 font-medium mb-2">{step.tool}</div>
                      {step.stats && (
                        <div className={`text-sm font-bold transition-all duration-300 ${
                          hoveredStep === step.id ? 'text-purple-300 scale-110' : 'text-gray-400'
                        }`}>
                          {step.stats}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Stats Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prozess-Automatisierung{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Statistiken
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reale Zahlen unserer Agentur-Partner zeigen die Kraft der Automatisierung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationStats.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20 hover:border-purple-400/40 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Main Stat */}
                  <div className="text-5xl md:text-6xl font-black text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                    {item.stat}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-bold text-purple-300 mb-3 leading-tight">
                    {item.label}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-full -translate-x-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">
              Bereit für die <span className="text-purple-400">vollständige Automatisierung</span>?
            </h4>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Entdecken Sie, wie unsere KI-gesteuerte Plattform Ihre Agentur-Prozesse revolutioniert.
            </p>
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
              Automatisierung erleben <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}