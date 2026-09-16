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

  const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".site-header__nav a").forEach((link) => {
    const href = (link.getAttribute("href") || link.dataset.localHref || "").split("/").pop();
    if (href && href.toLowerCase() === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Header: solid background once the page scrolls
  const header = document.querySelector("[data-header]");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal on scroll
  const revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealables.forEach((el) => io.observe(el));
    } else {
      revealables.forEach((el) => el.classList.add("is-in"));
    }
  }

  // Mobile drawer
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
