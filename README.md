# Code Screen Example

1. Using valid HTML and CSS, create a document with a three column layout. The left column should have a width of 170px and the right column should be 200px wide. The center column should fluidly expand to fill the center, but should always be at least 350px wide. When the window or device is not large enough to hold all 3 columns, the columns should each fill the entire width of the screen, left column first, center column next and right column last. The layout should work correctly in the major browsers (Chrome, Firefox, Safari, IE9+) and in the major mobile and tablet (Android and iOS) devices.

2. Create a simple HTML document that uses JavaScript to make an asynchronous request (details below) to the server that will return a list of automobiles in JSON format. Then, display the returned cars and their properties in a list inside a <DIV> with the id “carList”. Order the cars by their mpg, descending. Do not make the request until after the page has loaded. You may use jQuery.

Request URL: example.com/automobile/list example Response:

```
{
  automobiles:[
  {“mpg”:25, “price”:11000, “name”:"Subcompact"}, {“mpg”:16, “price”:36400, “name”:"Sports"}, {“mpg”:25, “price”:16500, “name”:"Compact"}, {“mpg”:22, “price”:72000, “name”:"Luxury"}
  ] 
}
```

3. Given a Java class Automobile that you may add to:

```
class Automobile{ String name;
  Integer price;
  Integer milesPerGallon; 
}
```

Implement this method:

```
class AutomobileSorter{
  List<Automobile> sort(Collection<Automobile> autos, String sortBy, Boolean asc){
  }
}
```
where S​tring sortBy​may be one of {“name”, “price”, “milesPerGallon”}. Submit a simple Junit test showing basic correctness. Standard, readable code is important while performance is not.