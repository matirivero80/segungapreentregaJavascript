
class compra {
    constructor(carritoDeCompras) {
        this.carrito1=carritoDeCompras
    }
    subtotal() {
        if (this.carrito1.length >0) {
            return this.carrito1.reduce((acumulador, producto)=> acumulador + producto.precio,0)
        }
    }
}



const carrito1=[]

const productos=[
    
    {articulo:1, imagen:"👕" , categoria:"remera",  descripcion:"Remera manga corta varon talle 8 al 14",  precio:6000},
    {articulo:2, imagen:"👕" , categoria:"remera",  descripcion:"Remera manga corta varon talle 2 al 6",  precio:5000},
    {articulo:3, imagen:"👚" , categoria:"remera",  descripcion:"Remera manga corta nena talle 2 al 6",  precio:5000},
    {articulo:4, imagen:"👚" , categoria:"remera",  descripcion:"Remera manga corta nena talle 8 al 14" , precio:6000},
    {articulo:5, imagen:"🎽" , categoria:"musculosa",  descripcion:"Musculosa varon talle 2 al 6",  precio:4000},
    {articulo:6,  imagen:"🎽" , categoria:"musculosa",  descripcion:"Musculosa varon talle 8 al 14",  precio:4500},
    {articulo:7, imagen:"👗" , categoria:"vestido",  descripcion:"Vestido musculosa talle 4 al 8",  precio:7000},
    {articulo:8, imagen:"👗" , categoria:"vestido",  descripcion:"Vestido musculosa talle 10 al 14",  precio:8000},
    {articulo:9, imagen:"🩳" , categoria:"short",  descripcion:"Short unisex talle 4 al 10" , precio:3500},
    {articulo:10, imagen:"🩳", categoria:"short",  descripcion:"Short unisex talle 12 al 16",  precio:3500}
    
]



const contenedor = document.querySelector("div.container#contenedor")

function crearPlantillaHTML (producto) {
    return `<div class="plantilla">
                <div class="imagen">${producto.imagen}</div>
                <div class="descripcion">${producto.descripcion}</div>
                <div class="precio">${producto.precio}</div>
                <button id="${producto.articulo}" class="comprar">Comprar</button>
           </div>`
}

function cargarCarrito() {
    if(productos.length>0) {
        productos.forEach((producto)=>contenedor.innerHTML+= crearPlantillaHTML (producto))
        const botones= document.querySelectorAll("button.comprar")
        botones.forEach((boton)=>{
            boton.addEventListener("click", (e)=> {
                const id= parseInt(e.target.id)
                let productoSeleccionado= productos.find ((producto)=> producto.articulo === id )
                carrito1.push(productoSeleccionado)
                guardarCompras()
                

            } )
        })
        
    }
}
cargarCarrito()
function guardarCompras(){
    localStorage.setItem("compra", JSON.stringify(carrito1))
}





