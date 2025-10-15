"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";

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
    value: "500",
    label: "Zufriedene Kunden",
    suffix: "+",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "99.5",
    label: "Uptime Garantie",
    suffix: "%",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    value: "85",
    label: "Automatisierung",
    suffix: "%",
    color: "from-purple-700 to-purple-900"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "60",
    label: "Schnellere Lieferung",
    suffix: "%",
    color: "from-purple-500 to-purple-800"
  }
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (!isVisible) return;

    const durations = [2000, 2000, 2000, 2000]; // Duration for each stat
    const targets = [500, 99.5, 85, 60];

    targets.forEach((target, index) => {
      const increment = target / (durations[index] / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }
      }, 16);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-bg"></div>
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group glass-purple rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 card-3d ${
                isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/50`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="mb-3">
                <span className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent count-up`}>
                  {index === 1 ? counts[index].toFixed(1) : Math.floor(counts[index])}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
