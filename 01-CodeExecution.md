# Code Execution

This document is introduction to how we can write and execute code.

In the end we want to have script files as part of website. But for learning purposes we can try other options how to execute code. Properly including it in website will be topic for later.

## Contents

- Direct command execution
- Script execution

## Direct command execution

We can directly write commands which are executed immediately by Javascript engine.

### NodeJS

We can run **NodeJS** from console via:

    node

which will start interactive session. To which we can write Javascript commands and engine will execute them and return their result.

Note: executing commands in console may produce `undefined` or other unexpected result, that is property of command execution. As every command has to produce something in case of defining variable that something is nothing which will produce that `undefined` text.

### Web browser

Same way as with NodeJS we can use browser to execute Javascript commands and get their result. This is done by using **console** in **developer options**.

## Script execution

In this way we will use **whole script file** to have it executed by Javascript engine not just single commands.

### NodeJS

We can pass our script file to NodeJS which will execute it.

For example if we have file named `app.js` then we can execute it via command:

    node app.js

which will start NodeJS execute given script and exits NodeJS.

For learning reasons we will be using this technique from start. Later we will switch to web browser as we will be manipulating a website.

### Web browser

To use browser to execute whole script files we will need to have valid website which loads them. This example is prepared in folder `01_CodeExecution_ScriptExecution_WebBrowser`. It is just a simple website which contains just a tag for a script and tag for loading script file - both are then executed.

### Playground

Other option is to use existing Javascript playgrounds:

- [Playcode.io](https://playcode.io/javascript)
- [RunJS](https://runjs.app/play)
- [JS Playground](https://www.jsplayground.dev/)
- [MDN playground](https://developer.mozilla.org/en-US/play)

These work on same principle as Web browser above where it is required to define at least basic website.
