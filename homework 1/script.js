// Movies renting App Create a movie renting app There should be an array of movie names There should be an input and a search button When the person enters a name of a movie it should search the array If the name exists it should show an H1 element that says: "The movie can be rented" in green text If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let searchMovie = document.getElementById('movieInput');
let movieArray = ['Harry Potter', 'Wednesday', 'It', 'Fury', 'Social Network'];
let button = document.getElementById('btn');
let titleHolder = document.getElementById('container');


button.addEventListener('click', function() {
    let search = searchMovie.value
    let found = false;
    for(let i = 0; !found && i < movieArray.length; i++){
        found = search.toLowerCase() == movieArray[i].toLowerCase()
    } if(found) {
        let title = document.createElement('h1')
            titleHolder.appendChild(title)
            title.innerText = 'This movie can be rented'
            title.style.color = 'green'
            searchMovie.value = ''
    } else {
        let title = document.createElement('h1')
            titleHolder.appendChild(title)
            title.innerText = 'This movie can not be rented'
            title.style.color = 'red'
            searchMovie.value = ''
    }
})