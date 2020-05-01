//Creación de función para sumar
function sumar(){
    //Creación de variables y asignación de valores de los inputs
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var resultado;

    //Definir valor nulo como 0 y convertir a entero;    
    if (a == "") {
        a = 0;
    }else {
        a = parseInt(a);
    }

    if (b == "") {
        b = 0;
    }else {
        b = parseInt(b);
    }

    if (c == "") {
        c = 0;
    }else {
        c = parseInt(c);
    }

    //Operación de suma
    resultado = a + b + c;
    document.getElementById("resultado").value = resultado;
}   

//Creación de Función para restar
function restar(){
    //Creación de variables y asignación de valores de los inputs
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var resultado;

    //Definir y asignar valor mayor y valor menor a variables
    var nmayor = Math.max(a,b,c);
    var nmenor = Math.min(a,b,c);

    //Operación de resta
    resultado = nmayor - nmenor;
    //Asignación de resultado a variable 
    document.getElementById("resultado").value = resultado;
}

//Creación de función para multiplicar
function multiplicar(){
    //Creación de variables y asignación de valores de los inputs
    a = document.getElementById("a").value;
    c = document.getElementById("c").value;
    resultado;
    
    //Definir valor nulo como 0 y convertir a entero
    if (a == "") {
        a = 0;
    }else {
        a = parseInt(a);
    }

    if (c == "") {
        c = 0;
    }else {
        c = parseInt(c);
    }

    //Opereción de multiplicación
    resultado = a * c;
    //Asignación de resultado a variable
    document.getElementById("resultado").value = resultado;
}

//Creación de función para dividir
function dividir(){
    //Creación de variables y asignación de valores de los inputs
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var resultado;

    //Definir valor nulo como 0 y convertir a entero
    if (a == "") {
        a = 0;
    }else {
        a = parseInt(a);
    }

    if (b == "") {
        b = 0;
    }else {
        b = parseInt(b);
    }

    if (c == "") {
        c = 0;
    }else {
        c = parseInt(c);
    }

    //Definir y asignar valor mayor a variable
    var nmax = Math.max(a, b, c);

    //Creción de mensajes de error
    if (a == 0 && b == 0 && c == 0) {
        alert("Ingrese valores numéricos");
    } else if (b == 0){
        alert("No se puede dividir entre 0");
    }else{
        //Operación de división
        resultado = nmax / b;
    }
    //Asignación de resultado a variable
    document.getElementById("resultado").value = resultado;
}