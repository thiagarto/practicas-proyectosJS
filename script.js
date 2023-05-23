const display = document.querySelector("#display") //selecciono un solo elemento
const buttons = document.querySelectorAll("button")        //selecciono todos los elementos 

buttons.forEach((item)=>{ //obtengo la informacion de todos los botones y los reviso uno por uno para decidir que tienen que hacer
    item.onclick=()=>{
        if(item.id === "clear"){
            display.innerText="";//innerText es texto interior, lo borramos del display de la ventana de visualizacion
        }else if(item.id==="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1); //El substring()método devuelve la parte del stringíndice desde
                                              // el inicio hasta el índice final y excluyendolo, o hasta  el final de la cadena si no se proporciona un índice final.            
        
        
                                            
        }
    }
})