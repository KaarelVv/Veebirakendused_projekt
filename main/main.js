
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

document.addEventListener("DOMContentLoaded", function() {
    const stripes = document.querySelectorAll(".stripe .fill");

    function fillStripesOnScroll() {
        stripes.forEach(fill => {
            const rect = fill.parentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 50 && rect.bottom >= 0) { 
                // Start the fill effect only when the element is in view
                fill.style.width = "100%";
            }
        });
    }

    window.addEventListener("scroll", fillStripesOnScroll);
    fillStripesOnScroll(); // Run once on page load to check if any bars are already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    function fadeInCardsOnScroll() {
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
                setTimeout(() => {
                    card.classList.add("visible");
                }, index * 200); // Adjust delay (200ms) for the staggered effect
            }
        });
    }

    window.addEventListener("scroll", fadeInCardsOnScroll);
    fadeInCardsOnScroll(); // Run on page load to check initial view
});

document.addEventListener('DOMContentLoaded', () => {
    // Select specific elements for fade-in
    const elementsToFade = document.querySelectorAll('.fade-invest, .fade-estonia, .fade-lower-text, .fade-span');
  
    // Add 'fade-in' class to trigger animations
    setTimeout(() => {
      elementsToFade.forEach(element => element.classList.add('fade-in'));
    }, 500); // Adjust delay as needed
  });