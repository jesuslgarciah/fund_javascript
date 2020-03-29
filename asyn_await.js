const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const PLANETS_URL = "planets/:id"
const STARSHIPS_URL = "starships/:id"


const opts = { crossDomain: true }

const onPeopleResponse = function(person, response){
    if (response)
    {
        console.log(`Hola yo soy ${person.name}`)
    }        
}

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const personajeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(personajeUrl, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    const cantPersonajes = 15
    var ids = []
    for (var i=0; i < cantPersonajes; i++){
        ids.push(i+1)
    }
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        for (personaje of personajes){
            console.log(`Hola, soy ${personaje.name}`)
        }
    } catch (id){
        onError(id)
    }
}

obtenerPersonajes()