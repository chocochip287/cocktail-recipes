// empty array to house random numbers used to select cocktails from the API
var randomNumbers = [];

// variable to store the user's ingredient in global scope
var ingredientName;

// establishing drinkResults in the global scope
var drinkResults;


// function that fetches a drink list based on the user's seached ingredient
function getDrinks() {
  ingredientName = document.getElementById("searchBar").value;
  var requestUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    ingredientName;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      renderDrinks(data)
      drinkResults = data;
    });

  addToStorage();
}

var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");

// event that triggers the search for the ingredient and also begins the transition between screens
showDrinks.addEventListener("click", getDrinks);

function renderDrinks(drinkData) {
  for (var i = 0; i < 15; i++) {
    // create

    var drinkName = document.createElement("p");
    // modify

    drinkName.textContent = drinkData.drinks[i].strDrink;
    // append (MG - commented out for now. don't want to append directly from the search)
    document.getElementById("drinkContainer").append(drinkName);
  }
}

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

var requestUrl =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&contains=Bar&amount=1";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Bar Jokes");
    console.log(data);
  });

// Set and empty searched ingredients Array to global
var searchedIngredientsArray = [];

// This function adds the keyword in the search bar to the local storage as a string
function addToStorage() {
  var searchedIngredient = document.querySelector("#searchBar").value;
  searchedIngredientsArray.push(searchedIngredient);
  localStorage.setItem(
    "searchedDrinks",
    JSON.stringify(searchedIngredientsArray)
  );

  renderStorage();
}

// This function renders ingredient search history on the page
function renderStorage() {
  var searchedIngredientsArray = JSON.parse(localStorage.getItem("searchedDrinks")) || [];
    localStorage.getItem("searchedDrinks")


  // This method clears out the buttons before adding a new string to the page
  document.getElementById("placeholderHistory").innerHTML = "";

  // looped the searched ingredients array to add a button for each string in the array
  for (var i = 0; i < searchedIngredientsArray.length; i++) {
    // create
    var savedIngredient = document.createElement("button");
    // modify
    savedIngredient.innerHTML = searchedIngredientsArray[i];
    savedIngredient.setAttribute("class", "historyButtons");
    // append
    document.getElementById("placeholderHistory").append(savedIngredient);
  }
}

// Called function in the end to execute as soon as page loads
renderStorage();
