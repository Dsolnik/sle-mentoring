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

    result.innerText = data.responseText; //display the result in an HTML element
}, function(status) { //error detection....
  alert('Something went wrong.');
});



