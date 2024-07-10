---
id: overview
title: Acerca de las funciones clase
---

En este apartado se describen las funciones integradas en la clase 4D, así como los comandos constructores asociados. Las funciones y propiedades de clase 4D están disponibles a través de los objetos de instancia de clase.

- las funciones deben llamarse en las instancias con el operador `()`. Por ejemplo, `collection.sort()`.
- properties are accessed without parentheses, for example `file.creationTime`. También puede utilizar la sintaxis \[], por ejemplo `file["creationTime"]`.
- pueden ejecutarse de forma independiente, con o sin parámetros. Por ejemplo `Folder(fk database folder)`.

## Convenciones de escritura

En la sintaxis de la función se utilizan las siguientes convenciones:

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the *option* parameter may be omitted when calling the function.
- la notación `{ ; ...param }` indica un número ilimitado de parámetros. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).
