---
id: object-set-placeholder
title: OBJECT SET PLACEHOLDER
slug: /commands/object-set-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PLACEHOLDER.Syntax-->**OBJECT SET PLACEHOLDER** ( {* ;} *object* ; *placeholderText* )<!-- END REF-->
<!--REF #_command_.OBJECT SET PLACEHOLDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| placeholderText | Text | &#8594;  | Placeholder text associated with object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET PLACEHOLDER.Summary-->The **OBJECT SET PLACEHOLDER** command associates placeholder text with the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

For more information about placeholder text, refer to the *Design Reference* manual. 

If placeholder text is already associated with the object through the Property List, this text is replaced in the current process by the contents of the *placeholderText* parameter. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In *placeholderText*, pass the help text or indication that must appear when the object is empty. 

**Note:** The **OBJECT SET PLACEHOLDER** command does not support the insertion of xliff references into the placeholder text. This is only possible for placeholder text that is defined using the Property List. 

This command can only be used with form objects of the variable, field or combo box type. You can associate placeholder text with Alpha and Text type values. You can also associate it with Date or Time type data if the form object is given the "Blank if null" property.

#### Example 

You want to display "Search" as placeholder text in a combo box:

```4d
 OBJECT SET PLACEHOLDER(*;"search_combo";"Search")
```

![](../assets/en/commands/pict1208449.en.png)

#### See also 

[OBJECT Get placeholder](object-get-placeholder.md)  