# StackCommerce Frontend JavaScript Challenge

## Goals

This challenge is designed to test your skills with basic JavaScript.

Please refrain from using any JavaScript framework (jQuery etc).

This challenge generally takes candidates no more than 1.5 hours to complete.

## Requirements

### Part 1: Namespaces and classes
1. Create a namespace called `SC`
1. Create a namespace called `SC.Abstract`
1. Create a class `Vehicle` inside the namespace `SC.Abstract`
1. Implement properties `name`, `seats` & `wheels`
    * Implement `getter` and `setter` methods on these properties

### Part 2: Inheritance
1. Create a namespace called `SC.Instances`
1. Create a class `Car` inside `SC.Instances` which inherits from the `Vehicle` class
1. Create a class `Motorcycle` inside `SC.Instances` which inherits from the `Vehicle` class

### Part 3: Functions
1. Write a function called `info()` which alerts the `name`, `seats` and `wheels` that the Vehicle has.

### Part 4: UI
1. Create a UI with a textbox and dropdown that let's you type in a name and choose a Vehicle type to create
1. Display the instantiated Vehicle in a list `<ul>` that shows the name
1. Create a button `Info` next to each Vehicle

### Part 5: Binding
1. Write a global function called `attach` which will take in an object, an event as a string, and a function. `attach()` should call the function on the object when that object's event gets fired.
      * e.g. implement function `attach(obj, event, fn) { … }`
2. Use the `attach()` function to attach each vehicle instance to the Info button's `onClick` event. That is, when `onClick` is fired, it should call your `info()` method on your object.

## Submission Guidelines

1. Setup a public [GitHub](https://github.com/) repository to host the JS and HTML files.
1. Create a Readme file within the repository that contains any special instructions for runnin your code. 
1. Email links to your **public GitHub** repo and **live Heroku** application to [devs@stacksocial.com](mailto:devs@stacksocial.com)
