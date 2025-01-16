---
id: wp-selection-range
title: WP Selection range
slug: /WritePro/commands/wp-selection-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Selection range.Syntax-->**WP Selection range** ( {* ;} *wpArea* ) : Object<!-- END REF-->
<!--REF #_command_.WP Selection range.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable. |
| wpArea | Text | &#8594;  | Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted) |
| Function result | Object | &#8592; | Range or Picture object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Compatibility 

<!--REF #_command_.WP Selection range.Summary-->**WP Selection range** was named **WP Get selection** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### Description 

The **WP Selection range** command returns a new range object or a picture object based upon the currently selected content in the *wpArea* 4D Write Pro area.

If you pass the optional *\** parameter, you indicate that *wpArea* is a form object name (string). If you do not pass this parameter, you indicate that *wpArea* is a 4D Write Pro object variable or field. If no 4D Write Pro area is passed in the *wpArea* parameter, an empty object is returned.

**Note**: This command can only be used if the *wpArea* is associated with a form object (*i.e.* it is displayed in the current form/page).

If an anchored image (picture at a fixed location) is selected in *wpArea*, **WP Selection range** returns a picture reference object and not a range object (for more information, please refer to the [WP Add picture](../commands/wp-add-picture.md) command description). Otherwise, **WP Selection range** returns a new range object. For more information on range objects, please refer to *Range handling commands*.

#### Example 

You want to get the selected text from a 4D Write Pro area:

```4d
 $range:=WP Selection range(*;"WParea")
```

#### See also 

[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP Text range](wp-text-range.md)  