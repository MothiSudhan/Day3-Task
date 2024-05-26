//TASK 3
//Use the rest countries API URL https://restcountries.com/v3.1/all and display all the countries flag,names, region, subregion,population
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].name.common);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(console.log(result[i].population));
  }
};
