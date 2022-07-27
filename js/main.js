/*Crear un programa que calcule las calificaciones 
de los estudiantes (minimo 6 para aprobar)*/


let promedio = prompt('Ingrese la nota (1 a 10)'); {

    if (promedio > 10){ 
        alert('Ingrese una nota menor o igual a 10');

        }else {

        while (promedio < 6) {
        alert('Usted esta desaprobado');
        break;}

        if (promedio >= 6) {
        alert('Usted esta aprobado')
        }

     } 

    var agradecer = function agradecer() {
        alert('gracias por utilizar el sistema de calificaciones ')
    }
    
    agradecer();

}




