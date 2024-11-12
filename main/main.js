
document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector("table");

    function fadeInOnScroll() {
        const rect = table.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) { // Adjust offset if needed
            table.classList.add("visible");
            window.removeEventListener("scroll", fadeInOnScroll); // Remove event listener after fade-in
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load to check if table is already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in-section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Adjust 100 offset to control when section becomes visible
            if (rect.top <= windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load to check if sections are already in view
});