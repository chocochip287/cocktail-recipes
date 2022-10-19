// Drink recipes (Listed by first letter) API call

// Open index.html , open dev tools then check console tab to look at API data

// Change last letter of Url to get a list of Cocktail names that start with that letter
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for(var i = 0 ; i < lowerCase.length ; i++){
var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+lowerCase[i] ; // <------- change last letter to get different cocktails


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for( var i = 0; i < data.length ; i++){
    
    }
    

    
    // localStorage.setItem("Drinks" , data.drinks[0].strDrink)
  })};

// We also have the Urls to :
//search drink by name, 
//search ingredient by name , 
//Lookup full cocktail details by id, 
//Lookup ingredient by ID




// Second API (Project requires at least 2)

// var requestUrl = 'https://{Url}';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Github Repo Issues \n----------');
//     console.log(data);
//     for( var i = 0; i < data.length ; i++){
    
//     }console.log(data[i])
  
    
//   });
