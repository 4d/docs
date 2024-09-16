---
id: cs
title: cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> Function result<!-- END REF-->
<!--REF #_command_.cs.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | <- | Class Store containing all classes of the current database |

<!-- END REF-->

#### Description 

<!--REF #_command_.cs.Summary-->The **cs** command returns a *Class Store* object containing all user classes defined in the current database or component.<!-- END REF--> This command is necessary to instantiate an object from a user class. 

**Note:** This command works in project databases only. In binary databases, **cs** returns an empty Class Store.

#### Example 

You created the Polygon class:

```4d
  //Class: Polygon
 

 Class constructor

 C_LONGINT($1;$2)

 This.area:=$1*$2
```

Then, in a method, you can write:

```4d
 C_OBJECT($poly)

 $poly:=cs.Polygon.new(4;3)

  // {area:12}
```

#### See also 
[4D](4d.md)  
[Super](super.md)  