---
id: get-pointer
title: Get pointer
slug: /commands/get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Get pointer.Syntax-->**Get pointer** ( *varName* ) : Pointer<!-- END REF-->
<!--REF #_command_.Get pointer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| varName | Text | &#8594;  | プロセスまたはインタプロセス変数の名前 |
| 戻り値 | Pointer | &#8592; | プロセスまたはインタープロセス変数へのポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get pointer.Summary-->**Get pointer** コマンドは、*varName*に渡した名前を持つ変数へのポインタを返します。<!-- END REF--> 

フィールドへのポインタを取得するには[Field](field.md)を使用します。テーブルへのポインタを取得するには[Table](table.md)を使用します。

**Note:** **Get pointer** は、例えば*ArrName+"{3}"* のような式や、二次元配列要素 (*ArrName+"{3}{5}"*) を受け入れます。  
しかしながら変数要素参照(*ArrName+"{myVar}"*) は使用できません。

#### 例題 1 

フォーム上で、5 x 10のグリッドの入力可能な変数を作成し、それぞれv1, v2... v50という名前を付けます。これらの変数をすべて初期化するには次のようにします:

```4d
  // ...
 For($vlVar;1;50)
    $vpVar:=Get pointer("v"+String($vlVar))
    $vpVar->:=""
 End for
```

#### 例題 2 

2次元配列の要素に対してポインターを使用する場合を考えます:

```4d
 $pt:=Get pointer("a{1}{2}")
  //$pt=->a{1}{2}
 $pt2:=Get pointer("atCities"+"{2}{6}")
  //$pt2=->atCities{2}{6}
```

#### 参照 

[Field](field.md)  
[Table](table.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 304 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


