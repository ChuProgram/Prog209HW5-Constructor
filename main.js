// array to add new movies
let movieArray = [];


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("movieTitle").focus();

    document.getElementById("addMovie").addEventListener("click", newMovie);
    document.getElementById("showMovies").addEventListener("click", displayMovies);
});


let newMovie = function() {
    // calling constructor
    let movie = new Movie(
        document.getElementById("movieTitle").value,
        document.getElementById("movieRating").value 
    );

    if (!movie.isValid()) {
        alert("Please fill in the TITLE and choose the RATING between 1 - 5");
    }
    else {
        movieArray.push(movie);      
        console.log(movieArray);  
    }
    // clear text field
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieRating").value = "blank";

    document.getElementById("movieTitle").focus();
};

let displayMovies = function() {

    // clear all list when user clicks "Show Movies" button
    document.getElementById("movieList").innerHTML = "";

    // create "unordered list" element 
    let ul = document.createElement('ul');

    // convert "movieList" section into unordered list
    document.getElementById("movieList").appendChild(ul);

    // sort array by ranking
    movieArray.sort(function(a, b){return b.rating - a.rating});

    for (let i in movieArray) {             
        let li = document.createElement('li');  // create "list" element   
        ul.appendChild(li);                     // add list to unordered list
        li.innerHTML = movieArray[i].GetAll();  // display string output
    }
    
}