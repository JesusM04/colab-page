import Image from "next/image"
import { Instagram, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        About Lu.Store
      </h1>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Lu.Store Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Welcome to Lu.Store, your ultimate destination for premium K-pop themed merchandise! Founded in 2020 by a
            passionate K-pop fan, our shop has grown from a small Instagram page to a beloved brand within the K-pop
            community.
          </p>

          <h2>Our Story</h2>
          <p>
            Lu.Store began as a creative outlet during the pandemic when our founder, Lucy, combined her love for K-pop
            with her artistic talents. What started as creating custom stickers for friends quickly evolved into a
            full-fledged business as demand grew for her unique designs that captured the essence of K-pop culture.
          </p>

          <p>
            Today, we're proud to offer a wide range of products including stickers, posters, and lomo cards featuring
            your favorite K-pop groups and members. Each item is thoughtfully designed with attention to detail and
            printed on high-quality materials.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Lu.Store, our mission is to help fans express their love for K-pop through beautiful, high-quality
            merchandise. We believe that being a fan is about more than just listening to music—it's about connecting
            with a community and expressing your passion in creative ways.
          </p>

          <p>We're committed to:</p>

          <ul>
            <li>Creating unique designs that capture the spirit of K-pop and anime aesthetics</li>
            <li>Using high-quality materials for all our products</li>
            <li>Providing excellent customer service</li>
            <li>Fostering a supportive community of K-pop enthusiasts</li>
            <li>Continuously expanding our collection with new and exciting designs</li>
          </ul>

          <h2>Connect With Us</h2>
          <p>
            We love hearing from our customers! Whether you have questions about our products, want to suggest a new
            design, or just want to share your love for K-pop, we're always happy to connect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="https://instagram.com/lu.store" target="_blank">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </Link>

          <Link href="mailto:contact@lu.store">
            <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-xl p-8 text-center">
        <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Thank You for Supporting Our Small Business!</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Every purchase helps us continue creating the K-pop merchandise you love. We're grateful for each and every
          one of our customers who make this dream possible.
        </p>
      </div>
    </div>
  )
}
