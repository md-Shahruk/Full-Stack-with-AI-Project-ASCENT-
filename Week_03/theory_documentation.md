# Topic will be covered:
- Prototype Fundamentals
- Understanding this



## Prototype Fundamentals
```js
   A prototype is a backup object.
   When need to ask an object for something, and it doesn't have it, Js autometically checks the backup object.
``` 

### Look
```js
    const info1 = {
    fName1: "Md",
    lName1: "Shahruk"
    };

    const info2 = {
    fName2: "Lisa",
    lName2: "Anna",
    __proto__: info1
    };

    const info3 = {
    fName3: "Leo",
    lName3: "Messi",
    __proto__: info2
    };

    console.log(info3.fName1);// Md - interesting
    how?
    See, first it checks its own object not find then check __proto__: info2 which points to info2   and until find `null` its go on . This is called prototype chain.
```
### Why almost everything in Js is an Object?
```js
   
   Primitive types (like strings, numbers, and booleans) technically aren't objects. This works through a process called auto-boxing or wrapper objects.

   let name = "Shahruk";
   name.toLowerCase(); // here use dot for access

   What js does behind the scenes:
   - Temporarily wraps the primitive value in a wreapper object: new String("Shahruk");
   - This temporary object's __proto__ automatically points to String.prototype
   - The method is found in String.prototype and executed
   - After the operation completes, the wrapper object is discarded


```

### What is `prototype`? 
- Prototype is a poperty of functions/classes that serves as a blueprint for instance
```js
    function Person(name) {
    this.name = name;
    }

    Js intenally does:
    Person.prototype = {
        constructor: Person
    }

    The person function has a hidden property name `prototype`, which is an object containing a constructor property.
```
### What is `__proto__`?
- __proto__ is a property of object instances that points to the prototype they inherit from
```js
   when create an object, its __proto__ points to Object.prototype.
   When to use `new` keyword:
   let dog = new Dog("Buddy");

   - Create a new empty object: newObject = {}
   - Sets the objects __proto__: newObject.__proto__ = Dog.prototype
   - Call the constructor function with the new object:
     Dog.call(newObject, "Buddy");
   - return the object: return newObject
```

## `this` keyword 

### Implicit Binding
- When call a function using the `(.)dot` the object written before the dot becomes the value of `this` inside the function.

```js
   function greet(obj){
    obj.message =  function(){
        return `$(this.name) is (this.age) years old.`
    }
   }

   const  tutol = {
    name: 'Tutol',
    age: 7
   }

   const Tony = {
    name: 'Tony',
    age: 12
   }

   greet(tutol);
   greet(Tony);

   tutol.message(); // here this is tutol
   tony.message(); // here this is tony
```

### Explicit Binding
- Hey, use THIS object as `this` - no matter how or where the function is called.
- There are three very special methods, `call()`, `apply()`,`bind()` help us achive explicit binding.

### `call()` Method
- call() method of Function.prototype
```js
   functionName.call(thisArg, arg1, arg2, ...)
   thisArg - The object want to be `this` inside the function.
   arg1, arg2 - Optional arguments to pass to the function

   const person1 = {
    name: 'Shatil',
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
        }
    };

    const person2 = { name: 'Shahruk' };

    
    person1.greet.call(person2);  // Output: Hi, I'm Shahruk

    - person1.greet is a method, but using .call(person2), force this to be person2
```

### `apply()` Method
- Work excatly like .call(), but with one different pass argument as an array insted of one by one.
```js
   function introduce(city, country) {
        console.log(`${this.name} is from ${city}, ${country}`);
    }

    const person = { name: 'Shahruk' };

    // Using .call() - arguments one by one
    introduce.call(person, 'Dhaka', 'Bangladesh');

    // Using .apply() - arguments as an array
    introduce.apply(person, ['Dhaka', 'Bangladesh']);

    // Both output: Shahruk is from Dhaka, Bangladesh
```

### `bind()` Method
- `bind()` thats create a new Function where this is permnently set to the object, unlike call(), apply() it does not run the function immediately , its return a new function

```js
   const user = {
    name: 'Shahruk'
    };

    function sayHello(city, country) {
        console.log(`${this.name} lives in ${city}, ${country}`);
    }

    // Create a bound function
    const boundSayHello = sayHello.bind(user);

    // Call it with parameters
    boundSayHello('Dhaka', 'Bangladesh');
    // Output: Shahruk lives in Dhaka, Bangladesh  

    // Call it with different parameters
    boundSayHello('London', 'UK');
    // Output: Shahruk lives in London, UK  
```

## `Arrow Functions` bindings
- Arrow function do not have their own this, instead they inherit this from the surrounding parent scope where they are defined.
- Arrow functions don't have their own this because they don't create a new execution (this binding) context for it
```js
    const user = {
        name: 'Rahim',
        regularGreet: function() {
            console.log(this.name);  // 'this' = user object
        },
        arrowGreet: () => {
            console.log(this.name);  // 'this' = outer scope 
        }
    };

    user.regularGreet();  // Output: Rahim 
    user.arrowGreet();    // Output: undefined  (Arrow function ignores user)
```
