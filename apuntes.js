// Ejercicio para calcular la mediana cuando la lista es impar 

const lista1 = [
    100,
    200,
    500,
    800,
    400000000,
];

const mitadLista1 = parseInt (lista1.length / 2);

function esPar(numerito){      // <- funcion para indicar si un numero es par
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    //  necesitamos dos elementos 
    //  el promedio
    //  la mediana
} else {
    mediana = lista1[mitadLista1]
    // posicion mitadLista1 dentro de lista1 <-- se indica el valor del medioa de una lista
    // la mediana
}


// Ejercicio para calcular la mediana cuando la lista es par 


function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(                          //--> método reduce lo que hace es sumar de manera acumulativa, primero el primero y luego lo suma con el 2do, luego a estos 2 agrega el 3ro y asi sucesivamente.
         function (valorAcumulado = 0, nuevoElemento) {      //--> valorAcumulado = 0 indica el inicio del conteo y el ", nuevoElemento" es el que se le va a agregar al valor acumulado.
            return valorAcumulado + nuevoElemento;
         }
    );
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;  
}

const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt (lista1.length / 2); // parseInt redondea el numero quitando los decimales

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; // se agrega - 1 porque mitadLista1 es la 3er posicion del array y restando una posicion obtenemos la 2da posicion
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
    ]);

    mediana = promedioElemento1y2;
    //  necesitamos dos elementos 
    //  el promedio
    //  la mediana
} else {
     mediana = lista1[mitadLista1]
    // posicion mitadLista1 dentro de lista1
    // la mediana
}

// FIN MEDIANA




// ENCONTRAR LA MODA (ELEMENTO QUE MAS SE REPITE) 

const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

// vamos a transformar este array en un objeto

const lista1Count = {}; // creamos un objeto vacio y luego le agregamos los elementos

lista1.map(                         
        // map recorre el Array
    function (elemento) {            
        // recibe una funcion anonima
        if (lista1Count[elemento]) {  
        //<-- "si" este "elemento" ya existe 
        //lista1Count[elemento] = lista1Count[elemento] + 1; <-- toma el valor mencionado y le suma uno
        lista1Count[elemento] += 1; //<-- metodo abreviado al de arriba
        } else {
        lista1Count[elemento] = 1;
        }  
        // elemento en este caso sería 1, 2, 3, etc... o puede ser cualquier cosa que
        // se mencione dentro del Array. lista1Count[elemento] = 1; en este caso, indica que 
        // cuando no exista el elemento "if" aparecerá este elemento una sola vez   
    }
);

// esta función "lista1.map()" hace que si un elemento se repite lo suma y si no se repite "else" solo aparece una vez. 
// lo que hace es hacer un recuento de todos los elementos dentro del array PERO no indica cual es el que mas se repite
// para eso tenemos que convertir el objeto en un array

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; //<-- utilizamos el 1 porque el elemento que mas se repite es el que aparece en la posicion 1 (sería la 2da posicion)
    }
    );
    // "sort" la utilizamos para realizar la suma de los elementos de un "ARRAY" por eso convertimos el objeto en array 
    // Object.entries podemos enviarle como argumento un objeto que queremos convertir en array

    const moda = lista1Array[lista1Array.length - 1]; // <-- colocamos -1 porque se empieza a contar desde 0 

    //FIN MODA







