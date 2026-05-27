document.addEventListener("componentsLoaded", () => {
  initAnimations();
  initHeader();
  initHeroSlider();
  initTrustCarousel();
  initProductsCarousel();
});

function initAnimations() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      offset: 60,
      duration: 800,
      easing: "ease-out-cubic"
    });
  }
}




function initHeader() {
  const navbar = document.getElementById("navbar");
  const navbarInner = document.getElementById("navbar-inner");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!navbar || !navbarInner) return;

  const updateNavbarOnScroll = () => {
    if (window.scrollY > 30) {
      navbarInner.classList.add(
        "bg-brand-black/90",
        "backdrop-blur-xl",
        "shadow-2xl",
        "border-brand-gold/10"
      );

      navbarInner.classList.remove(
        "bg-black/20",
        "backdrop-blur-[2px]",
        "border-white/10"
      );
    } else {
      navbarInner.classList.remove(
        "bg-brand-black/90",
        "backdrop-blur-xl",
        "shadow-2xl",
        "border-brand-gold/10"
      );

      navbarInner.classList.add(
        "bg-black/20",
        "backdrop-blur-[2px]",
        "border-white/10"
      );
    }
  };

  updateNavbarOnScroll();
  window.addEventListener("scroll", updateNavbarOnScroll);

  const openMenu = () => {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    mobileMenu.classList.add("translate-x-0", "opacity-100");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    mobileMenu.classList.add("translate-x-full", "opacity-0");
    mobileMenu.classList.remove("translate-x-0", "opacity-100");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
  };

  if (menuToggle && mobileMenu && menuClose) {
    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  setActiveNavLink();
}


//funcion para cambiar el fondo del hero 
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return; // Si no hay slides (ej. en otra página), no hace nada

  let currentSlide = 0;
  const slideInterval = 5000; // Cambia cada 5 segundos (5000ms)

  setInterval(() => {
    // Quita la opacidad (y la clase active por si acaso) a la imagen actual
    slides[currentSlide].classList.remove("opacity-65", "active");
    slides[currentSlide].classList.add("opacity-0");

    // Pasa a la siguiente imagen (vuelve a 0 si es la última)
    currentSlide = (currentSlide + 1) % slides.length;

    // Muestra la nueva imagen
    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-65", "active");
  }, slideInterval);
}

//Carrusel para products preview


function initProductsCarousel() {
  const track = document.getElementById("products-track");
  const dots = document.querySelectorAll("#products-dots button");

  if (!track || dots.length === 0) return;

  let currentIndex = 0;
  const cardCount = dots.length;
  let intervalId;

  // Actualiza visualmente los puntos (Uso de color vino transparente para inactivos)
  const updateDots = (index) => {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-brand-wine/20", "w-2");
        dot.classList.add("bg-brand-gold", "w-4");
      } else {
        dot.classList.add("bg-brand-wine/20", "w-2");
        dot.classList.remove("bg-brand-gold", "w-4");
      }
    });
  };

  const scrollToCard = (index) => {
    if (window.innerWidth >= 640) return; // Se desactiva en tablet/desktop
    const cardWidth = track.offsetWidth * 0.85; // Ajuste porque ocupan el 85%
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    updateDots(index);
  };

  const startAutoScroll = () => {
    if (window.innerWidth >= 640) return;
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cardCount;
      scrollToCard(currentIndex);
    }, 4000); // 4 segundos de pausa para dar tiempo a leer
  };

  const stopAutoScroll = () => {
    if (intervalId) clearInterval(intervalId);
  };

  // Detecta el swipe manual del usuario
  track.addEventListener("scroll", () => {
    if (window.innerWidth >= 640) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = track.offsetWidth * 0.85;

    // Calcula la tarjeta actual visible
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cardCount) {
      currentIndex = newIndex;
      updateDots(currentIndex);
    }
  });

  // Evento clic en los puntos
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoScroll();
      currentIndex = index;
      scrollToCard(currentIndex);
      startAutoScroll();
    });
  });

  // Manejo al rotar la pantalla
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
      stopAutoScroll();
      track.scrollTo({ left: 0 }); // Restaura el grid
    } else {
      stopAutoScroll();
      startAutoScroll();
    }
  });

  // Arranque
  updateDots(0);
  startAutoScroll();
}

// Doble seguridad por el timing
document.addEventListener("DOMContentLoaded", initProductsCarousel);



///////////////////////////////////

function initTrustCarousel() {
  const track = document.getElementById("trust-track");
  const dots = document.querySelectorAll("#trust-dots button");

  if (!track || dots.length === 0) return;

  let currentIndex = 0;
  const cardCount = dots.length;
  let intervalId;

  // Actualiza visualmente los puntos (Uso de color vino transparente para inactivos)
  const updateDots = (index) => {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-brand-wine/20", "w-2");
        dot.classList.add("bg-brand-gold", "w-4");
      } else {
        dot.classList.add("bg-brand-wine/20", "w-2");
        dot.classList.remove("bg-brand-gold", "w-4");
      }
    });
  };

  const scrollToCard = (index) => {
    if (window.innerWidth >= 640) return; // Se desactiva en tablet/desktop
    const cardWidth = track.offsetWidth * 0.85; // Ajuste porque ocupan el 85%
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    updateDots(index);
  };

  const startAutoScroll = () => {
    if (window.innerWidth >= 640) return;
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cardCount;
      scrollToCard(currentIndex);
    }, 4000); // 4 segundos de pausa para dar tiempo a leer
  };

  const stopAutoScroll = () => {
    if (intervalId) clearInterval(intervalId);
  };

  // Detecta el swipe manual del usuario
  track.addEventListener("scroll", () => {
    if (window.innerWidth >= 640) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = track.offsetWidth * 0.85;

    // Calcula la tarjeta actual visible
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cardCount) {
      currentIndex = newIndex;
      updateDots(currentIndex);
    }
  });

  // Evento clic en los puntos
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoScroll();
      currentIndex = index;
      scrollToCard(currentIndex);
      startAutoScroll();
    });
  });

  // Manejo al rotar la pantalla
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
      stopAutoScroll();
      track.scrollTo({ left: 0 }); // Restaura el grid
    } else {
      stopAutoScroll();
      startAutoScroll();
    }
  });

  // Arranque
  updateDots(0);
  startAutoScroll();
}

// Doble seguridad por el timing
document.addEventListener("DOMContentLoaded", initTrustCarousel);

function setActiveNavLink() {
  // Obtiene la página actual o asigna "index.html" si se encuentra en la raíz del servidor
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach((link) => {
    const navName = link.dataset.nav;

    // Verifica si coincide con la página actual o si maneja la raíz/index de forma indistinta
    if (
      currentPage.includes(navName) ||
      ((currentPage === "index.html" || currentPage === "") && navName === "index")
    ) {
      // Modifica las clases del texto del enlace activo
      link.classList.add("active", "text-brand-gold");
      link.classList.remove("text-white/70", "text-white/90");

      // Selecciona el span (punto indicador) que está inmediatamente después del enlace
      const dot = link.nextElementSibling;
      if (dot && dot.tagName === "SPAN") {
        dot.classList.remove("opacity-0");
        dot.classList.add("opacity-100");
      }
    }
  });
}