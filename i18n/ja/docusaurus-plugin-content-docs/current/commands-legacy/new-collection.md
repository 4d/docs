---
id: new-collection
title: New collection
slug: /commands/new-collection
displayed_sidebar: docs
---

<!--REF #_command_.New collection.Syntax-->**New collection** {( *value* {; *value2* ; ... ; *valueN*} )} -> 戻り値<!-- END REF-->
<!--REF #_command_.New collection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | Number, Text, Date, Object, Collection, Pointer | &#x1F852; | コレクションの値 |
| 戻り値 | Collection | &#x1F850; | 新しいコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New collection.Summary-->**New collection** コマンドは新しい空の、あるいは事前に値を入れたコレクションを作成し、その参照を返します。<!-- END REF--> 

引数を何も渡さなかった場合、**New collection** は空のコレクションを作成し、その参照を返します。

返された参照は、[C\_COLLECTION](c-collection.md)コマンドで宣言された4D変数へと割り当てる必要があります。

**注:** [C\_COLLECTION](c-collection.md)はCollection 型の変数を宣言しますが、何のコレクションも作成しないという点に注意してください。

オプションとして、一つあるいは複数の*value(s)* 引数を渡すことで、既に値の入った新しいコレクションを作成することができます。

そうでないなら、オブジェクト記法での割り当てを使用して要素を一つずつ追加あるいは編集していくことができます。例:

```4d
 myCol[10]:="My new element"
```

新しい要素インデックスがコレクションの要素の既存の最後の要素より大きい場合、コレクションは自動的にリサイズされ、中間の要素には全て**null**値が入ります。

**注:** オブジェクト記法についてのより詳細な情報については、*オブジェクト記法の使用* の章を参照してください。

サポートされている型(数値、テキスト、日付、ポインター、オブジェクト、コレクション、等)であれば、値はいくらでも渡すことができます。配列とは異なり、コレクションでは異なる型のデータを混ぜることができます。

ただし以下の変換問題については注意する必要があります:

* ポインターを渡した場合、それはそのまま保存されます。ポインターは[JSON Stringify](json-stringify.md) コマンドを使用することで評価されます。
* 日付は、カレントの"dates inside objects"データベース設定(*互換性ページ*参照)に応じて、"yyyy-mm-dd" という日付か、"YYYY-MM-DDTHH:mm:ss.SSSZ" というフォーマットの文字列で保存されます。4D日付をコレクションに保存する前にテキストに変換した場合、デフォルトでプログラムはローカルのタイムゾーンを使用します。この振る舞いは[SET DATABASE PARAMETER](set-database-parameter.md) コマンドのDates inside objects セレクターを使用することで変更可能です。
* 時間を渡した場合、それはミリ秒の数(実数)として保存されます。

#### 例題 1 

新しい空のコレクションを作成し、それを4Dコレクション変数に割り当てる場合を考えます:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### 例題 2 

事前に値の入ったコレクションを作成したい場合を考えます:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november",->myPtr,2017-03-28T22:00:00.000Z]
```

#### 例題 3 

新しいコレクションを作成し、そこに新しい要素を追加する場合を考えます:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //"z"という値を持つ第10要素を追加する
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

**注:** この例題ではデータベース内においてオブジェクト記法が有効化されている必要があります(*オブジェクト記法* の段落を参照してください)。

#### 参照 

[C\_COLLECTION](c-collection.md)  
[New shared collection](new-shared-collection.md)  
[Type](type.md)  