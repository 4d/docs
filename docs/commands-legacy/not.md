---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *boolean* ) -> Function result<!-- END REF-->
<!--REF #_command_.Not.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| boolean | Boolean | &srarr; | Boolean value to negate |
| Function result | Boolean | &larr; | Opposite of Boolean |

<!-- END REF-->

#### Description 

<!--REF #_command_.Not.Summary-->The Not function returns the negation of *boolean*, changing True to False or False to True.<!-- END REF-->

#### Example 

This example first assigns True to a variable, then changes the variable value to False, and then back to True.

```4d
 vResult:=True // vResult is set to True
 vResult:=Not(vResult) // vResult is set to False
 vResult:=Not(vResult) // vResult is set to True
```

#### See also 

[False](false.md)  
[True](true.md)  