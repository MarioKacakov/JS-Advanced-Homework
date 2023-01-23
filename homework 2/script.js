// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1



let button = document.getElementById('btn');




button.addEventListener('click', function(){
    fetch('https://swapi.dev/api/people/1')
    .then(function(res){
        console.log(res);
        return res.json()
    })
    .then(function(data){
        console.log(data);
        let firstCall = document.getElementById('first');
        let secondCall = document.getElementById('second');
        let thirdCall = document.getElementById('third');
        let fourthCall = document.getElementById('fourth');

        firstCall.innerText =  '  Height: '+ data.height
        secondCall.innerText = '  Birth Year: ' + data.birth_year
        thirdCall.innerText = '  Eye Colour: ' +data.eye_color
        fourthCall.innerText = '  Hair Colour: ' + data.hair_color
    })
})