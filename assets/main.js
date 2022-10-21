// empty array to house random numbers used to select cocktails from the API
var randomNumbers = [];

// variable to store the user's ingredient in global scope
var ingredientName;

// establishing drinkResults in the global scope
var drinkResults;

// function that fetches a drink list based on the user's seached ingredient
function getDrinks() {
  ingredientName = document.getElementById("searchBar").value
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientName;


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      renderDrinks(data)
      drinkResults = data;
    });
}

var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");

// event that triggers the search for the ingredient and also begins the transition between screens
showDrinks.addEventListener("click", getDrinks);

function renderDrinks(drinkData) {
  console.log({drinkData})
  for(var i = 0 ; i < 15 ; i++){
  // create
  
  var drinkName = document.createElement("p")
  // modify

  drinkName.textContent = drinkData.drinks[i].strDrink;
  // append (MG - commented out for now. don't want to append directly from the search)
  // document.getElementById('drinkContainer').append(drinkName)
}}

// function that generates up to five numbers used to select drinks for display based on the user's search
function getRandomNumbers() {
  // clears the array in case for some reason it had old data in it
  randomNumbers = [];
  // determining how many numbers to generate based on the length of drinkData, then adding those numbers to randomNumbers
  if (drinkResults.drinks.length < 5) {
    for (i=0; i < drinkData.length; i++) {
      var random = Math.floor(Math.random() * drinkResults.drinks.length);
      randomNumbers.push(random);
    }
  } 
  else {
    for (i=0; i < 5; i++) {
      var random = Math.floor(Math.random() * drinkResults.drinks.length);
      randomNumbers.push(random);
      }
    }
  }

// Second API (Project requires at least 2)

var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("List of ingredients");
    console.log(data);
  });
