let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')


function imprimir(){
    
let rango = Math.floor((Math.random() * 88) + 1)  
let urlapi = 'http://swapi.py4e.com/api/people/' + rango
    
axios.get(urlapi).then(function (response) {
        loadpersonajes(response.data)  
    })

}

function actualizarInfo (data) {
    name.innerHTML      = data.name
    height.innerHTML    = 'height: ' + data.height
    mass.innerHTML      = 'mass: ' + data.mass
    birthYear.innerHTML = 'birth Year:' + data.birth_year
    
    
}



        function loadpersonajes() {
            

           (function(data) {
                var ciudades = "";
                $.each(data, function(key, value) {
                   
    height.innerHTML    = value

                });
                    
            });
        }
  


button.addEventListener('click' , imprimir)