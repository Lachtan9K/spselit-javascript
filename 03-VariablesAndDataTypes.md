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
