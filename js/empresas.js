const partnersB2B = [
  {
    code: "PC-01",
    name: "Agrícola Ariztía",
    logo: "assets/img/partners/Agricola-Ariztia.png",
    category: "carnes",
    specialtyBadge: "ARTE DE CARNES, PASIÓN",
    description: "Líder regional en industria primaria. Abastece carnes bajo estrictos protocolos de bioseguridad, calidad y frescura.",
    certs: "HACCP, BRCGS",
    cobertura: "Nacional",
    specialty: "Vacuno, Pavo",
    approved: true
  },
  {
    code: "PC-02",
    name: "Agrosuper",
    logo: "assets/img/partners/agrosuper.png",
    category: "carnes",
    specialtyBadge: "CARNES DE EXPORTACIÓN",
    description: "Holding agroindustrial líder global. Destaca por su trazabilidad integral en carnes de cerdo, pollo y pavo con certificación internacional.",
    certs: "BRCGS, ISO 22000",
    cobertura: "Internacional",
    specialty: "Cerdo, Pollo, Pavo",
    approved: true
  },
  {
    code: "PC-03",
    name: "AIP",
    logo: "assets/img/partners/AIP.jpg",
    category: "insumos",
    specialtyBadge: "ASESORAMIENTO SANITARIO",
    description: "Brinda auditorias expertas en control microbiológico e inocuidad sanitaria, visitando la inocuidad y rigurosa de cada línea manejada.",
    certs: "ISO 17025",
    cobertura: "Nacional",
    specialty: "Auditoría, Inocuidad",
    approved: true
  },
  {
    code: "PC-04",
    name: "Barker",
    logo: "assets/img/partners/barker.jpg",
    category: "carnes",
    specialtyBadge: "PROTEÍNAS SÚPER PREMIUM",
    description: "Especialistas en fórmulas biológicamente apropiadas basadas en proteínas cárnicas seleccionadas de altísima digestibilidad.",
    certs: "SENASA, HACCP",
    cobertura: "Nacional",
    specialty: "Proteínas, Insumos",
    approved: true
  },
  {
    code: "PC-05",
    name: "Cold Sure",
    logo: "assets/img/partners/COLD-SURE.png",
    category: "logistica",
    specialtyBadge: "LOGÍSTICA Y FRÍO",
    description: "Líder indiscutible en transporte frigorífico especializado. Sus unidades aseguran la ininterrupción absoluta de la cadena térmica.",
    certs: "SUTRAN, DIGESA",
    cobertura: "Nacional",
    specialty: "Transporte Frigorífico",
    approved: true
  },
  {
    code: "PC-06",
    name: "Embutidos TK",
    logo: "assets/img/partners/embutidos-tk.jpg",
    category: "embutidos",
    specialtyBadge: "SALCHICHERÍA TRADICIONAL",
    description: "Fórmula maestra en embutidos ahumados. Rescata métodos tradicionales y salchichería con sazón criolla única del sector gastronómico.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Embutidos Criollos",
    approved: true
  },
  {
    code: "PC-07",
    name: "El Catalán",
    logo: "assets/img/partners/embutidos-el-catalan.jpg",
    category: "embutidos",
    specialtyBadge: "CHARCUTERÍA FINA EUROPEA",
    description: "Elaboración artesanal de jamones curados, chorizos parrilleros y butifarras tradicionales con condimentos europeos seleccionados.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Jamones, Chorizos",
    approved: true
  },
  {
    code: "PC-08",
    name: "Zimmerman",
    logo: "assets/img/partners/embutidos-zimmerman.jpg",
    category: "embutidos",
    specialtyBadge: "EMBUTIDOS ALEMANES DE AUTOR",
    description: "Recetas centenarias de alta charcutería alemana. Sus salchichas Frankfurt y jamones curados son sinónimo de excelencia y sabor premium.",
    certs: "BRCGS, DIGESA",
    cobertura: "Nacional",
    specialty: "Salchichería Alemana",
    approved: true
  },
  {
    code: "PC-09",
    name: "Encasur",
    logo: "assets/img/partners/encasur.jpg",
    category: "insumos",
    specialtyBadge: "EMPAQUE E INOCUIDAD CÁRNICA",
    description: "Operador de empaque industrial y distribución. Aplica tecnologías de atmósfera modificada para extender la frescura de los cortes.",
    certs: "HACCP, ISO 9001",
    cobertura: "Nacional",
    specialty: "Empaques e Insumos",
    approved: true
  },
  {
    code: "PC-10",
    name: "Hamburguesas Gulligan",
    logo: "assets/img/partners/hamburguesas-guillian.jpg",
    category: "carnes",
    specialtyBadge: "HAMBURGUESAS GOURMET",
    description: "Maestros en la elaboración de medallones de carne seleccionada. Diseñadas para una óptima retención de jugos en plancha comercial.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Medallones de Carne",
    approved: true
  },
  {
    code: "PC-11",
    name: "La Charcutería de Lima",
    logo: "assets/img/partners/la-charcuteria-lima.jpg",
    category: "embutidos",
    specialtyBadge: "CHARCUTERÍA DE AUTOR & CURADOS",
    description: "Cortes finos madurados y embutidos de gama gourmet. Ideales para la elaboración de sándwiches finos, tablas y catering corporativo.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Cortes Madurados",
    approved: true
  },
  {
    code: "PC-12",
    name: "Labet",
    logo: "assets/img/partners/labet.jpg",
    category: "insumos",
    specialtyBadge: "ANÁLISIS Y CERTIFICACIÓN",
    description: "Laboratorio científico acreditado por INACAL. Desarrolla constantes análisis de seguridad que validan cada uno de nuestros insumos.",
    certs: "INACAL, ISO 17025",
    cobertura: "Nacional",
    specialty: "Análisis Clínicos",
    approved: true
  },
  {
    code: "PC-13",
    name: "Lrox Importaciones",
    logo: "assets/img/partners/lrox.jpg",
    category: "insumos",
    specialtyBadge: "INSUMOS CÁRNICOS ESPECIALES",
    description: "Importador de tripas naturales, especias exóticas e insumos técnicos esenciales para las marcas de embutidos más finas del país.",
    certs: "SENASA, DIGESA",
    cobertura: "Nacional",
    specialty: "Tripas, Especias",
    approved: true
  },
  {
    code: "PC-14",
    name: "Pipo Paellas",
    logo: "assets/img/partners/pipo-paellas.png",
    category: "insumos",
    specialtyBadge: "PREPARADOS GASTRONÓMICOS",
    description: "Especialistas en caldos concentrados de carnes, embutidos curados y bases listas que optimizan las cocinas de restaurantes temáticos.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Bases y Concentrados",
    approved: true
  },
  {
    code: "PC-15",
    name: "Tucson Foods",
    logo: "assets/img/partners/tucsonfoods.jpg",
    category: "carnes",
    specialtyBadge: "CARNES MARINADAS READY-TO-COOK",
    description: "Desarrollo de proteínas marinadas al vacío con perfiles de sabor específicos. Minimizan la merma en operaciones de alta frecuencia.",
    certs: "HACCP, DIGESA",
    cobertura: "Nacional",
    specialty: "Proteínas Marinadas",
    approved: true
  }
];

let activeFilter = "all";
let currentPage = 1;
const itemsPerPage = 6; // Segmentar el catálogo en grupos de 6 socios

document.addEventListener("componentsLoaded", () => {
  initB2BBrands();
});

// Inicializar la lógica del portafolio oscuro
function initB2BBrands() {
  renderBrands(activeFilter);

  // Vincular favoritos (toggle heart) dinámicamente delegando eventos en el grid
  const gridContainer = document.getElementById("partners-grid");
  if (gridContainer) {
    gridContainer.addEventListener("click", (e) => {
      const heartBtn = e.target.closest(".favorite-btn");
      if (heartBtn) {
        e.preventDefault();
        const icon = heartBtn.querySelector("i");
        if (icon) {
          if (icon.classList.contains("fa-regular")) {
            icon.classList.replace("fa-regular", "fa-solid");
            icon.classList.add("text-[#EAB237]");
          } else {
            icon.classList.replace("fa-solid", "fa-regular");
            icon.classList.remove("text-[#EAB237]");
          }
        }
      }
    });
  }
}

// Filtrar mediante botones del sidebar
function filterB2BCategory(element, category) {
  // Remover clases activas de todos los botones de filtro
  const filterButtons = document.querySelectorAll(".filter-option-btn");
  filterButtons.forEach(btn => {
    btn.classList.remove("active", "bg-[#600804]", "text-white");
    btn.classList.add("bg-transparent", "text-white/70", "border-white/10");
  });

  // Activar botón actual
  element.classList.add("active", "bg-[#600804]", "text-white");
  element.classList.remove("bg-transparent", "text-white/70", "border-white/10");

  activeFilter = category;
  currentPage = 1; // Resetear a la primera página al filtrar

  const gridContainer = document.getElementById("partners-grid");
  if (gridContainer) {
    gridContainer.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => {
      renderBrands(activeFilter);
      gridContainer.classList.remove("opacity-0", "translate-y-4");
    }, 250);
  }
}

// Cambiar de página con animación suave
function changePage(page) {
  currentPage = page;
  
  const gridContainer = document.getElementById("partners-grid");
  if (gridContainer) {
    gridContainer.classList.add("opacity-0", "translate-y-4");
    
    // Scroll suave hasta el encabezado del directorio
    const dirHeader = document.getElementById("directorio-header-ref");
    if (dirHeader) {
      dirHeader.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      renderBrands(activeFilter);
      gridContainer.classList.remove("opacity-0", "translate-y-4");
    }, 250);
  }
}

// Renderizar el grid y la paginación en tema oscuro
function renderBrands(filter) {
  const gridContainer = document.getElementById("partners-grid");
  if (!gridContainer) return;

  const filtered = filter === "all" 
    ? partnersB2B 
    : partnersB2B.filter(brand => brand.category === filter);

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Asegurar que la página actual sea válida
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleBrands = filtered.slice(startIndex, endIndex);

  if (visibleBrands.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-20 text-center text-white/60 bg-[#0e0e0e] rounded-2xl border border-white/5 p-8 shadow-sm">
        <i class="fa-solid fa-folder-open text-4xl text-[#EAB237]/50 mb-4"></i>
        <h4 class="text-lg font-bold tracking-tight uppercase">No se encontraron socios</h4>
        <p class="text-sm text-white/40 mt-1">Pronto agregaremos más marcas a esta especialidad.</p>
      </div>
    `;
    renderPaginationControls(0, 0);
    return;
  }

  gridContainer.innerHTML = visibleBrands.map(brand => {
    return `
      <article 
        class="bg-[#0e0e0e] rounded-2xl border border-white/5 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(234,178,55,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
        data-aos="fade-up"
      >
        <!-- Encabezado con código y favorito -->
        <div class="px-6 pt-5 pb-2 flex items-center justify-between">
          <span class="font-mono text-[10px] tracking-wider text-white/40 font-medium">
            ${brand.code}
          </span>
          <button 
            class="favorite-btn h-8 w-8 rounded-full border border-white/5 bg-[#121212] hover:bg-[#1c1c1c] text-white/40 hover:text-[#EAB237] flex items-center justify-center transition-all shadow-sm active:scale-90"
            aria-label="Añadir a favoritos"
          >
            <i class="fa-regular fa-heart text-xs"></i>
          </button>
        </div>

        <!-- Logotipo centrado en placa de porcelana circular -->
        <div class="px-6 py-4 flex justify-center">
          <div class="h-28 w-full bg-[#161616]/80 rounded-2xl border border-white/5 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-[1.03]">
            <div class="h-20 w-20 rounded-full bg-white flex items-center justify-center p-3.5 shadow-md">
              <img 
                src="${brand.logo}" 
                alt="Logo ${brand.name}" 
                class="max-h-12 max-w-full object-contain"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Especialidad en cinta dorada / texto -->
        <div class="px-6 pt-2 pb-1">
          <span class="font-mono text-[8px] font-extrabold uppercase tracking-widest text-[#EAB237] bg-[#EAB237]/10 px-2.5 py-1 rounded border border-[#EAB237]/20">
            ${brand.specialtyBadge}
          </span>
        </div>

        <!-- Contenido principal y descripción -->
        <div class="px-6 py-3 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-sans font-extrabold text-base text-white tracking-tight uppercase group-hover:text-[#EAB237] transition-colors duration-300">
              ${brand.name}
            </h4>
            <p class="mt-2 text-xs leading-relaxed text-white/70 line-clamp-3">
              ${brand.description}
            </p>
          </div>

          <!-- Parámetros técnicos B2B con iconos dorados -->
          <div class="mt-5 space-y-2 border-t border-white/5 pt-4">
            <div class="flex items-center gap-2.5 text-[11px] text-white/60">
              <i class="fa-solid fa-circle-check text-[#EAB237] text-[10px] w-3 text-center"></i>
              <span class="font-semibold text-white/90">Certificaciones:</span>
              <span class="font-mono text-[10px] text-white/80">${brand.certs}</span>
            </div>
            <div class="flex items-center gap-2.5 text-[11px] text-white/60">
              <i class="fa-solid fa-map-location-dot text-[#EAB237] text-[10px] w-3 text-center"></i>
              <span class="font-semibold text-white/90">Cobertura:</span>
              <span class="text-white/80">${brand.cobertura}</span>
            </div>
            <div class="flex items-center gap-2.5 text-[11px] text-white/60">
              <i class="fa-solid fa-tags text-[#EAB237] text-[10px] w-3 text-center"></i>
              <span class="font-semibold text-white/90">Especialidad:</span>
              <span class="text-white/80">${brand.specialty}</span>
            </div>
          </div>
        </div>

        <!-- Separador fino e indicador de aprobación/ver perfil -->
        <div class="px-6 py-4 bg-[#121212]/50 border-t border-white/5 flex items-center justify-between mt-auto">
          <div class="flex items-center gap-1.5 font-mono text-[9px] text-[#EAB237] tracking-widest font-extrabold">
            <span class="h-2 w-2 rounded-full bg-green-500"></span>
            APROBADO
          </div>
          <a 
            href="https://wa.me/51922010033?text=Hola%20Plaza%20C%C3%A1rnicas%2C%20solicito%20informaci%C3%B3n%20B2B%20sobre%20${encodeURIComponent(brand.name)}." 
            target="_blank" rel="noopener noreferrer" 
            class="text-[10px] font-bold uppercase tracking-wider text-[#EAB237] hover:text-white transition-colors flex items-center gap-1"
          >
            Ver perfil <i class="fa-solid fa-arrow-right text-[8px]"></i>
          </a>
        </div>
      </article>
    `;
  }).join("");

  renderPaginationControls(totalPages, currentPage);

  // Refrescar AOS si está disponible
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

// Renderizar el componente de paginación interactiva
function renderPaginationControls(totalPages, activePage) {
  const paginationContainer = document.getElementById("pagination-container");
  if (!paginationContainer) return;

  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let html = `<div class="flex items-center justify-center gap-2 mt-12 w-full">`;

  // Botón "Anterior"
  const prevDisabled = activePage === 1;
  html += `
    <button 
      onclick="${prevDisabled ? "" : `changePage(${activePage - 1})`}" 
      class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e0e0e] hover:bg-[#141414] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md active:scale-95 ${prevDisabled ? "opacity-35 cursor-not-allowed" : "cursor-pointer"}"
      ${prevDisabled ? "disabled" : ""}
    >
      <i class="fa-solid fa-arrow-left text-[10px]"></i> Anterior
    </button>
  `;

  // Números de páginas
  for (let i = 1; i <= totalPages; i++) {
    const isCurrent = i === activePage;
    html += `
      <button 
        onclick="changePage(${i})" 
        class="h-10 w-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all border ${isCurrent ? "bg-[#600804] border-[#EAB237] text-white shadow-md scale-105" : "bg-[#0e0e0e] border-white/10 text-white/70 hover:text-white hover:bg-[#141414]"} cursor-pointer active:scale-95"
      >
        ${i}
      </button>
    `;
  }

  // Botón "Siguiente"
  const nextDisabled = activePage === totalPages;
  html += `
    <button 
      onclick="${nextDisabled ? "" : `changePage(${activePage + 1})`}" 
      class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e0e0e] hover:bg-[#141414] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md active:scale-95 ${nextDisabled ? "opacity-35 cursor-not-allowed" : "cursor-pointer"}"
      ${nextDisabled ? "disabled" : ""}
    >
      Siguiente <i class="fa-solid fa-arrow-right text-[10px]"></i>
    </button>
  `;

  html += `</div>`;
  paginationContainer.innerHTML = html;
}

// Registrar funciones globales
window.filterB2BCategory = filterB2BCategory;
window.changePage = changePage;
window.renderBrands = renderBrands;
