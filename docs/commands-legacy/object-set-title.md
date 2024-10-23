---
id: object-set-title
title: OBJECT SET TITLE
slug: /commands/object-set-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TITLE.Syntax-->**OBJECT SET TITLE** ( {* ;} *object* ; *title* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TITLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an Object Name (String) If omitted, object is a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Variable (if * is omitted) |
| title | Text | &#8594;  | New title for the object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET TITLE.Summary-->The OBJECT SET TITLE command changes the title of the object(s) specified by *object* to the value you pass in *title*.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the section *Object Properties*.

OBJECT SET TITLE can be applied to any simple objects that display a title: 

* buttons and 3D buttons,
* check boxes and 3D check boxes,
* radio buttons and 3D radio buttons,
* list box headers,
* static text areas,
* group boxes.

Usually, you will apply this command to one object at a time. The object title area must be big enough to hold the text; otherwise, the text is truncated. 

Do not use carriage returns in *title*.

If you want to set a title on more than one line, use the "\\" character ("\\\\" in the code editor) as a line return. This is permitted for 3D buttons, 3D check boxes, 3D radio buttons and list box headers.

**Note:** Pass "\\\\\\" when you want to use the "\\" character in the title.

#### Example 1 

The following example is the object method of a search button located in the footer area of an output form displayed using [MODIFY SELECTION](modify-selection.md). The method searches a table; depending on the search results, it enables or disables a button labeled *bDelete* and changes its title:

```4d
 QUERY([People];[People]Name=vName)
 Case of
    :(Records in selection([People])=0) // No people found
       OBJECT SET TITLE(bDelete;" Delete")
       OBJECT SET ENABLED(bDelete;False)
    :(Records in selection([People])=1) // One person found
       OBJECT SET TITLE(bDelete;"Delete Person")
       OBJECT SET ENABLED(bDelete;True)
    :(Records in selection([People])>1) // Many people found
       OBJECT SET TITLE(bDelete;"Delete People")
       OBJECT SET ENABLED(bDelete;True)
 End case
```

#### Example 2 

You want to insert titles on two lines:

```4d
 OBJECT SET TITLE(*;"header1";"Ascending sort \\\ \\Descending sort")
 OBJECT SET TITLE(*;"button1";"Click here \\to print")
```

![](../assets/en/commands/pict1242273.en.png)

#### See also 

[OBJECT Get title](object-get-title.md)  