---
id: wp-get-attributes
title: WP GET ATTRIBUTES
slug: /WritePro/commands/wp-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP GET ATTRIBUTES.Syntax-->**WP GET ATTRIBUTES** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.WP GET ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| attribName | Text | &#8594;  | Name of attribute to get |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#x1F858; | Current value of attribute for the target |

<!-- END REF-->

## Description 

<!--REF #_command_.WP GET ATTRIBUTES.Summary-->The **WP GET ATTRIBUTES** command returns the value of any attribute in a 4D Write Pro range, header, body, footer, table, or document.<!-- END REF--> This command gives you access to any kind of 4D Write Pro internal attributes: character, paragraph, document, table, or image.

In *targetObj*, you can pass:

* a range, or
* an element (header / footer / body / table / paragraph / anchored or inline picture / section / subsection / style sheet), or
* a 4D Write Pro document

For a comprehensive list of attributes to pass in *attribName*, as well as their scope and values, please refer to the *4D Write Pro Attributes* section.

If there are different values for the same attribute in the element passed as a parameter, the command returns:

* for numerical values, wk mixed
* for an array, an empty array (tab stops, color if *attribValue* is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed.
* for string values, an empty string
* for picture values, an empty picture.

**Note**: If *targetObj* contains a paragraph and a character style sheets, the paragraph style sheet name is returned.

## Example 

You want to get the background color of the selected area:  

```4d
 $range:=WP Selection range(*;"WParea")
 WP GET ATTRIBUTES($range;wk background color;$bcol)
```

## See also 

*4D Write Pro Attributes*  
*4D Write Pro Constants*  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  