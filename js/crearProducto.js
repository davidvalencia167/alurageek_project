import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.querySelector(".button.clear");


async function crearProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarProducto(nombre, precio, imagen);

}

formulario.addEventListener("submit", evento => crearProducto(evento));

botonLimpiar.addEventListener("click", async () => {
    const nombre = document.querySelector("[data-nombre]").value;
    
    
    const listaAPI = await conexionAPI.listarProductos();
    const producto = listaAPI.find(product => product.nombre === nombre);

    if (producto && producto.id) {
        await conexionAPI.eliminarProducto(producto.id);
        document.querySelector("[data-lista]").innerHTML = "";
        listarProducto();
    } else {
        console.error("Producto no encontrado o no tiene un ID válido.");
    }
});