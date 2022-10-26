// variables to target specific classes/IDs
var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");
var mainDiv = document.querySelector("#main-content");
var jokesDiv = document.querySelector("#jokes");
var searchBar = document.querySelector("#searchBar");
var header = document.querySelector("#header");
var sec2Div = document.querySelector("#section-2-div");
var ingredientDiv = document.querySelector("#ingredientDiv");
var drinkContainer = document.querySelector("#drinkContainer");
var footerEl = document.getElementById("return");
var ingNameP = document.getElementById("ingNameId");
var r1 = document.getElementById("results1");
var r1Img = document.createElement("img");
var r1NameDiv = document.createElement("div");
var r1LinkDiv = document.createElement("div");
var r1AEl = document.createElement("a");
var r2 = document.getElementById("results2");
var r2Img = document.createElement("img");
var r2NameDiv = document.createElement("div");
var r2LinkDiv = document.createElement("div");
var r2AEl = document.createElement("a");
var r3 = document.getElementById("results3");
var r3Img = document.createElement("img");
var r3NameDiv = document.createElement("div");
var r3LinkDiv = document.createElement("div");
var r3AEl = document.createElement("a");
var r4 = document.getElementById("results4");
var r4Img = document.createElement("img");
var r4NameDiv = document.createElement("div");
var r4LinkDiv = document.createElement("div");
var r4AEl = document.createElement("a");
var r5 = document.getElementById("results5");
var r5Img = document.createElement("img");
var r5NameDiv = document.createElement("div");
var r5LinkDiv = document.createElement("div");
var r5AEl = document.createElement("a");

// var historyBtn = document.querySelector(".")
//Joke paragraph
var jokePEl = document.querySelector("#jokeP");
// utility/functionality variables
// empty array to house random numbers used to select cocktails from the API
var randomNumbers = [];
// variable to store the user's ingredient in global scope
var ingredientName = "";
// establishing drinkResults in the global scope
var drinkResults;
// variable for the timer for the joke screen transition
var timeLeft = 1;
// variable to append text into the jokes div
var jokesTextDiv = document.createElement("div");

// function to ensure that the search bar isn't empty
function searchCheck() {
  ingredientName = document.getElementById("searchBar").value;
  if (ingredientName === "") {
    searchBar.setAttribute("placeholder", "You can't have a blank search!");
  }/* else if (drinkResults.drinks === undefined) {
    document.getElementById("searchBar").value = "";
    searchBar.setAttribute("placeholder", "We don't know any drinks for that ingredient. Try another!");
  }*/ else {
    getDrinks();
  }
}

// function that fetches a drink list based on the user's seached ingredient
function getDrinks() {
  var requestUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    ingredientName;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      // renderDrinks(data)
      drinkResults = data;
    });

  jokesTransition();
  addToStorage();
}

// event that triggers the search for the ingredient and also begins the transition between screens
showDrinks.addEventListener("click", searchCheck);

// event that makes the search history visible if it exists

function renderDrinks() {
  for (var i = 0; i < drinkResults.drinks.length; i++) {
    // create

    var drinkName = document.createElement("p");
    // modify

    drinkName.textContent = drinkResults.drinks[i].strDrink;

    // document.body.append(drinkName)
  }
}

// function that generates up to five numbers used to select drinks for display based on the user's search
function getRandomNumbers() {
  // clears the array in case for some reason it had old data in it
  randomNumbers = [];
  // determining how many numbers to generate based on the length of drinkData, then adding those numbers to randomNumbers
  if (drinkResults.drinks.length < 5) {
    for (i = 0; i < drinkResults.drinks.length; i++) {
      var random = Math.floor(Math.random() * drinkResults.drinks.length);
      randomNumbers.push(random);
    }
  } else {
    for (i = 0; i < 5; i++) {
      var random = Math.floor(Math.random() * drinkResults.drinks.length);
      randomNumbers.push(random);
    }
  }
}

// function to transition content from the search screen

function jokesTransition() {
  getJokes();
  // class switches to hide pre-search screen and start the timer
  mainDiv.setAttribute("class", "hide-me");
  jokesDiv.setAttribute("class", "jokes-div");
  jokesDiv.setAttribute(
    "style",
    "display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;"
  );
  jokesDiv.appendChild(jokesTextDiv);
  jokesTextDiv.textContent =
    "Loading your results in.. " + timeLeft + " seconds";
  var jokesTimer = setInterval(function () {
    if (timeLeft > 1) {
      jokesTextDiv.textContent =
        "Loading your results in.. " + timeLeft + " seconds";
      timeLeft--;
    } else if (timeLeft === 1) {
      jokesTextDiv.textContent =
        "Loading your results in.. " + timeLeft + " second";
      timeLeft--;
    } else {
      jokesTextDiv.textContent = "Your search results are..";
      resultsTransition();
      clearInterval(jokesTimer);
      // setTimeout(afterTimeout , 3000);
      afterTimeout();
    }
  }, 800);
}

function afterTimeout() {
  mainDiv.setAttribute("class", "hide-me");
  jokesDiv.setAttribute("class", "hide-me");
  jokesDiv.setAttribute("style", "display: none;");
  renderDrinks();
  renderReturnBtn();
}

// function to transition from the jokes screen to the final content
function resultsTransition() {
  // calls the random numbers function to determine the drinks to be displayed
  getRandomNumbers();
  // section #2 div becomes visible
  sec2Div.setAttribute("class", "second-section");
  ingNameP.textContent = ingredientName + "!";
  // content attribute and text setup 
  /* r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
  r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
  r1LinkDiv.textContent = "You're on your way to making a " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
  r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
  r1AEl.textContent = "here!";
  r2Img.setAttribute("src", drinkResults.drinks[randomNumbers[1]].strDrinkThumb);
  r2Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
  r2LinkDiv.textContent = "You're on your way to making a " + drinkResults.drinks[randomNumbers[1]].strDrink + "! For more info on your cocktail, click "
  r2AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
  r2AEl.textContent = "here!";
  r3Img.setAttribute("src", drinkResults.drinks[randomNumbers[2]].strDrinkThumb);
  r3Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
  r3LinkDiv.textContent = "You're on your way to making a " + drinkResults.drinks[randomNumbers[2]].strDrink + "! For more info on your cocktail, click "
  r3AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
  r3AEl.textContent = "here!";
  r4Img.setAttribute("src", drinkResults.drinks[randomNumbers[3]].strDrinkThumb);
  r4Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
  r4LinkDiv.textContent = "You're on your way to making a " + drinkResults.drinks[randomNumbers[3]].strDrink + "! For more info on your cocktail, click "
  r4AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
  r4AEl.textContent = "here!";
  r5Img.setAttribute("src", drinkResults.drinks[randomNumbers[4]].strDrinkThumb);
  r5Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[4]].strDrink + " cocktail");
  r5LinkDiv.textContent = "You're on your way to making a " + drinkResults.drinks[randomNumbers[4]].strDrink + "! For more info on your cocktail, click "
  r5AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[4]].strDrink + " cocktail");
  r5AEl.textContent = "here!"; */
  // r1Img.setAttribute("style", "margin: 5px; width: 18vh; height: 18vh;");
 // content element appends and attribute setups
  if (drinkResults.drinks.length === 1) {
    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);
    r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
    r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
    r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1AEl.textContent = " " + "here!";
  } else if (drinkResults.drinks.length === 2) {
    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);
    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);
    r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
    r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
    r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1AEl.textContent = " " + "here!";
    r2Img.setAttribute("src", drinkResults.drinks[randomNumbers[1]].strDrinkThumb);
    r2Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[1]].strDrink + "! For more info on your cocktail, click "
    r2AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2AEl.textContent = " " + "here!";
  } else if (drinkResults.drinks.length === 3) {
    r1.appendChild(r1Img);
    r1.appendChild(r1LinkDiv);
    r1LinkDiv.appendChild(r1AEl);
    r2.appendChild(r2Img);
    r2.appendChild(r2LinkDiv);
    r2LinkDiv.appendChild(r2AEl);
    r3.appendChild(r3Img);
    r3.appendChild(r3LinkDiv);
    r3LinkDiv.appendChild(r3AEl);
    r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
    r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
    r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1AEl.textContent = " " + "here!";
    r2Img.setAttribute("src", drinkResults.drinks[randomNumbers[1]].strDrinkThumb);
    r2Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[1]].strDrink + "! For more info on your cocktail, click "
    r2AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2AEl.textContent = " " + "here!";
    r3Img.setAttribute("src", drinkResults.drinks[randomNumbers[2]].strDrinkThumb);
    r3Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[2]].strDrink + "! For more info on your cocktail, click "
    r3AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3AEl.textContent = " " + "here!";
  } else if (drinkResults.drinks.length === 4) {
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
    r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
    r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
    r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1AEl.textContent = " " + "here!";
    r2Img.setAttribute("src", drinkResults.drinks[randomNumbers[1]].strDrinkThumb);
    r2Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[1]].strDrink + "! For more info on your cocktail, click "
    r2AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2AEl.textContent = " " + "here!";
    r3Img.setAttribute("src", drinkResults.drinks[randomNumbers[2]].strDrinkThumb);
    r3Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[2]].strDrink + "! For more info on your cocktail, click "
    r3AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3AEl.textContent = " " + "here!";
    r4Img.setAttribute("src", drinkResults.drinks[randomNumbers[3]].strDrinkThumb);
    r4Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
    r4LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[3]].strDrink + "! For more info on your cocktail, click "
    r4AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
    r4AEl.textContent = " " + "here!";
  } else if (drinkResults.drinks.length >= 5) {
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
    r1Img.setAttribute("src", drinkResults.drinks[randomNumbers[0]].strDrinkThumb);
    r1Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[0]].strDrink + "! For more info on your cocktail, click "
    r1AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[0]].strDrink + " cocktail");
    r1AEl.textContent = "here!";
    r2Img.setAttribute("src", drinkResults.drinks[randomNumbers[1]].strDrinkThumb);
    r2Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[1]].strDrink + "! For more info on your cocktail, click "
    r2AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[1]].strDrink + " cocktail");
    r2AEl.textContent = " " + "here!";
    r3Img.setAttribute("src", drinkResults.drinks[randomNumbers[2]].strDrinkThumb);
    r3Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[2]].strDrink + "! For more info on your cocktail, click "
    r3AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[2]].strDrink + " cocktail");
    r3AEl.textContent = " " + "here!";
    r4Img.setAttribute("src", drinkResults.drinks[randomNumbers[3]].strDrinkThumb);
    r4Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
    r4LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[3]].strDrink + "! For more info on your cocktail, click "
    r4AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[3]].strDrink + " cocktail");
    r4AEl.textContent = " " + "here!";
    r5Img.setAttribute("src", drinkResults.drinks[randomNumbers[4]].strDrinkThumb);
    r5Img.setAttribute("alt", "A " + drinkResults.drinks[randomNumbers[4]].strDrink + " cocktail");
    r5LinkDiv.textContent = "You're on your way to making the " + drinkResults.drinks[randomNumbers[4]].strDrink + "! For more info on your cocktail, click "
    r5AEl.setAttribute("href", "https://www.google.com/search?q=" + drinkResults.drinks[randomNumbers[4]].strDrink + " cocktail");
    r5AEl.textContent = " " + "here!";
  } else {
    r1.textContent = "Looks like you have no results for your ingredient. Check your spelling for potential typos or try another ingredient."
  }
}
// Second API (Project requires at least 2)

var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {});

//Function for the Jokes API
function getJokes() {
  var requestJokesUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&contains=Bar&amount=1";

  //Fetch the API
  fetch(requestJokesUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Render the Jokes
      //  renderJokes(data);
      //console.log(data.joke);
      // create elements on HTML
      var jokeName = document.createElement("p");
      // modify
      jokeName.textContent = data.joke;
      jokeName.setAttribute("style", "margin-bottom: 15px;");
      jokePEl.setAttribute("style", "margin-bottom: 10px;");
      jokePEl.appendChild(jokeName);
    });
}

// Set and empty searched ingredients Array to global
var searchedIngredientsArray = [];
// This function adds the keyword in the search bar to the local storage as a string
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

// This function renders ingredient search history on the page
function renderStorage() {
  var searchedIngredientsArray =
    JSON.parse(localStorage.getItem("searchedDrinks")) || [];

  localStorage.getItem("searchedDrinks");
  // This method clears out the buttons before adding a new string to the page
  document.getElementById("historyDiv").innerHTML = "";
  // looped the searched ingredients array to add a button for each string in the array
  for (var i = 0; i < searchedIngredientsArray.length; i++) {
    // create
    var savedIngredient = document.createElement("button");

    // modify
    savedIngredient.innerHTML = searchedIngredientsArray[i];
    savedIngredient.setAttribute("id", "historyButtons" + [i]);
    // append
    document.getElementById("historyDiv").append(savedIngredient);
  }

  // Had to do some hardcoding for this for a lack of better solution. Will try to improve later
  var button0El = document.getElementById("historyButtons4");
  var button1El = document.getElementById("historyButtons3");
  var button2El = document.getElementById("historyButtons2");
  var button3El = document.getElementById("historyButtons1");
  var button4El = document.getElementById("historyButtons0");

  if (button0El === null) {
  } else {
    button0El.addEventListener("click", transferBtn);
  }
  if (button1El === null) {
  } else {
    button1El.addEventListener("click", transferBtn);
  }
  if (button2El === null) {
  } else {
    button2El.addEventListener("click", transferBtn);
  }
  if (button3El === null) {
  } else {
    button3El.addEventListener("click", transferBtn);
  }
  if (button4El === null) {
  } else {
    button4El.addEventListener("click", transferBtn);
  }
}

function transferBtn(event) {
  document.querySelector("#searchBar").value = event.target.innerHTML;
}

function renderReturnBtn() {
  footerEl.setAttribute("class", "");
  footerEl.textContent = "Click here to return to main page";
  footerEl.addEventListener("click", returnToMain);
}

function returnToMain() {
  footerEl.setAttribute("class", "hide-me");
  mainDiv.setAttribute("class", "main-div");
  sec2Div.setAttribute("class", "hide-me");
}
// Called function in the end to execute as soon as page loads
renderStorage();
