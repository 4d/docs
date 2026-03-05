---
id: ob-entries
title: OB Entries
slug: /commands/ob-entries
displayed_sidebar: docs
---

<!--REF #_command_.OB Entries.Syntax-->**OB Entries** ( *object* : Object ) : Collection<!-- END REF-->
<!--REF #_command_.OB Entries.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Object to return contents |
| Function result | Collection | &#8592; | Collection of objects with key / value properties |
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

<!--REF #_command_.OB Entries.Summary-->The **OB Entries** command returns a collection of objects containing the contents of the *object* as key / value property pairs.<!-- END REF--> 

Each returned object contains the following properties:

| **Property** | **Type** | **Description**                         |
| ------------ | -------- | --------------------------------------- |
| key          | string   | enumerable property name of the object  |
| value        | variant  | enumerable property value of the object |

Only first-level property names are returned (property names of sub-objects are not returned). The order of properties within the returned collection follows the definition order of the properties.

## Example 

Using an object as an hash map (key / value system) provides a quick and direct access to data, just like when using an index (*e.g.*, if we need Mary's age, we can write: $persons\["Mary"\])

```4d
 var $individual;$persons : Object
 var $names;$ages : Collection
 
 $persons:=New object
 $persons["John"]:=42
 $persons["Andy"]:=24
 $persons["Mary"]:=30
 $persons["Paul"]:=50
 
 ALERT("The average age is "+String(OB Values($persons).average()))
 ALERT("There are "+String(OB Keys($persons).length)+" persons")
 
 $ages:=OB Entries($persons).query("value>:1";25)
 ALERT("There are "+String($ages.length)+" persons who are over 25")
 
 ALERT("Their names are: "+$ages.extract("key").join("-"))
```

## See also 

[OB Keys](../commands/ob-keys)  
[OB Values](../commands/ob-values)  

## Properties

|  |  |
| --- | --- |
| Command number | 1720 |
| Thread safe | no |


