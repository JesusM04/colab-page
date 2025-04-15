document.addEventListener("DOMContentLoaded", () => {
  // Import products data (assuming it's in a separate file)
  // You might need to adjust the path depending on your project structure
  // For example:
  // import productsData from './products-data.js';

  // Or, if productsData is defined globally elsewhere, you can skip the import and just declare it:
  const productsData = window.productsData || [] // Example: if productsData is set globally

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  // DOM Elements
  const productDetailContainer = document.getElementById("productDetailContainer")
  const productDetailsSection = document.getElementById("productDetailsSection")
  const productDetailsGrid = document.getElementById("productDetailsGrid")
  const relatedProductsContainer = document.getElementById("relatedProducts")

  // Load product details
  if (productId) {
    loadProductDetail(productId)
  } else {
    window.location.href = "products.html"
  }

  // Load Product Detail
  function loadProductDetail(id) {
    // Find product by ID
    const product = productsData.find((p) => p.id === id)

    if (!product) {
      window.location.href = "products.html"
      return
    }

    // Update page title
    document.title = `${product.name} - Lu.Store`

    // Render product detail
    renderProductDetail(product)

    // Render product details if available
    if (product.details) {
      renderProductDetails(product.details)
    } else {
      productDetailsSection.style.display = "none"
    }

    // Load related products
    loadRelatedProducts(product)
  }

  // Render Product Detail
  function renderProductDetail(product) {
    if (!productDetailContainer) return

    productDetailContainer.innerHTML = `
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <div class="product-tags">
          <span class="product-tag tag-category">${product.category}</span>
          <span class="product-tag tag-group">${product.group}</span>
        </div>
        
        <h1 class="product-detail-title">${product.name}</h1>
        
        <div class="product-rating">
          <div class="rating-stars">
            ${getRatingStars(product.rating)}
          </div>
          <span class="rating-count">${product.reviewCount} reviews</span>
        </div>
        
        <div class="product-detail-price">$${product.price.toFixed(2)}</div>
        
        <p class="product-detail-description">${product.description}</p>
        
        <div class="product-cta">
          <a href="https://instagram.com/lu.store" target="_blank" class="btn btn-primary">
            <i class="fab fa-instagram"></i> Visit Instagram to Purchase
          </a>
          <p class="product-cta-note">All purchases are made through our Instagram shop</p>
        </div>
      </div>
    `
  }

  // Render Product Details
  function renderProductDetails(details) {
    if (!productDetailsGrid) return

    productDetailsGrid.innerHTML = ""

    for (const [key, value] of Object.entries(details)) {
      const detailItem = document.createElement("div")
      detailItem.className = "detail-item"

      detailItem.innerHTML = `
        <span class="detail-label">${key}</span>
        <span class="detail-value">${value}</span>
      `

      productDetailsGrid.appendChild(detailItem)
    }
  }

  // Load Related Products
  function loadRelatedProducts(product) {
    if (!relatedProductsContainer) return

    // Get products with same group or category
    const related = productsData
      .filter((p) => p.id !== product.id && (p.group === product.group || p.category === product.category))
      .slice(0, 4)

    if (related.length === 0) {
      document.querySelector(".related-products").style.display = "none"
      return
    }

    renderProducts(related, relatedProductsContainer)
  }

  // Render Products
  function renderProducts(products, container) {
    if (!container) return

    container.innerHTML = ""

    products.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "product-card"

      productCard.innerHTML = `
        <a href="product-detail.html?id=${product.id}">
          <div class="product-image">
            ${product.featured ? '<span class="product-badge badge-featured">Featured</span>' : ""}
            ${product.new ? '<span class="product-badge badge-new">New</span>' : ""}
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-meta">
              <span class="product-group">${product.group}</span>
              <span class="product-price">$${product.price.toFixed(2)}</span>
            </div>
            <div class="product-meta">
              <div class="rating-stars">
                ${getRatingStars(product.rating)}
              </div>
              <i class="fas fa-heart product-favorite ${product.featured ? "active" : ""}"></i>
            </div>
          </div>
        </a>
      `

      container.appendChild(productCard)
    })
  }

  // Get Rating Stars HTML
  function getRatingStars(rating) {
    let starsHTML = ""

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsHTML += '<i class="fas fa-star"></i>'
      } else if (i - 0.5 <= rating) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>'
      } else {
        starsHTML += '<i class="far fa-star"></i>'
      }
    }

    return starsHTML
  }
})
