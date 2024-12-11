---
id: dec
title: Dec
slug: /commands/dec
displayed_sidebar: docs
---

<!--REF #_command_.Dec.Syntax-->**Dec** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Dec.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Number whose decimal portion is returned |
| Function result | Real | &#8592; | Decimal part of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Dec.Summary-->Dec returns the decimal (fractional) portion of *number*.<!-- END REF-->The value returned is always positive or zero.

#### Example 

The following example takes a monetary value expressed as a real number, and extracts the dollar part and the cents part. If *vrAmount* is 7.31, then *vlDollars* is set to 7 and *vlCents* is set to 31:

```4d
 vlDollars:=Int(vrAmount) // Get the dollars
 vlCents:=Dec(vrAmount)*100 // Get the fractional part
```

#### See also 

[Int](int.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 9 |
| Thread safe | &check; |
| Forbidden on the server ||


