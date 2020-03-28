var Yuli = {
    nombre: "Yulieth",
    apellido: "Sinuco",
    edad: 16,
    altura: 1.55,
    cantidadDeLibros: 35,
}

var Chuz = {
    nombre: "Jesus",
    apellido: "Garcia",
    edad: 18,
    altura: 1.7,
    cantidadDeLibros: 50,
}

var Bay = {
    nombre: "Bayron",
    apellido: "Garcia",
    edad: 25,
    altura: 1.92,
    cantidadDeLibros: 200,
}

var Fede = {
    nombre: "Federico",
    apellido: "Nose",
    edad: 8,
    altura: 1.85,
    cantidadDeLibros: 15,
}

var personas = [Yuli, Chuz, Bay, Fede]

const MAYOR = 18;
const LIMITE_ALTURA = 1.78;

function esMayorDeEdad(persona){
    return persona.edad >= 18 
}

var esMayorDeEdad2 = function(persona){
    return persona.edad >= 18
}

var esMayorDeEdad3 = function({ edad }){
    return edad >= 18
}

var esMayorDeEdad4 = ({ edad }) => {
    return edad >= 18
}

var esMayorDeEdad5 = ({ edad }) => edad >= 18

var esMayorDeEdad6 = persona => persona.edad >= 18

var mayores = personas.filter(esMayorDeEdad)
//console.log(mayores)

var altos = personas.filter(({altura}) => altura >= LIMITE_ALTURA)
//console.log(altos)

var pequenios = personas.filter(({altura}) => altura < LIMITE_ALTURA)
//console.log(pequenios)

const pasarAlturaCms = persona => {
    //CREA UN NUEVO OBJETO
    return {
        ...persona,
        altura: persona.altura * 100
    } 
    //MODIFICA EL ARRAY ORIGINAL
    /*persona.altura *= 100
    return persona*/

}

var personasCms = personas.map(pasarAlturaCms)
//console.log(personasCms)

/*totalLibros = 0;
for(persona of personas){
    totalLibros += persona.cantidadDeLibros
}*/
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`La cantidad total de Libros es: ${totalLibros}`)