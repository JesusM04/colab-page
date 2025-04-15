// Hero Slider
document.addEventListener("DOMContentLoaded", () => {
  const heroSlider = document.getElementById("heroSlider")

  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".hero-slide")
    const controls = document.querySelectorAll(".hero-control")
    let currentSlide = 0
    let slideInterval

    // Initialize slider
    function initSlider() {
      if (slides.length > 0) {
        // Set first slide as active
        slides[0].classList.add("active")
        controls[0].classList.add("active")

        // Start auto-sliding
        startSlideInterval()

        // Add event listeners to controls
        controls.forEach((control, index) => {
          control.addEventListener("click", () => {
            goToSlide(index)
            resetSlideInterval()
          })
        })
      }
    }

    // Go to specific slide
    function goToSlide(index) {
      slides[currentSlide].classList.remove("active")
      controls[currentSlide].classList.remove("active")

      currentSlide = index

      slides[currentSlide].classList.add("active")
      controls[currentSlide].classList.add("active")
    }

    // Go to next slide
    function nextSlide() {
      const next = (currentSlide + 1) % slides.length
      goToSlide(next)
    }

    // Start auto-sliding
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 5000)
    }

    // Reset slide interval
    function resetSlideInterval() {
      clearInterval(slideInterval)
      startSlideInterval()
    }

    // Initialize the slider
    initSlider()
  }
})
