---
id: trunc
title: Trunc
slug: /commands/trunc
displayed_sidebar: docs
---

<!--REF #_command_.Trunc.Syntax-->**Trunc** ( *number* ; *places* ) : Real<!-- END REF-->
<!--REF #_command_.Trunc.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Number to be truncated |
| places | Integer | &#8594;  | Number of decimal places used for truncating |
| Function result | Real | &#8592; | Number with its decimal part truncated to the number of decimal places specified by Places |

<!-- END REF-->

#### Description 

<!--REF #_command_.Trunc.Summary-->**Trunc** returns *number* with its decimal part truncated to the number of decimal places specified by *places*.<!-- END REF--> **Trunc** always truncates toward negative infinity.

If *places* is positive, *number* is truncated to *places* decimal places. If *places* is negative, number is truncated on the left of the decimal point.

#### Example 

The following example illustrates how Trunc works with different arguments. Each line assigns a number to the *vlResult* variable. The comments describe the results:

```4d
 vlResult:=Trunc(216.897;1) // vlResult gets 216.8
 vlResult:=Trunc(216.897;-1) // vlResult gets 210
 vlResult:=Trunc(-216.897;1) // vlResult gets –216.9
 vlResult:=Trunc(-216.897;-1) // vlResult gets –220
```

#### See also 

[Round](round.md)  