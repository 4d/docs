---
id: ob-values
title: OB Values
slug: /commands/ob-values
displayed_sidebar: docs
---

<!--REF #_command_.OB Values.Syntax-->**OB Values** ( *object* : Object ) : Collection<!-- END REF-->
<!--REF #_command_.OB Values.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Object to return property values |
| Function result | Collection | &#8592; | Collection of property values (variant) |
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

<!--REF #_command_.OB Values.Summary-->The **OB Values** command returns a collection of variants containing all of the enumerable property values of the *object*.<!-- END REF--> 

The order of values within the returned collection follows the definition order of the properties.

## Example 

You want a collection with all property values of an object:

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Values($person)
 
  //$col[0]="Smith"
  //$col[1]="Jenny"
  //$col[2]={"Mary":12,"Mark":8}
```

## See also 

[OB Entries](../commands/ob-entries)  
[OB Keys](../commands/ob-keys)  

## Properties

|  |  |
| --- | --- |
| Command number | 1718 |
| Thread safe | no |


