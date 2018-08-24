//defining class
var Stark = /** @class */ (function () {
    //adding contructor
    function Stark() {
        // this.saying = "Winterfell!";
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    //however they can be implemented optionally using interfaces
    //defining static property
    Stark.castle = "Winterfell";
    return Stark;
}());
//making object
var ned = new Stark();
ned.saying = "winter is coming"; //this will give error as saying property is not defined
console.log(Stark.castle);
//calling using object
ned.hello("Abhishek");
