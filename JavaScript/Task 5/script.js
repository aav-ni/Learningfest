fetch('persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
    var output = "";
    for (var i = 0; i < data.length; i++) {  
    output += 'Name: ' + data[i].name + ';  Age: ' + data[i].age + '<br>'+'<br>';
    }
    document.getElementById('data').innerHTML = output;
  })