---
id: size-of-array
title: Size of array
slug: /commands/size-of-array
displayed_sidebar: docs
---

<!--REF #_command_.Size of array.Syntax-->**Size of array** ( *array* ) : Integer<!-- END REF-->
<!--REF #_command_.Size of array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | サイズを取得する配列 |
| 戻り値 | Integer | &#8592; | 配列の要素数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Size of array.Summary-->Size of array コマンドは、配列*array*の要素数を返します。<!-- END REF-->

#### 例題 1 

以下の例は配列*anArray*のサイズを返します:

```4d
 vlSize:=Size of array(anArray) // vlSizeはanArrayのサイズを取得する
```

#### 例題 2 

以下の例は2次元配列の行数を返します:

```4d
 vlRows:=Size of array(a2DArray) // vlRowsはa2DArrayのサイズを取得する
```

#### 例題 3 

以下の例は2次元配列の、指定された行の列数を返します:

```4d
 vlColumns:=Size of array(a2DArray{10}) // vlColumnsはa2DArray{10}のサイズを所得する
```

#### 参照 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  