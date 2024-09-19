---
id: exp
title: Exp
slug: /commands-legacy/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *number* ) -> Function result<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#x1F852; | Number to evaluate |
| Function result | Real | &#x1F850; | Natural log base by the power of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Exp.Summary-->Exp raises the natural log base (e = 2.<!-- END REF-->71828...) by the power of *number*. Exp is the inverse function of [Log](log.md).

**Note:** 4D provides the predefined constant *e number* (2.71828...).

#### Example 

The following example assigns the exponential of 1 to *vrE* (the log of *vrE* is 1):

```4d
 vrE:=Exp(1) // vrE gets 2.17828...
```

#### See also 

[Log](log.md)  