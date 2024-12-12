---
id: collection-to-array
title: COLLECTION TO ARRAY
slug: /commands/collection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.COLLECTION TO ARRAY.Syntax-->**COLLECTION TO ARRAY** ( *collection* ; *array* {; *propertyName*}{; *array2* ; *propertyName2* ; ... ; *arrayN* ; *propertyNameN*} )<!-- END REF-->
<!--REF #_command_.COLLECTION TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| collection | Collection | &#8594;  | Collection to copy in array(s) |
| array | Array | &#8592; | Array to receive the elements of the collection; if propertyName passed, array to receive the values of propertyName in the collection |
| propertyName | Text | &#8594;  | Object property name whose values to copy in array ("" for all elements) |

<!-- END REF-->

#### Description 

<!--REF #_command_.COLLECTION TO ARRAY.Summary-->The **COLLECTION TO ARRAY** command fills one or more *array*(s) with elements or *propertyName* values from the *collection* into the *array*(s).<!-- END REF-->

This command can work with a *collection* that contains values or a *collection* that contains objects, in which case the *propertyName* parameter(s) are mandatory. 

* If you omit the *propertyName* parameter, the command copies all *collection* elements to *array*. After the command is executed, the size of *array* is identical to the *collection* length.
* If you pass one or more *propertyName*(s) parameter, *collection* must be a collection of objects (other elements are ignored). In this case, each *propertyName* parameter indicates the name of a property within each object of the collection whose value(s) you want to copy in the corresponding *array*. You can pass any *propertyName* / *array* pairs you want, mixing array types. After the command is executed, each size of *array* is identical to the *collection* length.

In all cases, 4D converts the collection elements or values according to the type of *array* (if necessary). Conversion rules are detailed in the *Type conversions between collections and 4D arrays* page.

#### Example 1 

You want to copy a collection of strings in a text array:

```4d
 var $fruits : Collection
 $fruits:=New collection("Orange";"Banana";"Apple";"Grape")
 ARRAY TEXT($artFruits;0)
 COLLECTION TO ARRAY($fruits;$artFruits)
  //$artFruits{1}="Orange"
  //$artFruits{2}="Banana"
  //...
```

#### Example 2 

You want to copy different property values from a collection of objects in different arrays:

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

#### See also 

[ARRAY TO COLLECTION](array-to-collection.md)  
*Type conversions between collections and 4D arrays*  