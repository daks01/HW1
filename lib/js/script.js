

request = new XMLHttpRequest();
request.open('GET', 'lib/js/db-movies.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    data = JSON.parse(request.responseText);
    console.log("load", responseText);
  } else {
    console.log("server -yes, but it returned an error");
  }
};

request.onerror = function() {
      console.log("connection error");
};

request.send();