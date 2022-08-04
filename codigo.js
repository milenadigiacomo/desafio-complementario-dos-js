const bikinis=[]

function busqueBikini(){
    var order= [];
    do{
        nombre=prompt("ingrese el nombre de la bikini(mili, raquel, nicole, mara)");
        if(nombre==""){
            break;
        }
        order.push(nombre)
        let talle=prompt("ingrese la talla (xs, s, m, l");
        order.push(talle)
        let cantidad=prompt("ingrese la cantidad");
        order.push({ nomb: nombre, size: talle, count:cantidad });
    }while (nombre!="");
    console.log(order)
}

busqueBikini();