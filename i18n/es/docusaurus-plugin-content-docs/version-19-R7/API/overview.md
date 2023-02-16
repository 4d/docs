---
id: overview
title: Generalidades - API de clases
---

Esta sección describe la API de las clases 4D integradas, así como los comandos de constructor asociados. Las funciones y propiedades de clase 4D están disponibles a través de los objetos de instancia de clase.

- las funciones deben llamarse en las instancias con el operador (). Por ejemplo, `collection.sort()`.

- se accede a las propiedades sin paréntesis, por ejemplo `file.creationTime`. También puede utilizar la sintaxis \[], por ejemplo `file["creationTime"]`.

## Convenciones de escritura

En la sintaxis de la función se utilizan las siguientes convenciones:

- los caracteres `{ }` indican los parámetros opcionales. Por ejemplo, `.delete( { option : Integer } )` significa que el parámetro *option* puede omitirse al llamar a la función.
- la notación `{ ; ...param }` indica un número ilimitado de parámetros. Por ejemplo, `.concat( value : any { ;...valueN } ) : Collection` significa que se puede pasar a la función un número ilimitado de valores de cualquier tipo.
- la palabra clave `any` se utiliza para parámetros que pueden ser de cualquier tipo que se pueda almacenar dentro de los atributos (número, texto, booleano, fecha, hora, objeto, colección...).

## Otros recursos

Para una presentación general de los fundamentos y conceptos del lenguaje 4D, por favor consulte la sección [Conceptos de Lenguaje 4D](Concepts/about.md).

Para una descripción del lenguaje "clásico" de 4D, por favor consulte el manual de *Lenguaje 4D* en [doc.4d.com](https://doc.4d.com). 



