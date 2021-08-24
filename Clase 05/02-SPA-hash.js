const onHashChange = e => {
  const pagina = location.hash.replace("#", "");
  cargarHtmlEnElMain(`pages/${pagina}.html`);
};

window.addEventListener("hashchange", onHashChange);

if (location.hash) {
  onHashChange();
}
