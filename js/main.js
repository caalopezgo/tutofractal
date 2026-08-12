(() => {
  const THEME_KEY = "site-theme";
  const THEMES = [
    { id: "swiss", label: "Swiss" },
    { id: "classic", label: "Classic" },
    { id: "editorial", label: "Editorial" },
  ];

  const applyTheme = (theme) => {
    const next = THEMES.some((item) => item.id === theme) ? theme : "swiss";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    document.querySelectorAll("[data-theme-option]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.themeOption === next);
    });
  };

  const current = localStorage.getItem(THEME_KEY) || "swiss";
  applyTheme(current);

  const footer = document.querySelector(".nav__footer");
  if (footer) {
    const switcher = document.createElement("div");
    switcher.className = "theme-switch";
    switcher.innerHTML = `
      <div class="theme-switch__label">Style</div>
      <div class="theme-switch__options" role="group" aria-label="Site style">
        ${THEMES.map(
          (theme) =>
            `<button type="button" class="theme-switch__btn" data-theme-option="${theme.id}">${theme.label}</button>`
        ).join("")}
      </div>
    `;
    footer.appendChild(switcher);
    applyTheme(current);

    switcher.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-theme-option]");
      if (!btn) return;
      applyTheme(btn.dataset.themeOption);
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
