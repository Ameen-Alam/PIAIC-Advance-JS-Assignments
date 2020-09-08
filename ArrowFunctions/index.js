
this.test = "attached to the module";

var foo = {
  test: "attached to an object"
};

// a method to create methods
foo.method = function(name, cb){
  this[name] = cb;
};

// use standard callback function and get
// the expected "this"
foo.method("bar", function(){
  // this one will be what you expected
  console.log(this.test); 
});

foo.bar(); // => "attached to an object"