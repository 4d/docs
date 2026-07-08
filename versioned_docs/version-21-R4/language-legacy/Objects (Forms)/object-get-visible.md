---
id: object-get-visible
title: OBJECT Get visible
slug: /commands/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( * ; *object* : Text ) : Boolean<br/>**OBJECT Get visible** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = object(s) visible; Otherwise, False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get visible.Summary-->The OBJECT Get visible command returns True if the object or group of objects designated by *object* has the visible attribute and False otherwise.<!-- END REF-->

 If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

## See also 

[OBJECT SET VISIBLE](../commands/object-set-visible)  

## Properties

|  |  |
| --- | --- |
| Command number | 1075 |
| Thread safe | no |


