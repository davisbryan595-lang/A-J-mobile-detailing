import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-car-being-detailed-at-dusk--black-and-red-t.jpg"
          alt="Professional car detailing"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-balance">
              Your Car, Our Care – <span className="text-red-500">Anytime, Anywhere</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty leading-relaxed">
              Premium mobile detailing services in Concord, CA and the Bay Area. We bring professional car care directly
              to your location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 animate-glow"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Service
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
              >
                <a href="tel:+19252146681" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (925) 214-6681
                </a>
              </Button>
            </div>

            <div className="mt-8 text-gray-400">
              <p className="text-sm">Serving: Concord • Walnut Creek • Brentwood • Bay Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
