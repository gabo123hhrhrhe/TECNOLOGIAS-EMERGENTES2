// Menú de navegación dinámico para dispositivos móviles
const toggleButton = document.getElementById('toggle-menu');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Carrusel de imágenes en "Proyectos"
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);

// Formulario de contacto con validación
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente
    alert('Formulario enviado con éxito');
});

// Funcionalidad de tema oscuro/claro
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Cargar proyectos desde JSON
fetch('proyectos.json')
    .then(response => response.json())
    .then(data => {
        const proyectosSection = document.getElementById('proyectos');
        data.proyectos.forEach(proyecto => {
            let proyectoElement = document.createElement('div');
            proyectoElement.innerHTML = `<h3>${proyecto.nombre}</h3><p>${proyecto.descripcion}</p>`;
            proyectosSection.appendChild(proyectoElement);
        });
    });
