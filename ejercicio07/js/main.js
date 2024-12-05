const btnVerMas = document.querySelector("#info-btn");
const infoCard = document.querySelector(".info");

const mostrarOcultarElemento = (elemento) => {
    elemento.classList.toggle("hidden");
}

const cambiarContenidoElemento = (elemento) => {
    const contenido = elemento.innerHTML;

    if(contenido === "Ver Más") {
        elemento.innerHTML = "Ver Menos";
    } else if(contenido === "Ver Menos") {
        elemento.innerHTML = "Ver Más";
    }
}

btnVerMas.addEventListener("click", () => {
    cambiarContenidoElemento(btnVerMas);
    mostrarOcultarElemento(infoCard);
})