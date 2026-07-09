# Topic will be covered:
- Prototype Fundamentals



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