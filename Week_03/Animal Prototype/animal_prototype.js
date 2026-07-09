
function Animal(name){
    this.name =  name;
}
Animal.prototype.eat = function(){
    return `${this.name} eat.`;
}
Animal.prototype.sleep = function(){
    return `${this.name} sleep`;
}
Animal.prototype.walk = function(){
    return `${this.name} walk`; 
}

function Dog(name){
    Animal.call(this, name);
}
function Cat(name){
    Animal.call(this, name);
}
function Bird(name){
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
Cat.prototype.constructor = Cat;
Bird.prototype.constructor = Bird;


const dog = new Dog("Jojjo");
const cat = new Cat("Memmo");
const bird = new Bird("Fifo");

console.log(dog.name); 
console.log(dog.eat());
console.log(dog.constructor);

console.log(dog.eat === cat.eat);
