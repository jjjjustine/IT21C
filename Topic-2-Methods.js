//Input
const Person ={
    name:"Jane Justine",
    age:19,
    occupation:"Student"
}

//Process and Output
console.log("Name: "+Person.name);
console.log("Age: "+Person.age);
console.log("Occupation: "+Person.occupation);
console.log("--------------------------------");


// Class definition
class Person1 {
    constructor(name, age, occupation, sex) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.sex = sex;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Sex: " + this.sex);
    }

}

// Creating an object (instance) of the Person class
const Person2 = new Person1('Jane Justine', 18, 'Student', 'Female');

// Calling methods
Person2.displayInfo(); 