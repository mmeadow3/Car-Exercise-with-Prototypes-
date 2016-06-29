"use strict";
/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date();
  this.tires = []; //////need this for the later tire chain
}
  
/*
  Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car
Make.prototype = new Car ();

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the general Make function.
  3. It must have one argument that will to hold the model name.
  4. The constructor must define a property to hold the model name.
 */
function Kia (name) {
  this.modelName = name;
}
Kia.prototype = new Make("Kia");

// var Soreneto = new Kia("Soreneto");      ///////////just a quick test/////
// console.log("Soreneto", Soreneto);

/*
    1. Create a constructor function named after your favorite car model.
    2. It must inherit from the specific make type you created in previous step.
    3. When creating the inheritance relationship, pass in the model name
       to the make constructor function
*/
function Soreneto (num) {
  this.plateNum = num;
}
Soreneto.prototype = new Kia("Soreneto");

var mySuv = new Soreneto();
console.log("mySuv", mySuv)

//////////////////////////////////////////////////////
//////////////Tires prototype chain/////////////////////
////////////////////////////////////////////////////////
function Tire() {
  this.shape = "round"
}

function Manufacturer () {
  this.name = null;
}
Manufacturer.prototype = new Tire();


function tireType(type, name) {
  // Manufacturer.call(this, name) ///////////////Call function////////////
  this.type = type;
  this.PSI = 0;
  this.radius = 0;
  this.name = name;
}
tireType.prototype = new Manufacturer();
///////define methods outside of the main function////////
tireType.prototype.setPSI = function(num) { ///////////this is a setter function///////
  this.PSI = num;
}

var racing1 = new tireType("racing");
var racing2 = new tireType("racing");
var snowTire1 = new tireType("snow");
var snowTire2 = new tireType("snow");

mySuv.tires.push(racing1);   ///////pushes to array set in original Car function
console.log("mySuv", mySuv)

mySuv.tires[0].PSI = 33;   //////change the PSI of a tire
var mySuv = new Soreneto("5555-5555")
// console.log("mySuv", mySuv) 
var mySuv = new Kia("Rio");
var defTires = new tireType("Slick", "perelli")
mySuv.tires.push(defTires); ////pushes to car tires array and will put it inside the object
console.log("mySuv", mySuv)    //////////after passing argument to line 47 function




