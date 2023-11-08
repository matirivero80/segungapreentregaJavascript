
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
    {articulo:1,  descripcion:"Body RN.",  precio:4000},
    {articulo:2,  descripcion:"Body Talle 2 al 4",  precio:5000},
    {articulo:3,  descripcion:"Body talle 6 al 12",  precio:5000},
    {articulo:4,  descripcion:"Conjunto unisex talle 2 al 4",  precio:6000},
    {articulo:5,  descripcion:"Conjunto unisex talle 6 al 10",  precio:7000},
    {articulo:6,  descripcion:"Remera manga corta varon talle 2 al 6",  precio:5000},
    {articulo:7,  descripcion:"Remera manga corta varon talle 8 al 14",  precio:6000},
    {articulo:8,  descripcion:"Remera manga corta nena talle 2 al 6",  precio:5000},
    {articulo:9,  descripcion:"Remera manga corta nena talle 8 al 14" , precio:6000},
    {articulo:10,  descripcion:"Musculosa varon talle 2 al 6",  precio:4000},
    {articulo:11,  descripcion:"Musculosa varon talle 8 al 14",  precio:4500},
    {articulo:12,  descripcion:"Vestido musculosa talle 4 al 8",  precio:7000},
    {articulo:13,  descripcion:"Vestido musculosa talle 10 al 14",  precio:8000},
    {articulo:14,  descripcion:"Short unisex talle 4 al 10" , precio:3500},
    {articulo:15, descripcion:"Short unisex talle 12 al 16",  precio:3500}
    
]


function buscarPrenda(articulo) {
    let productoSeleccionado= productos.find ((producto)=> producto.articulo === articulo )
    return productoSeleccionado
}

function comprarRopa () {
    let articulo= prompt("ingresa el numero que pertenece a la prenda")
    let productoIngresado = buscarPrenda (parseInt(articulo))

    if(productoIngresado !== undefined) {
        carrito1.push(productoIngresado)        

        let pregunta = confirm ("¿desea elegir otro producto?")
        if(pregunta === true) {
            comprarRopa ()
        }
    else {
        const shopping = new compra (carrito1)
        let total = shopping.subtotal()
        console.table(carrito1)
        console.log("El total de su pedido es $"+ total + "\n Gracias por su compra")
    
    }
        
    
}else {
    alert("articulo inexistente")
    
}
}
