// Lista de URLs de las imágenes de fondo (puedes cambiar estos enlaces por las imágenes que desees)
const imagenes = [
    "https://img2.wallspic.com/crops/2/6/5/5/5/155562/155562-pastel_de_chocolate-pasteleria-mousse_de-tiramisu-pastel_de_cumpleanos-1920x1080.jpg", // Imagen 1
    "https://media.istockphoto.com/id/936436176/es/foto/profiteroles-con-salsa-de-crema-y-chocolate-fondo-oscuro.jpg?s=612x612&w=0&k=20&c=fR2wfdincrjL4pcPG0nvMm_iihgcHqnqS9rMzqfgwqA=", // Imagen 2
    "https://wallpapers.com/images/hd/1920x1080-cookies-background-lm66dtxpt607gzao.jpg", // Imagen 3
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FScWJMFudTgchZBjIX-gsGyT6ffUM4KYAQ&s"  // Imagen 4
];

let index = 0; // Variable para llevar el control de la imagen actual

// Función que cambia la imagen de fondo de la sección de inicio
function cambiarFondo() {
    // Cambia el fondo de la sección "inicio" usando la imagen en el índice actual
    document.querySelector(".inicio").style.backgroundImage = `url(${imagenes[index]})`;
    // Actualiza el índice para la siguiente imagen (circular)
    index = (index + 1) % imagenes.length;
}

// Llama a la función cada 5 segundos para cambiar la imagen automáticamente
setInterval(cambiarFondo, 10000);

// Inicializa con la primera imagen
cambiarFondo();

// Función para detectar cuando los elementos están en la vista del usuario
function fadeInOnScroll() {
    const elements = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;
    
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
}

// Llamamos a la función cuando se haga scroll
window.addEventListener("scroll", fadeInOnScroll);

// Ejecutar al inicio para ver los elementos si ya están en pantalla
fadeInOnScroll();
// Funcionalidad del Lightbox
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    // Captura todas las imágenes de productos
    document.querySelectorAll(".lightbox-trigger").forEach((img) => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    // Cerrar el lightbox al hacer clic en la 'X'
    close.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Cerrar el lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
