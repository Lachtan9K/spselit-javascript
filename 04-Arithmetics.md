# Arithmetics

In most programs at least basic arithmetics are used.

## Arithmetic Operators

Basic arithmetic operators are:

`+` addition

`-` subtraction

`*` multiplication

`/` division

Addition ones are:

`%` modulus (division reminder)

`++` increment (same as +1)

`--` decrement (same as -1)

### Examples

    let x = 40 + 2; //42
    let y = 44 - 2; //42
    let z = 21 * 2; //42
    let q = 84 / 2; //42
    let r = 5 % 2; //1
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

### Example

    let x = 100 + 50 * 3; //250
    let y = (100 + 50) * 3; //450

## Data type arithmetics warning

Javascript allows arithmetic with other data types too. For example string if it contains digits, but it does not work correctly.

Note: In practice when data get converted from complex data structures such as JSON it may produce numbers in string. And then arithmetics will not wor as expected.

### Example

    let five = 5;
    let one = "1";
    let four = five - one; //this is really digit four
    let wrong = five + one; //this is string and wrong

## Practice
