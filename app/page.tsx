import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import A from "@/components/A"
import J from "@/components/J"
import Mobile from "@/components/Mobile"
import Detailing from "@/components/Detailing"
import Logo from "@/components/Logo"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <A />
      <J />
      <Mobile />
      <Detailing />
      <Logo />
      <attached />
    </main>
  )
}
