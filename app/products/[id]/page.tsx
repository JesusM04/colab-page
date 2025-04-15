import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Instagram, ArrowLeft, Heart } from "lucide-react"
import ProductCard from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same group or category)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.group === product.group || p.category === product.category))
    .slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full mb-2">
              {product.category}
            </span>
            <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300 text-sm font-medium px-3 py-1 rounded-full ml-2 mb-2">
              {product.group}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating ? "text-pink-500 fill-pink-500" : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400">{product.reviewCount} reviews</span>
          </div>

          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-6">${product.price.toFixed(2)}</div>

          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">{product.description}</p>

          <div className="mt-auto">
            <Link href="https://instagram.com/lu.store" target="_blank">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Instagram className="mr-2 h-5 w-5" />
                Visit Instagram to Purchase
              </Button>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              All purchases are made through our Instagram shop
            </p>
          </div>
        </div>
      </div>

      {product.details && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{key}</span>
                  <span className="text-gray-900 dark:text-gray-100">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
