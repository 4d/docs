---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *object* : Object ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Object to return property names |
| Function result | Collection | &#8592; | Collection of property names (strings) |
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

<!--REF #_command_.OB Keys.Summary-->The **OB Keys** command returns a collection of strings containing all of the enumerable property names of the *object*.<!-- END REF--> 

Only first-level property names are returned (property names of sub-objects are not returned). The order of names within the returned collection follows the definition order of the properties.

## Example 

You want a collection with all first-level property names of an object:

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Keys($person)
 
  //$col[0]="lastName"
  //$col[1]="firstName"
  //$col[2]="children"
```

## See also 

[OB Entries](../commands/ob-entries)  
[OB Values](../commands/ob-values)  

## Properties

|  |  |
| --- | --- |
| Command number | 1719 |
| Thread safe | no |


