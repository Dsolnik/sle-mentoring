var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response); 
      } else {
        reject(status); 
      }
    };
    xhr.send(null);
  });
};

//Add Event Handler to the Button Click
//Event: Button Click
//Function: getJSON
//if jquery
$("#example").on('click', getJSON("http://demo3354820.mockable.io/menu/sushi"));

getJSON("http://demo3354820.mockable.io/menu/sushi").then(function(data) {
    alert('Your Json result is:  ' + data.responseText); //you can comment this, i used it to debug
// Using jQuery

//When content has finished lodaing, execute this lambda function
$(function() {
  //Lets look for html with a class with .button and then attach an event handler
  $(".button").on("click", function(e) {
    //On click, we dont want default behavior of the browser
    e.preventDefault();
    //Sending a get request to url, after you get data...
    $.get("http://demo3354820.mockable.io/menu/sushi", function(data, textStatus, jqXHR){
      //getting html with .result as the class, then replacing it with data return
      data = JSON.stringify(data);
      console.log(data);
      // accessing the #result div and appending the html into it
      $("#result").html(data);//text(data.menu["Dragon Roll"]);
      alert( "Data load successful");
    });
    //
  });
});
