class Persona{

    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido
        this.altura = altura
    } 

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            var { nombre, apellido } = this
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        return this.altura >= 1.8 ? 'Soy muy alto' : 'Soy muy bajo'
    }
}

class Desarrollador extends Persona{

    constructor(nombre, apellido, altura){
        super()
        this.nombre = nombre;
        this.apellido = apellido
        this.altura = altura
    } 

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if(fn){
            var { nombre, apellido } = this
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    esDev ? console.log('Que bueno que seas desarrollador/a') : console.log('Pensé que eras desarrollador/a')
}

var chuz = new Desarrollador('Jesus', 'Garcia', 1.99)
var papa = new Persona('Jaime', 'Garcia', 1.7)
var mama = new Persona('Yorley', 'Hoyos', 1.81)

chuz.saludar(responderSaludo)
papa.saludar(responderSaludo)
mama.saludar(responderSaludo)