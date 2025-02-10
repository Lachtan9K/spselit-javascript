# Decisions

Without decisions the code would be too straight forward to be really useful.

## If, Else

Basic construction for deciding flow of the program. Executes blocks of commands based on condition.

Let's start with a simple example:

    //script execution

    //Can I buy this item in a shop?
    let doIHaveEnoughMoney = true;

    if (doIHaveEnoughMoney) {
        console.log("I can buy this!");
    }

    console.log("Leaving shop");

After `if` keyword we will have a condition inside of `()` and if it is evaluated to `true` then block after it **will** be executed. Otherwise it will **not**.

In case we need to execute specific code for condition evaluated to `false` we can write code in example bellow.

    //script execution

    //Can I legally drink alcohol in Czech Republic?
    const legalDrinkingAge = 18;
    let myAge = 17;

    if (myAge > legalDrinkingAge) {
        console.log("Yes, I can!");
    } else {
        console.log("No, I can't!");
    }

Which is using `else` block. Which will be executed in case of condition being evaluated to `false`. This block is optional.

And for more complicated decisions we can even daisy chain `if else` statements. Creating for example:

    //script execution

    //What highest possible fireworks category can I buy?
    let myAge = 40;
    let haveFireworksLicense = true;

    let fireworksCategory;

    if (haveFireworksLicense) {
        fireworksCategory = "F4";
    } else if (myAge >= 21) {
        fireworksCategory = "F3";
    } else if (myAge >= 18) {
        fireworksCategory = "F2";
    } else if (myAge >= 15) {
        fireworksCategory = "F1";
    } else {
        fireworksCategory = "None";
    }

    console.log("I can buy fireworks of category:", fireworksCategory);

Here we are using `else if` condition which is basically `else` block which contains new `if` statement.

Note: Daisy chaining is powerful but with many blocks it can get hard to read and maintain. I would recommend not using it for more then 5 blocks.

Note: It is good practice to always include `else` block for daisy chaining so we have certainty that execution just did not fall through. In example above we are using the `else` block for catching case when we can't buy fireworks.

## AND, OR, NOT

## Switch

## Ternary operator
