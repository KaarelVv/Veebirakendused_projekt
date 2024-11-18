document.addEventListener("DOMContentLoaded", function () {
    const stripes = document.querySelectorAll(".stripe .fill");
    const cards = document.querySelectorAll(".card");
    const otherElements = document.querySelectorAll(".fade-in-element"); // New elements to fade in

    function onScroll() {
        // Handle stripe fill effect
        stripes.forEach(fill => {
            const rect = fill.parentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
                fill.style.width = "100%";
            }
        });

        // Handle card fade-in effect
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
                setTimeout(() => {
                    card.classList.add("visible");
                }, index * 200); // Adjust delay (200ms) for the staggered effect
            }
        });
        // Handle additional fade-in for other elements
        otherElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
                setTimeout(() => {
                    element.classList.add("visible");
                    
                }, index * 100); // Adjust delay (150ms) or customize as needed
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Run once on page load to check initial view
});

