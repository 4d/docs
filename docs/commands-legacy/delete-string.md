---
id: delete-string
title: Delete string
slug: /commands/delete-string
displayed_sidebar: docs
---

<!--REF #_command_.Delete string.Syntax-->**Delete string** ( *source* ; *where* ; *numChars* ) : Text<!-- END REF-->
<!--REF #_command_.Delete string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | String from which to delete characters |
| where | Integer | &#8594;  | First character to delete |
| numChars | Integer | &#8594;  | Number of characters to delete |
| Function result | Text | &#8592; | Resulting string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Delete string.Summary-->Delete string deletes *numChars* from *source*, starting at *where*, and returns the resulting string.<!-- END REF-->

Delete string returns the same string as *source* when:

* *source* is an empty string
* *where* is greater than the length of *source*
* *numChars* is zero (0)

If *where* is less than one, the characters are deleted from the beginning of the string.

If *where* plus *numChars* is equal to or greater than the length of *source*, the characters are deleted from *where* to the end of *source*.

#### Example 

The following example illustrates the use of Delete string. The results are assigned to the variable *vtResult*.

```4d
 vtResult:=Delete string("Lamborghini";6;6) // vtResult gets "Lambo"
 vtResult:=Delete string("Indentation";6;2) // vtResult gets "Indention"
 vtResult:=Delete string(vtOtherVar;3;32000) // vtResult gets the first two characters of vtOtherVar
```

#### See also 

[Change string](change-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  