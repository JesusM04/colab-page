// Definición de productos
const precioSticker = 1;
const precioPoster = 2;

const products = [
    // Stickers (12 productos)
    {
        id: 'sticker-001',
        name: 'Pack 5 Stickers',
        category: 'stickers',
        theme: 'stickers',
        price: precioSticker,
        image: 'assets/images/products/stickers/1.jpg',
        group: 'Nana ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-002',
        name: 'Pack 5 Stickers',
        category: 'stickers',
        theme: 'stickers',
        price: precioSticker,
        image: 'assets/images/products/stickers/2.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-003',
        name: 'Pack 5 Stickers',
        category: 'stickers',
        theme: 'stickers',
        price: precioSticker,
        image: 'assets/images/products/stickers/3.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'sticker-004',
        name: 'Pack 5 Stickers',
        category: 'stickers',
        theme: 'stickers',
        price: precioSticker,
        image: 'assets/images/products/stickers/4.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },

    // Posters (12 productos)
    {
        id: 'poster-001',
        name: 'Poster tamaño tipo carta',
        category: 'posters',
        theme: 'posters',
        price: precioPoster,
        image: 'assets/images/products/posters/1.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'poster-002',
        name: 'Poster tamaño tipo carta',
        category: 'posters',
        theme: 'posters',
        price: precioPoster,
        image: 'assets/images/products/posters/2.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'poster-003',
        name: 'Poster tamaño tipo carta',
        category: 'posters',
        theme: 'posters',
        price: precioPoster,
        image: 'assets/images/products/posters/3.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'poster-004',
        name: 'Poster tamaño tipo carta',
        category: 'posters',
        theme: 'posters',
        price: precioPoster,
        image: 'assets/images/products/posters/4.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    },
    {
        id: 'poster-005',
        name: 'Poster tamaño tipo carta',
        category: 'posters',
        theme: 'posters',
        price: precioPoster,
        image: 'assets/images/products/posters/5.jpg',
        group: 'Variados ♡',
        rating: 5,
        isSpecial: true
    }
];


// Función para filtrar productos
function filterProducts(theme = 'all') {
    if (theme === 'all') {
        return products;
    }
    return products.filter(product => product.theme === theme);
}

// Función para buscar productos
function searchProducts(query) {
    if (!query) return products;
    
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.theme.toLowerCase().includes(searchTerm)
    );
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
                    <p class="product-group">${product.group}</p>
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
    // Mostrar todos los productos al cargar
    renderProducts(filterProducts('all'));

    // Filtrar por categoría
    const categoryFilter = document.getElementById('groupFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            const filteredProducts = filterProducts(selectedCategory);
            renderProducts(filteredProducts);
        });
    }

    // Buscar productos
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchQuery = e.target.value.trim();
            const searchedProducts = searchProducts(searchQuery);
            renderProducts(searchedProducts);
        });
    }
});

// Función para crear los badges del producto
function createProductBadges(product) {
    if (product.isSpecial) {
        return '<div class="product-badges"><span class="badge special">Especial</span></div>';
    }
    return '<div class="product-badges"></div>';
} 