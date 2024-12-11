---
id: change-string
title: Change string
slug: /commands/change-string
displayed_sidebar: docs
---

<!--REF #_command_.Change string.Syntax-->**Change string** ( *source* ; *newChars* ; *where* ) : Text<!-- END REF-->
<!--REF #_command_.Change string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Original string |
| newChars | Text | &#8594;  | New characters |
| where | Integer | &#8594;  | Where to start the changes |
| Function result | Text | &#8592; | Resulting string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Change string.Summary-->Change string changes a group of characters in *source* and returns the resulting string.<!-- END REF--> The command overlays *source*, with the characters in *newChars*, at the character described by *where*.

If *newChars* is an empty string (""), Change string returns *source* unchanged. Change string always returns a string of the same length as *source*. If *where* is less than one or greater than the length of *source*, Change string returns *source*.

Change string is different from [Insert string](insert-string.md) in that it overwrites characters instead of inserting them.

#### Example 

The following example illustrates the use of **Change string**. The results are assigned to the variable *vtResult*.

```4d
 vtResult:=Change string("Acme";"CME";2) // vtResult gets "ACME"
 vtResult:=Change string("November";"Dec";1) // vtResult gets "December"
```

#### See also 

[Delete string](delete-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 234 |
| Thread safe | &check; |
| Forbidden on the server ||


