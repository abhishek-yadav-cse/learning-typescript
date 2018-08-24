//defining class
class Stark {
  name: string;
  saying: string; //class properties cannot be implimented optionally,
  //however they can be implemented optionally using interfaces

  //defining static property
  static castle: string = "Winterfell"

  //adding contructor
  constructor(){
    // this.saying = "Winterfell!";
    this.saying = Stark.castle;
  }

  hello(person:string){
    console.log("Hello, " + person);
  }
}

//making object
var ned = new Stark();

ned.saying = "winter is coming"; //this will give error as saying property is not defined


console.log(Stark.castle);


//calling using object
ned.hello("Abhishek");
