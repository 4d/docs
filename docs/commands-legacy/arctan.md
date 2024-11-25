---
id: arctan
title: Arctan
slug: /commands/arctan
displayed_sidebar: docs
---

<!--REF #_command_.Arctan.Syntax-->**Arctan** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Arctan.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Tangent for which to calculate the angle |
| Function result | Real | &#8592; | Angle in radians |

<!-- END REF-->

#### Description 

<!--REF #_command_.Arctan.Summary-->Arctan returns the angle, expressed in radians, of the tangent *number*.<!-- END REF-->

**Note:** 4D provides the predefined constants Pi, Degree, and Radian. Pi returns the Pi number (3.14159...), Degree returns one degree expressed in radians (0.01745...), and Radian returns one radian expressed in degrees (57.29577...).

#### Example 

The following example shows the value of Pi:

```4d
 ALERT("Pi is equal to: "+String(Arctan(1)*4))
```

#### See also 

[Cos](cos.md)  
[Sin](sin.md)  
[Tan](tan.md)  