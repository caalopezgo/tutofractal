(() => {
  const localHostnames = new Set(["localhost", "127.0.0.1", "::1"]);
  const isLocalPreview =
    window.location.protocol === "file:" || localHostnames.has(window.location.hostname);

  if (isLocalPreview) {
    document.querySelectorAll("[data-local-href]").forEach((link) => {
      link.setAttribute("href", link.dataset.localHref);
      link.removeAttribute("aria-disabled");
    });
  }

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const backdrop = document.querySelector("[data-nav-backdrop]");

  if (!nav || !toggle || !backdrop) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  backdrop.addEventListener("click", () => setOpen(false));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
})();
