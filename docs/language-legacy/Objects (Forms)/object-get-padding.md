---
id: object-get-padding
title: OBJECT Get padding
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get padding.Syntax-->**OBJECT Get padding** ( * ; *object* : Text ) : Object<br/>**OBJECT Get padding** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT Get padding.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594; | If specified, object is an object name (string)<br/>If omitted, object is a variable or field |
| object | Text, Variable, Field | &#8594; | Object name (if * is specified) or<br/>Variable or field (if * is omitted) |
| Function result | Object | &#8592; | Padding values |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>History</summary>

| Release | Changes |
| --- | --- |
| 21 R5 | Created |

</details>

</div>

## Description

<!--REF #_command_.OBJECT Get padding.Summary-->The **OBJECT Get padding** command returns an object containing the current padding values of the object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that *object* is a variable or field. In this case, you pass a variable or field reference instead of a string.

**Note:** If you apply this command to a set of objects, only the padding values for the last object are returned. 

The returned object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `top` | Integer | Padding between the content and the top border |
| `bottom` | Integer | Padding between the content and the bottom border |
| `left` | Integer | Padding between the content and the left border |
| `right` | Integer | Padding between the content and the right border |

Padding values are expressed in pixels.

Padding can be retrieved for the following types of form objects:

* [text areas](../../FormObjects/text.md),
* [inputs](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [list box columns](../../FormObjects/listbox-column.md),
* [list box headers](../../FormObjects/properties_Headers.md) and [footers](../../FormObjects/properties_Footers.md).

For list boxes, list box columns, and list box headers and footers, the returned `top` and `bottom` values are the same, as are the `left` and `right` values.

## Example

```4d 

var $currentPadding:=OBJECT Get padding(*; "My Input")
// $currentPadding = {"left":10,"right":15,"top":20,"bottom":35}

```


## See also

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Properties

|  |  |
| --- | --- |
| Command number | 1866 |
| Thread safe | no |