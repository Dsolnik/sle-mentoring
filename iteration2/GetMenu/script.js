// --------------------- Using Vanilla JS ------------------------------

document.addEventListener("DOMContentLoaded", function() {

  let getMenuButtonActions = (function() {
    url = "http://demo3354820.mockable.io/menu/sushi";
    // Define getRequest
    var getRequest = function(url, cb) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function () { cb(null, xhr.response); };
      xhr.onerror = function () { cb(xhr.response); };
      xhr.send();
    };
    // Define click handler
    var clickHandler = function() {
      getRequest(url, function(err, data){
        if (err) { throw err; }
        alert(" Data load success ");
        data = JSON.stringify(data);
        // when data is retrieved update div
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = data;
      });

    };
    // append click handler to .onclick event listener
    var button = document.getElementById("menuButton");
    button.onclick = clickHandler;
  })();


});

// --------------------- My Version Using jQuery ------------------------------
$(function(){
  
  url = "http://demo3354820.mockable.io/menu/sushi";

  // define get Request
  var getRequest = function(url){
    $.get(url, function(data){
      data = JSON.stringify(data);
      alert("successful data retrieve");
      console.log(data);
      $("#result").html(data);
      alert("changed posted");
    });
  };

  // Defining behavior
  var clickHandler = function(cb) {
    $("#menuButton").on('click', cb);
  }

  clickHandler(getRequest(url));

});



// --------------------- Stevie's Version Using jQuery ------------------------------
// Make sure DOM is ready before any manipulation occurs
$(function(){

  // Defining behavior
  let myModule = {
    addClickHandler : function(cb) {
      $(".button").on('click', cb);
      console.log("addClickHandler successful");
    },
    sendGetRequest : function(url) {
      return function(){
        $.get(url, function(data){
          data = JSON.stringify(data);
          console.log(data);
        $("#result").html(data);
        alert( "Data load success");  
        });
      } 
    }
  }

  // Using Behavior
  myModule.addClickHandler(myModule.sendGetRequest("http://demo3354820.mockable.io/menu/sushi"));

});


