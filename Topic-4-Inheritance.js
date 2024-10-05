class Person{

    //Private Fields
    #name;
    #age;
    #occupation;
    #year;

    constructor(name, age, occupation, year){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#year = year;
    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }
    get year(){
        return this.#year;
    }
}
