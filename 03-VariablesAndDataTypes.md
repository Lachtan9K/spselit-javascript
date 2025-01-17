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

Now we can assign some value to it. For example name via:

    myName = "Dice Sensei";

this will put string `Dice Sensei` inside this variable. This is assignment. We can check for it by printing it out via:

    console.log(myName);

now it will print out it's value.

### Variable access types

Javascript uses 3 access types `let` `const` and `var`. These access types define how can be variable accessed and if it can be overwritten when set.

#### Let

`let` is access type which allows overwriting of value.

Can be instantiated without being assigned and it will automatically have `undefined` value.

#### Const

`const` does not allows data overwriting.

Has to be assign when instantiated.

#### Var

`var` is older type and it is not recommend to be used.

It is registered on global scope (on it later).

And supports variable hoisting (can be instantiated after being assigned).

School: In school we will not be using this one.

### Variable scopes
