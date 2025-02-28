# Functions

Functions are a way how to reuse blocks of code. So we don't have to write it again.

Or a way to organize code for easier manipulation.

Note: If the purpose of function is reusability it should be either simple or universal.

## Execution

Functions are executed by **invoking** (**calling**) them. That is done by using function **name** and adding `()` (brackets) after it. If function have declared parameters, arguments for them are placed inside of `()` (brackets).

Example: Calling function `log` on **console** and providing it with one string argument with value `"Still here!"`.

    console.log("Still here!");

Note: If you invoke function by just calling it's name, without adding `()` (brackets) after it it won't be called and it will return information that it is function or in case that code is known then with full code for that function (for example in browser).

Note: Calling nonexistent function will throw error. It will produce different types of error based on if function which was called belongs to an object or not.

## Creating function

Functions can be created in 3 ways. Either via **declaration** or as an **anonymous function** or as an **arrow function**.

### Function declaration

Function created through declaration are also called named functions.

Standard syntax is:

    function functionName() {
        //code to execute
    }

After keyword `function` which defines that function will be declared. Comes `functionName` name under which the function will be available. Then follows `()` which may contain parameters (example bellow). Then between `{}` follows code block which will be executed. This function will return `undefined` when called.

Syntax with return statement (value `0`):

    function functionName() {
        //code to execute

        return 0;
    }

Only difference against example above is the `return` statement. In this case function will return `0` not `undefined`.

Syntax with parameters:

    function functionName(variableName) {
        //code to execute

        return 0;
    }

Only difference against example above is the provided variable `variableName` between `()`. Function can have more then one variable. And some of them may be optional - in that case variable will have assigned value (for example `variableName = 0`).

Note: Functions constructed in this way, can be called before they are defined, thanks to **hoisting**.

### Anonymous functions (Function expression)

TODO: example on array

### Arrow functions

TODO: example on array (upgrade anonymous function)

## Parameters vs arguments

**Parameters** and **arguments** have slightly different meaning but are mostly used interchangeably. **Parameters** are variables which are declared in function definition. **Arguments** are variables which are provided to function when it is invoked.

Note: Even professional programmers are using these two most of the time interchangeably.
