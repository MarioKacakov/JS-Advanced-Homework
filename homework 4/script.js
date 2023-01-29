// Task 1

// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2

// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

// Task 1

// Create html element
// Create script
// Connect html with script
// In html create empty table and a btn - Get planets (on click on btn you get the first 10 planets) *in the table, make headers with the names of the data: Name, Climate, Gravity, Population *every row should be filled with data from the objects
//In script 5. create function that will make an ajax call to the api url with page=1 //this function will return an array of objects (array of planets) 6. manipulate the array of planets and show the needed data in the table

// Task 2

// After the user clicks the Get Planets btn and the table with data is loaded, show a new btn 'Next 10'
// On click on 'Next 10' make a new ajax call with api url page=2
// When you get next 10 planets, data in table should be changed
// Next 10 btn should disapear and Previous 10 btn should appear *steps 2, 3, 4 should happen at the same time
// On click on 'Previous 10' show first 10 planets



let button = document.getElementById('btn');
let nextPage = document.getElementById('btn2');
let previousPage = document.getElementById('btn3')
let thname = document.getElementById('name');
let thclimate = document.getElementById('climate');
let thgravity = document.getElementById('gravity');
let thpopulation = document.getElementById('population');

button.addEventListener('click', () => {
    //First Page
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(function(res) {
        return res.json()
    })
    .then(function(data){
        console.log(data);
        // Planet Name
        for(let i = 0; i < data.results.length; i++) {
            let planetName = document.createElement('td');
            planetName.innerText = i + 1 + '. ' + data.results[i].name + '  ';
            planetName.style.border = '1px solid black'
        thname.appendChild(planetName)
        }
        // Planet Climate
        for(let i = 0; i < data.results.length; i++) {
            let planetClimate = document.createElement('td');
            planetClimate.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].climate + '  ';
            planetClimate.style.border = '1px solid black'
            thclimate.appendChild(planetClimate)
        }
        // Planet Gravity
        for(let i = 0; i < data.results.length; i++) {
            let planetGravity = document.createElement('td');
            planetGravity.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].gravity + '  ';
            planetGravity.style.border = '1px solid black'
            thgravity.appendChild(planetGravity)
        }
        // Planet Popilation
        for(let i = 0; i < data.results.length; i++) {
            let planetPopulation = document.createElement('td');
            planetPopulation.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].population + '  ';
            planetPopulation.style.border = '1px solid black'
            thpopulation.appendChild(planetPopulation)
        }
        button.style.display = 'none';
        nextPage.style.display = '';
    })

    // Next Page
    nextPage.addEventListener('click', () => {
        thname.innerHTML = '';
        thclimate.innerHTML = '';
        thgravity.innerHTML = '';
        thpopulation.innerHTML = '';


        fetch('https://swapi.dev/api/planets/?page=2')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data);
            // Planet Name
            for(let i = 0; i < data.results.length; i++) {
                let planetName = document.createElement('td');
                planetName.innerText = i + 1 + '. ' + data.results[i].name + '  ';
                planetName.style.border = '1px solid black'
            thname.appendChild(planetName)
            }
            // Planet Climate
            for(let i = 0; i < data.results.length; i++) {
                let planetClimate = document.createElement('td');
                planetClimate.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].climate + '  ';
                planetClimate.style.border = '1px solid black'
                thclimate.appendChild(planetClimate)
            }
            // Planet Gravity
            for(let i = 0; i < data.results.length; i++) {
                let planetGravity = document.createElement('td');
                planetGravity.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].gravity + '  ';
                planetGravity.style.border = '1px solid black'
                thgravity.appendChild(planetGravity)
            }
            // Planet Popilation
            for(let i = 0; i < data.results.length; i++) {
                let planetPopulation = document.createElement('td');
                planetPopulation.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].population + '  ';
                planetPopulation.style.border = '1px solid black'
                thpopulation.appendChild(planetPopulation)
            }
            nextPage.style.display = 'none';
            previousPage.style.display = '';
        })


    })

         //Previous page
         previousPage.addEventListener('click', () => {
            thname.innerHTML = '';
            thclimate.innerHTML = '';
            thgravity.innerHTML = '';
            thpopulation.innerHTML = '';
    
    
            fetch('https://swapi.dev/api/planets/?page=1')
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);
                // Planet Name
                for(let i = 0; i < data.results.length; i++) {
                    let planetName = document.createElement('td');
                    planetName.innerText = i + 1 + '. ' + data.results[i].name + '  ';
                    planetName.style.border = '1px solid black'
                thname.appendChild(planetName)
                }
                // Planet Climate
                for(let i = 0; i < data.results.length; i++) {
                    let planetClimate = document.createElement('td');
                    planetClimate.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].climate + '  ';
                    planetClimate.style.border = '1px solid black'
                    thclimate.appendChild(planetClimate)
                }
                // Planet Gravity
                for(let i = 0; i < data.results.length; i++) {
                    let planetGravity = document.createElement('td');
                    planetGravity.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].gravity + '  ';
                    planetGravity.style.border = '1px solid black'
                    thgravity.appendChild(planetGravity)
                }
                // Planet Popilation
                for(let i = 0; i < data.results.length; i++) {
                    let planetPopulation = document.createElement('td');
                    planetPopulation.innerText = i + 1 + '. ' + data.results[i].name + ' - ' + data.results[i].population + '  ';
                    planetPopulation.style.border = '1px solid black'
                    thpopulation.appendChild(planetPopulation)
                }
                nextPage.style.display = '';
                previousPage.style.display = 'none';
            })
        })

})