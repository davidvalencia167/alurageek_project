# AluraGeek

AluraGeek es una aplicación web que permite a los usuarios agregar, visualizar y eliminar productos de una lista de forma interactiva. El proyecto está diseñado para poner en práctica habilidades de desarrollo front-end y back-end con una arquitectura basada en APIs y JavaScript.

## Descripción del Proyecto

Este proyecto incluye un formulario para ingresar productos con los siguientes campos:
- Nombre del producto
- Precio del producto
- URL de la imagen del producto

Los productos ingresados se almacenan en una base de datos simulada y se muestran en una lista de productos en la interfaz de usuario.

## Características

- **Agregar Productos**: Permite a los usuarios agregar productos a la lista a través de un formulario.
- **Listar Productos**: Muestra todos los productos agregados en la interfaz.
- **Eliminar Productos**: Opción para eliminar un producto de la lista y de la base de datos.
- **Interfaz Adaptativa**: Diseño responsivo y accesible.
- **Estilización**: Utiliza CSS y fuentes de Google para un diseño moderno y limpio.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API** para llamadas a la API.
- **JSON Server** para simular una base de datos RESTful.

## Estructura de Archivos

```plaintext
AluraGeek/
│
├── index.html
├── css/
│   └── style.css
├── images/
│   └── (imágenes del proyecto)
├── js/
│   ├── conexionAPI.js
│   ├── crearProducto.js
│   └── mostrarProductos.js
└── README.md

## Instalacion y Configuracion

1. Clona el repositorio en tu máquina local:
  ```bash
  git clone https://github.com/usuario/AluraGeek.git
2. Navega al directorio del proyecto:
  ```bash
  cd AluraGeek
3. Instala JSON Server globalmente (si no lo tienes):
  ```bash
  npm install -g json-server
4. Inicia JSON Server:
  ```bash
  npm start
5. Abre index.html en tu navegador para ver la aplicación en acción.

# Uso

## Agregar Producto
Completa el formulario y haz clic en **"Enviar"** para agregar un nuevo producto.

## Eliminar Producto
Utiliza el botón de **eliminar** en la lista para borrar un producto de la base de datos.

## Limpiar Formulario
El botón **"Limpiar"** permite reiniciar los campos del formulario.

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama:
  ```bash
  git checkout -b feature/nueva-funcionalidad
3. Realiza tus cambios y haz commit:
  ```bash
  git commit -m 'Agrega una nueva funcionalidad'
4. Envía tus cambios a la rama principal:
  ```bash
  git push origin feature/nueva-funcionalidad
5. Crea un Pull Request en GitHub.

## 📬 Creditos
Desarrollado por David Santiago Valencia Blanco.

## Licencia
Este proyecto está bajo la licencia MIT. Puedes leer más en el archivo ```bash LICENSE.


