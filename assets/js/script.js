document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("./components/navbar.html");
    const navbar = await response.text();
    document.getElementById("navbar-container").innerHTML = navbar;
    initNavbar();

    const footerResponse = await fetch("./components/footer.html");
    const footer = await footerResponse.text();
    document.getElementById("footer-container").innerHTML = footer;

  } catch (error) {
    console.error("Gagal memuat komponen:", error);
  }
});

function initNavbar() {
  const openBtn = document.querySelector("[data-open-menu]");
  const closeBtn = document.querySelector("[data-close-menu]");
  const drawer = document.querySelector("[data-mobile-drawer]");
  const backdrop = document.querySelector("[data-backdrop]");

  if (!openBtn || !closeBtn || !drawer || !backdrop) return;

  function openMenu() {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    drawer.removeAttribute("inert");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("inert", "");
    drawer.setAttribute("aria-hidden", "true");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  window.addEventListener("blur", closeMenu);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) closeMenu();
  });
}

function toggleFooter(head) {
  const currentBody = head.nextElementSibling;
  const isOpen = currentBody.classList.contains("active");

  document.querySelectorAll(".bodyCardFooter").forEach((body) => {
    body.classList.remove("active");
  });

  document.querySelectorAll(".headCardFooter").forEach((h) => {
    h.classList.remove("active");
  });

  if (!isOpen) {
    currentBody.classList.add("active");
    head.classList.add("active");
  }
}