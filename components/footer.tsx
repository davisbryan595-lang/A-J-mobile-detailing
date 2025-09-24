import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anjlogo-GMDQih2j0e5SbeNTwR79NQdBKKf9xV.jpeg"
                alt="A&J Mobile Detailing Services"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-white">A&J Mobile Detailing Services</h3>
                <p className="text-red-500 text-sm">EST 2023</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your Car, Our Care – Anytime, Anywhere. Professional mobile detailing services in Concord, CA and the Bay
              Area. We bring premium car care directly to your location.
            </p>
            <p className="text-muted-foreground text-sm">
              <strong className="text-white">Owner:</strong> Angel Hinojosa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-500" />
                <a
                  href="tel:+19252146681"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  (925) 214-6681
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500" />
                <a
                  href="mailto:angelhinojosa2009@icloud.com"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  angelhinojosa2009@icloud.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p>Serving:</p>
                  <p>Concord, CA</p>
                  <p>Walnut Creek</p>
                  <p>Brentwood, CA</p>
                  <p>Bay Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} A&J Mobile Detailing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
