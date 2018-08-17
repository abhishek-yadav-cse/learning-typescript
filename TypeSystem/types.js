var n = 1;
//n = 'Robb';
//this will give error as it cannot change a numerical to string
n = 123;
//This is fine
//In order to work for anything we will use "any" keyword
//var n : any = 1;
//But this is not advisable as it will kill the idea of types.
//Lets look at all the datatypes
//BOOLEAN
var isWinter = false;
// isWinter = 123;
//NUMBER
var count1 = 5;
//STRING
var name1 = "Bran";
//ARRAYS
//Define only one kind of ARRAYS
var name2 = ["Jon", "Rickon", "Arya"];
//var names : String[] = ["Jon", "Rickon", "Arya", 5]; // will give error
//To avoid it, we have to use "any" keyword
//ENUM
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
//VOID - no type generally used after function
function getName() {
    //return 1; //Will give error
    return "abhishek";
}
function getName1() {
    console.log("Winter is coming!");
}
