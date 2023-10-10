let carrito = [];
let productos = [
    {
        nombre: "Producto 1",
        precio: 50,
        img: "producto.jpg",
        cantidad: 1
    },
    {
        nombre: "Producto 2",
        precio: 219,
        img: "prod2.jpg",
        cantidad: 1
    },
    {
        nombre: "Producto 3",
        precio: 78,
        img: "prod3.jpg",
        cantidad: 1
    }
]

document.addEventListener("DOMContentLoaded", function () {
    
    function ShowProducts()
    {
        let container = document.getElementById("container");
        container.innerHTML = "";
        
        for(let i=0; i < productos.length; i++)
        {
            const inputId = `input_${i}`; // Crea ID para el input
            const subtotalId = `subtotal_${i}`; // Crea ID para los elementos del subtotal
            const botonId = `boton_${i}`;
            
            let product = document.createElement("div");
            
            product.innerHTML +=
            `<div class="producto">
            <img class="prod" src="${productos[i].img}" alt="Producto">
            <h2>${productos[i].nombre}</h2>
            <p>Precio: ${productos[i].precio}</p>
            <input id="${inputId}" type="number" id="cantidad" value="1" min="1">
            <p>Subtotal: <span id="${subtotalId}">${productos[i].cantidad * productos[i].precio}</span></p>
            <button id="${botonId}">Agregar al Carrito</button>
            </div>`
            
            container.append(product);
        }
        // Agrega eventos input para actualizar el subtotal
        for(let i=0; i<productos.length; i++)
        {
            const inputElement = document.getElementById("input_"+i);
            const subtotalElement = document.getElementById("subtotal_"+i);
            const botonElement = document.getElementById("boton_"+i);
            
            inputElement.addEventListener("input", (ev) => {
                // obtener valor de cantidad
                const cantidad = parseInt(ev.target.value);
                // actualizar visualmente el subtotal en el html
                subtotalElement.innerHTML = cantidad * productos[i].precio;
            });
            botonElement.addEventListener("click", () => {
                // actualizar el valor de cantidad en el carrito
                AddProductToCart({nombre:productos[i].nombre, img:productos[i].img, precio:productos[i].precio, cantidad:inputElement.value});
                ShowCartProducts();
                recalculateTotal();
            });
        }
    }
    
    ShowProducts();
});

function ShowCartProducts()
{
    const cartContainer = document.getElementById("lista-carrito");
    cartContainer.innerHTML = "";
    
    for(let i=0; i<carrito.length; i++) {
        let cartItem = carrito[i];
        let element = document.createElement("div");
        element.innerHTML =
        `<div class="producto">
        <img class="prod" src="${cartItem.img}" alt="Producto">
        <h2>${cartItem.nombre}</h2>
        <p>Precio: ${cartItem.precio}</p>
        <p>Subtotal: <span>${cartItem.cantidad * cartItem.precio}</span></p>
        </div>`
        
        let button = document.createElement("div");
        button.innerHTML = `<button id="botonDelete_${i}">Eliminar</button>`;
        button.addEventListener("click", createButtonClickHandler(i))
        element.querySelector("div").appendChild(button);
        
        cartContainer.appendChild(element);
        
        // let botonElement = document.getElementById(`botonDelete_${i}`);
        // botonElement.addEventListener("click", createButtonClickHandler(i));
    };
}

function createButtonClickHandler(index) {
    return function() {
        carrito.splice(index, 1);
        ShowCartProducts();
        recalculateTotal();
    }
}

function AddProductToCart(cartProduct)
{
    carrito.push(cartProduct);
}

function recalculateTotal()
{
    const totalElement = document.getElementById("total");
    // recalcular y mostrar total
    let totalSum = 0;
    carrito.forEach(element => {
        totalSum += (element.precio * element.cantidad);
    });
    totalElement.innerHTML = totalSum;
}


