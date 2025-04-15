// Definición de productos
const products = [
    // Productos K-pop (12 productos)
    {
        id: 'sticker-kpop-001',
        name: 'BTS Butter Collection',
        category: 'stickers',
        theme: 'kpop',
    price: 12.99,
        image: 'assets/images/products/stickers/kpop/1.jpeg',
        group: 'BTS',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-002',
        name: 'BLACKPINK Born Pink Set',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/2.jpeg',
        group: 'BLACKPINK',
    rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-003',
        name: 'TWICE Ready To Be Collection',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/3.jpg',
        group: 'TWICE',
        rating: 4,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-004',
        name: 'NewJeans Get Up Set',
        category: 'stickers',
        theme: 'kpop',
        price: 10.99,
        image: 'assets/images/products/stickers/kpop/4.jpg',
        group: 'NewJeans',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-005',
        name: 'ENHYPEN Dark Moon Set',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/5.jpg',
        group: 'ENHYPEN',
    rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-006',
        name: 'Stray Kids MAXIDENT',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/6.jpg',
        group: 'Stray Kids',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-007',
        name: 'ITZY Cheshire Collection',
        category: 'stickers',
        theme: 'kpop',
        price: 10.99,
        image: 'assets/images/products/stickers/kpop/7.jpg',
        group: 'ITZY',
    rating: 4,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-008',
        name: 'aespa Next Level Pack',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/8.jpg',
        group: 'aespa',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-009',
        name: 'IVE After LIKE Set',
        category: 'stickers',
        theme: 'kpop',
    price: 10.99,
        image: 'assets/images/products/stickers/kpop/9.jpg',
        group: 'IVE',
    rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-010',
        name: 'LE SSERAFIM ANTIFRAGILE',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/10.jpg',
        group: 'LE SSERAFIM',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-011',
        name: 'SEVENTEEN FML Collection',
        category: 'stickers',
        theme: 'kpop',
        price: 12.99,
        image: 'assets/images/products/stickers/kpop/11.jpg',
        group: 'SEVENTEEN',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-kpop-012',
        name: '(G)I-DLE Nxde Set',
        category: 'stickers',
        theme: 'kpop',
        price: 11.99,
        image: 'assets/images/products/stickers/kpop/8.jpg',
        group: '(G)I-DLE',
    rating: 5,
        isSpecial: true
    },

    // Productos Anime (12 productos)
    {
        id: 'sticker-anime-001',
        name: 'Demon Slayer Corps Set',
        category: 'stickers',
        theme: 'anime',
        price: 11.99,
        image: 'assets/images/products/stickers/anime/1.jpeg',
        series: 'Demon Slayer',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-002',
        name: 'Attack on Titan Survey Corps',
        category: 'stickers',
        theme: 'anime',
        price: 12.99,
        image: 'assets/images/products/stickers/anime/2.jpeg',
        series: 'Attack on Titan',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-003',
        name: 'Jujutsu Kaisen Sorcerers',
        category: 'stickers',
        theme: 'anime',
        price: 12.99,
        image: 'assets/images/products/stickers/anime/3.jpeg',
        series: 'Jujutsu Kaisen',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-004',
        name: 'One Piece Straw Hats',
        category: 'stickers',
        theme: 'anime',
        price: 13.99,
        image: 'assets/images/products/stickers/anime/4.jpeg',
        series: 'One Piece',
    rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-005',
        name: 'Chainsaw Man Devils Pack',
        category: 'stickers',
        theme: 'anime',
        price: 13.99,
        image: 'assets/images/products/stickers/anime/5.jpeg',
        series: 'Chainsaw Man',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-006',
        name: 'My Hero Academia Class 1-A',
        category: 'stickers',
        theme: 'anime',
        price: 11.99,
        image: 'assets/images/products/stickers/anime/6.jpeg',
        series: 'My Hero Academia',
    rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-007',
        name: 'Tokyo Revengers Gang',
        category: 'stickers',
        theme: 'anime',
    price: 11.99,
        image: 'assets/images/products/stickers/anime/7.jpeg',
        series: 'Tokyo Revengers',
    rating: 4,
        isSpecial: true
    },
    {
        id: 'sticker-anime-008',
        name: 'Spy x Family Collection',
        category: 'stickers',
        theme: 'anime',
        price: 12.99,
        image: 'assets/images/products/stickers/anime/8.jpeg',
        series: 'Spy x Family',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-009',
        name: 'Blue Lock Players',
        category: 'stickers',
        theme: 'anime',
        price: 11.99,
        image: 'assets/images/products/stickers/anime/9.jpeg',
        series: 'Blue Lock',
        rating: 4,
        isSpecial: true
    },
    {
        id: 'sticker-anime-010',
        name: 'Dragon Ball Super Heroes',
        category: 'stickers',
        theme: 'anime',
        price: 13.99,
        image: 'assets/images/products/stickers/anime/10.jpeg',
        series: 'Dragon Ball Super',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-011',
        name: 'Naruto Shinobi Set',
        category: 'stickers',
        theme: 'anime',
        price: 12.99,
        image: 'assets/images/products/stickers/anime/11.jpeg',
        series: 'Naruto',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-anime-012',
        name: 'Hunter x Hunter Collection',
        category: 'stickers',
        theme: 'anime',
        price: 12.99,
        image: 'assets/images/products/stickers/anime/12.jpeg',
        series: 'Hunter x Hunter',
        rating: 5,
        isSpecial: true
    }
];

// Función para filtrar productos
function filterProducts(theme = 'all') {
    if (theme === 'all') {
        // Para "Todas las categorías", mostrar 6 de cada tema
        const kpopProducts = products.filter(p => p.theme === 'kpop').slice(0, 6);
        const animeProducts = products.filter(p => p.theme === 'anime').slice(0, 6);
        return [...kpopProducts, ...animeProducts];
    }
    // Para temas específicos, mostrar todos los productos de ese tema
    return products.filter(product => product.theme === theme);
}

// Función para renderizar productos
function renderProducts(filteredProducts) {
    const productsContainer = document.querySelector('.products-grid');
    productsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card" data-id="${product.id}">
                ${createProductBadges(product)}
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-group">${product.group || product.series}</p>
                    <div class="product-details">
                        <div class="rating">
                            ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5-product.rating)}
                        </div>
                        <p class="price">$${product.price.toFixed(2)}</p>
            </div>
              </div>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los productos al cargar (6 de cada tema)
    renderProducts(filterProducts('all'));

    // Filtrar por tema (K-pop/Anime)
    const themeFilter = document.getElementById('groupFilter');
    themeFilter.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        const filteredProducts = filterProducts(selectedTheme);
        renderProducts(filteredProducts);
    });
});

// Función para cargar las imágenes en la galería
function loadGalleryImages() {
  const galleryContainer = document.getElementById('featuredProducts');
  if (!galleryContainer) return;

  // Array de imágenes de ejemplo (actualiza esto con tus imágenes reales)
  const images = [
    'assets/images/products/product1.jpg',
    'assets/images/products/product2.jpg',
    'assets/images/products/product3.jpg',
    'assets/images/products/product4.jpg',
    'assets/images/products/product5.jpg',
    'assets/images/products/product6.jpg'
  ];

  images.forEach(imageSrc => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Lu.Store Producto';
    img.loading = 'lazy';

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
  });
}

// Cargar las imágenes cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadGalleryImages);

// Función para crear los badges del producto
function createProductBadges(product) {
  if (product.isSpecial) {
    return '<div class="product-badges"><span class="badge special">Especial</span></div>';
  }
  return '<div class="product-badges"></div>';
}
