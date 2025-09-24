import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Zap, Wrench, Droplets, PawPrint, Stethoscope, Armchair } from "lucide-react"

const services = [
  {
    title: "Interior & Exterior Detail",
    icon: Sparkles,
    image: "/technician-vacuuming-a-modern-sedan-interior--blac.jpg",
    benefits: ["Complete interior deep cleaning", "Exterior wash, wax & polish", "Dashboard & trim restoration"],
  },
  {
    title: "Buff/Wax",
    icon: Shield,
    image: "/close-up-polishing-car-hood--glossy-reflections--b.jpg",
    benefits: ["Paint correction & buffing", "Premium wax application", "Long-lasting protection"],
  },
  {
    title: "Headlight Restoration",
    icon: Zap,
    image: "/detailer-restoring-headlights-with-polishing-tool-.jpg",
    benefits: ["Removes oxidation & yellowing", "Improves visibility & safety", "Like-new appearance"],
  },
  {
    title: "Engine Bay Cleaning",
    icon: Wrench,
    image: "/clean-engine-bay-after-detail--shiny-finish--profe.jpg",
    benefits: ["Degreasing & deep cleaning", "Protective coating application", "Enhanced resale value"],
  },
  {
    title: "Clay & Seal",
    icon: Droplets,
    image: "/applying-clay-bar-to-car-hood--gloss-reflections--.jpg",
    benefits: ["Removes embedded contaminants", "Smooth paint surface", "Protective sealant application"],
  },
  {
    title: "Pet Hair Removal",
    icon: PawPrint,
    image: "/before-and-after-car-seat-with-pet-hair-cleaned--p.jpg",
    benefits: ["Specialized pet hair extraction", "Odor elimination treatment", "Allergen reduction"],
  },
  {
    title: "Stain Removal",
    icon: Stethoscope,
    image: "/seat-stain-before-and-after-removal--crisp-detail-.jpg",
    benefits: ["Advanced stain treatment", "Fabric & leather safe", "Guaranteed results"],
  },
  {
    title: "Seat Shampoo & Condition",
    icon: Armchair,
    image: "/detailer-shampooing-leather-seat-with-equipment--p.jpg",
    benefits: ["Deep fabric cleaning", "Leather conditioning", "Fresh, clean interior"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-red-500">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional mobile detailing services designed to keep your vehicle looking its absolute best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group bg-card border-border hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>

                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <a href="#contact">Get Quote</a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
