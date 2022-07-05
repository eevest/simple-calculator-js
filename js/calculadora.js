/*Escuchamos cuando se carga el documento HTML por el display o los botones, verificando de si exsiten o no*/
window.addEventListener('load', ()=> {
  /*Creamos dos constantes en donde guardaremos los elementos de las clases HTML o el HTMLCollection*/
  const display = document.querySelector('.calculator-display');
  const keypadButtons = document.getElementsByClassName('keypad-button', 'keypad-button-c', 'keypad-button-i');

  /*Creamos otra constante para convertir el HTMLCollection a Array*/
  const keypadButtonsArray = Array.from(keypadButtons);
 
  /*Iteramos con un foreach el nuevo array de botones*/
  keypadButtonsArray.forEach((button) => {
    /*A cada boton le agregamos un listener que nos dara como resultado por consola el valor precionado en cada boton*/
    button.addEventListener('click', ()=> {
      calculadora(button, display);
    })
  })
});

function calculadora(button, display){
  switch(button.innerHTML){
    case 'AC':
      borrar(display);
      break;
    case '=':
      calcular(display);
      break;
    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display){
  /*Toma el string, reesuelve la operación y lo guarda en el innetHTML del display*/
  display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button){
  if(display.innerHTML == 0) {
    display.innerHTML = '';
  }
  display.innerHTML += button.innerHTML;

}

function borrar(display){
  display.innerHTML = 0;
}
