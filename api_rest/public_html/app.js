let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')


function imprimir(){
    
let rango = Math.floor((Math.random() * 88) + 1)  
let urlapi = 'https://swapi.co/api/people/' + rango
    
axios.get(urlapi).then(function (response) {
        actualizarInfo(response.data)  
    })

}

function actualizarInfo (data) {
    name.innerHTML      = data.name
    height.innerHTML    = 'height: ' + data.height
    mass.innerHTML      = 'mass: ' + data.mass
    birthYear.innerHTML = 'birth Year:' + data.birth_year
    
    
}

button.addEventListener('click' , imprimir)