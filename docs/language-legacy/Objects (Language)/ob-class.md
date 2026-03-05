---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *object* : Object ) : Object<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Object whose class is to be returned |
| Function result | Object | &#8592; | Class of object (null if object does not exist)|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Created|

</details>
</div>

## Description 

<!--REF #_command_.OB Class.Summary-->The **OB Class** command returns the class of the *object* passed in parameter.<!-- END REF--> In 4D, all objects inherit from the Object class. If *object* is not an existing object, **OB Class** returns null. 

## Example 

You created the Polygon class:

```4d
  //Class: Polygon
 
 Class constructor( $width : Integer ; $height : Integer)
 This.area:=$width*$height
```

Then, in a method, you can write:

```4d
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class contains Class: Polygon
```

## See also 

[OB Instance of](../commands/ob-instance-of)  

## Properties

|  |  |
| --- | --- |
| Command number | 1730 |
| Thread safe | yes |


