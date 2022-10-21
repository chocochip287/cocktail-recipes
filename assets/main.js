var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// empty array to house random numbers used to select cocktails from the API
var randomNumbers = [];
// variable to store the user's ingredient in global scope
var ingredientName

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
    });
}
var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");
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

function randomNumbrs() {
  console.log("Hello there!");
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
