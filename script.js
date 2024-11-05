// Seleccionamos todos los contenedores de las cartas
const cartas = document.querySelectorAll('.carta-contenedor');

// Añadimos un evento de clic a cada contenedor de carta
cartas.forEach(cartaContenedor => {
    cartaContenedor.addEventListener('click', function() {
        const carta = cartaContenedor.querySelector('.carta');
        carta.classList.toggle('rotar'); // Alterna la clase 'rotar' para cada carta individual
    });
});
