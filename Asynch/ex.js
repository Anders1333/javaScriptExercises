const URL = "https://swapi.co/api/people/";
const fetch = require('node-fetch');
var now = require("performance-now")


function fetchPerson(url){

fetch(url).then((response) => response.json()) 

}


function fetchPersons(){


  var promisesToMake = [fetchPerson(URL+3),fetchPerson(URL+4)];
 
 var promises = Promise.all(promisesToMake);
 
 promises.then(console.log("done"));

}



async function printNames() {

  var start = now()  
  console.log("Before")
  await fetchPersons();
  //const person1 = await fetchPerson(URL+1);
  //const person2 = await fetchPerson(URL+2);
  //console.log(person1.name);
  //console.log(person2.name);
  console.log("After all"); 
  var end = now()
  console.log((end-start)/1000 + " seconds")
}

printNames();

