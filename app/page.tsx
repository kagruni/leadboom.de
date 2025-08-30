"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlurText from "@/components/BlurText"
import TrueFocus from "@/components/TrueFocus"
import GradientBlinds from "@/components/GradientBlinds"
import TargetCursor from "@/components/TargetCursor"
import StackingCards from "@/components/StackingCards"
import {
  ArrowRight,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden" 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = rect.height - (e.clientY - rect.top);
          
          // Dispatch custom event to the GradientBlinds component
          const canvas = document.querySelector('.gradient-blinds-container canvas') as HTMLCanvasElement;
          if (canvas) {
            const customEvent = new CustomEvent('heroMouseMove', {
              detail: { x, y, width: rect.width, height: rect.height }
            });
            canvas.dispatchEvent(customEvent);
          }
        }}>
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
          <GradientBlinds
            gradientColors={['#000000', '#4c1d95', '#7c3aed', '#a855f7']}
            angle={45}
            noise={0.1}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.3}
            spotlightSoftness={2}
            spotlightOpacity={2}
            mouseDampening={0.05}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/50"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
          <div className="w-full mx-auto">
            <BlurText
              text="Bereit für die volle Kontrolle?"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-8 whitespace-nowrap"
            />
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed opacity-0 animate-fade-in-delayed">
              Die ultimative Plattform für Sales, Fulfillment und hochwertige Leads.
            </p>
            
            <div className="flex justify-center items-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full animate-fade-in-button">
                <Link href="/kontakt" className="flex items-center">
                  Demo anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5M+</div>
                <div className="text-sm">Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">35%</div>
                <div className="text-sm">Öffnungsrate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle background animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-pulse"></div>
      </section>

      {/* TrueFocus Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <TrueFocus 
                sentence="Echter Focus"
                manualMode={false}
                blurAmount={5}
                borderColor="#a855f7"
                glowColor="rgba(168, 85, 247, 0.6)"
                animationDuration={0.8}
                pauseBetweenAnimations={1.5}
              />
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-light mt-4">
                auf das Wesentliche im Geschäft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        
        {/* Section Header */}
        <div className="relative z-10 text-center py-20 px-4">
          <div className="container mx-auto">
            <div className="inline-block bg-purple-100/10 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-4">
              Unsere Komponenten
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Die perfekte
              <span className="relative inline-block ml-4">
                <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Kombination
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Vier mächtige Komponenten, die zusammen Ihr Business revolutionieren.
            </p>
          </div>
        </div>

        {/* Stacking Cards Component */}
        <StackingCards />
      </section>

      {/* Enhanced CTA Section with better visuals */}
      <section className="relative overflow-hidden py-24">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 animate-gradient"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Animated blobs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl animate-blob"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white animate-fade-in">
              Bereit, mit{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Leads</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-400/30 -rotate-1"></span>
              </span>{" "}
              überschüttet zu werden?
            </h2>
            <p className="mb-10 text-xl text-purple-100 animate-fade-in animate-delay-200 max-w-2xl mx-auto">
              Starten Sie noch heute mit Leadboom und revolutionieren Sie Ihre Lead-Generierung mit unseren innovativen
              Tools und Lösungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group bg-white text-purple-700 border-2 border-white hover:bg-transparent hover:text-white cta-button-shine"
              >
                <Link href="/kontakt">
                  <span className="flex items-center">
                    Demo anfordern
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="gradient"
                className="group border-2 border-purple-400/30 hover:border-purple-400/50 cta-button btn-pulse"
              >
                <Link href="/leistungen">
                  <span className="flex items-center">
                    Produkte entdecken
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <div className="absolute inset-0 bg-purple-600 flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-purple-100">
                <span className="font-bold">500+</span> zufriedene Kunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Cursor Effect */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
    </div>
  )
}

