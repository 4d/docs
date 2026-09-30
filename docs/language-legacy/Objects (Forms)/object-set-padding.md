---
id: object-set-padding
title: OBJECT SET PADDING
slug: /commands/object-set-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PADDING.Syntax-->**OBJECT SET PADDING** ( * ; *object* : Text ; *padding* : Object )<br/>**OBJECT SET PADDING** ( *object* : Variable, Field ; *padding* : Object )<!-- END REF-->

<!--REF #_command_.OBJECT SET PADDING.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594; | If specified, object is an object name (string)<br/>If omitted, object is a variable or field |
| object | Text, Variable, Field | &#8594; | Object name (if * is specified) or<br/>Variable or field (if * is omitted) |
| padding | Object | &#8594; | Padding values |

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

<!--REF #_command_.OBJECT SET PADDING.Summary-->The **OBJECT SET PADDING** command sets the padding of the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that *object* is a variable or field. In this case, you pass a variable or field reference instead of a string.

In *padding*, pass an object containing the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `top` | Integer | Padding between the content and the top border |
| `bottom` | Integer | Padding between the content and the bottom border |
| `left` | Integer | Padding between the content and the left border |
| `right` | Integer | Padding between the content and the right border |

All properties are optional. If a property is omitted, its current value remains unchanged.

Padding values are expressed in pixels. If a negative value is assigned, the effective padding is set to 0.

Padding can be applied to the following types of form objects:

* [text areas](../../FormObjects/text.md),
* [inputs](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [list box columns](../../FormObjects/listbox-column.md),
* [list box headers](../../FormObjects/properties_Headers.md) and [footers](../../FormObjects/properties_Footers.md).

For list boxes, list box columns, and list box headers and footers, the same *padding* object is used, but only the `top` and `left` values are taken into account for rendering:

- `top` is applied as both top and bottom padding,
- `left` is applied as both left and right padding.

## Example

```4d 
var $padding:={top: 20; left: 10}
OBJECT SET PADDING(*; "List box"; $padding)
```

The `top` value is applied to the top and bottom padding, while the `left` value is applied to the left and right padding.

## See also

[OBJECT Get padding](../commands/object-get-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Properties

|  |  |
| --- | --- |
| Command number | 1865 |
| Thread safe | no |