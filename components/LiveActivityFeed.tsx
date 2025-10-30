"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  TrendingUp,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  Euro,
  Sparkles,
  UserPlus
} from "lucide-react";

interface Activity {
  id: number;
  type: 'appointment' | 'lead' | 'deal' | 'message' | 'call' | 'payment';
  title: string;
  subtitle: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'appointment',
    title: 'Termin gebucht',
    subtitle: 'Sarah M. - Erstgespräch',
    time: 'vor 2 Min',
    icon: <Calendar className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    type: 'lead',
    title: 'Neuer Lead',
    subtitle: 'TechStart GmbH - Marketing',
    time: 'vor 5 Min',
    icon: <UserPlus className="h-5 w-5" />,
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 3,
    type: 'deal',
    title: 'Deal abgeschlossen',
    subtitle: 'Digital Pro AG - €5.000',
    time: 'vor 8 Min',
    icon: <CheckCircle2 className="h-5 w-5" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    type: 'message',
    title: 'Messenger Nachricht',
    subtitle: 'Michael K. - Interessiert',
    time: 'vor 12 Min',
    icon: <MessageSquare className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 5,
    type: 'appointment',
    title: 'Meeting bestätigt',
    subtitle: 'Julia W. - Beratung',
    time: 'vor 15 Min',
    icon: <Calendar className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 6,
    type: 'payment',
    title: 'Zahlung erhalten',
    subtitle: 'Invoice #1234 - €2.500',
    time: 'vor 18 Min',
    icon: <Euro className="h-5 w-5" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 7,
    type: 'call',
    title: 'Anruf erfolgreich',
    subtitle: 'Thomas B. - Follow-up',
    time: 'vor 22 Min',
    icon: <Phone className="h-5 w-5" />,
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 8,
    type: 'lead',
    title: 'Lead qualifiziert',
    subtitle: 'Growth Solutions - Hot Lead',
    time: 'vor 25 Min',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 9,
    type: 'message',
    title: 'E-Mail Antwort',
    subtitle: 'Lisa M. - Demo Anfrage',
    time: 'vor 30 Min',
    icon: <Mail className="h-5 w-5" />,
    color: 'from-purple-500 to-purple-700'
  }
];

export default function LiveActivityFeed() {
  const [visibleActivities, setVisibleActivities] = useState<Activity[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize with first 4 activities
    setVisibleActivities(activities.slice(0, 4));

    // Rotate activities every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % activities.length;

        // Update visible activities - show 4 at a time with sliding window
        setVisibleActivities((prevVisible) => {
          const newVisible = [...prevVisible];
          newVisible.shift(); // Remove first
          newVisible.push(activities[nextIndex]); // Add new at end
          return newVisible;
        });

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-800/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-900/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Activity Feed Container */}
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-700/30 rounded-full mb-3">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Live Activity</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <h3 className="text-lg font-bold text-white">
            Ihr CRM <span className="text-purple-400">in Aktion</span>
          </h3>
        </div>

        {/* Activities Stack */}
        <div className="space-y-3">
          {visibleActivities.map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              className="activity-card bg-gray-900/50 border-2 border-purple-700/30 rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-purple-600 transition-all duration-500 animate-slide-in"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 1 - (index * 0.15)
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white shadow-lg`}>
                  {activity.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm truncate">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-400 truncate mt-0.5">
                        {activity.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Success Indicator for special types */}
              {(activity.type === 'deal' || activity.type === 'payment') && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-green-600 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  Erfolgreich abgeschlossen
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-6 grid grid-cols-3 gap-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="text-center bg-purple-900/30 border border-purple-700/30 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-400">247</div>
            <div className="text-xs text-gray-400">Leads heute</div>
          </div>
          <div className="text-center bg-purple-900/30 border border-purple-700/30 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-400">38</div>
            <div className="text-xs text-gray-400">Termine</div>
          </div>
          <div className="text-center bg-purple-900/30 border border-purple-700/30 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-400">12</div>
            <div className="text-xs text-gray-400">Deals</div>
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

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
