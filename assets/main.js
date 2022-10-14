// Drink recipes (Alphabetic order) API call

var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for( var i = 0; i < data.length ; i++){
    
    }console.log(data[i])
    
  });

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
