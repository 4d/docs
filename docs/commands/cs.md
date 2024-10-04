---
id: cs
title: cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> Object<!-- END REF-->
<!--REF #_command_.cs.Params-->
| Parameter | Type |  | Description |
|---|---|---|---|
| classStore | Object | &#x1F850; | User class store for the project or component |

<!-- END REF-->

#### Description 

The `cs` command <!-- REF #_command_.cs.Summary -->returns the user class store for the current project or component<!-- END REF -->. It returns all user classes [defined](../Concepts/class.md#class-definition) in the opened project or component. By default, only [ORDA classes](../ORDA/ordaClasses.md) are available.


#### Example 

You created the Polygon class:

```4d
  //Class: Polygon
 
 Class constructor($a: Integer;$b : Integer)
 This.area:=$a*$b
```

Then, in a method, you can write:

```4d
 var $poly : Object
 $poly:=cs.Polygon.new(4;3)
  // {area:12}
```

#### See also 

[4D](4d.md)  
[Super](super.md)  
