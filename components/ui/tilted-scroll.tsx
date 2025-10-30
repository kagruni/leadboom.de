import { cn } from "@/lib/utils"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Automatische Terminvergabe" },
  { id: "2", text: "CRM Integration" },
  { id: "3", text: "24/7 Verfügbar" },
  { id: "4", text: "Echtzeit-Synchronisation" },
  { id: "5", text: "Individuelle Anpassungen" },
  { id: "6", text: "Automatische Erinnerungen" },
]

export function TiltedScroll({
  items = defaultItems,
  className
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center perspective-1000", className)}>
      <div className="relative overflow-hidden rounded-2xl [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_3rem,black_calc(100%-3rem),transparent),linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%-3rem),transparent)]">
        <div className="grid h-[450px] w-[380px] gap-4 animate-skew-scroll grid-cols-1 py-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group flex items-center gap-3 cursor-pointer rounded-xl border border-purple-200/40 bg-gradient-to-br from-white/70 via-white/50 to-purple-50/30 backdrop-blur-lg p-5 shadow-xl transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/80 hover:via-white/60 hover:to-purple-50/40 hover:shadow-2xl hover:border-purple-300/60"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircleIcon className="h-5 w-5 stroke-white transition-all duration-300" />
              </div>
              <p className="text-gray-800 font-semibold text-base transition-colors duration-300 group-hover:text-gray-900">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
