---
id: overview
title: Acerca de las funciones clase
---

En este apartado se describen las funciones integradas en la clase 4D, así como los comandos constructores asociados. Las funciones y propiedades de clase 4D están disponibles a través de los objetos de instancia de clase.

- functions must be called on instances with the `()` operator. For example, `collection.sort()`.
- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.
- pueden ejecutarse de forma independiente, con o sin parámetros. For example `Folder(fk database folder)`.

## Convenciones de escritura

En la sintaxis de la función se utilizan las siguientes convenciones:

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the _option_ parameter may be omitted when calling the function.
- the `{ ; ...param }` notation indicates an unlimited number of parameters. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).
