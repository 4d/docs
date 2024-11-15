---
id: count-in-array
title: Count in array
slug: /commands/count-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Count in array.Syntax-->**Count in array** ( *array* ; *value* ) : Integer<!-- END REF-->
<!--REF #_command_.Count in array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | カウントを行う配列 |
| value | Expression | &#8594;  | カウントする値 |
| 戻り値 | Integer | &#8592; | 見つかったインスタンスの数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count in array.Summary-->Count in array コマンドは、*array*内で見つかった*value*の数を返します。<!-- END REF-->

このコマンドは、以下の型の配列に対して使用できます: テキスト、数値、日付、ポインター、オブジェクト、ブール。引数*array*と*value*は同じタイプか、または互換性があるタイプでなくてはなりません。

**注意:** オブジェクト配列の場合、*value* 引数に使用できるのはオブジェクト参照のみです。

*value*と一致する項目が*array*内に存在しない場合、コマンドは0を返します。

#### 例題 1 

次の例題は、リストボックス内で選択された行の数を表示します: 

```4d
  //tBList はリストボックスの配列名
 ALERT(String(Count in array(tBList;True))+" 行がリストボックスで選択されています。")
```

#### 例題 2 

オブジェクト配列内のオブジェクト参照を数えたい場合を考えます:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 $objects{21}:=$o1
 $objects{22}:=$o1
 
 var $n : Integer
 
 $n:=Count in array($objects;$o1) // $n = 3 
 $n:=Count in array($objects;$o2) // $n = 0
```

#### 参照 

[Find in array](find-in-array.md)  
[Find in sorted array](find-in-sorted-array.md)  