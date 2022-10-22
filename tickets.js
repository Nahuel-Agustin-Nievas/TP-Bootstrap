const boton2 = document.getElementById('button2');

// seleccionar el tipo de descuento
boton2.addEventListener('click', () => {
    let descuento = 0
    desc = document.getElementById("category").value;
    desc = parseInt(desc);
    if (desc ==1) {
       descuento= 80
    } else if (desc ==2) {
       descuento= 50
    } else if (desc ==3) {
       descuento= 15
    } else{
        descuento= 80
    }
    
    // se calcula el total en base a la cantidad y al descuento
    valor = document.getElementById('quantity').value;
    valor = parseInt(valor);
    total1 = 0;
    total1 = (valor * 200);
    total2= total1 -((descuento * total1) / 100);

    // se imprime en pantalla en resultado
    document.getElementById('total').innerHTML= " Total a pagar: $" +  total2.toString();  
    
}
    );



    const boton1 = document.getElementById('button1');

    boton1.addEventListener('click', () => {
        document.getElementById('total').innerHTML= " Total a pagar: $";

    }
    );




















// ----------------------------------------------------

// function ShowSelected()
// {
// /* Para obtener el valor */
// descuento = 0
// var cod = document.getElementById("category").value;
// if (cod ==1)
//     descuento= 80 
// else if (cod==2)
//     descuento= 50
// else if (cod==3)
//     descuento= 15
     
// }

// const boton2 = document.getElementById('button2');

// boton2.addEventListener('click', calcTotal);

// function calcTotal () {
//     function ShowSelected()
// {
// /* Para obtener el valor */
// descuento = 0
// var cod = document.getElementById("category").value;
// if (cod ==1)
//     descuento = 80 
// else if (cod==2)
//     descuento = 50
// else if (cod==3)
//     descuento = 15
// else 
//     descuento = 80
// }
     

//     valor = document.getElementById('quantity').value;
//     valor = parseInt(valor);
//     total1 = 0;
//     total1 = (valor * 200);
//     total2= total1 -((descuento *total1) / 100);
//     console.log(total2)
// }

// ---------------------------------------------

// function calcTotal () {
    
//     unidades = document.getElementById('quantity').value;
//     console.log(parseInt(unidades));

// }


// unidades = document.getElementById('quantity').value;

// unidades.addEventListener('click')


// alert(unidades);