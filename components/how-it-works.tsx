import { Calendar, MapPin, Sparkles, Car } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Schedule your service online or call us. Choose your preferred time and location.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "We Arrive",
    description: "Our professional team arrives at your location with all equipment and supplies.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Detailing",
    description: "We perform comprehensive detailing using premium products and techniques.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Drive Clean",
    description: "Enjoy your freshly detailed vehicle. Satisfaction guaranteed every time.",
    icon: Car,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            How It <span className="text-red-500">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Simple, convenient, and professional. Here's how we make your car look amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-display font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold text-white mb-3">{step.title}</h3>

                <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent transform -translate-x-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
