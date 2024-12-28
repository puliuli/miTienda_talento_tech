console.log("ok");

const productos = [
    {
        imagen: "./media/espadaP.jpg",
        nombre: "CURSOS Y TALLERES",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        precio: 50000
    },
    {
        imagen: "./media/bolaP.jpg",
        nombre: "POSTERS",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        precio: 18500
    },
    {
        imagen: "./media/guanteP.jpg",
        nombre: "PACK DE STICKERS",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        precio: 8700
    }
];

let totalAPagar = 0;

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
console.log(contenedorTarjetas);

const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("#totalCarrito"); // Selecciona correctamente el elemento del total
console.log(totalCarrito);

const mensajePagarCarrito = document.getElementById("mensajeCarrito"); // Selecciona correctamente el mensaje
console.log(mensajePagarCarrito);

function crearTarjetasDatos() {
    let tarjetasHTML = "";

    for (let indice = 0; indice < productos.length; indice++) {
        tarjetasHTML += ` 
                    <div class="tarjetas">
                        <img src="${productos[indice].imagen}" alt="foto de una página web para crear sitios web">
                        <div class="tarjeta">
                            <h2>${productos[indice].nombre}</h2>
                            <p>${productos[indice].descripcion}</p>
                            <h3>Precio: $${productos[indice].precio}</h3>
                            <a href="#">Ver + info</a>        
                            <input class="boton-agregar-carrito" type="button" value="Agregar al carrito" id="boton-agregar">
                        </div>
                    </div>
        `;
    }
    contenedorTarjetas.innerHTML = tarjetasHTML;
    console.log("okok");

    agregarBoton(); // Llamar a agregar los eventos después de renderizar las tarjetas
}

function agregarBoton() {
    const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");
    console.log(botonAgregar);

    for (let indice = 0; indice < botonAgregar.length; indice++) {
        botonAgregar[indice].addEventListener("click", function () {
            console.log("clic en el botón " + indice);

            // Crear un elemento <li> en el carrito
            const elementoLi = document.createElement("li");
            elementoLi.innerHTML = `Curso: ${productos[indice].nombre} - Precio: $${productos[indice].precio}`;
            console.log(elementoLi);

            // Añadir el <li> a la lista del carrito
            listaCarrito.appendChild(elementoLi);

            // Sumar al total a pagar
            totalAPagar += productos[indice].precio;
            console.log("Total acumulado: " + totalAPagar); // Verificación del total

            totalCarrito.innerText = "Total a pagar: $" + totalAPagar;

            // Limpiar el mensaje de error (si existe)
            mensajePagarCarrito.innerText = "";
        });
    }
}

const botonBorrar = document.querySelector("#boton-borrar");
console.log(botonBorrar);

function borrarCarrito() {
    listaCarrito.innerHTML = ""; // Borra todos los elementos de la lista
    totalCarrito.innerText = "Total a pagar: $0"; // Resetea el total
    totalAPagar = 0; // Resetea la variable del total
    mensajePagarCarrito.innerText = ""; // Resetea el mensaje de error
}

const botonPagar = document.querySelector("#boton-pagar");

function irAPagar() {
    // Verifica si el carrito está vacío
    if (listaCarrito.children.length === 0) {
        mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.location.href = "./pagos.html"; // Redirección al proceso de pago
    }
}

// Añadimos los eventos a los botones
botonBorrar.addEventListener("click", borrarCarrito);
botonPagar.addEventListener("click", irAPagar);

// Ejecutamos la función para crear las tarjetas de productos
crearTarjetasDatos();
