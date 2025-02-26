let numeroSecreto = 0;
let numintentos = 0;
let intentosRestantes = 0;

function asignatTextoElemento (elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function VerificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
    // numeroSecreto === numeroUsuario? asignatTextoElemento('p','Acertaste el numero'): asignatTextoElemento('p','Sigue intentando');
    numintentos++;
    intentosRestantes--;
    if(numeroSecreto === numeroUsuario){
        asignatTextoElemento('p',`Acertaste el numero en ${numintentos} ${numintentos === 1? 'intento':'intentos'}`);
        document.getElementById('intento').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else {
        //el usuario no haceto el numero
        if(numeroSecreto < numeroUsuario){
        asignatTextoElemento('p',`El numero secreto es menor: intentos restantes ${intentosRestantes}`);
        }else if(numeroSecreto > numeroUsuario){
        asignatTextoElemento('p',`El numero secreto es mayor: intentos restantes ${intentosRestantes}`);
        }
        limpiarCaja();
    }
    if(intentosRestantes === 0){
        document.getElementById('intento').setAttribute('disabled', 'true');
        asignatTextoElemento('p','Lo siento perdiste tus 3 intentos');
        
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    // valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10+1)   
    return numeroSecreto;
}

function condicionesIniciales(){
    limpiarCaja();
    asignatTextoElemento('h1', 'Juego del numer osecreto');
    asignatTextoElemento('p', `Indica un numero del 1 al 10, considera que solo tienes ${intentosRestantes} intentos`);
    numeroSecreto = generarNumeroSecreto();
    intentosRestantes = 3;
    numintentos = 0;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //iniciar condiciones iniciales
    condicionesIniciales();
    //seshabilitar el boton
        document.getElementById('intento').removeAttribute('disabled');
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();