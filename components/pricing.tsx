import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$89",
    description: "Perfect for regular maintenance",
    features: ["Exterior wash & dry", "Interior vacuum", "Window cleaning", "Tire shine", "Basic dashboard wipe"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$149",
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "Clay bar treatment",
      "Wax application",
      "Interior deep clean",
      "Leather conditioning",
      "Engine bay cleaning",
    ],
    popular: true,
  },
  {
    name: "Full Detail",
    price: "$249",
    description: "Complete transformation",
    features: [
      "Everything in Premium",
      "Paint correction",
      "Headlight restoration",
      "Seat shampoo",
      "Stain removal",
      "Pet hair removal",
      "Protective coating",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Transparent <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect package for your vehicle. All prices include mobile service to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-border hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? "border-red-500 shadow-lg shadow-red-500/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-display font-bold text-white">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-display font-bold text-red-500">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">starting</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-secondary hover:bg-secondary/80 text-white"
                  }`}
                >
                  <a href="#contact">Choose {plan.name}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            * Prices may vary based on vehicle size and condition. Contact us for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
