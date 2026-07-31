const dropdown = document.querySelector(".nav-dropdown");
const button = dropdown?.querySelector(".nav-dropbtn");

if (dropdown && button) {
    const closeMenu = () => {
        dropdown.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Menü öffnen");
    };

    button.addEventListener("click", event => {
        event.stopPropagation();

        const isOpen = dropdown.classList.toggle("open");

        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute(
            "aria-label",
            isOpen ? "Menü schliessen" : "Menü öffnen"
        );
    });

    dropdown.addEventListener("click", event => {
        event.stopPropagation();
    });

    document.addEventListener("click", closeMenu);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
}