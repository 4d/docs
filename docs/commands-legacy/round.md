---
id: round
title: Round
slug: /commands/round
displayed_sidebar: docs
---

<!--REF #_command_.Round.Syntax-->**Round** ( *round* ; *places* ) : Real<!-- END REF-->
<!--REF #_command_.Round.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| round | Real | &#8594;  | Number to be rounded |
| places | Integer | &#8594;  | Number of decimal places used for rounding |
| Function result | Real | &#8592; | Number rounded to the number of decimal places specified by Places |

<!-- END REF-->

#### Description 

<!--REF #_command_.Round.Summary-->**Round** returns *number* rounded to the number of decimal places specified by *places*.<!-- END REF-->

If *places* is positive, *number* is rounded to *places* decimal places. If *places* is negative, *number* is rounded on the left of the decimal point.

If the digit following *places* is 5 though 9, **Round** rounds toward positive infinity for a positive number, and toward negative infinity for a negative number. If the digit following *places* is 0 through 4, **Round** rounds toward zero.

#### Example 

The following example illustrates how Round works with different arguments. Each line assigns a number to the *vlResult* variable. The comments describe the results:

```4d
 vlResult:=Round(16.857;2) // vlResult gets 16.86
 vlResult:=Round(32345.67;-3) // vlResult gets 32000
 vlResult:=Round(29.8725;3) // vlResult gets 29.873
 vlResult:=Round(-1.5;0) // vlResult gets –2
```

#### See also 

[Trunc](trunc.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 94 |
| Thread safe | &check; |
| Forbidden on the server ||


