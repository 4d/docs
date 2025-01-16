---
id: abs
title: Abs
slug: /commands/abs
displayed_sidebar: docs
---

<!--REF #_command_.Abs.Syntax-->**Abs** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Abs.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Number for which to return the absolute value |
| Function result | Real | &#8592; | Absolute value of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Abs.Summary-->Abs returns the absolute (unsigned, positive) value of *number*.<!-- END REF--> If *number* is negative, it is returned as positive. If *number* is positive, it is returned unchanged.

#### Example 

The following example returns the absolute value of –10.3, which is 10.3:

```4d
 vlVector:=Abs(-10.3)
```


#### Properties

|  |  |
| --- | --- |
| Command number | 99 |
| Thread safe | &check; |


