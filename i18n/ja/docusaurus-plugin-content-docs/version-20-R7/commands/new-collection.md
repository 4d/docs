---
id: new-collection
title: New collection
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->

| 引数    | 型                                                                       |   | 説明             |
| ----- | ----------------------------------------------------------------------- | - | -------------- |
| value | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | → | コレクションの値       |
| 戻り値   | Collection                                                              | ← | New collection |

<!-- END REF-->

#### 説明

`New collection` コマンドは、<!--REF #_command_.New collection.Summary-->新しい空の、または値が既に入れられたコレクションを作成し、その参照を返します。<!-- END REF-->コレクションは、[Collection クラス API](../API/CollectionClass.md)のプロパティや関数を使用して操作することができます。

引数を渡さなかった場合、`New collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。

> `var : Collection` ステートメントは`Collection` 型の変数を宣言しますが、コレクション自体は作成しないという点に注意して下さい。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しいコレクションを作成することができます。

または、あとから代入によって要素を一つずつ追加・編集していくことができます。 例:

```4d
 myCol[10]:="My new element"
```

コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、コレクションは自動的にリサイズされ、合い間の要素にはすべて **null** 値が割り当てられらます。

サポートされている型 (数値、テキスト、日付、ピクチャー、ポインター、オブジェクト、コレクション等) であれば、個数に制限なく値を渡すことができます。 配列とは異なり、コレクションでは異なる型のデータを混ぜることができます。

ただし以下の変換問題については注意する必要があります:

- 渡されたポインターは、そのまま保存されます。ポインターは `JSON Stringify` コマンドを使用することで評価されます。
- 日付は、"dates inside objects" データベース設定に応じて、"yyyy-mm-dd" という日付、または "YYYY-MM-DDTHH:mm:ss.SSSZ" というフォーマットの文字列で保存されます。 コレクションに保存する前に 4D日付をテキストに変換した場合、プログラムはデフォルトでローカルのタイムゾーンを使用します。 このふるまいは `SET DATABASE PARAMETER` コマンドで `Dates inside objects` セレクターを使用することで変更可能です。
- 時間を渡した場合、それはミリ秒の数 (実数) として保存されます。

#### 例題 1

新しい空のコレクションを作成し、それを 4Dコレクション変数に代入します:

```4d
 var $myCol : Collection
 $myCol:=New collection
  // $myCol=[]
```

#### 例題 2

あらかじめ値の入ったコレクションを作成します:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  // $filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### 例題 3

新しいコレクションを作成し、そこに新しい要素を追加します:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  // $coll=["a","b","c"]
 $coll[9]:="z" // 値 "z" を10番目の要素として追加します
 $vcolSize:=$coll.length // 10
  // $coll=["a","b","c",null,null,null,null,null,null,"z"]
```

#### 参照

[New shared collection](new-shared-collection.md)\
[Type](../commands-legacy/type.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1472                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
