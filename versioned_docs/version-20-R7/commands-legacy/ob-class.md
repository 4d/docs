---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *object* ) : any<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Object whose class is to be returned |
| Function result | Null, Object | &#8592; | Class of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Class.Summary-->The **OB Class** command returns the class of the *object* passed in parameter.<!-- END REF--> In 4D, all objects inherit from the Object class. If *object* is not an existing object, **OB Class** returns null. 

#### Example 

You created the Polygon class:

```4d
  //Class: Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Then, in a method, you can write:

```4d
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class contains Class: Polygon
```

#### See also 

[OB Instance of](ob-instance-of.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1730 |
| Thread safe | &check; |
| Forbidden on the server ||


