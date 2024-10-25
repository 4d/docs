---
id: collection-to-array
title: COLLECTION TO ARRAY
slug: /commands/collection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.COLLECTION TO ARRAY.Syntax-->**COLLECTION TO ARRAY** ( *coleccion* ; *array* {; *nombreProp*}{; *array2* ; *nombreProp2* ; ... ; *arrayN* ; *nombrePropN*} )<!-- END REF-->
<!--REF #_command_.COLLECTION TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| coleccion | Collection | &#8594;  | Colección a copiar en array(s) |
| array | Array | &#8592; | Array para recibir los elementos de la colección; si se pasó nombreProp, array para recibir los valores de nombreProp en la colección |
| nombreProp | Text | &#8594;  | Nombre de la propiedad del objeto cuyos valores copiar en array ("" para todos los elementos) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COLLECTION TO ARRAY.Summary-->El comando **COLLECTION TO ARRAY** llena una o más *array*(s) con elementos o valores de *nombreProp* de la *coleccion* en *array*(s).<!-- END REF-->

Este comando puede funcionar con una *coleccion* que contiene valores o una *coleccion* que contiene objetos, en cuyo caso los parámetros *nombreProp* son obligatorios.

* Si omite el parámetro *nombreProp*, el comando copia todos los elementos de *coleccion* a *array*. Después de que se ejecuta el comando, el tamaño de *array* es idéntico a la longitud de la *coleccion*.
* Si pasa uno o más parámetros *nombreProp*(s), *coleccion* debe ser una colección de objetos (se ignoran otros elementos). En este caso, cada parámetro *nombreProp* indica el nombre de una propiedad dentro de cada objeto de la colección cuyos valores desea copiar en el *array* correspondiente. Puede pasar todo par *nombreProp* / *array*, combinando tipos de array. Después de que se ejecuta el comando, cada tamaño de *array* es idéntico a la longitud de *coleccion*.

En todos los casos, 4D convierte los elementos o valores de la colección de acuerdo al tipo de *array* (si es necesario). Las reglas de conversión se detallan en la página *Conversiones de tipo entre las colecciones y los arrays 4D*.

#### Ejemplo 1 

Desea copiar una colección de cadenas en un array de texto:

```4d
 var $fruits : Collection
 $fruits:=New collection("Orange";"Banana";"Apple";"Grape")
 ARRAY TEXT($artFruits;0)
 COLLECTION TO ARRAY($fruits;$artFruits)
  //$artFruits{1}="Orange"
  //$artFruits{2}="Banana"
  //...
```

#### Ejemplo 2 

Desea copiar diferentes valores de propiedad de una colección de objetos en diferentes arrays:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($city;0)
 ARRAY LONGINT($zipCode;0)
 $col.push(New object("name";"Cleveland";"zc";35049))
 $col.push(New object("name";"Blountsville";"zc";35031))
 $col.push(New object("name";"Adger";"zc";35006))
 $col.push(New object("name";"Clanton";"zc";35046))
 $col.push(New object("name";"Shelby";"zc";35143))
 
 COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")
  //$city{1}="Cleveland", $zipCode{1}=35049
  //$city{2}="Blountsville", $zipCode{2}=35031
  //...
```

#### Ver también 

[ARRAY TO COLLECTION ](array-to-collection.md)  
*Conversiones de tipo entre las colecciones y los arrays 4D*  