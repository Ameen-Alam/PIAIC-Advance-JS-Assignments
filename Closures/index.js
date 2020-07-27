// -----------------------------------------
// ----------------------------------------
//  Example


function buildCounter(i) {
    var counter = i;
    var displayCounter = function() {
        console.log(counter++);
        counter++;
    };
    return displayCounter;
}

var myCounter = buildCounter(1);
myCounter(); // 1    // display i=1, conter=3
myCounter(); // 3    // display i=3, conter=5
myCounter(); // 5    // display i=5, conter=7

// new closure - new outer scope - new contor variable
var myOtherCounter = buildCounter(10);
myOtherCounter(); // 10
myOtherCounter(); // 12

// myContor was not affected
myCounter(); // 7

// -----------------------------------------
// ----------------------------------------
//  Example


function initializeData() {
    var myVar = 1;
    return {
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
            myVar = v;
        }
    };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string



// -----------------------------------------
// ----------------------------------------
//  Example


function calculator(){
    let total = Number()

    function add(a, b){
        total += a + b
        console.log(total)
    }
    function sub(a, b){
        total += a - b
        console.log(total)
    }
    function mul(a, b){
        total += a * b
        console.log(total)
    }
    function div(a, b){
        total += a / b
        console.log(total)
    }

    return{
        add,
        sub,
        mul,
        div,
    }

}

let calc = calculator()

calc.add(2, 2)  // 4, total=4
calc.sub(1, 5)  // 0, total=0
calc.mul(2, 15) // 30, total=30
calc.mul(2, 2)  // 34, total=34
calc.div(2, 2)  // 35, total=35


// -----------------------------------------
// ----------------------------------------
//  Example


var multThenAdd = num => {
    return mul => add => {
       return num * mul + add
    }
 }

 var timesTwoPlusFour = (num) => multThenAdd(num)(2)(4)

console.log( timesTwoPlusFour(1) ); //> 6
console.log( timesTwoPlusFour(10) ); //> 24


 // -----------------------------------------
// ----------------------------------------
//  Example
