# Arithmetics and Comparison

In most programs at least basic arithmetics are used and without comparison most of programs can't work.

## Arithmetic Operators

### Binary

Basic arithmetic operators are:

`+` addition

`-` subtraction

`*` multiplication

`/` division

Addition ones are:

`%` modulus (division reminder)

#### Examples

    let x = 40 + 2; //42
    let y = 44 - 2; //42
    let z = 21 * 2; //42
    let q = 84 / 2; //42
    let r = 5 % 2; //1

### Unary

Need only one operator.

`++` increment (same as +1)

`--` decrement (same as -1)

#### Examples

    x++ //43
    x-- //42

## Arithmetic Operator Shortcuts

Most of arithmetic operators have a shortcut which can be use to speed up a development.

Syntax for shortcut is that operator is put before `=` (equals).

### Examples

    let x = 40;
    x += 2; //40

## Operator precedence

In javascript operators have standard mathematical precedence (multiplication before addition).

Precedence can be changed by using parentheses.

### Examples

    let x = 100 + 50 * 3; //250
    let y = (100 + 50) * 3; //450

## Data type arithmetics warning

Javascript allows arithmetic with other data types too. For example string if it contains digits, but it does not work correctly.

Note: In practice when data get converted from complex data structures such as JSON it may produce numbers in string. And then arithmetics will not wor as expected. Same goes to user inputs, when user writes number to textbox it may be read as a string containing digits.

### Examples

    let five = 5;
    let one = "1";
    let four = five - one; //this is really digit four
    let wrong = five + one; //this is string and wrong

## Comparison Operators

### Equality

`===` is equal (same data types)

`==` is equal (different data types)

`!==` is not equal (same data types)

`!=` is equal (different data types)

Note: Comparison is not recommended between different data types as it may lead to unexpected behavior.

#### Examples

    let yes = 1 === 1; //true
    let no = 1 === 5; //false
    let nope = 1 == "42"; //false

### Others

`>` bigger

`>=` bigger or equal

`<` smaller

`<=` smaller or equal

#### Examples

    let myBig = 42 > 20; //true
    const inHour = 75 <= 60; //false
