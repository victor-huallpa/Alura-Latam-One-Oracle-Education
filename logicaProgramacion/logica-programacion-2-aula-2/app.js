let numeroSecreto = generarNumeroSecreto();

function asignatTextoElemento (elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function IntentoDeUsuario(){
    alert('clic desde la funcion');
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10+1)   
    return numeroSecreto;
}

asignatTextoElemento('h1', 'Juego del numer osecreto');
asignatTextoElemento('p', 'Indica un numero del 1 al 10');