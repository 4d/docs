---
id: new-shared-collection
title: New shared collection
slug: /commands/new-shared-collection
displayed_sidebar: docs
---

<!--REF #_command_.New shared collection.Syntax-->**New shared collection** {( *valor* {; *valor2* ; ... ; *valorN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.New shared collection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valor | &#x1F852; | Valor(es) de la colección compartida |
| Resultado | Collection | &#x1F850; | Nueva colección compartida |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New shared collection.Summary-->El comando **New shared collection** crea una nueva colección compartida vacía o prellenada y devuelve su referencia.<!-- END REF--> Agregar un elemento a esta colección debe estar rodeado por la estructura *Use...End use*, de lo contrario, se devuelve un error. Sin embargo, es posible leer un elemento fuera de una estructura *Use...End use*.

**Nota:** para más información sobre *colecciones compartidas*, consulte la página *Objetos y colecciones compartidos*.

Si no pasa ningún parámetro, **New shared collection** crea una colección compartida vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D declarada con el comando [C\_COLLECTION](c-collection.md).

**Nota:** tenga en cuenta que [C\_COLLECTION](c-collection.md) declara una variable de tipo [Collection](# "Array of object property values"), pero no crea una colección.

Opcionalmente, puede llenar previamente la nueva colección compartida pasando uno o varios *valores* como parámetro(s). De lo contrario, puede agregar o modificar elementos posteriormente a través de la asignación de notación de objeto (ver ejemplo).

Si el índice del nuevo elemento está más allá del último elemento existente de la colección compartida, la colección se redimensionará automáticamente y todos los nuevos elementos intermediarios obtendrán el valor **null**.

* Puede número (real, entero largo...). Los valores numéricos siempre se almacenan como reales.
* texto
* booleano
* fecha
* hora (almacenado como número de milisegundos - real)
* nulo
* objeto compartido(\*)
* colección compartida(\*)

**Nota**: a diferencia de las colecciones estándar (no compartidas), las colecciones compartidas no admiten imágenes, punteros y objetos o colecciones que no se compartan.

 (\*)Cuando un objeto compartido o colección se agrega a una colección compartida, comparten el mismo identificador de *bloqueo*. Para más información sobre este punto, consulte la sección *Identificador de bloqueo*.

#### Ejemplo 

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Ver también 

[New collection](new-collection.md)  
[New shared object](new-shared-object.md)  
*Objetos y colecciones compartidos*  