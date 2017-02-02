// --------------------- My Version Using jQuery ------------------------------
$(function(){
  
  let hideValue = function() {
    // console.log("stop");
    $("#usernameField").on("focus", 
      function() {
        this.value='';
      });
    $("#passwordField").on("focus", 
      function() {
        this.value='';
    });
  }

  hideValue();
  


  url = "http://demo3354820.mockable.io/menu/sushi";

  let clickMenuModule = {
      getRequest: function(url){
        return function() {
            $.get(url, function(data){
              data = JSON.stringify(data);
              $("#result").html(data);
           }).fail(function(){
              console.log("Error! Get request incorrect");
           });
         }
      },
      clickHandler: function(cb) {
        $("#menuButton").on('click', cb);
      }
  }

  // using behavior
  clickMenuModule.clickHandler(clickMenuModule.getRequest(url));

});

