/*
  // Java: Given this class:

  class Automobile{
   String name;
   Integer price;
   Integer milesPerGallon;
  }

  // Implement this method:

  class AutomobileSorter{
   List<Automobile> sort(Collection<Automobile> autos, String sortBy, Boolean asc){
   }
  }
*/

// Implementing automobile class with JavaScript
var automobileClass = function() {
  this.collection = [];
};

// Write a method to quickly add new automobiles to the collection.
automobileClass.prototype.add = function(name, price, mpg) {
  var obj = {
    name: name,
    price: price,
    mpg: mpg
  };

  this.collection.push(obj);
};

// Method to properly sort the collection based on input 
automobileClass.prototype.sort = function(string, asc) {
  asc = asc || false;
  this.collection.sort(function(a,b) {
    // Handle cases where sorting by name / string
    if (string === "name" && asc) {
      return a[string] > b[string];
    } else if (string === "name" && !asc) {
      return a[string] < b[string];
    }

    // Handle cases where sorting by price / mpg / integer
    if (!asc && string !== "name") {
      return b[string] - a[string];
    } else if (asc && string !=="name") {
      return a[string] - b[string];
    }
  });

  return this.collection;
};

///////////// TESTING ///////////////

// Writing a test function to see if sorting works.
var expect = function(object) {
  var methods = {
    toEqual: function(value) {
      console.log('Expect', object, 'to equal', value, ':', value === object);
      return value === object;
    },
    toNotEqual: function(value) {
      console.log('Expect', object, 'to not equal', value, ':', value !== object);
      return value !== object;
    },
  };

  return methods;
};

// Instantiate new automobile class and add data to it.
var automobiles = new automobileClass();
automobiles.add("Luxury", 52000, 32);
automobiles.add("Sports Car", 72000, 25);
automobiles.add("Compact", 23000, 35);
automobiles.add("Sedan", 35000, 33);

// Begin testing the sort function
console.log('Sort by name ASC');
automobiles.sort("name", true);
expect(automobiles.collection[0].name).toEqual("Compact");

console.log('Sort by name DESC');
automobiles.sort("name", false);
expect(automobiles.collection[0].name).toEqual("Sports Car");
expect(automobiles.collection[3].name).toNotEqual("Luxury");

console.log('Sort by mpg ASC');
automobiles.sort("mpg", true);
expect(automobiles.collection[0].mpg).toEqual(25);

console.log('Sort by mpg DESC');
automobiles.sort("mpg", false);
expect(automobiles.collection[0].mpg).toNotEqual(25);
expect(automobiles.collection[0].mpg).toEqual(35);

console.log('Sort by price ASC');
automobiles.sort("mpg", true);
expect(automobiles.collection[0].price).toEqual(72000);