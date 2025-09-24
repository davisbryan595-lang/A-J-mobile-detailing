"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    before: "/dirty-car-exterior-before-detailing--mud-and-grime.jpg",
    after: "/same-car-after-professional-detailing--sparkling-c.jpg",
    title: "Exterior Detail Transformation",
  },
  {
    before: "/stained-car-interior-before-cleaning--dirty-seats-.jpg",
    after: "/same-interior-after-professional-cleaning--pristin.jpg",
    title: "Interior Deep Clean",
  },
  {
    before: "/oxidized-car-headlights-before-restoration--yellow.jpg",
    after: "/same-headlights-after-restoration--crystal-clear--.jpg",
    title: "Headlight Restoration",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    title: "Engine Bay Cleaning",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    title: "Pet Hair Removal",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
    title: "Buff & Wax Service",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({})

  const toggleImage = (index: number) => {
    setShowAfter((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Before & <span className="text-red-500">After</span> Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See the incredible transformations we achieve with our professional detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-card">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={showAfter[index] ? image.after : image.before}
                  alt={`${image.title} - ${showAfter[index] ? "After" : "Before"}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Before/After Toggle */}
                <button
                  onClick={() => toggleImage(index)}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-200"
                >
                  {showAfter[index] ? "Show Before" : "Show After"}
                </button>

                {/* View Full Size */}
                <button
                  onClick={() => setSelectedImage(index)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-semibold">
                    View Full Size
                  </div>
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-display font-semibold text-white">{image.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Click image to see {showAfter[index] ? "before" : "after"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">Before</h3>
                  <img
                    src={galleryImages[selectedImage].before || "/placeholder.svg"}
                    alt="Before"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">After</h3>
                  <img
                    src={galleryImages[selectedImage].after || "/placeholder.svg"}
                    alt="After"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-white text-xl font-display font-semibold text-center mt-4">
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
