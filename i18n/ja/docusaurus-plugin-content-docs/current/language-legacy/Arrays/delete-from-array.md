---
id: delete-from-array
title: DELETE FROM ARRAY
slug: /commands/delete-from-array
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM ARRAY.Syntax-->**DELETE FROM ARRAY** ( *array* : Array ; *where* : Integer {; *howMany* : Integer} )<!-- END REF-->
<!--REF #_command_.DELETE FROM ARRAY.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594; | 要素を削除する配列 |
| where | Integer | &#8594; | 削除を開始する要素番号 |
| howMany | Integer | &#8594; | 削除する要素数, または 省略時は1要素 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DELETE FROM ARRAY.Summary-->**DELETE FROM ARRAY** コマンドは1つまたは複数の要素を*array*から削除します。<!-- END REF-->*where*引数の示す位置から要素の削除を開始します。

*howMany*引数は削除する要素数です。*howMany*が指定されない場合、1つの要素が削除されます。配列のサイズは*howMany*だけ小さくなります。

## 例題 1 

以下の例は、配列の5番目の要素から3つの要素を削除します:

```4d
 DELETE FROM ARRAY(anArray;5;3)
```

## 例題 2 

以下の例は、配列の最後の要素を削除します:

```4d
 $vlElem:=Size of array(anArray)
 If($vlElem>0)
    DELETE FROM ARRAY(anArray;$vlElem)
 End if
```

## 参照 

[INSERT IN ARRAY](../commands/insert-in-array)  
[Size of array](../commands/size-of-array)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 228 |
| スレッドセーフである | yes |


