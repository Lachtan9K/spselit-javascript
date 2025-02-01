# Code Execution

This document is introduction to how we can write and execute code.

In the end we want to have script files as part of website. But for learning purposes we can try other options how to execute code. Properly including it in website will be topic for later.

## Contents

- Direct command execution
- Script execution
- School: What we are going to use?

## Direct command execution

We can directly write commands which are executed immediately by Javascript engine.

Via direct execution we can get response immediately without the need to save it in variable and print it out to console.

Note: executing commands in console may produce `undefined` or other unexpected result, that is property of command execution. As every command has to produce something in case of defining variable that something is nothing which will produce that `undefined` text.

### NodeJS

We can run **NodeJS** from console via:

    node

which will start interactive session. To which we can write Javascript commands and engine will execute them and return their result.

### Web browser

Same way as with NodeJS we can use browser to execute Javascript commands and get their result. This is done by using **console** in **developer options**.

## Script execution

In this way we will use **whole script file** to have it executed by Javascript engine not just single commands.

There is no return from script execution so if something needs to be printed out it has to be through function.

### NodeJS

We can pass our script file to NodeJS which will execute it.

For example if we have file named `app.js` then we can execute it via command:

    node app.js

which will start NodeJS execute given script and exits NodeJS.

### Web browser

To use browser to execute whole script files we will need to have valid website which loads them. This example is prepared in folder `01_CodeExecution_ScriptExecution_WebBrowser`. It is just a simple website which contains just a tag for a script and tag for loading script file - both are then executed.

### Playground

Other option is to use existing Javascript playgrounds:

- [Playcode.io](https://playcode.io/javascript)
- [RunJS](https://runjs.app/play)
- [JS Playground](https://www.jsplayground.dev/)
- [MDN playground](https://developer.mozilla.org/en-US/play)

These work on same principle as Web browser above where it is required to define at least basic website.

## School: What we are going to use?

- For starter we will check out all of the options.
- For one liners such as **arithmetics** or **comparison** we will use direct command execution in NodeJS.
- For basic scripts we will use script execution in NodeJS.
- For website manipulation we will use script execution in web browser.

In first few exercises and examples there will be comments which execution type is used for easier navigation.
