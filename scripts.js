// Activar y desactivar el menú hamburguesa
document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
    document.querySelector('nav.menu-desplegable').classList.toggle('activo');
});

// Animación de texto rotativo
window.addEventListener('DOMContentLoaded', (event) => {
    const palabras = document.querySelectorAll('.texto-rotativo .palabra');
    let index = 0;

    setInterval(function() {
        palabras.forEach(palabra => palabra.style.opacity = '0');
        palabras[index].style.opacity = '1';
        index = (index + 1) % palabras.length;
    }, 2000);
});