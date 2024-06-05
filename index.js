// Creación de la cabecera
const cabecera = document.createElement('header');
const navegacion = document.createElement('nav');
const nav = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
navegacion.className = 'navbar';

// Páginas
const links = ["Index", "Productos", "Contacto"];

// Recorrer las páginas y asignarles un href
for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    nav.appendChild(li);
}

// Estilos, agregar a laos productos
cabecera.style.backgroundColor = 'lightgreen';
document.body.style.backgroundColor = "#f3dbc3";

// Agregar la cabecera al cuerpo del documento
document.body.appendChild(cabecera);

//contenedor de productos
const divProducto = document.createElement('div');
document.body.appendChild(divProducto);

//datos de los productos
const productos = [
    {
        id: 1,
        nombre: "Arroz",
        precio: 250,
        cantidad: 4
    },
    {
        id: 2,
        nombre: "Fideo",
        precio: 200,
        cantidad: 4
    },
    {
        id: 3,
        nombre: "Lenteja",
        precio: 150,
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Poroto",
        precio: 50,
        cantidad: 3
    },
    {
        id: 5,
        nombre: "Alubia",
        precio: 50,
        cantidad: 5
    },
    {
        id: 6,
        nombre: "Arroz",
        precio: 50,
        cantidad: 4
    },
];


class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }

    sumarIva() {
        const IVA = 1.21;
        this.precio *= IVA;
    }
}

const lista = [];
for (const producto of productos) {
    const { id, nombre, precio, cantidad } = producto;
    const nuevoProducto = new Producto(id, nombre, precio, cantidad);
    nuevoProducto.sumarIva();
    lista.push(nuevoProducto);
}

//  total del stock
const totalStock = lista.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

// lista de precios
function obtenerPrecios() {
    return lista.map(producto => producto.precio);
}

console.log(obtenerPrecios());

// comparoel precio ingresado por el usuario con el total  stock
function compararPrecioUsuario() {
    let valorUsuario;
    while (true) {
        const input = prompt("Ingrese un valor para comparar con el total de los precios:");
        valorUsuario = parseFloat(input);
        
        if (!isNaN(valorUsuario)) {
            break; 
        }
        
        alert("Por favor, ingrese un número válido.");
    }
    
    if (valorUsuario > totalStock) {
        alert(`El valor ingresado (${valorUsuario}) es mayor que el total de los precios (${totalStock}).`);
    } else if (valorUsuario < totalStock) {
        alert(`El valor ingresado (${valorUsuario}) es menor que el total de los precios (${totalStock}).`);
    } else {
        alert(`El valor ingresado (${valorUsuario}) es igual al total de los precios (${totalStock}).`);
    }
}


compararPrecioUsuario();
 // agrego commit de prueba