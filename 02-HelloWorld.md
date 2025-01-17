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
