---
id: int
title: Int
slug: /commands/int
displayed_sidebar: docs
---

<!--REF #_command_.Int.Syntax-->**Int** ( *number* ) -> Function result<!-- END REF-->
<!--REF #_command_.Int.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &srarr; | Number whose integer portion is returned |
| Function result | Real | &larr; | Integer portion of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Int.Summary-->Int returns the integer portion of *number*.<!-- END REF--> Int truncates a negative *number* away from zero.

#### Example 

The following example illustrates how Int works for both positive and negative numbers. Note that the decimal portion of the number is removed:

```4d
 vlResult:=Int(123.4) // vlResult gets 123
 vlResult:=Int(-123.4) // vlResult gets –124
```

#### See also 

[Dec](dec.md)  