
//creamos un loop para poder estar dentro de la pregunta constane una ves respondia, y tambiencrearemos un descanso o stop
while(true){
    //ingresa el dia de la semana
    let diaSemana = prompt(`Ingrese "1" si quiere cerrar el programa\nIngrese que dia de la semana estamos:`);
    //caonvirtiendo todo el texto a minuscula en caso ingreses texto en mayucula
    let diaM = diaSemana.toLowerCase();
    //se verifica si es text o munero flotante
    let dia = parseFloat(diaSemana);
    //evaluamos
    if (diaSemana == 1){
        alert(`Gracias por estar con nosotros, asta la proxima XD`)
        break
    }
    if (isNaN(dia) === true){
        alert(`ingresaste texto`);
        if(diaM == 'domingo' || diaM == 'sabado'){
            alert(`Que disfrutes tu dia ${diaSemana}, y tengas un bonito dia de la semana`);
        }
        else if(diaM == 'lunes' || diaM == 'martes' || diaM == 'miercoles' || diaM == 'jueves' || diaM == 'viernes'){
            alert(`Que tengas un buen ${diaSemana}, y da todo de ti`);
        }
        else{
            alert(`Lo que ingresaste ${diaSemana}, no es un dia de la semana \n Vuelve a ingresar el día de la semana!!!`);
        }
    }else if ( isNaN(dia) === false){
        alert(`Lo que ingresaste ${diaSemana}, no es texto y menos un dia de la semana,\n veulve a ingresar un dia de la semana`);
    }
    else{
        alert(`algo salio mal`)
    }
}