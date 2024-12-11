---
id: insert-string
title: Insert string
slug: /commands/insert-string
displayed_sidebar: docs
---

<!--REF #_command_.Insert string.Syntax-->**Insert string** ( *source* ; *what* ; *where* ) : Text<!-- END REF-->
<!--REF #_command_.Insert string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | String in which to insert the other string |
| what | Text | &#8594;  | String to insert |
| where | Integer | &#8594;  | Where to insert |
| Function result | Text | &#8592; | Resulting string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Insert string.Summary-->**Insert string** inserts a string into *source* and returns the resulting string.<!-- END REF-->inserts the string *what* before the character at position *where*.

If *what* is an empty string (""), **Insert string** returns *source* unchanged.

If *where* is greater than the length of *source*, then *what* is appended to *source*. If *where* is less than one (1), then *what* is inserted before *source*.

**Insert string** is different from [Change string](change-string.md) in that it inserts characters instead of overwriting them.

#### Example 

The following example illustrates the use of **Insert string**. The results are assigned to the variable *vtResult*.

```4d
 vtResult:=Insert string("The tree";" green";4) // vtResult gets "The green tree"
 vtResult:=Insert string("Shut";"o";3) // vtResult gets "Shout"
 vtResult:=Insert string("Indention";"ta";6) // vtResult gets "Indentation"
```

#### See also 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Replace string](replace-string.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 231 |
| Thread safe | &check; |
| Forbidden on the server ||


