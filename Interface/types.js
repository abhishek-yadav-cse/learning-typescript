//printname
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Abhishek" });
printName({ label: "Yadav" }); //on running typescript there is no error
//however when we run js file
//we need to give a blue print of the type of the object we need to use
//we will use Interface
printName({ name: "Yadav" });
