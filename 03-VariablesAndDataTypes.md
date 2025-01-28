# Variables and Data Types

Variables are one of basic building blocks of scripts. And come out in few data types.

## Variables

Variable are containers (boxes) which may contain the value.

### Example

We can define such container via:

    let myName;

This will create new empty variable with name `myName`. This is instantiation. This variable is empty if we try to print it out via:

    console.log(myName);

we will get `undefined` which literally means that value for this variable was not defined.

Now we can assign some value to it. For example name, via:

    myName = "Dice Sensei";

this will put string `Dice Sensei` inside this variable. This is assignment. We can check for it by printing it out via:

    console.log(myName);

now it will print out it's value, in this example `DiceSensei`.

## Variable names

Javascript allows using **letters**, **digits**, **underscore** in names.

Name has to **start with letter**.

Names are **case sensitive**.

It is common to use [**(lower) camel case**](https://en.wikipedia.org/wiki/Camel_case) for naming variables in Javascript.

Names can't be same as **reserved words** (language keywords).

There can't be two variable with same in same scope.

Variable names should be descriptive. Single `a` in 200 lines of script is not a good name for variable better would be `numberOfTries`.

Note: Descriptive variable names make code more readable and it will be easier to understand in shorter time. Which makes you more productive then having to guess what is going on.

## Variable access types

Javascript uses 3 access types `let` `const` and `var`. These access types define how can be variable accessed and if it can be overwritten when set and it's scope-ness.

### Let

`let` is access type which allows overwriting of value.

Can be instantiated without being assigned and it will automatically have `undefined` value.

### Const

`const` does not allows data overwriting.

Has to be assign when instantiated.

### Var

`var` is older type and it is not recommend to be used. Only reasonable usage is to support older browsers.

It is registered on global scope (on it later).

And supports variable hoisting (can be instantiated after being assigned).

School: In school we will not be using this one.

## Variable scopes

Code is separated to blocks (scopes) in which variables are available. Variables are provided to inner scopes but not outer.

This is done for a reason to not pollute space with variables as their names would clash and there is no need to have variables available indefinitely as it would eat too much of memory.

Scopes are:

- script
- class
- function
- `{ }` block

For now this is just information to keep in mind. Later in course we may return to this topic once again and look to it's implications.

### Example

```
let outer = "outer";
console.log(outer);

{
  let inner = "test";
  console.log(outer);
  console.log(inner);
}

console.log(outer);
console.log(inner); //error as innerTest is not available
```

## Data Types

Javascript has few data types which are used regularly: `string`, `number`, `boolean`, `undefined`, `object`, `null`.

And other ones which are not: `Bigint`, `Symbol`.

### string

This is just normal text of variable length and can be written either by using `''` (single quotes) looking like `Hey it is me ...` or by using `""` (double quotes) looking like `"Hey it is me ..."`.

Every project has defined which style of quotes is using if either single or double - it does not matter which just don't mix them.

In case we need to wite sentence which contains `'` or `"` same symbol as we used to write it. We will need to use `\` (backslash) to counter the internal symbols or it will generate error.

Note: Nearly all projects are using some kind of static analyzer (for example [ESlint](https://eslint.org/)) which has configuration which quotes are accepted.

School: In school we have installed [Prettier](https://prettier.io/) VS code extension which in default configuration accepts double quotes.

#### Examples

    let myName = "Dice Sensei";
    const bestSchool = "SPŠ el-it";
    const color = 'Green';
    const quotedText = "This is \"quoted\" text."

### number

Javascript in difference to other programming languages it has only one number type `64-bit floating point`.

Decimal numbers are written with `.`.

#### Examples

    let age = 29;
    const pie = 3.1415;

#### Conversion from string to number

In case we have a string which contains number (in decimal system) we can easily convert it by using function Number:

    let ten = Number("10"); //10

More on this later.

### boolean

Boolean has only two possible values/states `true` or `false`.

#### Examples

    const feelingHungry = true;
    let finishedWithWork = false;

### undefined

Special ty which defines that nothing is assigned to variable.

#### Examples

    let nothing;
    nothing = undefined;

### object

Object types is for complex data. They can be of two types **build-in** or **user defined**.

Build-in: `objects`, `arrays`, `dates`, `maps`, `sets`, `promises`, and more.

To objects we will get later as they are more complex.

### null

Special type for objects which defines that object is set to nothing. Meaning that pointer to object is not set, not variable itself.

Note: `typeof` for null is returning object instead.

#### Examples

    let car = null;
    let bestObjectEver = null;

## Changing Data Type at Runtime

Javascript is allowing to change data type of defined variable. For example we can write:

    let pie = 3.1415; //this is number
    pie = "Yumy!" //this is string

This is valid syntax and runtime execution.

Note: Changing data type can cause confusion, makes code less readable and may lead to errors.

School: In school let's not do this!

## Data types checking

We can check for data type of property via `typeof`.

### Example

    let pie = 3.1415;
    console.log(typeof pie); //this will return number

    let myName = "Dice Sensei";
    console.log(typeof myName); //this will return string

    console.log(typeof undefined); //this will return undefined
