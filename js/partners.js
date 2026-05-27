// La constante 'partners' se mantiene igual con tus 15 objetos
const partners = [
  { name: "Agrícola Ariztía", logo: "assets/img/partners/Agricola-Ariztia.png", cardBg: "#FFFFFF" },
  { name: "Agrosuper", logo: "assets/img/partners/agrosuper.png", cardBg: "#FFFFFF" },
  { name: "AIP", logo: "assets/img/partners/aip.jpg", cardBg: "#FFFFFF" },
  { name: "Barker", logo: "assets/img/partners/barker.jpg", cardBg: "#ffcd02" },
  { name: "Cold Sure", logo: "assets/img/partners/cold-sure.png", cardBg: "#FFFFFF" },
  { name: "Embutidos TK", logo: "assets/img/partners/embutidos-tk.jpg", cardBg: "#000000" },
  { name: "El Catalán", logo: "assets/img/partners/embutidos-el-catalan.jpg", cardBg: "#FFFFFF" },
  { name: "Zimmerman", logo: "assets/img/partners/embutidos-zimmerman.jpg", cardBg: "#FFFFFF" },
  { name: "Encasur", logo: "assets/img/partners/encasur.jpg", cardBg: "#FFFFFF" },
  { name: "Gulligan", logo: "assets/img/partners/hamburguesas-gulligan.jpg", cardBg: "#FFFFFF" },
  { name: "Labet", logo: "assets/img/partners/labet.jpg", cardBg: "#FFFFFF" },
  { name: "La Charcutería de Lima", logo: "assets/img/partners/la-charcuteria-lima.jpg", cardBg: "#FFFFFF" },
  { name: "Lrox Importaciones", logo: "assets/img/partners/lrox.jpg", cardBg: "#000b21" },
  { name: "Pipo Paellas", logo: "assets/img/partners/pipo-paellas.png", cardBg: "#FFFFFF" },
  { name: "Tucson Foods", logo: "assets/img/partners/tucsonfoods.jpg", cardBg: "#FFFFFF" }
];

document.addEventListener("componentsLoaded", () => {
  // Aquí llamamos a la función junto con tus otras inicializaciones
  initPartnersMarquee();
});

function initPartnersMarquee() {
  const rowOne = document.getElementById("partners-row-one");
  const rowTwo = document.getElementById("partners-row-two");

  if (!rowOne || !rowTwo || partners.length === 0) return;

  // 1. Dividimos los socios en dos arreglos limpios
  const midpoint = Math.ceil(partners.length / 2);
  const firstRowPartners = partners.slice(0, midpoint);
  const secondRowPartners = partners.slice(midpoint);

  // 2. Para monitores muy anchos (Ultrawide), nos aseguramos de que el arreglo base 
  // tenga suficientes elementos para cruzar la pantalla antes de duplicar.
  // Duplicamos el arreglo base 1 vez, es más que suficiente.
  const extendedRowOne = [...firstRowPartners, ...firstRowPartners];
  const extendedRowTwo = [...secondRowPartners, ...secondRowPartners];

  // 3. Inyectamos en el DOM (El Grupo Base + 1 Clon Exacto para el translateX -50%)
  rowOne.innerHTML = createPartnerLoop(extendedRowOne);
  rowTwo.innerHTML = createPartnerLoop(extendedRowTwo);
}

function createPartnerLoop(items) {
  // Generamos el HTML de un grupo
  const groupHTML = items.map(partner => createPartnerCard(partner)).join("");

  // Retornamos el original y UNA sola copia con aria-hidden para lectores de pantalla
  return `
    <div class="flex gap-4 sm:gap-5">
      ${groupHTML}
    </div>
    <div class="flex gap-4 sm:gap-5" aria-hidden="true">
      ${groupHTML}
    </div>
  `;
}

function createPartnerCard(partner) {
  const cardBg = partner.cardBg || "#FFFFFF";

  return `
    <div
      class="flex h-20 w-40 sm:h-24 sm:w-48 lg:h-28 lg:w-60 shrink-0 items-center justify-center rounded-[1.5rem] border border-brand-wine/10 p-4 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl"
      style="background-color: ${cardBg};"
    >
      <img
        src="${partner.logo}"
        alt="${partner.name}"
        class="max-h-10 sm:max-h-14 lg:max-h-16 max-w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
  `;
}