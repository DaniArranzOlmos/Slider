// Array de imágenes y textos correspondientes
const images = [
    { src: 'img/foto1.jpg', text: 'Descripción de la imagen 1' },
    { src: 'img/foto2.jpg', text: 'Descripción de la imagen 2' },
    { src: 'img/foto3.jpg', text: 'Descripción de la imagen 3' },
    { src: 'img/foto4.jpg', text: 'Descripción de la imagen 4' },
    { src: 'img/foto5.jpg', text: 'Descripción de la imagen 5' },
    { src: 'img/foto6.jpg', text: 'Descripción de la imagen 6' }
];

let currentIndex = 0;

const imgVisor = document.getElementById('imgVisor');
const imgText = document.getElementById('imgText');
const dotsContainer = document.getElementById('dots');

// Crear puntos de navegación
images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentIndex) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateVisor();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateVisor() {
    imgVisor.src = images[currentIndex].src;
    imgText.textContent = images[currentIndex].text;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateVisor();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateVisor();
});

// Inicializar visor
updateVisor();
