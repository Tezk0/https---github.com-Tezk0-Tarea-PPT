
const adoptButtons = document.querySelectorAll('.boton-adoptar');

adoptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const text = button.innerText.trim();
        button.innerText = text === 'Adoptar' ? 'Adoptado' : 'Adoptar';
    });
});

const boton2 = document.getElementById('boton2');
if (boton2) {
    boton2.addEventListener('click', () => {
        alert('¡Gracias por donar a AdoptaTuArbol!');
    });
}