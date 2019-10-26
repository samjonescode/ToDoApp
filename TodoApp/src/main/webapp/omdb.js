/**
 * 
 */

let apiKey = `e6cb0f0c`;
let searchTerm = document.querySelector('#movieTitle');
let omdbUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=`;

let movieTable = document.querySelector('#movieTable');
//let movies = document.querySelectorAll(".list-group-item");
//console.log(movies);
//movies.addEventListener('click', (event)=>{
//	getMovies(event.target.value)
//})
// let searchTerm = document.querySelector('#movieSearchInput');
function logItBiotch(){
    console.log(event.target.value);
}
function getMovies(title){
    let movieTitle = searchTerm.value;

    //if no search was entered, then the clicked list item will be the search term.
    if(movieTitle == ""){
        movieTitle = title;
    }

    //fetch the movie from the omdb url, concat the movieTitle to the end of the url.
    fetch(omdbUrl + movieTitle)
    .then((response)=>{
        if(response.status != 200){
            console.log("Oh snap! Something happened. " + response.status);
            console.log(response)
        }

        response.json().then((data)=>{
            console.log(data);
            let button = `<button class="btn btn-success" onClick=logItBiotch() value="${title}"> Save`;
            let row = movieTable.insertRow(0); //insert a row at the top of the table

            let col0 = row.insertCell(0); //insert a cell/column 
            col0.innerHTML = data.Title; // write the data to the column using innerHTML

            let col1 = row.insertCell(1);
            col1.innerHTML = data.Language;

            let col2 = row.insertCell(2);
            col2.innerHTML = data.Plot;

            let col3 = row.insertCell(3);
            col3.innerHTML = data.Actors;

            let col4 = row.insertCell(4);
            col4.innerHTML = data.Year;

            let col5 = row.insertCell(5);
            col5.innerHTML = button;
        })

    })
}

function clearTable(){
    movieTable.innerHTML = ""; // clear the table
}

//import { unirest } from "unirest";

//var req = unirest("GET", "https://webknox-jokes.p.rapidapi.com/jokes/search");
//
//req.query({
//	"category": "Chuck Norris",
//	"minRating": "5",
//	"numJokes": "5",
//	"keywords": "kick, hard"
//});
//
//req.headers({
//	"x-rapidapi-host": "webknox-jokes.p.rapidapi.com",
//	"x-rapidapi-key": "aaeb08a705msh72924bfc590565dp150f87jsnccbd1fa850fe"
//});
//
//
//req.end(function (res) {
//	if (res.error) throw new Error(res.error);
//
//	console.log(res.body);
//});

function getJokes(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random")
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status == 200){
            console.log(JSON.parse(xhr.responseText).value);
        }
    }
}
getJokes()