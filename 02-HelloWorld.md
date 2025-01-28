# Hello World

Writing out "Hello world!" (in default output) is gimmick to start programming in new language. Let's try it out.

Simply write:

    console.log("Hello world!");

Now let's go through what happened and why is given command looking like that.

## Default output

Javascript respectively every engine which is executing Javascript has default output - **console**. To which we can write text from script.

Note: Other languages may also have a default input. For example in C++ console app console works as input too.

## Console

Console is accessible through all scripts via `console` and can be used to print out text or text value of variables.

To print out something from console we can use `log()` function. This one is used most of the time.

Other options are functions like `error()` or `warn()` but there are used specifically for informing that there is some problem.

Note: It is good practice to limit what get printed out to console in production version of the app. As it may cause confusion or it can be considered security risk.

### Examples

```
console.log("Hello world!");
console.log("Now it is my time to shine!");
console.log("Information 1", "Information 2");
```

## String

Simple string as a text of variable length can be written in Javascript in two main ways either via `''` (single quotes) looking like `Hey it is me ...` or `""` (double quotes) looking like `"Hey it is me ..."`. They have same meaning and function and both are valid.

More on this later...

## Semicolon at end

Semicolons for Javascript are optional as Javascript is using
ASI (Automatic Semicolon Insertion) this mechanic will insert them (not physically) when code is parsed, before being executed.

Ruleset defining when semicolons are automatically inserted does not cover all possible code constructions and semicolons in some places need to be put in manually to produce valid code or it may lead to unexpected behavior.

Note: Same as with single/double quotes projects have rules which option is used. Also this is quite discussed topic on internet and developers are quite opinionated about it.

Personal: So am I! In all my personal projects and these that I technically lead I require use of semicolons. As it feel easier to read.

School: In school usage of semicolons is required!

## Comments

Javascript as many other languages allows comments in source code. Two styles are allowed single line and multiline.

### Single line comments

    // This is a comment

### Multiline

```
/*
This is multiline comment
And this is second line in multiline comment - obviously
*/
```
