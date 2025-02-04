# String Manipulation

String manipulation is pretty common task in web development.

[Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Declaring String

As already mentioned string is: just a normal text of variable length and can be written either by using `''` (single quotes) looking like `Hey it is me ...` or by using `""` (double quotes) looking like `"Hey it is me ..."`.

## Concatenation

In Javascript we can concatenate string with `+` (plus symbol) which will put them together. For example:

    //command / script execution
    let con = "My name is " + "Dice Sensei"; //My name is Dice Sensei
    console.log(con);

Note: This does not insert spaces between string so you need to do it yourself.

## String Template

In Javascript we can defined template string with ` `` ` (back ticks) which will allow to define string containing single quotes or double quotes inside or other symbols like new line.

So you can write for example:

```
    //command / script execution
    let pirate = `He's a pirate! And his name is "Jack Sparrow"!`;
    console.log(pirate);
```

## String Interpolation

In Javascript you can insert variable values directly to strings without need to concatenate it. This can be done only in string template by surrounding **variable** with `${}` (dollar sign and curly brackets).

So you can write for example:

    //command / script execution
    console.log(`2 + 2 = ${2 + 2}`) //2 + 2 = 4

Note: In example above this will really do the math inside of the interpolation. And it can do even more.

## New Line

For adding new line to string we can use either escape sequence `\n` in the string. For example:

    //command / script execution
    let newLineString = "And the winner is:\nJason";
    console.log(newLineString);

Or we can use enter in string literal. For example:

```
    //command / script execution
    let newLineStringLit = `Expected outcome of race is:
Michael Beckenbauer
Sawatari Kouki
Ishigami Fuujin`;
    console.log(newLineStringLit);
```

## String Functions

Javascript have many ready made functions which can be used to manipulate strings.

Note: Also there is quite few 3rd party packages which offers many more functions.

### Length

To get length of string we can use `.length` property of string. For example:

    //command / script execution
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(alphabet.length); //26

### Includes

To find out if string includes string or character there is function `.includes()` which will return boolean value.

    //command / script execution
    const sentence = "The quick brown fox jumps over the lazy dog.";
    const lookupWord = "lazy";
    console.log(`Does sentence "${sentence}" contains "${lookupWord}"? Answer is: "${sentence.includes(lookupWord)}" `);

### Substring

### Case
