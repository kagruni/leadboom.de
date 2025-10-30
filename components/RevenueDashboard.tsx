"use client";

import {
  Calendar,
  TrendingUp,
  CheckCircle2,
  Euro,
  Sparkles,
  Clock,
  Zap,
  Award,
  ArrowUpRight,
  Bell,
  User,
  Percent,
  Target
} from "lucide-react";

interface Appointment {
  id: number;
  client: string;
  type: string;
  time: string;
  date: string;
}

interface Deal {
  id: number;
  company: string;
  amount: number;
}

interface TimelineEvent {
  time: string;
  type: 'appointment' | 'deal';
  label: string;
}

const appointments: Appointment[] = [
  { id: 1, client: "Sarah M.", type: "Erstgespräch", time: "14:30", date: "Heute" },
  { id: 2, client: "TechCorp GmbH", type: "Demo", time: "10:00", date: "Morgen" },
  { id: 3, client: "Michael K.", type: "Follow-up", time: "15:00", date: "Heute" },
  { id: 4, client: "Digital Pro", type: "Beratung", time: "11:30", date: "Heute" },
  { id: 5, client: "StartUp AG", type: "Pitch", time: "16:00", date: "Heute" },
  { id: 6, client: "Innovation Ltd", type: "Erstgespräch", time: "09:00", date: "Morgen" },
  { id: 7, client: "Growth Co", type: "Closing", time: "17:00", date: "Heute" },
  { id: 8, client: "Success GmbH", type: "Demo", time: "13:00", date: "Morgen" },
];

const deals: Deal[] = [
  { id: 1, company: "TechCorp GmbH", amount: 15000 },
  { id: 2, company: "Digital Solutions AG", amount: 8500 },
  { id: 3, company: "Marketing Pro", amount: 12000 },
  { id: 4, company: "StartUp Ventures", amount: 6500 },
  { id: 5, company: "Enterprise Ltd", amount: 25000 },
  { id: 6, company: "Growth Agency", amount: 9500 },
  { id: 7, company: "Innovation Hub", amount: 18000 },
  { id: 8, company: "Success Partners", amount: 11000 },
];

const timelineEvents: TimelineEvent[] = [
  { time: "09:00", type: 'appointment', label: 'Sarah' },
  { time: "11:00", type: 'deal', label: 'Deal' },
  { time: "14:00", type: 'appointment', label: 'Demo' },
  { time: "16:00", type: 'appointment', label: 'Follow' },
  { time: "17:00", type: 'deal', label: 'Closing' },
];

export default function RevenueDashboard() {
  // Static values - no animations
  const appointmentsCount = 38;
  const dealsCount = 24;
  const conversionRate = 67;
  const avgValue = 10500;
  const notificationCount = 12;

  // Next appointment for countdown
  const nextAppointment = appointments[0];

  // Always show first appointment and deal - no rotation
  const currentAppointment = appointments[0];
  const currentDeal = deals[0];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-lg">
        {/* Header with Notification Bell */}
        <div className="mb-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border-2 border-purple-300 rounded-full mb-3">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-700">Live Performance</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          {/* Notification Bell */}
          <div className="absolute top-0 right-0">
            <div className="relative">
              <Bell className="h-5 w-5 text-purple-600" />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {notificationCount}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            Ihr Erfolg <span className="text-purple-700">in Echtzeit</span>
          </h3>
        </div>

        {/* Countdown to Next Appointment */}
        <div className="bg-white/95 backdrop-blur-2xl border-2 border-purple-300 rounded-2xl p-4 shadow-2xl shadow-purple-200/50 mb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-purple-50/20 to-transparent"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-1">Nächster Termin in:</div>
              <div className="text-2xl font-extrabold text-gray-900 mb-1">2h 15m</div>
              <div className="text-sm text-gray-700">
                {nextAppointment.client} - {nextAppointment.type}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {/* Termine */}
          <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-xl p-3 shadow-xl shadow-purple-200/30">
            <div className="flex flex-col items-center text-center">
              <div className="p-1.5 bg-purple-100 rounded-lg mb-1.5">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-700 mb-0.5">{appointmentsCount}</div>
              <div className="text-[10px] text-gray-700">Termine</div>
              <div className="text-[9px] text-green-600 mt-0.5">+5 heute</div>
            </div>
          </div>

          {/* Deals */}
          <div className="bg-white/95 backdrop-blur-xl border-2 border-green-200 rounded-xl p-3 shadow-xl shadow-green-200/30">
            <div className="flex flex-col items-center text-center">
              <div className="p-1.5 bg-green-100 rounded-lg mb-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-700 mb-0.5">{dealsCount}</div>
              <div className="text-[10px] text-gray-700">Deals</div>
            </div>
          </div>

          {/* Conversion */}
          <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-xl p-3 shadow-xl shadow-purple-200/30">
            <div className="flex flex-col items-center text-center">
              <div className="p-1.5 bg-purple-100 rounded-lg mb-1.5">
                <Percent className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-700 mb-0.5">{conversionRate}%</div>
              <div className="text-[10px] text-gray-700">Conv.</div>
              <div className="text-[9px] text-green-600 mt-0.5">+12%</div>
            </div>
          </div>

          {/* Avg Value */}
          <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-xl p-3 shadow-xl shadow-purple-200/30">
            <div className="flex flex-col items-center text-center">
              <div className="p-1.5 bg-purple-100 rounded-lg mb-1.5">
                <Euro className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-lg font-bold text-purple-700 mb-0.5">{(avgValue / 1000).toFixed(1)}K</div>
              <div className="text-[10px] text-gray-700">Ø Wert</div>
            </div>
          </div>
        </div>

        {/* Live Activity Feed - 2 Tracks */}
        <div className="bg-white/95 backdrop-blur-2xl border-2 border-purple-300 rounded-2xl p-4 shadow-xl shadow-purple-200/40 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-xs font-bold text-purple-700">LIVE ACTIVITY</span>
          </div>

          <div className="space-y-2">
            {/* Appointment Track */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 border-2 border-purple-300 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <User className="h-3 w-3 text-purple-700" />
                    <span className="text-xs font-bold text-purple-700">NEUER TERMIN!</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm truncate">{currentAppointment.client}</p>
                  <p className="text-xs text-gray-700">{currentAppointment.type} - {currentAppointment.time}</p>
                </div>
              </div>
            </div>

            {/* Deal Track */}
            <div className="bg-gradient-to-r from-green-50 to-green-100/50 border-2 border-green-300 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <CheckCircle2 className="h-3 w-3 text-green-700" />
                    <span className="text-xs font-bold text-green-700">DEAL ABGESCHLOSSEN!</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm truncate">{currentDeal.company}</p>
                  <p className="text-xl font-extrabold text-green-600">{formatCurrency(currentDeal.amount)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Timeline */}
        <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-xl p-4 shadow-xl shadow-purple-200/30">
          <div className="text-xs text-gray-700 mb-3 flex items-center gap-2">
            <Target className="h-3 w-3" />
            <span className="font-semibold">Timeline Heute</span>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300"></div>

            {/* Timeline Events */}
            <div className="relative flex justify-between items-center">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full mb-2 ${event.type === 'appointment' ? 'bg-purple-600 shadow-lg shadow-purple-400/50' : 'bg-green-600 shadow-lg shadow-green-400/50'}`}></div>
                  <div className="text-[10px] text-gray-700 font-medium">{event.time}</div>
                  <div className={`text-[9px] font-semibold mt-0.5 ${event.type === 'appointment' ? 'text-purple-700' : 'text-green-700'}`}>
                    {event.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Time Indicator */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-6 bg-red-500"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
