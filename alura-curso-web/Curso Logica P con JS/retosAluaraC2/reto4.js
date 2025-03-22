/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
utilizando un template string para incluir el valor del saldo.
*/

//creamos una pr{{egunta para que usuario confirme si quire ver su saldo o no.
let con = confirm(`¿Quiere ver su saldo actual?`)

// creamos un while pasa seguir con la consulta
 while(con){
    // creamos la variable del saldo con funcion random
    let saldo = Math.floor(Math.random()*1000)+500;

    //evaluamos el saldo

    if (saldo > 600){
        alert(`Tu saldo actual es ${saldo} dolares en el banco, estas estable aun;`);
    }
    else if(saldo <= 600){
        alert(`tu saldo actual es ${saldo} dolares en el banco, estas bajo en tu estabiulidad economica`);
    }

    // creamos otra variable para preguntar al cliente si quiere seguir viendo su saldo actual.

    let con2 = confirm(`Desesa seguir evaluando su saldo actual?`);
    if (con2){
        alert(`Muy bien, es bueno hacer seguimiento de tu saldo.`);
    }
    else{
        alert(`Wow, asta luego cuidese.`)
        break
    }
 }