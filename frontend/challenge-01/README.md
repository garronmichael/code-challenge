# StackSocial Frontend JavaScript Challenge

### Part 1: Namespaces and classes
1. Create a namespace called “SC”
2. Create a namespace called “SC.Abstract”
3. Create a class “Vehicle” inside the namespace “SC.Abstract”
4. Implement properties “name”
    * Implement these properties as getName() and setName() methods
5. Implement properties “seats” and “wheels” for the “Vehicle” class
    * Implement these using the get and set keywords

### Part 2: Inheritance
1. Create a namespace called “SC.Instances”
2. Create a class “Car” inside “SC.Instances” which inherits from the “Vehicle” class
3. Create a class “Motorcycle” inside “SC.Instances” which inherits from the “Vehicle” class

### Part 3: Functions
1. Write a function called “info” which alerts the name, number of seats and wheels that the vehicle has.

### Part 4: UI
1. Create a UI with a textbox and dropdown that let’s you type in a name and choose a vehicle type to create
2. Display the instantiated vehicle in a list `<ul>` that shows the name
3. Create a button "info" next to each vehicle

### Part 5: Binding
1. Write a global function called “attach” which will take in an object, an event as a string, and a function. attach() should call the function on the object when that object’s event gets fired.
      * e.g. implement function attach(obj, event, fn) { … }
2. Use the attach() function to attach each vehicle instance to the “info” button’s onClick event. That is, when onClick is fired, it should call your info() method on your object.

### Browser Requirements:
* Chrome
* Firefox
* Safari 7+
* Internet Explorer 10+

Please refrain from using javascript frameworks, javascript compilers (e.g. coffeescript), or CSS frameworks.