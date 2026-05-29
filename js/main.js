// ─── Prefers Reduced Motion ──────────────────────────────────────────
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── Debounce Utility ────────────────────────────────────────────────
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── Boot ────────────────────────────────────────────────────────────
document.addEventListener("componentsLoaded", () => {
  initAnimations();
  initHeader();
  initHeroSlider();
  initCarousel("products-track", "products-dots");
  initCarousel("trust-track", "trust-dots");
  initBenefitsCarousel();
});

// ─── AOS Animations ─────────────────────────────────────────────────
function initAnimations() {
  if (typeof AOS === "undefined") return;

  if (prefersReducedMotion) {
    // Disable all AOS animations — just reveal elements instantly
    AOS.init({ disable: true });
    return;
  }

  AOS.init({
    once: true,
    offset: 60,
    duration: 800,
    easing: "ease-out-cubic"
  });
}

// ─── Header ─────────────────────────────────────────────────────────
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

// ─── Hero Background Slider ────────────────────────────────────────
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  // Skip auto-slide if user prefers reduced motion
  if (prefersReducedMotion) return;

  let currentSlide = 0;
  const slideInterval = 5000;

  setInterval(() => {
    slides[currentSlide].classList.remove("opacity-65", "active");
    slides[currentSlide].classList.add("opacity-0");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-65", "active");
  }, slideInterval);
}

// ─── Unified Carousel (Products, Trust, etc.) ──────────────────────
function initCarousel(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dots = document.querySelectorAll("#" + dotsId + " button");

  if (!track || dots.length === 0) return;

  let currentIndex = 0;
  const cardCount = dots.length;
  let intervalId;

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
    if (window.innerWidth >= 640) return;
    const cardWidth = track.offsetWidth * 0.85;
    track.scrollTo({
      left: index * cardWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
    updateDots(index);
  };

  const startAutoScroll = () => {
    if (window.innerWidth >= 640 || prefersReducedMotion) return;
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cardCount;
      scrollToCard(currentIndex);
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalId) clearInterval(intervalId);
  };

  // Detect manual swipe
  track.addEventListener("scroll", () => {
    if (window.innerWidth >= 640) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = track.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cardCount) {
      currentIndex = newIndex;
      updateDots(currentIndex);
    }
  });

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoScroll();
      currentIndex = index;
      scrollToCard(currentIndex);
      startAutoScroll();
    });
  });

  // Debounced resize handler
  window.addEventListener("resize", debounce(() => {
    if (window.innerWidth >= 640) {
      stopAutoScroll();
      track.scrollTo({ left: 0 });
    } else {
      stopAutoScroll();
      startAutoScroll();
    }
  }, 250));

  // Initial state
  updateDots(0);
  startAutoScroll();
}

// ─── Benefits Carousel (Hero section, mobile only) ─────────────────
function initBenefitsCarousel() {
  const track = document.getElementById("benefits-track");
  const dots = document.querySelectorAll("#benefits-dots button");

  if (!track || dots.length === 0) return;

  let currentIndex = 0;
  const cardCount = dots.length;

  const updateDots = (index) => {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-white/30", "w-2");
        dot.classList.add("bg-brand-gold", "w-4");
      } else {
        dot.classList.add("bg-white/30", "w-2");
        dot.classList.remove("bg-brand-gold", "w-4");
      }
    });
  };

  const scrollToCard = (index) => {
    if (window.innerWidth >= 640) return;
    const cards = track.children;
    if (!cards[index]) return;
    cards[index].scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start"
    });
    updateDots(index);
  };

  // Detect manual scroll/swipe
  track.addEventListener("scroll", () => {
    if (window.innerWidth >= 640) return;
    const cards = track.children;
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth;
    const newIndex = Math.round(track.scrollLeft / cardWidth);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cardCount) {
      currentIndex = newIndex;
      updateDots(currentIndex);
    }
  });

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      scrollToCard(currentIndex);
    });
  });

  // Debounced resize — reset on desktop
  window.addEventListener("resize", debounce(() => {
    if (window.innerWidth >= 640) {
      track.scrollTo({ left: 0 });
    }
  }, 250));

  // Initial state
  updateDots(0);
}

// ─── Active Nav Link ────────────────────────────────────────────────
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach((link) => {
    const navName = link.dataset.nav;

    if (
      currentPage.includes(navName) ||
      ((currentPage === "index.html" || currentPage === "") && navName === "index")
    ) {
      link.classList.add("active", "text-brand-gold");
      link.classList.remove("text-white/70", "text-white/90");

      const dot = link.nextElementSibling;
      if (dot && dot.tagName === "SPAN") {
        dot.classList.remove("opacity-0");
        dot.classList.add("opacity-100");
      }
    }
  });
}