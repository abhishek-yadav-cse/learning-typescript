class Person {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  dance(){
    console.log(this.name ," is dancing");
  }
}

var abhishek = new Person("abhishek");
abhishek.dance();

class AwesomePerson extends Person {
  dance(){
    console.log("So Awesome!");
    super.dance();
  }
}

var rob = new AwesomePerson("Rob");
rob.dance();
