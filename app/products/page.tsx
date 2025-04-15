"use client"

import { useState } from "react"
import { products } from "@/data/products"
import ProductCard from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [groupFilter, setGroupFilter] = useState("all")

  // Get unique categories and groups for filters
  const categories = ["all", ...new Set(products.map((product) => product.category))]
  const groups = ["all", ...new Set(products.map((product) => product.group))]

  // Filter products based on search query and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesGroup = groupFilter === "all" || product.group === groupFilter

    return matchesSearch && matchesCategory && matchesGroup
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Our Products
      </h1>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          Explore our collection of high-quality K-pop themed stickers, posters, and lomo cards. Each item is carefully
          designed with love for K-pop fans like you!
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={groupFilter} onValueChange={setGroupFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Group" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group === "all" ? "All Groups" : group}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("")
              setCategoryFilter("all")
              setGroupFilter("all")
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}
