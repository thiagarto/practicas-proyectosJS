const display = document.querySelector("#display") //selecciono un solo elemento
const buttons = document.querySelectorAll("button")        //selecciono todos los elementos 

buttons.forEach((item)=>{ //obtengo la informacion de todos los botones y los reviso uno por uno para decidir que tienen que hacer
    item.onclick=()=>{
        if(item.id == "clear"){
            display.innerText="";//innerText es texto interior, lo borramos del display de la ventana de visualizacion
        }else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1); //eliminar el ultimo digito, primero la posicion y luego lo que decea eliminarse
        }else if( display.innerText !="" && item.id =="equal"){
            display.innerText = eval(display.innerText); // si hay texto interno en la pantalla, y se apreta el igual, que evalúe y muestre cuentas xd
        }else if(display.innerText =="" && item.id =="equal"){ // si no hay texto interno, que devuelva "Null" dentro de 2 segundos
            display.innerText = "Null";
            setTimeout(()=>(display.innerText = ""),2000);

        }else{ // si sigue escribiendo, que se sigan mostrando en pantalla
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("toggler-icon");
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}