---
id: insert-in-array
title: INSERT IN ARRAY
slug: /commands/insert-in-array
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN ARRAY.Syntax-->**INSERT IN ARRAY** ( *array* ; *where* {; *howMany*} )<!-- END REF-->
<!--REF #_command_.INSERT IN ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | 配列名 |
| where | Integer | &#8594;  | 要素を挿入する位置 |
| howMany | Integer | &#8594;  | 挿入する要素数, または 省略時は1 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.INSERT IN ARRAY.Summary-->INSERT IN ARRAYコマンドは、*array*に1つまたは複数の要素を挿入します。<!-- END REF-->引数*where*で指定した要素の前に新しい要素を挿入します。新しく挿入された要素には、配列タイプに応じた空の値が代入されます。*where*より後ろの要素は、*howMany*で指定した数だけ後ろに移動します。

*where*が配列サイズより大きい場合、要素は配列の最後に追加されます。

引数*howMany*は挿入する要素の数を指定します。*howMany*を省略すると、1つの要素が挿入されます。配列サイズは、*howMany*だけ大きくなります。

#### 例題 1 

以下の例は、配列の10番目の要素位置に新しい5つの要素を挿入します:   

```4d
 INSERT IN ARRAY(anArray;10;5)
```

#### 例題 2 

以下の例は、配列に要素を追加します: 

```4d
 $vlElem:=Size of array(anArray)+1
 INSERT IN ARRAY(anArray;$vlElem)
 anArray{$vlElem}:=...
```

#### 参照 

[DELETE FROM ARRAY](delete-from-array.md)  
[Size of array](size-of-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 227 |
| スレッドセーフである | &check; |


