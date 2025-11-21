// DOM references
var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");
var mainDiv = document.querySelector("#main-content");
var searchBar = document.querySelector("#searchBar");
var header = document.querySelector("#header");
var sec2Div = document.querySelector("#section-2-div");
var ingredientDiv = document.querySelector("#ingredientDiv");
var drinkContainer = document.querySelector("#drinkContainer");
var footerEl = document.getElementById("return");
var ingNameP = document.getElementById("ingNameId");
var aside = document.getElementById("aside");

var r1 = document.getElementById("results1");
var r1Img = document.createElement("img");
var r1LinkDiv = document.createElement("div");
var r1AEl = document.createElement("a");

var r2 = document.getElementById("results2");
var r2Img = document.createElement("img");
var r2LinkDiv = document.createElement("div");
var r2AEl = document.createElement("a");

var r3 = document.getElementById("results3");
var r3Img = document.createElement("img");
var r3LinkDiv = document.createElement("div");
var r3AEl = document.createElement("a");

var r4 = document.getElementById("results4");
var r4Img = document.createElement("img");
var r4LinkDiv = document.createElement("div");
var r4AEl = document.createElement("a");

var r5 = document.getElementById("results5");
var r5Img = document.createElement("img");
var r5LinkDiv = document.createElement("div");
var r5AEl = document.createElement("a");

// utility/functionality variables
var randomNumbers = [];
var ingredientName = "";
var drinkResults;

// function to ensure that the search bar isn't empty
function searchCheck() {
  ingredientName = document.getElementById("searchBar").value.trim();
  if (ingredientName === "") {
    searchBar.setAttribute("placeholder", "You can't have a blank search!");
  } else {
    getDrinks();
  }
}

// function that fetches a drink list based on the user's searched ingredient
function getDrinks() {
  var requestUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    ingredientName;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      drinkResults = data;

      // handle no results
      if (!drinkResults.drinks) {
        document.getElementById("searchBar").value = "";
        searchBar.setAttribute(
          "placeholder",
          "We don't know any drinks for that ingredient. Try another!"
        );
        return;
      }

      getRandomNumbers();
      resultsTransition();
      addToStorage();
      renderReturnBtn();
    });
}

// click event to trigger search
showDrinks.addEventListener("click", searchCheck);

// function that generates up to five numbers used to select drinks for display
function getRandomNumbers() {
  randomNumbers = [];
  var len = drinkResults.drinks.length;

  if (len < 5) {
    for (var i = 0; i < len; i++) {
      var random = Math.floor(Math.random() * len);
      randomNumbers.push(random);
    }
  } else {
    for (var j = 0; j < 5; j++) {
      var random2 = Math.floor(Math.random() * len);
      randomNumbers.push(random2);
    }
  }
}

// clears previous result content
function clearResults() {
  var results = [r1, r2, r3, r4, r5];
  results.forEach(function (el) {
    el.innerHTML = "";
  });
}

// function to transition from search screen to results
function resultsTransition() {
  clearResults();

  // show results view and hide landing
  sec2Div.setAttribute("class", "second-section");
  aside.classList.add("hide-me");

  ingNameP.textContent = ingredientName + "!";

  if (drinkResults.drinks.length === 1) {
    r1Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[0]].strDrinkThumb
    );
    r1Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail"
    );
    r1LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[0]].strDrink +
      "! For more info on your cocktail, click ";
    r1AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[0]].strDrink +
        " cocktail"
    );
    r1AEl.textContent = "here!";
    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);
  } else if (drinkResults.drinks.length === 2) {
    r1Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[0]].strDrinkThumb
    );
    r1Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail"
    );
    r1LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[0]].strDrink +
      "! For more info on your cocktail, click ";
    r1AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[0]].strDrink +
        " cocktail"
    );
    r1AEl.textContent = "here!";

    r2Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[1]].strDrinkThumb
    );
    r2Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail"
    );
    r2LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[1]].strDrink +
      "! For more info on your cocktail, click ";
    r2AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[1]].strDrink +
        " cocktail"
    );
    r2AEl.textContent = "here!";

    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);

    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);
  } else if (drinkResults.drinks.length === 3) {
    r1Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[0]].strDrinkThumb
    );
    r1Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail"
    );
    r1LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[0]].strDrink +
      "! For more info on your cocktail, click ";
    r1AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[0]].strDrink +
        " cocktail"
    );
    r1AEl.textContent = "here!";

    r2Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[1]].strDrinkThumb
    );
    r2Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail"
    );
    r2LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[1]].strDrink +
      "! For more info on your cocktail, click ";
    r2AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[1]].strDrink +
        " cocktail"
    );
    r2AEl.textContent = "here!";

    r3Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[2]].strDrinkThumb
    );
    r3Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail"
    );
    r3LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[2]].strDrink +
      "! For more info on your cocktail, click ";
    r3AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[2]].strDrink +
        " cocktail"
    );
    r3AEl.textContent = "here!";

    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);

    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);

    r3.appendChild(r3Img);
    r3.appendChild(r3LinkDiv);
    r3LinkDiv.appendChild(r3AEl);
  } else if (drinkResults.drinks.length === 4) {
    r1Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[0]].strDrinkThumb
    );
    r1Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail"
    );
    r1LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[0]].strDrink +
      "! For more info on your cocktail, click ";
    r1AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[0]].strDrink +
        " cocktail"
    );
    r1AEl.textContent = "here!";

    r2Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[1]].strDrinkThumb
    );
    r2Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail"
    );
    r2LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[1]].strDrink +
      "! For more info on your cocktail, click ";
    r2AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[1]].strDrink +
        " cocktail"
    );
    r2AEl.textContent = "here!";

    r3Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[2]].strDrinkThumb
    );
    r3Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail"
    );
    r3LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[2]].strDrink +
      "! For more info on your cocktail, click ";
    r3AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[2]].strDrink +
        " cocktail"
    );
    r3AEl.textContent = "here!";

    r4Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[3]].strDrinkThumb
    );
    r4Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail"
    );
    r4LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[3]].strDrink +
      "! For more info on your cocktail, click ";
    r4AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[3]].strDrink +
        " cocktail"
    );
    r4AEl.textContent = "here!";

    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);

    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);

    r3.appendChild(r3Img);
    r3.appendChild(r3LinkDiv);
    r3LinkDiv.appendChild(r3AEl);

    r4.appendChild(r4Img);
    r4.appendChild(r4LinkDiv);
    r4LinkDiv.appendChild(r4AEl);
  } else if (drinkResults.drinks.length >= 5) {
    r1Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[0]].strDrinkThumb
    );
    r1Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail"
    );
    r1LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[0]].strDrink +
      "! For more info on your cocktail, click ";
    r1AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[0]].strDrink +
        " cocktail"
    );
    r1AEl.textContent = "here!";

    r2Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[1]].strDrinkThumb
    );
    r2Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail"
    );
    r2LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[1]].strDrink +
      "! For more info on your cocktail, click ";
    r2AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[1]].strDrink +
        " cocktail"
    );
    r2AEl.textContent = "here!";

    r3Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[2]].strDrinkThumb
    );
    r3Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail"
    );
    r3LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[2]].strDrink +
      "! For more info on your cocktail, click ";
    r3AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[2]].strDrink +
        " cocktail"
    );
    r3AEl.textContent = "here!";

    r4Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[3]].strDrinkThumb
    );
    r4Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail"
    );
    r4LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[3]].strDrink +
      "! For more info on your cocktail, click ";
    r4AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[3]].strDrink +
        " cocktail"
    );
    r4AEl.textContent = "here!";

    r5Img.setAttribute(
      "src",
      drinkResults.drinks[randomNumbers[4]].strDrinkThumb
    );
    r5Img.setAttribute(
      "alt",
      "A " + drinkResults.drinks[randomNumbers[4]].strDrink + " cocktail"
    );
    r5LinkDiv.textContent =
      "You're on your way to making the " +
      drinkResults.drinks[randomNumbers[4]].strDrink +
      "! For more info on your cocktail, click ";
    r5AEl.setAttribute(
      "href",
      "https://www.google.com/search?q=" +
        drinkResults.drinks[randomNumbers[4]].strDrink +
        " cocktail"
    );
    r5AEl.textContent = "here!";

    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);

    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);

    r3.appendChild(r3Img);
    r3.appendChild(r3LinkDiv);
    r3LinkDiv.appendChild(r3AEl);

    r4.appendChild(r4Img);
    r4.appendChild(r4LinkDiv);
    r4LinkDiv.appendChild(r4AEl);

    r5.appendChild(r5Img);
    r5.appendChild(r5LinkDiv);
    r5LinkDiv.appendChild(r5AEl);
  } else {
    r1.textContent =
      "Looks like you have no results for your ingredient. Check your spelling for potential typos or try another ingredient.";
  }
}

// Second API (still here for project requirements)
var requestUrlList =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

fetch(requestUrlList)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {});

// ========== SEARCH HISTORY / LOCAL STORAGE ==========

var searchedIngredientsArray = [];

function addToStorage() {
  var searchedIngredient = document.querySelector("#searchBar").value;
  var searchedIngredientsArray =
    JSON.parse(localStorage.getItem("searchedDrinks")) || [];

  if (searchedIngredientsArray.length > 4) {
    searchedIngredientsArray.shift();
  }
  if (searchedIngredientsArray.includes(ingredientName) === true) {
    return;
  } else {
    searchedIngredientsArray.push(searchedIngredient);
    localStorage.setItem(
      "searchedDrinks",
      JSON.stringify(searchedIngredientsArray)
    );
    renderStorage();
  }
}

function renderStorage() {
  var searchedIngredientsArray =
    JSON.parse(localStorage.getItem("searchedDrinks")) || [];

  localStorage.getItem("searchedDrinks");
  document.getElementById("historyDiv").innerHTML = "";

  for (var i = 0; i < searchedIngredientsArray.length; i++) {
    var savedIngredient = document.createElement("button");
    savedIngredient.innerHTML = searchedIngredientsArray[i];
    savedIngredient.setAttribute("id", "historyButtons" + [i]);
    document.getElementById("historyDiv").append(savedIngredient);
  }

  var button0El = document.getElementById("historyButtons4");
  var button1El = document.getElementById("historyButtons3");
  var button2El = document.getElementById("historyButtons2");
  var button3El = document.getElementById("historyButtons1");
  var button4El = document.getElementById("historyButtons0");

  if (button0El !== null) button0El.addEventListener("click", transferBtn);
  if (button1El !== null) button1El.addEventListener("click", transferBtn);
  if (button2El !== null) button2El.addEventListener("click", transferBtn);
  if (button3El !== null) button3El.addEventListener("click", transferBtn);
  if (button4El !== null) button4El.addEventListener("click", transferBtn);
}

function transferBtn(event) {
  document.querySelector("#searchBar").value = event.target.innerHTML;
}

function renderReturnBtn() {
  footerEl.setAttribute("class", "");
  footerEl.textContent = "Return to main page";
  footerEl.addEventListener("click", returnToMain);
}

function returnToMain() {
  footerEl.setAttribute("class", "hide-me");
  aside.classList.remove("hide-me");
  mainDiv.setAttribute("class", "main-div");
  sec2Div.setAttribute("class", "hide-me");
}

// initialize history on load
renderStorage();
