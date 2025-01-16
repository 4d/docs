---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| Parámetros | Tipo                                                  |   | Descripción                                              |
| ---------- | ----------------------------------------------------- | - | -------------------------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection | → | Valor(es) de la collection compartida |
| Resultado  | Collection                                            | ← | New shared collection                                    |

<!-- END REF-->

#### Descripción

El comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crea una nueva colección compartida vacía o precargada<!-- END REF --> y devuelve su referencia. Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

La adición de un elemento a esta colección utilizando el operador de asignación debe estar rodeada por la estructura [`Use...End use`](../Concepts/shared.md#useend-use), de lo contrario se genera un error (esto no es necesario cuando se añaden elementos utilizando funciones como [`push()`](../API/CollectionClass.md#push) o [`map()`](../API/CollectionClass.md#map) porque activan automáticamente una estructura interna *Use...End use*). Sin embargo, es posible leer un elemento sin una estructura *Use...End use*.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../Concepts/shared.md) page.

:::

Si no se pasa ningún parámetro, `New shared collection` crea una colección compartida vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Opcionalmente, puedes precargar la nueva colección compartida pasando uno o varios *valor(es)* como parámetro(s). De lo contrario, puede añadir o modificar elementos posteriormente por asignación notación objeto (ver ejemplo).

Si el nuevo índice del elemento está más allá del último elemento existente de la colección compartida, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de los siguientes tipos soportados:

- number (real, longint...). Los valores numéricos se almacenan siempre como reales.
- text
- boolean
- date
- time (almacenado como número de milisegundos - real)
- null
- objeto compartido
- colección compartida

:::note

Esta función modifica la colección original.

:::

#### Ejemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Ver también

[New collection](new-collection.md)\
[New shared object](../commands-legacy/new-shared-object.md)\
*Shared objects and shared collections*

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1527                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
