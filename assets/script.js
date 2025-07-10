// assets/script.js

const sections = document.querySelectorAll('.js-scroll');

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-slide');
            // Descomente a linha abaixo se quiser que a animação ocorra apenas uma vez
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('fade-in-slide');
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    root: null, // Observa a viewport
    threshold: 0.6 // A callback será executada quando 20% do elemento estiver visível
});

sections.forEach(section => {
    observer.observe(section);
});

// Ação imediata para elementos visíveis na primeira tela
document.addEventListener('DOMContentLoaded', () => {
    const initialElements = document.querySelectorAll('.js-scroll');
    initialElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        // Verifica se o elemento já está na viewport no carregamento inicial
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('fade-in-slide');
        }
    });
});