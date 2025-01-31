function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the URL has the #projects hash and show the section if needed
    if (window.location.hash === "#projects") {
        document.getElementById("projects").style.display = "block";
    }

    // Add event listeners to navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            let targetId = this.getAttribute("href").substring(1);
            document.querySelectorAll("section").forEach(section => {
                section.style.display = section.id === targetId ? "block" : "none";
            });
        });
    });
});
