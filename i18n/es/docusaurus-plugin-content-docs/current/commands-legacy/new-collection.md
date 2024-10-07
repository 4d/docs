---
id: new-collection
title: New collection
slug: /commands/new-collection
displayed_sidebar: docs
---

<!--REF #_command_.New collection.Syntax-->**New collection** {( *valor* {; *valor2* ; ... ; *valorN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.New collection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valor | Number, Text, Date, Object, Collection, Pointer | &#x1F852; | Valor de la colección |
| Resultado | Collection | &#x1F850; | Nueva colección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New collection.Summary-->El comando **New collection** crea una nueva colección vacía o prellena y devuelve su referencia.<!-- END REF--> 

Si no pasa ningún parámetro, **New collection** crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D declarada con [C\_COLLECTION](c-collection.md).

**Nota:** tenga en cuenta que [C\_COLLECTION](c-collection.md) declara una variable de tipo Colección pero no crea ninguna colección.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios *valores* como parámetro(s).

De lo contrario, puede agregar o modificar elementos posteriormente a través de la asignación de la notación de objetos. Por ejemplo:

```4d
 myCol[10]:="My new element"
```

 Si el nuevo índice de elementos está más allá del último elemento existente de la colección, la colección se redimensiona automáticamente y todos los elementos intermediarios nuevos obtienen el valor **null**. 

**Nota:** para más información sobre la notación de objetos, consulte la sección *Uso de la notación objeto*. 

Puede pasar todo número de valores de los tipo soportados (número, texto, fecha, puntero, objeto, colección...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos.

Debe prestar atención a los siguientes problemas de conversión:

* Si pasa un puntero, se mantiene como es; Se evalúa mediante el comando [JSON Stringify](json-stringify.md)
* Las fechas se almacenan en el formato de fecha "aaaa-mm-dd" o de cadena al formtao "AAAA-MM-DDTHH:mm:ss.SSSZ" en función del parámetro actual relativo al almacenamiento de fechas en objetos (ver *Página Compatibilidad*). Al convertir fechas 4D en texto, antes de almacenarlas en la colección, de forma predeterminada, el programa toma en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector Dates inside objects del comando [SET DATABASE PARAMETER](set-database-parameter.md).
* Si pasa un tiempo, se almacena como un número de milisegundos (Real).

#### Ejemplo 1 

Usted desea crear una nueva colección vacía y asignarla a una variable colección 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Ejemplo 2 

Usted desea crear una colección precargada:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Ejemplo 3 

Usted crea una nueva colección y luego agrega un nuevo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //add a 10th element with value "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

  
**Nota**: este ejemplo requiere que la notación de objeto esté activada en la base de datos (ver el párrafo *Notación objeto* ).

#### Ver también 

[C\_COLLECTION](c-collection.md)  
[New shared collection](new-shared-collection.md)  
[Type](type.md)  