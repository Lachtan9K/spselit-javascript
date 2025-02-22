# Loops

Loops can be used to execute same code multiple times or. Either to do same thing or similar thing thanks to change in variable values.

There are two distinct ways how to loop either till something happens for that we have **while** construct or loop X number of times for that we have **for** construct.

## While

While loop is most universal loop available in Javascript. It can be used in any situation requiring looping, though other loops may be better suited.

Main usage of while loop is do something until something happens.

Standard while loop syntax looks like:

    while (condition) {
        // code to run

        //update condition or break
    }

`while` keyword defines we will be using **while** loop. `condition` is either bool variable or expression resulting in bool value. Which defines if code inside of loop should be executed.

Every loop needs to have a way to update values used in `condition` so that loop can exit. Or it needs to have direct exit via `break` statement.

There is simple example: We have test which can be passed when score is more than 90 points, every test score is given on random (between 0 and 100 points) and we want to know how many tries it took. Given that this is using random it will produce different values every time. This variant is using setting **loop condition** to `false` to exit loop.

    // script execution

    // returns random integer between 0 and max (exclusive)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const requiredPointsToSucceed = 90;

    let passed = false;
    let tries = 0;

    while (!passed) {
        tries++;

        const points = getRandomInt(101);

        console.log(`Try ${tries}: ${points} points`);

        if (points >= requiredPointsToSucceed) {
            passed = true;
        }
    }

    console.log(`You passed after ${tries} tries congratulation!`);

Variant of script from above which is using `break` statement to exit loop.

    // script execution

    // returns random integer between 0 and max (exclusive)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const requiredPointsToSucceed = 90;

    let tries = 0;

    while (true) {
        tries++;

        const points = getRandomInt(101);

        console.log(`Try ${tries}: ${points} points`);

        if (points >= requiredPointsToSucceed) {
            break;
        }
    }

    console.log(`You passed after ${tries} tries congratulation!`);

### Do while variant

Is specialized variant which ensures that code is executed at least once before condition is checked.

Rewritten example from above as do-while.

    // script execution

    // returns random integer between 0 and max (exclusive)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // do-while loop
    const requiredPointsToSucceed = 90;

    let passed = false;
    let tries = 0;

    do {
        tries++;

        const points = getRandomInt(101);

        console.log(`Try ${tries}: ${points} points`);

        if (points >= requiredPointsToSucceed) {
            passed = true;
        }
    } while (!passed);

    console.log(`You passed after ${tries} tries congratulation!`);

## For

For loop is loop which is used mostly in situations when we know how many times we need to execute it.

Standard for loop syntax looks like:

    for (initializer; condition; final-expression) {
        // code to run
    }

`for` keyword defines we will be using **for** loop. Different parts of loop definition are separated by `;` (semicolon) and are optional. `initializer` is mostly number type variable defining how many times loop already run it is called **counter variable**. `condition` expression resulting in bool value which defines if loop should run. `final-expression` is always evaluated when loop finishes iteration and is used to update **counter variable**.

There is simple example: We need to grade all test.

    // script execution

    // returns random integer between 0 and max (exclusive)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // for loop
    const testToGrade = 26;

    for (let i = 0; i < testToGrade; i++) {
        console.log("Test graded, points:", getRandomInt(101));
    }

    console.log("All test have been graded!");

## Looping through collections

### For..of

### Map

### Filter
