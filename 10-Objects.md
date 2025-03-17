# Objects

Object is a collection of related data and functionality. Usually consisting of **properties** (variables inside object) and **methods** (functions inside objects).

## Creating objects

Object can be created in many ways. Most common are using an **object initializer**, using **a constructor function**, using **`Object.create()` function**, **from class**.

### Object initializer

Object can be created by assigning `{}` to variable. This will produce an **empty object**.

Standard syntax for empty object:

    const myObj = {};

Instead of creating an empty object we can instead add values to it at initiation. Format for adding is `propertyName: propertyValue,`; Where `propertyName` is a name of the property and `propertyValue` is a value of the property. Last symbol is `,` which is required to separate different properties (not required after last).

Objects may contain other objects as properties.

Note: Adding `,` even to last item is good practice. As when adding new items later it will produce cleaner **git diffs**. And for example prettier extensions and other static analyzers are adding it automatically.

Example creating person:

    //script execution

    const person = {
        firstName: "John",
        lastName: "Smith",
        age: 30,
        introduceYourself: function () {
            console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
        },
    };

    console.log(person);
    person.introduceYourself();
