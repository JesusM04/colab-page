// Función para cargar las imágenes en la galería de inicio
function loadHomeGallery() {
  const galleryContainer = document.getElementById('featuredProducts');
  if (!galleryContainer) return;

  // Array de imágenes destacadas
  const featuredImages = [
    {
      src: 'assets/images/index/1.jpg',
      alt: 'True Beauty - Colección Especial',
      title: 'Twinkling Watermelon'
    },
    {
      src: 'assets/images/index/2.jpg',
      alt: 'Goblin - Pack de Stickers',
      title: 'King the Land'
    },
    {
      src: 'assets/images/index/3.jpg',
      alt: 'Boys Over Flowers - Set Retro',
      title: 'Twinkling Watermelon'
    },
    {
      src: 'assets/images/index/4.jpg',
      alt: 'Descendants of the Sun - Colección Militar',
      title: 'Weak Hero Class 1'
    },
    {
      src: 'assets/images/index/5.jpg',
      alt: 'Strong Woman Do Bong Soon - Set Cute',
      title: 'Squid Game'
    },
    {
      src: 'assets/images/index/7.jpg',
      alt: 'What´s Wrong with Secretary Kim - Office Set',
      title: 'Twinkling Watermelon'
    },
  ];

  featuredImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-title', image.title);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
  });
}

// Cargar las imágenes cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadHomeGallery); 