var n : Number = 1;

//n = 'Robb';
//this will give error as it cannot change a numerical to string

n = 123;
//This is fine

//In order to work for anything we will use "any" keyword

//var n : any = 1;

//But this is not advisable as it will kill the idea of types.

//Lets look at all the datatypes


//BOOLEAN
const isWinter : boolean = false;
// isWinter = 123;


//NUMBER
const count1 : Number = 5;


//STRING
const name1 : String = "Bran";


//ARRAYS
//Define only one kind of ARRAYS
const name2 : String[] = ["Jon", "Rickon", "Arya"];
//var names : String[] = ["Jon", "Rickon", "Arya", 5]; // will give error
//To avoid it, we have to use "any" keyword


//ENUM
enum Starks {Jon,Bran,Eddard,Catlyn};
const cat : Starks = Starks.Catlyn;

//VOID - no type generally used after function
function getName() : String{
  //return 1; //Will give error
  return "abhishek";
}

function getName1() : void{
  console.log("Winter is coming!");
}
