// --------------------- My Version Using jQuery ------------------------------
$(function(){
  
  var hideValue = function() {


    // allTheseValues = ["#usernameField", "#passwordField"]
    // // console.log("stop");
    // $(allTheseValues).on("focus", 
    //   function() {
    //     this.value='';
    // });
    // // try apply || call for jQuery


    $("#usernameField").on("focus", 
      function() {
        this.value='';
      });
    $("#passwordField").on("focus", 
      function() {
        this.value='';
    });

  };

  // aspply HideValue behavior onto relevant fields
  hideValue();
  


  url = "http://demo3354820.mockable.io/menu/sushi";

  var clickMenuModule = {
      getRequest: function(url){
        return function() {
            $.get(url, function(data){
              data = JSON.stringify(data);
              $("#result").html(data);
           }).fail(function(){
              console.log("Error! Get request incorrect");
           });
         };
      },
      clickHandler: function(cb) {
        $("#menuButton").on('click', cb);
      }
  };

  // using behavior
  clickMenuModule.clickHandler(clickMenuModule.getRequest(url));

});

