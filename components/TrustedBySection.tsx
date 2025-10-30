"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Company Logos - Add your logo files to /public/logos/ directory
const companies = [
  {
    name: "Unternehmen 1",
    logo: "/logos/company1.png",
    alt: "Unternehmen 1 Logo"
  },
  {
    name: "Unternehmen 2",
    logo: "/logos/company2.png",
    alt: "Unternehmen 2 Logo"
  },
  {
    name: "Unternehmen 3",
    logo: "/logos/company3.png",
    alt: "Unternehmen 3 Logo"
  },
  {
    name: "Unternehmen 4",
    logo: "/logos/company4.png",
    alt: "Unternehmen 4 Logo"
  },
  {
    name: "Unternehmen 5",
    logo: "/logos/company5.png",
    alt: "Unternehmen 5 Logo"
  },
  {
    name: "Unternehmen 6",
    logo: "/logos/company6.png",
    alt: "Unternehmen 6 Logo"
  },
  {
    name: "Unternehmen 7",
    logo: "/logos/company7.png",
    alt: "Unternehmen 7 Logo"
  },
  {
    name: "Unternehmen 8",
    logo: "/logos/company8.png",
    alt: "Unternehmen 8 Logo"
  }
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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-50/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vertraut von führenden{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Unternehmen
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Über 50 Unternehmen nutzen Leadboom für ihre Lead-Generierung
          </p>
        </div>

        {/* Logos Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl mx-auto ${
          isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
        }`}>
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 rounded-xl bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 card-hover hover:shadow-2xl hover:shadow-purple-300/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Company Logo */}
              <div className="relative">
                <div className="relative w-32 h-16 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain"
                  />
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
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-700 font-medium">Aktive Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-700 font-medium">Leads generiert</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-700 font-medium">Durchschnittsbewertung</div>
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
