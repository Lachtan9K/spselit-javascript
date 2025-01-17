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

