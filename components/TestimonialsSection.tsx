"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Müller",
    position: "CEO",
    company: "Digital Marketing Pro",
    content: "Leadboom hat unsere Lead-Generierung revolutioniert! In nur 3 Monaten konnten wir unsere Kundenzahl verdoppeln und die Effizienz um 85% steigern. Die Automatisierung ist ein echter Game-Changer.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Michael Schmidt",
    position: "Geschäftsführer",
    company: "Growth Solutions GmbH",
    content: "Die All-in-One Plattform von Leadboom hat alle unsere Marketing-Tools ersetzt. Die Zeitersparnis ist enorm und die Qualität der Leads ist deutlich besser als zuvor. Absolute Empfehlung!",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Julia Wagner",
    position: "Marketing Director",
    company: "Innovate Agency",
    content: "Besonders beeindruckend finde ich die WhatsApp-Integration und die Voice-Automation. Unsere Response-Rate hat sich verdreifacht und wir können jetzt 24/7 Leads qualifizieren. Fantastisch!",
    rating: 5,
    avatar: "JW"
  }
];

export default function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="floating-orb floating-orb-3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-sm font-medium mb-4">
            <Star className="inline h-4 w-4 mr-2" />
            Kundenstimmen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Was unsere Kunden{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              sagen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Über 500 zufriedene Kunden vertrauen bereits auf Leadboom
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-8 card-3d hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6 relative">
                <Quote className="h-12 w-12 text-purple-200 absolute -top-2 -left-2" />
                <Quote className="h-12 w-12 text-purple-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-purple-500 text-purple-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-purple-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Werden auch Sie Teil unserer Erfolgsgeschichte
          </p>
          <div className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Alle Bewertungen ansehen
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
