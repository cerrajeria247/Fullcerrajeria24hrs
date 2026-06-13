const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');
const quoteForm = document.querySelector('[data-quote-form]');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
});

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const servicio = formData.get('servicio')?.toString().trim();
    const zona = formData.get('zona')?.toString().trim();
    const detalle = formData.get('detalle')?.toString().trim();

    const message = `Hola FullCerrajería 24Hrs, necesito cotizar un servicio.\n\nServicio: ${servicio}\nComuna o sector: ${zona}\nDetalle: ${detalle}`;
    const url = `https://wa.me/56999425829?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
}
