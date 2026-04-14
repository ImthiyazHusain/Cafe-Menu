const container = document.getElementById("menuGrid");
const shawarmaContainer = document.getElementById("shawarmaMenuGrid");
const bunshawarmaContainer = document.getElementById("bunShawarmaMenuGrid");
const coneshawarmaContainer = document.getElementById("coneShawarmaMenuGrid");
const friedChickenContainer = document.getElementById("friedChickenMenuGrid");
const burgerContainer = document.getElementById("burgerMenuGrid");
const alfahamContainer = document.getElementById("alfahamMenuGrid");
const grillChickenContainer = document.getElementById("grillChickenMenuGrid");
const kebabContainer = document.getElementById("chickenKebabMenuGrid");
const statersContainer = document.getElementById("startersMenuGrid");
const chickenWrapContainer = document.getElementById("chickenWrapMenuGrid");
const mojitoContainer = document.getElementById("mojitoMenuGrid");
const shakesContainer = document.getElementById("shakesMenuGrid");
const juicesContainer = document.getElementById("juicesMenuGrid");
const dessertsContainer = document.getElementById("dessertsMenuGrid");

function normalizeAssetPath(path) {
  const isHtmlPage = window.location.pathname.includes('/Html/');
  if (path.startsWith('../images/')) {
    return isHtmlPage ? path : path.replace('../images/', 'images/');
  }
  if (path.startsWith('images/')) {
    return isHtmlPage ? `../${path}` : path;
  }
  return path;
}

if (container) {
  data.menuItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    container.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (shawarmaContainer) {
  data.shawarmaItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price"> Roll: ${item.price.roll} &nbsp;Plate: ${item.price.palte}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    shawarmaContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (bunshawarmaContainer) {
  data.bunShawarmaItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    bunshawarmaContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (coneshawarmaContainer) {
  data.coneShawarmaItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    coneshawarmaContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (friedChickenContainer) {
  data.friedChickenItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    friedChickenContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (burgerContainer) {
  data.burgerItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    burgerContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (alfahamContainer) {
  data.alfahamItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                  </div>
                  <span class="card-price">Qtr: ${item.price.Qrt} &nbsp;Half: ${item.price.Half} &nbsp;Full: ${item.price.Full} </span>

                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    alfahamContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (grillChickenContainer) {
  data.grillChickenItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                  </div>
                  <span class="card-price">Qtr: ${item.price.Qrt} &nbsp;Half: ${item.price.Half} &nbsp;Full: ${item.price.Full} </span>

                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    grillChickenContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (kebabContainer) {
  data.kebabItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    kebabContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (statersContainer) {
  data.startersItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    statersContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (chickenWrapContainer) {
  data.chickenWrapItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">Price: ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    chickenWrapContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (mojitoContainer) {
  data.mojitoItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">
                    ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    mojitoContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (shakesContainer) {
  data.shakesItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">
                    ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    shakesContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (juicesContainer) {
  data.juicesItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">
                    ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    juicesContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (dessertsContainer) {
  data.dessertsItems.forEach((item) => {
    const card = `
            <article class="menu-card" data-category="${item.dataCategory}">
                <div class="card-img-wrap">
                  <img
                    src="${normalizeAssetPath(item.img)}"
                    alt="${item.alt}"
                    loading="lazy"
                  />
                </div>
                <div class="card-body">
                  <div class="card-top">
                    <h3 class="card-name">${item.name}
                    </h3>
                    <span class="card-price">
                    ${item.price}</span>
                  </div>
                  <p class="card-desc">${item.desc}
                  </p>
                </div>
            </article>
          `;
    dessertsContainer.innerHTML += item.link
      ? `<a href="${item.link}" class="menu-card-link">${card}</a>`
      : card;
  });
}

if (window.innerWidth <= 559) {
  const cards = document.querySelectorAll(".menu-card");

  window.addEventListener("scroll", () => {
    const center = window.innerHeight / 2;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;

      if (Math.abs(center - cardCenter) < 150) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
}

(function () {
  "use strict";

  /* ── DOM refs ── */
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");
  const allNavLinks = document.querySelectorAll(".nav-link");
  const yearEl = document.getElementById("year");

  /* ═══════════════════════════════════════
     1. YEAR — footer copyright
  ═══════════════════════════════════════ */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ═══════════════════════════════════════
     2. STICKY HEADER — add .scrolled class
  ═══════════════════════════════════════ */
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    highlightActiveSection();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  /* ═══════════════════════════════════════
     3. MOBILE MENU TOGGLE
  ═══════════════════════════════════════ */
  function openMenu() {
    hamburger.classList.add("open");
    navLinks.classList.add("open");
    navOverlay.classList.add("show");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    navOverlay.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  navOverlay.addEventListener("click", closeMenu);

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ═══════════════════════════════════════
     4. SMOOTH SCROLL for anchor links
  ═══════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      const filterTarget = this.dataset.filterTarget;
      if (filterTarget) filterMenu(filterTarget);

      const navH = header.offsetHeight;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navH;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });

  /* ═══════════════════════════════════════
     5. ACTIVE NAV LINK on scroll
  ═══════════════════════════════════════ */
  const sections = document.querySelectorAll("main section[id]");

  function highlightActiveSection() {
    const scrollPos = window.scrollY + header.offsetHeight + 40;

    let current = "";
    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    allNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  }

  /* ═══════════════════════════════════════
     6. MENU FILTER by category
  ═══════════════════════════════════════ */

  // Create empty state element
  const menuGrid = document.getElementById("menuGrid");
  const emptyEl = document.createElement("p");
  emptyEl.className = "menu-empty";
  emptyEl.textContent = "No items in this category.";
  menuGrid.appendChild(emptyEl);

  function filterMenu(category) {
    let visibleCount = 0;

    menuCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      const matches = category === "all" || cardCategory === category;

      if (matches) {
        card.classList.remove("hidden");
        // Stagger reveal animation
        card.style.animationDelay = `${visibleCount * 0.06}s`;
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Toggle empty state
    emptyEl.classList.toggle("show", visibleCount === 0);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      filterMenu(btn.getAttribute("data-filter"));
    });
  });

  // Show all on load
  filterMenu("all");

  /* ═══════════════════════════════════════
     7. SCROLL REVEAL (Intersection Observer)
  ═══════════════════════════════════════ */
  const revealTargets = [
    ".section-header",
    ".filter-tabs",
    ".menu-card",
    ".about-img-col",
    ".about-text-col",
    ".contact-item",
    ".contact-map",
    ".whatsapp-btn",
  ];

  // Mark elements for reveal
  revealTargets.forEach((selector, selectorIndex) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("reveal");
      // Stagger cards within each group
      if (selector === ".menu-card") {
        el.classList.add(`reveal-delay-${(i % 3) + 1}`);
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  /* ═══════════════════════════════════════
     8. HERO "View Menu" smooth scroll
        (already handled by anchor listener)
  ═══════════════════════════════════════ */

  /* ═══════════════════════════════════════
     9. CARD hover — touch device support
        (remove :hover trap on touch)
  ═══════════════════════════════════════ */
  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

  if (!isTouchDevice()) {
    menuCards.forEach((card) => {
      card.addEventListener(
        "mouseenter",
        () => (card.style.willChange = "transform"),
      );
      card.addEventListener(
        "mouseleave",
        () => (card.style.willChange = "auto"),
      );
    });
  }

  /* ═══════════════════════════════════════
     10. RESIZE — close nav if desktop
  ═══════════════════════════════════════ */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    }, 150);
  });
})();

