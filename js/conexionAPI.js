async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen            
        })
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    return conexion;
}

export const conexionAPI={
    listarProductos,
    enviarProducto,
    eliminarProducto
}
