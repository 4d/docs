---
id: object-get-placeholder
title: OBJECT Get placeholder
slug: /commands/object-get-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get placeholder.Syntax-->**OBJECT Get placeholder** ( * ; *object* : Text ) : Text<br/>**OBJECT Get placeholder** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get placeholder.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Placeholder text associated with object |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get placeholder.Summary-->The **OBJECT Get placeholder** command returns the placeholder text associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF--> If there is no placeholder text associated with the object, the command returns an empty string.

You can define the placeholder text either using the Property List, or using the [OBJECT SET PLACEHOLDER](../commands/object-set-placeholder) command. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

If the placeholder is an xliff reference defined using the Property List, the command returns the original reference in the form ":xliff:*resname*", and not its calculated value.

## Example 

You want to get the field placeholder text:

```4d
 $txt:=OBJECT Get placeholder([People]LastName)
```

## See also 

[OBJECT SET PLACEHOLDER](../commands/object-set-placeholder)  

## Properties

|  |  |
| --- | --- |
| Command number | 1296 |
| Thread safe | no |


