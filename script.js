



///////////////////////////////////////////////////////////////////////////


const tarjetero =document.getElementById('tarjetArea')
const inputTit= document.getElementById('nuevaTarea')
const inputPrecio= document.getElementById('precio')
const inputDescrip= document.getElementById('descrip')
const inputCodigo= document.getElementById('codigo')
const inputStock= document.getElementById('stock')
const inputURLimg=document.getElementById('urlimg')
const botonAdd=document.getElementById('btnNewTask')
const botones=document.getElementsByTagName('button')
const btnTraerDatos= document.getElementById('btnTraerDatos')
let edicion=false
let idEdit=0
class articulo{
    constructor(titulo,precio,descrip,id,urlimg,stock,codigo){
this.titulo=titulo
this.precio=precio
this.descrip=descrip
this.id=id
this.urlimg=urlimg
this.stock=stock
this.codigo= codigo
    }
}

let articulos=[]
articulos=JSON.parse(localStorage.getItem("articulosLS"))||[]
let ultimoId=0
if (articulos.length>0){
    pintarArticulos()
    ultimoId=articulos.length
    btnTraerDatos.hidden= true
}else{
    btnTraerDatos.hidden= false
}

botonAdd.addEventListener('click',(e)=>{
    
    if(inputTit.value === '' || inputDescrip.value === '' ) {
        alert('Todos los campos de titulo y descripcion se deben llenar ');
        return;
    }


    if( isNaN(inputPrecio.value)   ) {
        alert('En el campo precio solo se puede ingresar numeros ');
         
        return;
    }
    else {
        if( inputPrecio.value <= 0   ) {
            alert('El importe no puede ser igual o menor que cero ');
             
            return;
        }
    }


if (!edicion){
    cargarArticulo()
}
else
{
    
    articulos[idEdit].titulo=inputTit.value

    
    articulos[idEdit].precio=inputPrecio.value
    articulos[idEdit].descrip=inputDescrip.value
    articulos[idEdit].urlimg=inputURLimg.value
    articulos[idEdit].codigo=inputCodigo.value
    articulos[idEdit].stock=inputStock.value

grabarLocalStg(articulos)

}

    inputDescrip.value=""
    inputPrecio.value=""
    inputTit.value=""
    inputURLimg.value=""
    inputCodigo.value=""
    inputStock.value=""
    botonAdd.innerText="Agregar"
    pintarArticulos() 
    alert("Producto Cargado")
})

btnTraerDatos.addEventListener('click',(e)=>{
 traerDatos() 

 pintarArticulos()

})    

function cargarArticulo(){
    const titulo=inputTit.value
    const precio=inputPrecio.value
    const descrip=inputDescrip.value
    const id=ultimoId
    const urlimg=inputURLimg.value
    const codigo=inputCodigo.value
    const stock =inputStock.value

    const nuevoArticulo= new articulo(titulo,precio,descrip,id,urlimg,codigo,stock) 
    articulos.push(nuevoArticulo)
    grabarLocalStg()
    console.log(articulos)
    ultimoId++
}

function grabarLocalStg(){
    // JSON.parse(localStorage.getItem("art"))
    localStorage.setItem('articulosLS',JSON.stringify(articulos))
}

function pintarArticulos(){
    tarjetero.innerHTML=""
    ultimoId=0
    articulos.forEach(articulo => {
        articulo.id=ultimoId
        const tarj =document.createElement('div')
        tarj.className='card m-2 tarjetita'
        tarj.style.minWidth='18rem'
        tarj.style.maxWidth='30%'
   
        tarj.innerHTML=`   <div id="${articulo.id}" class="card-body">
        <img src="${articulo.urlimg}" class="card-img-top" alt="...">
        <h5 class="card-title">${articulo.titulo}</h5>
        <h6 class="card-title">$${articulo.precio}</h6>
        <p class="card-text">${articulo.descrip}</p>
        <button class="btn btn-primary btnEditar">Editar</button>
        <button class="btn btn-primary btnBorrar">Borrar</button>
        <a class="btn btn-secondary" href="./detalle.html?id=${articulo.id}">Detalle</a>
        </div>`
        
        // <button id="${articulo.id}"class="btn btn-primary btnBorrar">Editar</a>
        // <button id="${articulo.id}"class="btn btn-primary btnBorrar">Borrar</a>
       
        tarjetero.appendChild(tarj)
        ultimoId++
    });

    const botonesborrar=Array.from(document.getElementsByClassName("btnBorrar")) 
    for(let i=0;i<botonesborrar.length;i++){
         botonesborrar[i].addEventListener('click',(e)=>{
           
            
             const btnId=parseInt(e.target.parentElement.getAttribute("id"))
             console.log(articulos)

             articulos = articulos.filter(function(art) {
                return art.id !== btnId
            });

             console.log(articulos)
             pintarArticulos()
             grabarLocalStg()
         })
    }


    const botoneseditar=Array.from(document.getElementsByClassName("btnEditar")) 
    for(let i=0;i<botoneseditar.length;i++){
         botoneseditar[i].addEventListener('click',(e)=>{
            edicion=true
            botonAdd.innerText="Guardar"
             const btnId=parseInt(e.target.parentElement.getAttribute("id"))
             idEdit=btnId 
            inputTit.value=articulos[btnId].titulo
            inputPrecio.value=articulos[btnId].precio
            inputDescrip.value=articulos[btnId].descrip
            inputURLimg.value=articulos[btnId].urlimg
            inputCodigo.value=articulos[btnId].codigo
            inputStock.value=articulos[btnId].stock
            });            
         }

            inputURLimg.addEventListener('change',(e)=>{
            
            const imgen = document.getElementById("vistaprevia")
            imgen.setAttribute("src",inputURLimg.value)                 
        });

        const tarjetitas=Array.from(document.getElementsByClassName("tarjetitas")) 
        for(let i=0;i<tarjetitas.length;i++){
             tarjetitas[i].addEventListener('click',(e)=>{
                 
                })            
             }
    
                                 
               
 
}

function traerDatos(){
    const productos=[] ;
    productos[0] = {
        id : 1 ,
        titulo: "Pack Completo",
        descrip: "ESTE PACK CONTIENE 1 CONTENEDOR DE CADA MEDIDA. 6 en total." ,
        precio: 11980 ,
        stock :20 ,
        codigo : 1008 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/9ff51f6021fd7a6dc394373cb19ce98d55e6263e23b70cc009e5a444b4539f86141180.png",
      };
      productos[1] = {
        id : 2 ,
        titulo: "Pack Adicional",
        descrip: "ESTE PACK CONTIENE 1 CONTENEDOR DE CADA MEDIDA. 5 en total.",
        precio: 10229 ,
        stock :29 ,
        codigo : 1019 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/976531799f0f2ba809aaef42b3df379e85015b60619da52335588785c39ab85a141180.png",
      };
      productos[2] = {
        id : 3 ,
        titulo: "Pack Laundry Premium",
        descrip: "El pack incluye: 3 botellones de vidrio de 1.9lts  1 dispenser de vidrio de 500ml    1 frasco de vidrio de 1500cc TAPA DE CORCHO Consultar por TAPA de Aluminio" ,
        precio: 8900 ,
        stock :130 ,
        codigo : 1115 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/1f835ed9f238a895fd6cc3eff7ebe404b1a4bbaf60b6070b06ec24120834d41f141180.png",
      };
      productos[3] = {
        id : 4 ,
        titulo: "Pack Laundry Vidrio + FRASCO TAPA CORCHO",
        descrip: "ESTE PACK CONTIENE 1 CONTENEDOR DE CADA MEDIDA. 5 en total.",
        precio: 7499 ,
        stock :39 ,
        codigo : 1455 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/976531799f0f2ba809aaef42b3df379e85015b60619da52335588785c39ab85a141180.png",
      };
      productos[4] = {
        id : 5 ,
        titulo: "Pack Básico",
        descrip: "Contiene 3 contenedores: •Contenedor alto de 1000cc •Contenedor de 1200cc o 1100cc •Contenedor de 600cc.",
        precio: 5470 ,
        stock :300 ,
        codigo : 1223 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/41e763af121c4887c1a3994498e9146ad3f053f8d7495c4f6c62e5edd02aa4ff141180.png",
      };
      productos[5] = {
        id : 6 ,
        titulo: "Set matero MAIZ",
        descrip: "Todas lo as piezas para tener su equipo de mate",
        precio: 2500 ,
        stock :3 ,
        codigo : 1001 , 
        urlimg: "https://d22fxaf9t8d39k.cloudfront.net/c9f229d8207f5bd3684a4d1833962ea257e245f81c8dd74b691f973eeb457448141180.png",
      };
    
      //produ = [];
      localStorage.setItem("articulosLS", JSON.stringify(productos));
     // localStorage.setItem("produ", JSON.stringify(prod2));
     location.reload()
   

}

