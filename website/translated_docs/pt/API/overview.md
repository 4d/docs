---
id: visão Geral
title: Class API Overview
---

This section describes the built-in 4D class API as well as the associated constructor commands. 4D class functions and properties are available through class instance objects.

- functions must be called on instances with the () operator. For example, `collection.sort()`.

- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.

## Writing conventions

The following conventions are used in the function syntax:

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the *option* parameter may be omitted when calling the function.
- the `{ ; ...param }` notation indicates an unlimited number of parameters. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).

## Other resources

For an overall presentation of the 4D Language basics and concepts, please go to the [4D Language Concepts](Concepts/about.md) section.

For a description of the 4D "classic" language, please go to the *4D Language Reference* on [doc.4d.com](https://doc.4d.com). 



