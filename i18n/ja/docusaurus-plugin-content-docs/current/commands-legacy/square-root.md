---
id: square-root
title: Square root
slug: /commands/square-root
displayed_sidebar: docs
---

<!--REF #_command_.Square root.Syntax-->**Square root** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Square root.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 平方根を求める数値 |
| 戻り値 | Real | &#8592; | 平方根の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Square root.Summary-->Square root は*number*の平方根を返します。<!-- END REF-->

#### 例題 1 

以下の行は、値*1.414213562373*を*$vrSquareRootOfTwo*に代入します:

```4d
 $vrSquareRootOfTwo :=Square root(2)
```

#### 例題 2 

以下のメソッドは三角形の斜辺長を返します。この三角形の2つの斜辺以外の辺は引数として渡されます:

```4d
  // Hypotenuse method
  // Hypotenuse ( real ; real ) -> real
  // Hypotenuse ( legA ; legB ) -> Hypotenuse
 var $0;$1;$2 : Real
 $0:=Square root(($1^2)+($2^2))
```

例えば、Hypotenuse (4;3) は5を返します。
