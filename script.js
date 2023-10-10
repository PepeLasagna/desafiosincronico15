let carrito = [];
    let productos = [
        {
            nombre: "Producto 1",
            precio: 50,
            img: "producto.jpg",
            cantidad: 1
        }
    ]

document.addEventListener("DOMContentLoaded", function () {


    // Paso 1: Declarar variables y constantes necesarias
    //const precioProducto = 50; // Precio unitario del producto
    //const cantidadInput = document.getElementById("cantidad");
    //const subtotalSpan = document.getElementById("subtotal");
    //const agregarButton = document.getElementById("agregar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");
    
    // Paso 2: Agregar eventos para interactuar con la página
    // cantidadInput.addEventListener("input", calcularSubtotal);
    // agregarButton.addEventListener("click", agregarAlCarrito());
    
    // Paso 3: Función para calcular el subtotal en tiempo real
    
    // let subTotal;
    // function calcularSubtotal(value, precio) {
    //     subTotal = "$" + value * precio
    // };
    // let cantidad;
    // function cantidad (valor){
    //     cantidad = v
    // }
    
    // Paso 4: Función para agregar productos al carrito
    function agregarAlCarrito(nombre, subtotal, cantidad) {
        // carrito.push({""})
    };
    
    // Paso 5: Función para calcular el total del carrito
    function calcularTotalCarrito() {
        // Completar esta función para calcular el total del carrito
        
    };
    
    function productsHTML(array)
    {
        for(let i=0; i < array.length; i++)
        {
            const inputId = `input_${array[i].nombre}`; // Crea ID para el input
            const subtotalId = `subtotal_${array[i].nombre}`; // Crea ID para los elementos del subtotal

            let product = document.createElement("div");
            
            product.innerHTML +=
            `<div class="producto">
            <img class="prod" src="producto.jpg" alt="Producto">
            <h2>${array[i].nombre}</h2>
            <p>Precio: ${array[i].precio}</p>
            <input id="${inputId}" type="number" id="cantidad" value="1" min="1">
            <p>Subtotal: <span d="${subtotalId}" id="subtotal">${array[i].cantidad * array[i].precio}</span></p>
            <button id="agregar">Agregar al Carrito</button>
            </div>`
            document.getElementById("container").append(product);
        }
         // Agrega evento input para actualizar el subtotal
    const inputElement = document.getElementById(inputId);
    const subtotalElement = document.getElementById(subtotalId);

    inputElement.addEventListener("input", () => {
      const cantidad = parseInt(inputElement.value);
      const nuevoSubtotal = cantidad * element.unitCost;
      subtotalElement.textContent = nuevoSubtotal;
    });
    
    
    
}
productsHTML(productos);
});


