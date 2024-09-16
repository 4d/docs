---
id: ob-instance-of
title: OB Instance of
displayed_sidebar: docs
---

<!--REF #_command_.OB Instance of.Syntax-->**OB Instance of** ( *object* ; *class* ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Instance of.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | -> | Object whose class is to be tested |
| class | Object | -> | Class to test belongship |
| Function result | Boolean | <- | True if object belongs to the specified class or a child class, and false otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Instance of.Summary-->The **OB Instance of** command returns true if *object* belongs to *class* or to one of its child classes, and false otherwise.<!-- END REF-->

If *class* is not a valid Class object, the error -10745 is returned.

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

 C_BOOLEAN($instance)
 

 $poly:=cs.Polygon.new(4;3)
 

 $instance:=OB Instance of($poly;cs.Polygon)

  // true
 

 $instance:=OB Instance of($poly;4D.Object)

  // true 
 

 $instance:=OB Instance of($poly;cs.Circle)

  // false
```

#### See also 
[OB Class](ob-class.md)  