//#region Daros principales
productos=[]
productos=JSON.parse(localStorage.getItem("articulosLS"))||[]
    

if (productos.length==0) {
  cargar_localstorage()  
}


const div_app = document.getElementById("app")

const card_template = (titulo, descrip, precio, urlimg,id,codigo,stock) =>{
    return `<div class= "col-3" "card" style="width: 18rem;">
    <img src="${urlimg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5></br>
      <h4>$${precio}</h4>
      <a class="btn btn-secondary" href="./detalle.html?id=${id}">Detalle</a>
    </div>
  </div>`
}

let HTMLTemplate="<div class='row  d-flex' >"

function obtener_localstorage(){
        const articulos = JSON.parse(localStorage.getItem("articulosLS"))
        console.log(articulos)
        articulos.map((Element, index)=>{
            const{ titulo,descrip, precio, urlimg,id,codigo,stock} = Element
            HTMLTemplate += card_template(titulo,descrip,precio,urlimg,id,codigo,stock)
        })
        div_app.innerHTML =HTMLTemplate
        HTMLTemplate+="</div>"
    }


obtener_localstorage()
