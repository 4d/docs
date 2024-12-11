---
id: array-object
title: ARRAY OBJECT
slug: /commands/array-object
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY OBJECT.Syntax-->**ARRAY OBJECT** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY OBJECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | 配列名 |
| size | Integer | &#8594;  | 配列の要素の数、もしくはsize2が指定されていた場合は配列の数 |
| size2 | Integer | &#8594;  | 2次元配列の要素の数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY OBJECT.Summary-->**ARRAY OBJECT**コマンドは、メモリ上にランゲージオブジェクト型の要素の配列を作成・リサイズします。<!-- END REF-->引数には配列の名前を渡します。4Dのルールに則った名前であればどんな名前でも使用することができます。

*size* 引数には、配列の要素の数を渡します。

*size2* 引数は任意の引数です。指定時にはコマンドは2次元配列を作成します。この場合、 *size* 引数はそれぞれの配列の行の数を指定し、 *size2* 引数はそれぞれの配列の列の数を指定します。2次元配列内のそれぞれの行は、要素としても配列としても扱うことが出来ます。これはつまり、配列の1次元目を扱うときは、"配列"テーマ内の他のコマンドを使用することによって2次元配列の中に配列全体を挿入したり削除したりすることが出来るということです。

**ARRAY OBJECT** コマンドを既存の配列に対して使用する場合、以下のことに注意して下さい:

* サイズを拡大する場合、既存の要素は何も変更されず、新しく追加された要素は未定義の要素になります。[OB Is defined](ob-is-defined.md) コマンドを使用することによって要素が定義済みかどうかを調べることができます。
* サイズを縮小する場合は、 "底"にある要素から削除されていきます。

#### 例題 1 

以下の例はオブジェクト型の要素を100個含んだプロセス配列を作成します:

```4d
 ARRAY OBJECT(arrObjects;100)
```

#### 例題 2 

以下の例は50個のオブジェクト型の要素を含んだ行を100行持ったローカルな配列を作成します:

```4d
 ARRAY OBJECT($arrObjects;100;50)
```

#### 例題 3 

以下の例はローカルなオブジェクト配列を作成してデータをそこに代入します:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4)
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James";"age";3)
 APPEND TO ARRAY($arrayChildren;$ref_james)
  // $arrayChildren{1} -> {"name":"Richard","age":7}
  // $arrayChildren{2} -> {"name":"Susan","age":4}
  // $arrayChildren{3} -> {"name":"James","age":3}
```

#### 参照 

[C\_OBJECT](c-object.md)  
*オブジェクト(ランゲージ)*  
*配列を作成する*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1221 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


