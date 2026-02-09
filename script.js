const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
}
navSlide();

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

/* =========================================
   CONTROLE DO CARROSSEL DE VIVÊNCIAS
   ========================================= */
let currentSlide = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-img');
    
    if (!slide || images.length === 0) return;

    const totalImages = images.length;
    currentSlide += direction;

    if (currentSlide >= totalImages) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalImages - 1;
    }

    const offset = -currentSlide * 100;
    slide.style.transform = `translateX(${offset}%)`;
}

// Inicia o Auto-play apenas se o carrossel existir na página
const carouselExists = document.querySelector('.carousel-slide');
if (carouselExists) {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}

/* =========================================
   RENDERIZAÇÃO DA GALERIA DE EVENTOS (NETLIFY)
   ========================================= */
function renderEventGallery(galleryData) {
    if (!galleryData || !Array.isArray(galleryData) || galleryData.length === 0) {
        return ''; 
    }

    const imagesHtml = galleryData.map(item => {
        const path = item.img_path; 
        return `<img src="${path}" alt="Foto da vivência" class="galeria-thumb" onclick="window.open('${path}', '_blank')">`;
    }).join('');

    return `<div class="galeria-evento-extra">${imagesHtml}</div>`;
}
