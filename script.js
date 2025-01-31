function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    // Redirect to the About section when loading the page
    if (!window.location.hash) {
        window.location.hash = "#about";
    }

    // Ensure the correct section is displayed
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href").substring(1);
            document.querySelectorAll("section").forEach(section => {
                section.style.display = section.id === targetId ? "block" : "none";
            });
        });
    });
});
