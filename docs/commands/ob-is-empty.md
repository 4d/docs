---
id: ob-is-empty
title: OB Is empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object, Object Field | -> | Structured object |
| Function result | Boolean | <- | True if object is empty or undefined, otherwise False |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is empty.Summary-->The **OB Is empty** command returns True if *object* is undefined or empty, and False if *object* is defined (initialized) and contains at least one property.<!-- END REF-->

*object* must have been created using the [C\_OBJECT](c-object.md) command or designate a 4D object field.

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