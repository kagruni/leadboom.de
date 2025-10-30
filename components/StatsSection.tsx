"use client";

import { TrendingUp, Users, Zap, Target } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "50",
    label: "Zufriedene Kunden",
    suffix: "+",
    color: "from-purple-600 to-purple-700"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "50",
    label: "Höhere Terminquote",
    suffix: "%",
    color: "from-purple-600 to-purple-700"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    value: "100",
    label: "Automatisierung",
    suffix: "%",
    color: "from-purple-600 to-purple-700"
  },
  {
    icon: <Target className="h-8 w-8" />,
    value: "100",
    label: "Qualifizierte Leads",
    suffix: "%",
    color: "from-purple-600 to-purple-700"
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-gray-50 to-white">
      {/* Sanftere Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
        <svg className="relative block w-full h-32 md:h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#faf5ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f9fafb', stopOpacity: 0.5 }} />
            </linearGradient>
            <filter id="wave-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.12" floodColor="#a855f7"/>
            </filter>
          </defs>
          <path d="M0,40 C300,80 600,100 900,75 C1050,60 1125,45 1200,30 L1200,0 L0,0 Z"
            fill="url(#wave-gradient)"
            filter="url(#wave-shadow)"></path>
        </svg>
      </div>

      {/* Subtile Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-100/15 via-purple-50/10 to-transparent pointer-events-none"></div>

      {/* Animated Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Verbessertes Heading mit Badge */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-purple-50 px-5 py-2 rounded-full border border-purple-200 mb-4 shadow-sm">
            <span className="text-purple-700 text-sm font-semibold">Unsere Erfolge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 mb-3">
            Leadboom in Zahlen
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vertrau auf bewährte Ergebnisse und messbare Erfolge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-purple rounded-2xl p-8 text-center"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="mb-3">
                <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
