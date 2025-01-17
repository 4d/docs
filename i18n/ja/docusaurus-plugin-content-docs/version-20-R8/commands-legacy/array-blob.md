---
id: array-blob
title: ARRAY BLOB
slug: /commands/array-blob
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BLOB.Syntax-->**ARRAY BLOB** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | 配列名 |
| size | Integer | &#8594;  | 配列の要素の数、もしくはsize2が指定されていた場合は配列の数 |
| size2 | Integer | &#8594;  | 2次元配列の要素の数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY BLOB.Summary-->**ARRAY BLOB**コマンドは、メモリ上にBLOB型の要素の配列を作成・リサイズします。<!-- END REF-->引数には配列の名前を渡します。  

*size* 引数には、配列の要素の数を渡します。

*size2* 引数は任意の引数です。指定時にはコマンドは2次元配列を作成します。この場合、 *size* 引数はそれぞれの配列の行の数を指定し、 *size2* 引数はそれぞれの配列の列の数を指定します。2次元配列内のそれぞれの行は、要素としても配列としても扱うことが出来ます。これはつまり、配列の1次元目を扱うときは、このテーマ内の他のコマンドを使用することによって2次元配列の中に配列全体を挿入したり削除したりすることが出来るということです。

**ARRAY BLOB** コマンドを既存の配列に対して使用する場合、以下のことに気を付けてください:

* サイズを拡大する場合、既存の要素は何も変更されず、新しく追加された要素は空のBLOBで初期化されます([BLOB size](blob-size.md)\= 0)
* サイズを縮小する場合は、 "底"にある要素から削除されていきます。

#### 例題 1 

以下の例はBLOB型の要素を100個含んだプロセス配列を作成します:

```4d
 ARRAY BLOB(arrBlob;100)
```

#### 例題 2 

以下の例は50個のBLOB型の要素を含んだ行を100行持ったローカルな配列を作成します:

```4d
 ARRAY BLOB($arrBlob;100;50)
```

#### 例題 3 

以下の例は50個のBLOB型の要素を含んだ行を100行持ったローカルな配列を作成します。$vByteValue 変数には、そのBLOB配列の5行目・7列目の、10バイト目のBLOBが渡されます:

```4d
 C_INTEGER($vByteValue)
 ARRAY BLOB($arrValues;100;50)
 ...
 $vByteValue:=$arrValues{5}{7}{9}
```

#### 参照 

*配列を作成する*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1222 |
| スレッドセーフである | &check; |


