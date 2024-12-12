---
id: square-root
title: Square root
slug: /commands/square-root
displayed_sidebar: docs
---

<!--REF #_command_.Square root.Syntax-->**Square root** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Square root.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number | Real | &#8594;  | Number whose square root is calculated |
| Function result | Real | &#8592; | Square root of the number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Square root.Summary-->Square root returns the square root of *number*.<!-- END REF-->

#### Example 1 

The line:

```4d
 $vrSquareRootOfTwo :=Square root(2)
```

assigns the value *1.414213562373* to the variable *$vrSquareRootOfTwo*.

#### Example 2 

The following method returns the hypotenuse of the right triangle whose two legs are passed as parameters:

```4d
  // Hypotenuse method
  // Hypotenuse ( real ; real ) -> real
  // Hypotenuse ( legA ; legB ) -> Hypotenuse
 var $0;$1;$2 : Real
 $0:=Square root(($1^2)+($2^2))
```

For instance, Hypotenuse (4;3) returns 5.
