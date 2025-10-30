"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
    id: "akquise",
    title: "Akquise",
    description: "Hochwertige Datensätze mit vollständigen Unternehmensinformationen für maximalen Vertriebserfolg",
    icon: <Target className="h-6 w-6" />,
    tool: "Lead Scraping",
    color: "from-purple-600 to-purple-700",
    stats: "100% qualifiziert"
  },
  {
    id: "verkauf",
    title: "Verkauf",
    description: "CRM-gestütztes Telefonieren, professionelle Angebotserstellung und automatisierte Follow-ups",
    icon: <MessageSquare className="h-6 w-6" />,
    tool: "Sales & CRM",
    color: "from-purple-500 to-purple-600",
    stats: "50% höhere Quote"
  },
  {
    id: "vertragsabschluss",
    title: "Vertragsabschluss",
    description: "Digitale Unterschrift, automatisierte Rechnungsstellung und Zahlungsabwicklung",
    icon: <PenTool className="h-6 w-6" />,
    tool: "Invoicing",
    color: "from-purple-700 to-purple-800",
    stats: "24h Bearbeitung"
  },
  {
    id: "umsetzung",
    title: "Umsetzung",
    description: "Projektmanagement mit Kalenderintegration, Team-Kollaboration und automatisierter Lieferung",
    icon: <Cog className="h-6 w-6" />,
    tool: "Projektmanagement",
    color: "from-purple-600 to-purple-700",
    stats: "98% pünktlich"
  }
];

const automationStats = [
  {
    stat: "100%",
    label: "Automatisierung",
    description: "Vollständig automatisierter Workflow"
  },
  {
    stat: "50%",
    label: "Schnellere Abschlüsse",
    description: "Optimierte Prozesse verkürzen Sales-Cycle"
  },
  {
    stat: "24/7",
    label: "Verfügbarkeit",
    description: "Rund um die Uhr einsatzbereit"
  }
];

export default function BusinessProcessFlow() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<string>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleStats, setVisibleStats] = useState<Set<number>>(new Set());
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px'
    };

    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = entry.target.getAttribute('data-step-id');
          if (stepId) {
            setVisibleSteps(prev => new Set([...prev, stepId]));
          }
        }
      });
    }, observerOptions);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statIndex = entry.target.getAttribute('data-stat-index');
          if (statIndex !== null) {
            setVisibleStats(prev => new Set([...prev, parseInt(statIndex)]));
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) stepObserver.observe(ref);
    });

    statsRefs.current.forEach((ref) => {
      if (ref) statsObserver.observe(ref);
    });

    return () => {
      stepObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <div className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-purple-100 px-3 py-1.5 rounded-full text-purple-700 text-xs font-medium mb-4">
            Geschäftsprozess-Automatisierung
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ihr Workflow
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ein nahtloser, vollautomatisierter Workflow von der ersten Kontaktaufnahme bis zur erfolgreichen Projektlieferung.
          </p>
        </div>

        {/* Vertical Timeline Workflow */}
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line (Left Side) */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 z-0">
                {/* Background Line (Gray) */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 opacity-30"></div>

                {/* Animated Progress Line (Purple) */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 origin-top transition-all duration-1000 ease-out"
                  style={{
                    transform: `scaleY(${visibleSteps.size / processSteps.length})`,
                    transformOrigin: 'top'
                  }}
                ></div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-10">
                {processSteps.map((step, index) => {
                  const isVisible = visibleSteps.has(step.id);
                  const isLastStep = index === processSteps.length - 1;

                  return (
                    <div
                      key={step.id}
                      ref={(el) => stepRefs.current[index] = el}
                      data-step-id={step.id}
                      className="relative"
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 md:left-8 top-6 z-10 transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                          transform: `translate(-50%, -50%) ${isVisible ? 'scale(1)' : 'scale(0)'}`
                        }}
                      >
                        {/* Outer Ring (Pulse Effect) */}
                        <div className={`absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20 ${
                          hoveredStep === step.id ? 'opacity-40' : ''
                        }`}></div>

                        {/* Main Dot */}
                        <div className={`relative w-4 h-4 rounded-full bg-gradient-to-br ${step.color} border-3 border-white shadow-lg transition-all duration-500 ${
                          hoveredStep === step.id ? 'scale-125 shadow-purple-500/50' : ''
                        }`}>
                          {/* Inner Glow */}
                          <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                        </div>

                        {/* Step Number Badge */}
                        <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-purple-400 text-purple-700 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md">
                          {index + 1}
                        </div>
                      </div>

                      {/* Connecting Line from Dot to Card */}
                      <div className={`hidden md:block absolute left-8 top-6 w-12 h-0.5 z-0 transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms',
                          transformOrigin: 'left'
                        }}
                      >
                        <div className={`h-full bg-gradient-to-r from-purple-400 to-purple-300 transition-all duration-300 ${
                          hoveredStep === step.id ? 'h-1' : 'h-0.5'
                        }`}></div>
                      </div>

                      {/* Content Card (Right Side) */}
                      <div className={`ml-14 md:ml-24 transition-all duration-700 transform ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-12'
                      }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms'
                        }}
                      >
                        <div className={`bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg transition-all duration-500 ${
                          hoveredStep === step.id
                            ? 'border-purple-400 shadow-2xl shadow-purple-300/40 -translate-y-1 scale-[1.02]'
                            : 'hover:border-purple-300 hover:shadow-xl'
                        }`}>
                          {/* Icon and Title Row */}
                          <div className="flex items-start gap-3 mb-3">
                            {/* Icon Circle */}
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transition-all duration-500 ${
                              hoveredStep === step.id ? 'scale-110 rotate-6 shadow-purple-500/50' : ''
                            }`}>
                              <div className="scale-110">
                                {step.icon}
                              </div>
                            </div>

                            {/* Title and Tool */}
                            <div className="flex-grow">
                              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">{step.title}</h3>
                              <div className="text-[10px] text-purple-700 font-semibold uppercase tracking-wider">
                                {step.tool}
                              </div>
                            </div>

                            {/* Stats Badge */}
                            {step.stats && (
                              <div className={`flex-shrink-0 px-2 py-0.5 rounded-full border-2 transition-all duration-300 ${
                                hoveredStep === step.id
                                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                                  : 'border-purple-300 bg-white text-purple-600'
                              }`}>
                                <div className="text-xs font-bold whitespace-nowrap">
                                  {step.stats}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Hover Indicator */}
                          <div className={`mt-3 pt-3 border-t-2 border-purple-100 transition-all duration-300 ${
                            hoveredStep === step.id ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <div className="flex items-center text-purple-600 text-xs font-medium">
                              <CheckCircle className="h-3.5 w-3.5 mr-2" />
                              Vollständig automatisiert
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block px-6 py-4 rounded-xl bg-purple-50 border border-purple-300">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Bereit für die <span className="text-purple-700">vollständige Automatisierung</span>?
            </h4>
            <p className="text-gray-700 text-base mb-4 max-w-2xl">
              Entdecke, wie unsere KI-gesteuerte Plattform Deine Agentur-Prozesse revolutioniert.
            </p>
            <Link href="https://app.leadboom.de/sign-up" className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30 hover:scale-105">
              Automatisierung erleben <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}