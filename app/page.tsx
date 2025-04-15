import Link from "next/link"
import { Instagram } from "lucide-react"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import AboutSection from "@/components/about-section"
import SocialProof from "@/components/social-proof"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Featured Collections
        </h2>
        <FeaturedProducts />
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 py-16">
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Follow Us on Instagram
        </h2>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-center max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Stay updated with our latest releases, behind-the-scenes content, and exclusive offers by following us on
            Instagram!
          </p>
          <Link
            href="https://instagram.com/lu.store"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all"
          >
            <Instagram className="h-5 w-5" />
            @lu.store
          </Link>
        </div>

        <div className="mt-16">
          <SocialProof />
        </div>
      </div>
    </main>
  )
}
