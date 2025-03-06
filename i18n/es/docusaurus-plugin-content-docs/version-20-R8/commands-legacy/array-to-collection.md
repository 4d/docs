---
id: array-to-collection
title: ARRAY TO COLLECTION
slug: /commands/array-to-collection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO COLLECTION.Syntax-->**ARRAY TO COLLECTION**  ( *coleccion* ; *array* {; *nombreProp*}{; *array2* ; *nombreProp2* ; ... ; *arrayN* ; *nombrePropN*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO COLLECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| coleccion | Collection | &#8592; | Colección a recibir los datos del array |
| array | Array | &#8594;  | Array a copiar a la colección; si se pasó nombreProp, array a copiar a los valores de nombreProp en la colección. |
| nombreProp | Text | &#8594;  | Nombre de la propiedad del objeto cuyo valor llenar con elementos del array |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY TO COLLECTION.Summary-->El comando **ARRAY TO COLLECTION**  copia uno o más *array*(s) en los elementos o los valores de *nombreProp* de la *coleccion*.<!-- END REF-->  
  
Este comando puede funcionar con una *coleccion* que contiene valores o una *coleccion*  que contiene objetos, en cuyo caso los parámetros *nombreProp* son obligatorios.

* Si omite el parámetro *nombreProp*, tel comando copia todos los elementos del *array* a la *coleccion*. Si la *coleccion* no estaba vacía, los elementos existentes se reemplazan y se agregan nuevos elementos si el tamaño del *array* es mayor que la longitud de la *coleccion*. Después de que se ejecuta el comando, la longitud de la *coleccion* es idéntica al tamaño del *array*.
* Si pasa uno o más parámetros *nombreProp*, el comando crea o reemplaza objetos como elementos de *coleccion*. Cada objeto se completa con una propiedad cuyo nombre se ofrece en el parámetro *nombreProp*, y cuyo valor es el elemento de array correspondiente. Si la *coleccion* no estaba vacía, los elementos existentes se reemplazan y se agregan nuevos elementos si el tamaño del *array* es mayor que la colección. Después de que se ejecuta el comando, la longitud de la *coleccion* es la misma que el tamaño del array más grande.

#### Ejemplo 1 

Desea copiar un array de texto en una colección:

```4d
 var $colFruits : Collection
 $colFruits:=New collection
 ARRAY TEXT($artFruits;4)
 $artFruits{1}:="Orange"
 $artFruits{2}:="Banana"
 $artFruits{3}:="Apple"
 $artFruits{4}:="Grape"
 ARRAY TO COLLECTION($colFruits;$artFruits)
  //$colFruits[0]="Orange"
  //$colFruits[1]="Banana"
  //...
```

#### Ejemplo 2 

Desea copiar valores de campo en una colección de objetos por medio de arrays:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($artCity;0)
 ARRAY LONGINT($arLZipCode;0)
 SELECTION TO ARRAY([Customer]City;$artCity)
 SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)
 ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")
  //$col[0]={"cityName":"Cleveland","Zip":35049}
  //$col[1]={"cityName":"Blountsville","Zip":35031}
  //...
```

#### Ejemplo 3 

Desea copiar una array texto en una colección compartida:

```4d
 ARRAY TEXT($at;1)
 
 APPEND TO ARRAY($at;"Apple")
 APPEND TO ARRAY($at;"Orange")
 APPEND TO ARRAY($at;"Grape")
 
 var $sharedCol : Collection
 $sharedCol:=New shared collection
 
 Use($sharedCol)
    ARRAY TO COLLECTION($sharedCol;$at)
 End use
```

#### Ver también 

[COLLECTION TO ARRAY](collection-to-array.md)  
*Conversiones de tipo entre las colecciones y los arrays 4D*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1563 |
| Hilo seguro | &check; |


