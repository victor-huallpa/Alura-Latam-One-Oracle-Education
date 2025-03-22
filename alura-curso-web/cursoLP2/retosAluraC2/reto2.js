/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */

//funcin saludar
function saludar(){
    //variable
    let saludo = 'Hola';
    let nombre = document.getElementById('textoU').value;
    verificar(nombre, saludo)
    document.getElementById('textoU').value = "";
}

//funcion verificar contenido
function verificar(val1, val2){
    if (val1 != ''){
        let mostrar = `${val2} ${val1}`;
        let myH3 = document.getElementById('nombU');
        myH3.innerText = mostrar;
        return;
    }
    else{
        alert(`Estas introduciendo contenido en blanco\nNo hagas eso!!!`);
    }
}