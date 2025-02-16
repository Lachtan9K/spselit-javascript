# Collections

Collections of data can be either index based ordered, iterable and data accessible by index like **array**. Or key based ordered and iterable by index, but data are accessible by key like **map** and **set**.

Collections are **not primitive data types** but are **build-in objects**.

Collections can hold **different data types** at same time.

Note: Just because collections can hold different data types it does not mean it is good idea to mix data in it.

## Array

[Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Ordered list of values that is accessed by index.

### Construction

Array can be created in many different ways:

    //command / script execution

    const fruits = new Array("apple", "banana", "cherry");
    const numbers = Array(1, 2, 3, 4, 5);
    const carManufacturers = ["Toyota", "Honda", "Ford", "Chevrolet"];
    const weather = Array.of("sunny", "rain", "apocalypse");

    console.log(fruits);

This will create an array with provided values and length of number of provided values.

It is also possible to create empty array and just define it's length. This is useful if we know how many items it will have but we don't know them yet.

    //command / script execution

    const emptyArray1 = new Array(42);
    const emptyArray2 = Array(42);

    const emptyArray3 = [];
    emptyArray3.length = 42;

    console.log(emptyArray1);

In all cases above provided value of length has to be **number** without decimal places.

### Elements manipulation

Array elements are accessed via index (starting from 0). We can read them modify them.

    //command / script execution
    //using arrays from above
    console.log(fruits[0]);

    fruits[0] = "pear";

    console.log(fruits[0]);

Add new one by setting next index to value. Either by knowing next number or using length value.

    //command / script execution
    //using arrays from above
    fruits[3] = "kiwi"; //adding new one

    console.log(fruits);

And removing them.

    //command / script execution
    //using arrays from above
    fruits[3] = undefined; //only sets value to undefined

    fruits.length = 3; //shortens the array (removing place itself)

    console.log(fruits);

### Functions

There is lots of functions which can be used with arrays. Basic ones are:

- `concat()`
- `push()`
- `pop()`
- `slice()`
- `reverse()`
- `sort()`

## Map

[Map documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Map is a list of **key-value pairs**. And keys have to be **unique**. It is not serializable.

Map can be manipulated only via calling functions on it.

### Construction

Map is always created empty. And can be constructed only via:

    //command / script execution

    // map - pizza menu with prices

    const pizzaMenu = new Map();

### Functions

Map values can be **added** via function `set()`:

    //command / script execution
    //using map from above

    pizzaMenu.set("Margherita", 200);
    pizzaMenu.set("Pepperoni", 250);
    pizzaMenu.set("Hawaiian", 280);

Map values can be **get** via function `get()`, this will return **only the value** not key-value pair.

    //command / script execution
    //using map from above

    console.log("What is the price of Margherita?", pizzaMenu.get("Margherita"));

We can **check** for existence of **key** via function `has()` function:

    //command / script execution
    //using map from above

    console.log("Pizza menu contains Hawaiian?", pizzaMenu.has("Hawaiian"));
    console.log("Pizza menu contains Quattro Formaggi?", pizzaMenu.has("Quattro Formaggi"));

We can **check size** of map via property `size`:

    //command / script execution
    //using map from above

    console.log("Number of items in pizza menu:", pizzaMenu.size);

And **remove items** from map via function `delete()`:

    //command / script execution
    //using map from above

    pizzaMenu.delete("Hawaiian");

    console.log(pizzaMenu);

Or **remove everything** from map via function `clear()`:

    //command / script execution
    //using map from above

    pizzaMenu.clear();

    console.log(pizzaMenu);

## Set

[Set documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Set is a list of **unique values**.

Set can be manipulated only via calling functions on it.

### Construction

Set is always created empty. And can be constructed only via:

    //command / script execution

    // set - music styles

    const musicStyles = new Set();

### Functions

Set values can be **added** via function `add()`:

    //command / script execution
    //using set from above

    musicStyles.add("Rock");
    musicStyles.add("Pop");
    musicStyles.add("Rap");

We can **check** for existence of **value** via function `has()` function:

    //command / script execution
    //using set from above

    console.log("Does music styles contains Rap?", musicStyles.has("Rap"));
    console.log("Does music styles contains Jazz?", musicStyles.has("Jazz"));

We can **check size** of set via property `size`:

    //command / script execution
    //using set from above

    console.log("Number of items in music styles:", musicStyles.size);

And **remove items** from set via function `delete()`:

    //command / script execution
    //using set from above

    musicStyles.delete("Rap");

    console.log(musicStyles);

Or **remove everything** from set via function `clear()`:

    //command / script execution
    //using set from above

    musicStyles.clear();

    console.log(musicStyles);
