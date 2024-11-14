import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(imagen, nombre, precio) {
    const producto = document.createElement("li");
    producto.className = "products__section__items";
    producto.innerHTML = `<img src="${imagen}">
    <section class="card__section__name">
    <h3>${nombre}</h3>
    <section class="card__section__info">
    <span>${precio}</span>
    <section>
        🗑️
    </section>
    </section>
    </section>`;

    return producto;

}

async function listarProducto() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(product => lista.appendChild(crearCard(product.imagen, product.nombre, product.precio)));

}

listarProducto();