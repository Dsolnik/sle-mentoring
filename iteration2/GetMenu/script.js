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
