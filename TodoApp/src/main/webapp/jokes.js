/**
 * 
 */
window.onload = function(e){
    this.getAllJokes();

    // let jokeBtn = document.querySelector('#save-button');
    // jokeBtn.addEventListener('click', (e)=> {
    // console.log(e);
    // console.log(e.target.value);
    // saveJoke(e.target.value);
    this.promisePractice();
// })
    
    
	
}
var table = document.querySelector("#jokeTable");
function makeTable(joke){
	
	let row = table.insertRow(0);
	let col1 = row.insertCell(0);
	let col2 = row.insertCell(1);
	
    col1.innerHTML = joke;
    // let stringJoke = `"${joke}"`
    // let oldFormat = `"${joke}"`;
    // let joke = {}
    // joke.joke = oldFormat
    let jSon = {
        "joke": joke};
    jSon = JSON.stringify(jSon);

	col2.innerHTML = `<button id="save-button" onclick='saveJoke(${jSon})' value="${joke}" class="btn btn-primary"> Save </button>`;
	
	
}


function getJoke(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random")
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status == 200){
        	console.log(xhr.responseText);
            let joke = JSON.parse(xhr.responseText).value;
            makeTable(joke);
        }
    }
}

function saveJoke(joke){
    console.log(joke);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:9007/JokeAPISearch/save");
    // let jokeSon = JSON.stringify(joke);
    // console.log(jokeSon);
    xhr.send(joke)

    xhr.onreadystatechange = function(e){
    if(xhr.readyState===4 && xhr.status === 200){
        console.log(xhr.responseText);
    }
}

}

function getAllJokes(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9007/JokeAPISearch/allJokes");
    xhr.send();

    xhr.onreadystatechange = function(e){
        if(xhr.readyState== 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }
    }
}

function promisePractice(){
    t=9;
    let p = new Promise((reject, resolve)=>{
        // if(t=10){
        //     resolve(1);
        // } else {
        //     reject(2);
        // }
        resolve(20);
    }).then((data)=>{
        console.log(data);
    });
}
