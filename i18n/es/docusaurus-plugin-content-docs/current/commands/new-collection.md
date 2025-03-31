---
id: new-collection
title: Nueva colección
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->

| Parámetros | Tipo                                                                    |   | Descripción                                |
| ---------- | ----------------------------------------------------------------------- | - | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | → | Valor(es) de collection |
| Resultado  | Collection                                                              | ← | Nueva colección                            |

<!-- END REF-->

#### Descripción

El comando `New collection` <!--REF #_command_.New collection.Summary-->crea una nueva colección vacía o prellenada y devuelve su referencia.<!-- END REF--> Las colecciones pueden manejarse utilizando propiedades y funciones de la [API de la clase Collection](../API/CollectionClass.md).

Si no se pasa ningún parámetro, `New collection` crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios *valores* como parámetro(s).

De lo contrario, puede añadir o modificar elementos posteriormente por asignación. Por ejemplo:

```4d
 myCol[10]:="My new element"
```

Si el nuevo índice del elemento está más allá del último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de todos los tipos soportados (number, text, date, picture, pointer, object, collection...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos.

Debe prestar atención a los siguientes aspectos de la conversión:

- Si pasasun puntero, se mantiene "tal cual"; se evalúa utilizando el comando `JSON Stringify`
- Las fechas se almacenan como fechas "aaaa-mm-dd" o de cadenas con el formato "AAAA-MM-DDTHH:mm:ss.SSSZ", según la configuración actual "fechas dentro de los objetos" de la base de datos. Al convertir las fechas 4D en texto antes de almacenarlas en la colección, por defecto el programa tiene en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector `Dates inside objects` del comando `SET DATABASE PARAMETER`.
- Si pasa un tiempo, se almacena como un número de milisegundos (Real).

#### Ejemplo 1

Quiere crear una nueva colección vacía y asignarla a una variable colección 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Ejemplo 2

Quiere crear una colección precargada:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Ejemplo 3

Se crea una nueva colección y se añade un nuevo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //añadir un décimo elemento con valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

#### Ver también

[New shared collection](new-shared-collection.md)\
[Type](../commands-legacy/type.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1472                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
