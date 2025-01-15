---
id: overview
title: Acerca de las funciones clase
---

En este apartado se describen las funciones integradas en la clase 4D, así como los comandos constructores asociados. Las funciones y propiedades de clase 4D están disponibles a través de los objetos de instancia de clase.

- las funciones deben llamarse en las instancias con el operador `()`. Por ejemplo, `collection.sort()`.
- se accede a las propiedades sin paréntesis, por ejemplo `file.creationTime`. También puede utilizar la sintaxis \[], por ejemplo `file["creationTime"]`.
- pueden ejecutarse de forma independiente, con o sin parámetros. Por ejemplo `Folder(fk database folder)`.

## Convenciones de escritura

En la sintaxis de la función se utilizan las siguientes convenciones:

- los caracteres{ }`(llaves) indican parámetros opcionales. Por ejemplo,`.delete( { option : Integer } )\` significa que el parámetro *option* puede omitirse al llamar a la función.
- la notación `{ ; ...param }` indica un número ilimitado de parámetros. Por ejemplo, `.concat( value : any { ;...valueN } ) : Collection` significa que se puede pasar a la función un número ilimitado de valores de cualquier tipo.
- la palabra clave `any` se utiliza para parámetros que pueden ser de cualquier tipo que se pueda almacenar dentro de los atributos (número, texto, booleano, fecha, hora, objeto, colección...).

## Ver también

[Clases en el lenguaje 4D](../Concepts/classes.md).
