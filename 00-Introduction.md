# Introduction

This document is introduction to Javascript.

## Contents

- What is Javascript
- Javascript categorization

## What is Javascript

Javascript is used on nearly all websites and it is what makes them interactive, what makes them feel alive.

Most common example is playing video, logging in to website, putting things in shopping cart or playing games in browser - without Javascript none of these will work.

**Javascript** is sometimes referred as **ECMAScript**. **ECMAScript** is a specification or a standard for scripting language known as **Javascript**.

## Javascript categorization

### Interpreted vs Compiled

Basic categorization is that Javascript is **scripting** language
which is **interpreted** at runtime by Javascript engine (for example **V8**).

Though this interpretation is not 100% accurate
as Javascript is using **JIT** ([just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)) which compiles script to binary so it can run faster.

### Type checking

Javascript is weakly typed system. And there is no static or runtime type checking. That means that system allows code such as:

    let x = 42 - "13"; //29

and it is valid syntax and runtime execution.

TODO: **duck typing**.
