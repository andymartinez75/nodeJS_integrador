// Defino funciones para eventos de objetos propios
const sumaCantidad = (button) => {
    const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    cantidad++
    input_cantidad.value = cantidad
    console.log("Aumento a " + input_cantidad.value)
}

const restaCantidad = (button) => {
    const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    if(cantidad>=1) {
        cantidad -= 1
    }
    input_cantidad.value = cantidad
    console.log("Disminuye a " + input_cantidad.value)
}
const verificaCantidad = (cual) => {
  const input_cantidad = cual.parentNode.querySelector('#input_cantidad');
  let cantidad = Number(input_cantidad.value)
  if(cantidad>=1) {
    input_cantidad.value = cantidad.toFixed(0)
  } else {
    input_cantidad.value = 0
  }
  console.log("Se establece a " + input_cantidad.value)
}

//Inicializo el slider Glide
if ( !(document.querySelector('.glide') == null ) ){
  new Glide('.glide',
    {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      breakpoints: {
        991: {
          perView: 2
        },
        768: {
          perView: 1
        }
      }
    }
  ).mount()
}

if (getSequelizeTypeFromJsonFormat(Storage) !== "undefined"){
  if (localStorage.getItem("cantCarrito") === null){
    localStorage.setItem("cantCarrito",0)
  }
}else{
  console.log("LocalStorage no soportado")
}