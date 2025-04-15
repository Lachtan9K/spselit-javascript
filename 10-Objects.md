# Objects

Object is a collection of related data and functionality. Usually consisting of **properties** (variables inside object) and **methods** (functions inside objects).

## Creating objects

Object can be created in many ways. Most common are using an **object initializer**, using a **constructor function**, using **`Object.create()` method**, **from class**.

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

### Construction function

Object can be created by defining constructor function and then instancing it via `new` keyword.

Example creating person (same as above) via construction function:

    //script execution

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.introduceYourself = function () {
            console.log("It is me Ma...", "Ehm I am " + this.firstName + " " + this.lastName);
        };
    }

    const person = new Person("John", "Smith", 30);

We defined **function** _Person_ (convention is to use capital letter for construction functions). This function may have defined params which will pass provided arguments to object properties. Every property requires use of `this` keyword to get value properly passed (more on this later). Then object is constructed via adding `new` keyword before standard **function invocation**.

## Accessing object properties

Object properties can be accessed, changed, added, or even removed. How to get them can be done in two ways via **dot** or **bracket** notation.

School: In school we will use primary **dot** notation.

Note: Property removal is done via `delete` keyword. And it is not recommended.

Note: Adding properties to object should be done in same order as system is creating templates for it in background. This is important for optimization as even if objects has same properties but were added in different order then they use different template.

### Via dot notation

Object properties are accessed via `.` (dot) - so called **dot nation**.

Example:

    console.log(person.firstName);
    person.introduceYourself();

### Via bracket notation

Object properties are also accessible via **bracket notation**.

Example:

    console.log(person["firstName"]);
    person["introduceYourself"]();

Note: This can be used for manipulating dynamically added properties.

### Via destructuring

In case we need to access subset of properties of an object we can create local variables for them via [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) the object.

Example:

    //script execution

    const vehicle = {
        color: "red",
        type: "car",
        currentSpeed: 50,
        topSpeed: 200,
    };

    function printSpeedInformation(vehicle) {
        const { currentSpeed, topSpeed } = vehicle;
        const speedPercentage = (currentSpeed / topSpeed) * 100;

        console.log("Current speed: " + currentSpeed);
        console.log("Top speed: " + topSpeed);
        console.log("Speed percentage: " + speedPercentage + "%");
    }

Destructuring is done in `const { currentSpeed, topSpeed } = vehicle;` where we create variables `currentSpeed` and `topSpeed` and fill them with values from properties of same name from `vehicle` object.

Destructuring can also be used on **arrays**.

## Copying objects

Coping objects is not same as copying primitive data types. Because of **pass by sharing** (described in 09-Functions.md).

For that reason using construction:

    // script execution

    const myObject = {};
    const sameObject = myObject;

Will create **one** object in memory with variables `myObject` and `sameObject` pointing to it.

To copy object without inner objects we can use `...` (3x dot) spread operator. Spread operator has many usages as described in it's [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

Example of spread copying object:

    // script execution

    const myObject = {};
    const newObject = { ...myObject};

Will create **two** same objects in memory with variables `myObject` and `newObject` each pointing to the different one. Beware this works correctly only if there is no object inside as if there was one both new objects would share it.

Another option to copy objects is via JSON:

    // script execution

    const myObject = {};
    const newObject = JSON.parse(JSON.stringify(myObject));

Will create **two** same objects in memory with variables `myObject` and `newObject` each pointing to different one. This copies object with any depth (does not matter how many objects are nested).

Note: Copying big objects (with many properties) or with big depth requires quite a lot of resources (CPU time and memory) and should be avoided.

## Equality

Correctly assessing equality on objects is hard as engine supports only **"pointer" equality** - both variables are pointing to same object in memory. If we want to know if two different objects are equal with meaning that they have same properties and their values we have to handle that ourself.

One option is using `JSON.stringify()` to convert objects to string representation and use standard equality on them. This unfortunately **does not work** in case that objects has **different order** of properties.

Other option (and best) is to use `_.isEqual` function from [Lodash](https://lodash.com/docs/4.17.15#isEqual). Which does deep comparison and works without limitations.

![image](https://github.com/user-attachments/assets/28aee1ac-4305-45db-9400-462083e3b470)


## this keyword

Effectively working with objects requires understanding of `this` keyword and how it behaves. This whole topic is complicated so only required part will be shared.

When keyword `this` is used inside of an object it allow access to properties and methods of given object.

Example creating person (same as above):

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

Keyword `this` is used inside of `introduceYourself` method to access `firstName` and `lastName` properties of given object. So we can reuse existing values.

Keyword `this` always points to an object. Object which will be supplied for `this` depends on **how was function invoked**, **not where it is defined**. If function is **defined** via _function declaration_ and it is invoked, then `this` points to an object to who invoked function. For example method `introduceYourself` is invoked by calling `person.introduceYourself()` which means that `person` object calls `introduceYourself` for that reason `person` is supplied for `this`.

In case that `this` is used outside of an object or function was not bind it will point to _global object_. Note: In strict mode `undefined` would be returned instead.

## Often used objects

Here is list of often used object:

- Map
- Set
- Array
- Date
- Global object

### Date

[Date documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Build in object which represent date and time with timezone handling. Contains bunch of methods for date and time manipulation.

Date is represented as number of **milliseconds** from start of epoch which is January 1, 1970, UTC, start of day (same as UNIX epoch).

Date object can be created by calling `new Date()` then it will contain **current date**. Or by passing formatted date string as parameter to that constructor or by passing multiple parameters representing year, month and so on - to create specific date.

Example of date creation:

    console.log(new Date().toString());
    console.log(new Date("2025-04-14T20:00").toString());
    console.log(new Date(2025, 3, 14, 20).toString()); //beware month is 0 based index

Working with date is difficult because of timezone handling.

#### Usage

Date is mostly used in three forms as a date object for manipulation, representation, as milliseconds for comparison or as "date string" for data transfer.

To get milliseconds we can use function `Date.now()` or when we already have existing date object we can use method `.getTime()`. Comparison is done on milliseconds as it is easy mathematic equation.

Note: Comparing two date objects on equality will result in **not equal** as it comparing objects itself not just their content.

Best way to create "date string" is by calling `.toISOString()` as it will create string based on ISO 8601 format.

### Global object

Global object is special type of an object which may be supplied for `this` (Note: only in non-strict mode). Or it can be accessed via it's name from anywhere in script.

It may be a different object base on implementation of engine. For the **web browser** it is a _window_ object for the **NodeJS** it is a _global_ object.

#### Window

Represents the window (tab) in which script is running.

It can be used to manipulate content of website (`document` object), url, data storage, partially even browser itself. More on this practically.
