---
id: char
title: Char
slug: /commands/char
displayed_sidebar: docs
---

<!--REF #_command_.Char.Syntax-->**Char** ( *charCode* ) : Text<!-- END REF-->
<!--REF #_command_.Char.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| charCode | Integer | &#8594;  | Character code |
| Function result | Text | &#8592; | Character represented by the charCode |

<!-- END REF-->

#### Description 

<!--REF #_command_.Char.Summary-->The **Char** command returns the character whose code is *charCode*.<!-- END REF-->

Pass a UTF-16 value (included between 1 and 65535) in *charCode*.

**Tip:** In editing a method, the command **Char** is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the Method editor.

#### Example 

The following example uses **Char** to insert a carriage return within the text of an alert message:

```4d
 ALERT("Employees: "+String(Records in table([Employees]))+Char(Carriage return)+"Press OK to continue.")
```

#### See also 

[Character code](character-code.md)  
*Character Reference Symbols*  
*Unicode Codes*  