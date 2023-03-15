const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");

//alert('estoy en el detalle')
detalle = JSON.parse(localStorage.getItem('articulosLS')) || [];
let ind = paramId ; 
let valor = " esto es dffdj "

document.getElementById("nompro").innerText = detalle[ind].titulo;
document.getElementById("deta1").innerText = detalle[ind].descrip;
document.getElementById("precio").innerText = "$ "+ detalle[ind].precio;
document.getElementById("ima").setAttribute("src",detalle[ind].urlimg) ;




// const ids = [1, 2, 3];

// const existeId = ids.filter((x) => x === parseInt(paramId));

// console.log(
//   "Este es el elemento obtenido del array utilizando query string" +
//     " " +
//     existeId
// );
