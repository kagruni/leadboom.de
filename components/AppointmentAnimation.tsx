"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Sparkles,
  TrendingUp
} from "lucide-react";

interface Appointment {
  id: number;
  clientName: string;
  service: string;
  time: string;
  status: 'new' | 'confirmed';
  icon: React.ReactNode;
}

const appointments: Appointment[] = [
  {
    id: 1,
    clientName: 'Sarah Schmidt',
    service: 'Erstgespräch Marketing',
    time: '14:00 Uhr',
    status: 'new',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 2,
    clientName: 'Michael Weber',
    service: 'Lead-Generierung Demo',
    time: '15:30 Uhr',
    status: 'confirmed',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 3,
    clientName: 'Julia Hoffmann',
    service: 'Beratungsgespräch',
    time: '16:00 Uhr',
    status: 'new',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 4,
    clientName: 'Thomas Becker',
    service: 'Follow-up Meeting',
    time: '16:45 Uhr',
    status: 'confirmed',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 5,
    clientName: 'Anna Müller',
    service: 'Strategie-Workshop',
    time: '17:15 Uhr',
    status: 'new',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 6,
    clientName: 'David Klein',
    service: 'CRM Integration',
    time: '18:00 Uhr',
    status: 'confirmed',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 7,
    clientName: 'Lisa Schneider',
    service: 'Erstgespräch',
    time: '09:30 Uhr',
    status: 'new',
    icon: <Calendar className="h-5 w-5" />
  },
  {
    id: 8,
    clientName: 'Martin Fischer',
    service: 'Projektplanung',
    time: '10:00 Uhr',
    status: 'confirmed',
    icon: <Calendar className="h-5 w-5" />
  }
];

export default function AppointmentAnimation() {
  const [visibleAppointments, setVisibleAppointments] = useState<Appointment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize with first 5 appointments
    setVisibleAppointments(appointments.slice(0, 5));

    // Rotate appointments every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % appointments.length;

        // Update visible appointments - show 5 at a time with sliding window
        setVisibleAppointments((prevVisible) => {
          const newVisible = [...prevVisible];
          newVisible.shift(); // Remove first
          newVisible.push(appointments[nextIndex]); // Add new at end
          return newVisible;
        });

        return nextIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Appointment Feed Container */}
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border-2 border-purple-300 rounded-full mb-3 shadow-lg shadow-purple-200/50">
            <Sparkles className="h-4 w-4 text-purple-600 fill-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Live Termine</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Termine <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">fließen rein</span>
          </h3>
        </div>

        {/* Appointments Stack */}
        <div className="space-y-3">
          {visibleAppointments.map((appointment, index) => (
            <div
              key={`${appointment.id}-${index}`}
              className="appointment-card bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-purple-400 transition-all duration-500 animate-slide-in backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 1 - (index * 0.12)
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${appointment.status === 'confirmed' ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center text-white shadow-lg`}>
                  {appointment.status === 'confirmed' ? <CheckCircle2 className="h-5 w-5" /> : appointment.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-gray-500" />
                        <p className="font-semibold text-gray-900 text-sm truncate">
                          {appointment.clientName}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {appointment.service}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Clock className="h-3.5 w-3.5 text-purple-600" />
                    <span className="text-xs text-purple-700 font-medium">
                      {appointment.time}
                    </span>
                    {appointment.status === 'confirmed' && (
                      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle2 className="h-3 w-3" />
                        Bestätigt
                      </span>
                    )}
                    {appointment.status === 'new' && (
                      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium pulse-glow">
                        <Sparkles className="h-3 w-3" />
                        Neu
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-6 grid grid-cols-3 gap-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="text-center bg-white border-2 border-purple-200 rounded-xl p-3 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">147</div>
            <div className="text-xs text-gray-600 font-medium">Heute</div>
          </div>
          <div className="text-center bg-white border-2 border-purple-200 rounded-xl p-3 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <div className="text-2xl font-bold text-green-600">+34%</div>
            </div>
            <div className="text-xs text-gray-600 font-medium">Wachstum</div>
          </div>
          <div className="text-center bg-white border-2 border-purple-200 rounded-xl p-3 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">2.4k</div>
            <div className="text-xs text-gray-600 font-medium">Monat</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
