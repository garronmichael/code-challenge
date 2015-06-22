// init SC namespace
var SC = {};

// init Abstract namespace 
SC.Abstract = {};

// init Instances namespace
SC.Instances = {};


// create a Vehicle Class
SC.Abstract.Vehicle = function(name, seat, wheels) {
  // set Vehicle properties
  this.name = name;
  this.seat = seat;
  this.wheels = wheels;
}

// add get method to the Vehicle.prototype
SC.Abstract.Vehicle.prototype.get = function(property) {
  return this.property;
};

// add set method to the Vehicle.prototype
SC.Abstract.Vehicle.prototype.set = function(property, value) {
  this.property = this.value;
};

// add info method to the Vehicle.prototype
SC.Abstract.Vehicle.prototype.info = function() {
  for(key in this) {
    alert(key + ' of vehicle: ' + this.key);
  }
};

// create a Car class
SC.Instances.Car = function(name){
  // inherit Vehicle properties
  SC.Abstract.Vehicle.call(this);
  // set name
  this.name = name;
  // set wheels to 4
  this.wheels = 4;
  // set seat to 5
  this.seat = 5;
};

SC.Instances.Motorcycle = function(name){
  // inherit Vehicle properties
  SC.Abstract.Vehicle.call(this);
  // set name
  this.name = name;
  // set wheels to 2
  this.wheels = 2;
  // set seat to 2
  this.seat = 2;
};

// set Car.prototype to Vehicle.prototype with Object.create()
SC.Instances.Car.prototype = Object.create( SC.Abstract.Vehicle.prototype );
// reset Car.constructor = Car; corrects overwriting from the previous line
SC.Instances.Car.constructor = SC.Instances.Car;

// set Motorcycle.prototype to Vehicle.prototype with Object.create()
SC.Instances.Motorcycle.prototype = Object.create( SC.Abstract.Vehicle.prototype );
// reset Motorcycle.constructor = Motorcycle; corrects overwriting from previous line
SC.Instances.Motorcycle.constructor = SC.Instances.Motorcycle;

SC.addVehicleToDOM = function(form) {

  // obtain form values 
  var vehicleName = form.vehicleName.value;
  var vehicleTypeIndex = form.vehicleType.selectedIndex;
  var vehicleType = form.vehicleType.options[vehicleTypeIndex].text;

  // select the proper constructor function
  var vehicleConstructorFn = SC.Instances[vehicleType];
  // instantiate a new vehicle of the correct type
  var newVehicle = new vehicleConstructorFn(vehicleName);

  // select an existing ul element or create a new ul if none exists
  var ul = document.getElementsByTagName('ul')[0] || document.createElement('ul');

  // create an li element that contains a p and button element
  var li = document.createElement('li');
  var p = document.createElement('p');
  var button = document.createElement('button');
  button.appendChild(document.createTextNode('info'));
  p.appendChild(document.createTextNode(newVehicle.name));

  // store vehicle info in data attributes
  p.setAttribute('data-vehicle-wheels', newVehicle.wheels);
  p.setAttribute('data-vehicle-seat', newVehicle.seat);
  p.setAttribute('data-vehicle-name', newVehicle.name);

  // info will alert vehicle info
  var info = function() {
    var vehicleWheels = this.parentNode.firstChild.dataset.vehicleWheels;
    var vehicleSeats =  this.parentNode.firstChild.dataset.vehicleSeat;
    var vehicleName =  this.parentNode.firstChild.dataset.vehicleName;
    alert(vehicleName + ' has ' + vehicleSeats + ' seats and ' + vehicleWheels + ' wheels!');
  };

  // bind info function to button on click event
  attach(button, 'click', info);

  // append p and button elements to li
  li.appendChild(p);
  li.appendChild(button);
  // append li to ul
  ul.appendChild(li);
  // append ul to body; if ul already exists, no change will occur
  document.body.appendChild(ul);

  // empty vehicle name field 
  form.vehicleName.value = '';

  // prevents page refresh
  return false;
};

// global attach function
function attach(object, event, fn) {
  // will invoke fn whenever event is fired on object
  object.addEventListener(event, fn);
};