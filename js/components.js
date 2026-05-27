document.addEventListener("DOMContentLoaded", async () => {
  const components = document.querySelectorAll("[data-component]");

  await Promise.all(
    [...components].map(async (component) => {
      const file = component.getAttribute("data-component");

      try {
        const response = await fetch(file);

        if (!response.ok) {
          throw new Error(`No se pudo cargar ${file}`);
        }

        const html = await response.text();
        component.innerHTML = html;
      } catch (error) {
        console.error("Error cargando componente:", error);
      }
    })
  );

  document.dispatchEvent(new Event("componentsLoaded"));
});