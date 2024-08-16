let currentIndex = 0;

const texts = [
    "arc snare /// feb27,2024 /// designed the entire piece from scratch.",
    "blood embrace /// may20,2022 /// once again, designed the entire piece from scratch.",
    "spiritfox /// aug19,2022 /// symbol design for the center, and design from scratch.",
    "stereolove /// jun16,2023 /// designed from scratch."
];

function updateCarousel() {
    const images = document.querySelectorAll('.carousel-image');
    const textElement = document.getElementById('carousel-text');

    images.forEach((img, index) => {
        img.style.opacity = index === currentIndex ? '1' : '0';
    });

    textElement.textContent = texts[currentIndex];
}

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateCarousel();
}

// Initialize carousel
updateCarousel();



window.addEventListener('load', () => {
    setTimeout(() => {

        document.getElementById('splash-screen').style.display = 'none';

        document.getElementById('main-content').style.display = 'block';
    }, 1900);
});