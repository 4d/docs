---
id: ob-is-empty
title: OB Is empty
slug: /commands/ob-is-empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | Structured object |
| Function result | Boolean | &#8592; | True if object is empty or undefined, otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is empty.Summary-->The **OB Is empty** command returns True if *object* is undefined or empty, and False if *object* is defined (initialized) and contains at least one property.<!-- END REF-->

*object* can be an object varialble or a 4D object field.

#### Example 

Here are the different results of this command as well as the [OB Is defined](ob-is-defined.md) command, depending on the context:

```4d
 var $ref : Object
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // False
 
 OB SET($ref;"name";"Susie";"age";4)
  // $ref="{"name":"Susie","age":4}"
 $empty:=OB Is empty($ref) // False
 $def:=OB Is defined($ref) // True
 
 OB REMOVE($ref;"name")
 OB REMOVE($ref;"age")
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // True
```

#### See also 

[OB Is defined](ob-is-defined.md)  