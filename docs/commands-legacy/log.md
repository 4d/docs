---
id: log
title: Log
slug: /commands-legacy/log
displayed_sidebar: docs
---

<!--REF #_command_.Log.Syntax-->**Log** ( *number* ) -> Function result<!-- END REF-->
<!--REF #_command_.Log.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#x1F852; | Number for which to return the log |
| Function result | Real | &#x1F850; | Log of number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Log.Summary-->Log returns the natural (Napierian) log of *number*.<!-- END REF--> Log is the inverse function of [Exp](exp.md).

**Note:** 4D provides the predefined constant *e number* (2.71828...).

#### Example 

The following line displays 1:

```4d
 ALERT(String(Log(Exp(1)))
```

#### See also 

[Exp](exp.md)  