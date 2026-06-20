document.addEventListener("DOMContentLoaded", async () => {
    try {

        const response = await fetch("./components/navbar.html");
        const navbar = await response.text();

        document.getElementById("navbar-container").innerHTML = navbar;

        initNavbar();

    } catch (error) {
        console.error("Navbar gagal dimuat:", error);
    }
});

function initNavbar() {
    const openBtn = document.querySelector("[data-open-menu]");
    const closeBtn = document.querySelector("[data-close-menu]");
    const drawer = document.querySelector("[data-mobile-drawer]");
    const backdrop = document.querySelector("[data-backdrop]");

    if (!openBtn || !closeBtn || !drawer || !backdrop) {
        console.log("Navbar element tidak ditemukan");
        return;
    }

    function openMenu() {
        drawer.classList.add("is-open");
        backdrop.classList.add("is-open");
    }

    function closeMenu() {
        drawer.classList.remove("is-open");
        backdrop.classList.remove("is-open");
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);

    window.addEventListener("blur", closeMenu);
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) closeMenu();
    });
}