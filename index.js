 /* Variables */

let total=0, precioProducto=0;
let miCompra = [], totalAPagar, posicion = 0, compra="Productos elegidos:\n";
let precio, monto, resultado, opcionDePago, opcionValida=0;

/* array */

const productos = [{producto: "Zapatillas", precio: 20000}, 
    {producto: "Remera", precio: 10000},
    {producto: "Pantalon", precio: 9000},
    {producto: "Gorra", precio: 5000},
    {producto: "Medias", precio: 3000},
    {producto: "Campera", precio: 18000}];


window.onload = iniciar;


/* Funciones */

function iniciar() {
    
        const agregarAlCarrito = (item) => {
            miCompra.push(item);
            return(miCompra);
        }
    

        const mostrarCompra = () => {
            for(let n=0; n<miCompra.length;n++){
            compra = compra + `${miCompra[n].producto}, Precio: $${miCompra[n].precio}\n`;}
            alert(compra);
            alert(`El total de su compra es $${total}`);
        }
    
        const sumarPrecios = (item) => {
            precioProducto = parseInt(item.precio);
            total += precioProducto;
            return(total);
        }
    
        
    
    function ingresarProducto(){
        let encontrado=0;
        let seleccion = prompt("Ingrese el producto a comprar");
        seleccion = seleccion.toLowerCase();
        
    
        for(const item of productos){
            if(seleccion===(item.producto).toLowerCase()){  
                let mensaje = `Producto elegido: ${item.producto}, Precio: $${item.precio}`;
                alert(mensaje); 
                encontrado = 1; 
                agregarAlCarrito(item);
                sumarPrecios(item);
                return(item);
                }
            }
            if(encontrado === 0)  
                alert("Producto no encontrado");  
    }
    
        ingresarProducto();
    
       let seguirComprando = prompt(`Va a comprar algun otro producto? Si - No`);
    
       while (seguirComprando.toLowerCase()==="si"){
           ingresarProducto();
           seguirComprando = prompt(`Va a comprar algun otro producto? Si - No`);
       }
       
       
        
        mostrarCompra();
    
        }