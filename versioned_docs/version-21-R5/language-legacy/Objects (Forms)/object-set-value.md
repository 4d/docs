---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *objectName* : Text ; *value* : any )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectName | Text | &#8594;  | Object name |
| value | any | &#8594;  | New value for the form object's data source |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Created|

</details>
</div>

## Description

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** sets the *value* of the current data source for the form object(s) designated by the *objectName* parameter.<!-- END REF-->

In the *objectName* parameter, pass the name of a form object (a string). You can set the value of multiple form objects by using the wildcard character (“@”).

The *value* parameter allows you pass a new value (any type) for the form object's data source.

**Note**: If the data source is a non-assignable expression, **OBJECT SET VALUE** does nothing. For more information, see *assignable vs non-assignable expressions*.

## Example 

You want to get the data source value for a form object, get its name, and set a new value:

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current)) //verify the set value
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10) //find the form object name and set the value to 50
```

## See also 

[OBJECT Get value](../commands/object-get-value)  

## Properties

|  |  |
| --- | --- |
| Command number | 1742 |
| Thread safe | no |


