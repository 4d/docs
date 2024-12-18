---
id: exp
title: Exp
slug: /commands/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Number to evaluate |
| Function result | Real | &#8592; | Natural log base by the power of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Exp.Summary-->Exp raises the natural log base (e = 2.71828...) by the power of *number*.<!-- END REF--> Exp is the inverse function of [Log](log.md).

**Note:** 4D provides the predefined constant *e number* (2.71828...).

#### Example 

The following example assigns the exponential of 1 to *vrE* (the log of *vrE* is 1):

```4d
 vrE:=Exp(1) // vrE gets 2.17828...
```

#### See also 

[Log](log.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 21 |
| Thread safe | &check; |


