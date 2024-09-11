// constante de imagenes
const images = [
    'med1.jpg',
    'med3.jpg', 
    'med4.jpg', 
    'med5.jpg',
];

let currentImageIndex = 0;
const carouselImage = document.querySelector('.carousel img');

// carrusel update
function updateCarousel() {
    carouselImage.src = images[currentImageIndex];
    updateDots();
}

// update de dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// crear dots para el carrusel
function createDots() {
    const dotsContainer = document.getElementById('dots');
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            clearInterval(autoSlide);
            currentImageIndex = index;
            updateCarousel();
            autoSlide = setInterval(nextImage, 3000); 
        });
        dotsContainer.appendChild(dot);
    });
}

// funcion para cambiar imagen
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarousel();
}

// funcion para retroceder imagen
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// flechas de navegacion
document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlide);
    nextImage();
    autoSlide = setInterval(nextImage, 3000); 
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    prevImage();
    autoSlide = setInterval(nextImage, 3000);
});

// desplazar imagenes mouse
let startX = 0;
let isDragging = false;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    if (startX - currentX > 50) {
        clearInterval(autoSlide);
        nextImage();
        autoSlide = setInterval(nextImage, 3000);
        isDragging = false;
    } else if (currentX - startX > 50) {
        clearInterval(autoSlide);
        prevImage();
        autoSlide = setInterval(nextImage, 3000);
        isDragging = false;
    }
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

// avanzar imagen en telefonos
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    const currentX = e.touches[0].clientX;
    if (startX - currentX > 50) {
        clearInterval(autoSlide);
        nextImage();
        autoSlide = setInterval(nextImage, 3000);
    } else if (currentX - startX > 50) {
        clearInterval(autoSlide);
        prevImage();
        autoSlide = setInterval(nextImage, 3000);
    }
});

// cambiar imagen auto
let autoSlide = setInterval(nextImage, 3000);

// iniciar siempre en la imagen 1
updateCarousel();
createDots();


// zoom de video
const videos = document.querySelectorAll('.video-container');

videos.forEach(video => {
    const overlay = video.querySelector('.video-overlay');
    
    // agregar evento al overlay
    overlay.addEventListener('click', () => {
        // eliminar overlay
        overlay.style.display = 'none';

        // agregar class zoomed a video
        video.classList.add('zoomed');

        // opacidad al video
        const darkOverlay = document.createElement('div');
        darkOverlay.classList.add('overlay');
        document.body.appendChild(darkOverlay);

        // cerrar video
        darkOverlay.addEventListener('click', () => {
            video.classList.remove('zoomed');
            darkOverlay.remove();
            // colocar de nuevo el overlay
            overlay.style.display = 'block';
        });
    });
});

// evento para mostrar popup
document.getElementById('workInfoBtn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
