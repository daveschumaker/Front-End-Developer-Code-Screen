// This function returns mock data from my AJAX request
var getMockData = function() {
return {
    automobiles:[
      {"mpg":25, "price":11000, "name":"Subcompact"},
      {"mpg":16, "price":36400, "name":"Sports"},
      {"mpg":25, "price":16500, "name":"Compact"},
      {"mpg":22, "price":72000, "name":"Luxury"}
    ]
  };
};

// Sort data in descending order where data = an array of data and sortField = field to sort by.
var sortData = function(data, sortField) {
  return data.sort(function(a,b) {
    return b[sortField] - a[sortField];
  });
};

// Sort data and then display it by appending a new element to the DOM.
var displayData = function(data) {

  // This variable will hold HTML created from parsing the data array.
  // Start off the HTML with the 
  var html = "<ul>";

  // Sort data.
  var sortedArray = sortData(data.automobiles, 'mpg');

  // Iterate over contents of array and parse data into a list
  for (var i = 0; i < sortedArray.length; i++) {
    html += "<li><strong>Name:</strong> " + sortedArray[i].name + 
            " <strong>Price:</strong> " + sortedArray[i].price.toLocaleString() + 
            " <strong>MPG:</strong> " + sortedArray[i].mpg + "</li>\n";
  }

  // Close out the list
  html += "</ul>";

  // Use jQuery to update the carList div.
  $('#carList').html(html);
};

$(document).ready(function() {
  // AJAX call to handle my HTTP GET request to an example URL. Since the server won't
  // return valid data for this URL, this is going to trigger the error method. I'm going
  // to handle this error by calling the success method with mock data provided in the
  // coding challenge.
  $.ajax({
    url: "http://example.com/automobile/list",
    success: function(data) {
      // Oh, look! We received data from the server. ;)
  
      // Pass data from AJAX call to displayData function.
      displayData(data);
    },
    error: function() {
      // Normally, I'd want to build proper error handling here. For now,
      // I'm going to call the success method and provide it with mock data
      // to simulate a successful GET request from the server.
      this.success(getMockData());
    }
  });
});