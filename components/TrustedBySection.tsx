"use client";

import { useEffect, useRef, useState } from "react";

// Placeholder Logos - in a real app these would be actual company logos
const companies = [
  { name: "TechStart GmbH", initials: "TS" },
  { name: "Digital Pro AG", initials: "DP" },
  { name: "Marketing Masters", initials: "MM" },
  { name: "Growth Solutions", initials: "GS" },
  { name: "Innovate Hub", initials: "IH" },
  { name: "Success Partners", initials: "SP" },
  { name: "Lead Experts", initials: "LE" },
  { name: "Sales Boost", initials: "SB" }
];

export default function TrustedBySection() {
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
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 purple-grid opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vertraut von führenden{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unternehmen
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Über 500 Unternehmen nutzen Leadboom für ihre Lead-Generierung
          </p>
        </div>

        {/* Logos Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl mx-auto ${
          isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
        }`}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 rounded-xl glass-card hover:glass-purple transition-all duration-500 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Placeholder Logo */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl group-hover:from-purple-500 group-hover:to-purple-700 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                  {company.initials}
                </div>
                {/* Company Name on Hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-xs font-medium text-gray-600 group-hover:text-purple-600">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Below */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Aktive Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-medium">Leads generiert</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 font-medium">Durchschnittsbewertung</div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
