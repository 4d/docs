---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| 引数    | 型                                                     |   | 説明                    |
| ----- | ----------------------------------------------------- | - | --------------------- |
| value | Number, Text, Date, Time, Boolean, Object, Collection | → | 共有コレクションの値            |
| 戻り値   | Collection                                            | ← | New shared collection |

<!-- END REF-->

#### 説明

`New shared collection` コマンドは、<!-- REF #_command_.New shared collection.Summary -->空の、あるいは値が入った新規コレクションを作成し、その参照を返します<!-- END REF -->。 コレクションは、[Collection クラス API](../API/CollectionClass.md)のプロパティや関数を使用して操作することができます。

このコレクションに要素を追加する場合には [Use...End use](Concepts/shared.md#useend-use) 構造でくくる必要があり、そうしない場合にはエラーが返されます(ただし、[`push()`](../API/CollectionClass.md#push) や [`map()`](../API/CollectionClass.md#map) などの関数を使用して要素を追加する場合は、自動で内部的に *Use...End use* が使用されるため、必要ありません)。 ただし、属性の読み取りは [`Use...End use`](Concepts/shared#useend-use) 構造の外側でも可能です。

:::info

共有コレクションについての詳細は、[共有オブジェクトと共有コレクション](../Concepts/shared.md) のページを参照してください。

:::

引数を渡さない場合、`New shared collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。

> `var : Collection` ステートメントは`Collection` 型の変数を宣言しますが、コレクション自体は作成しないという点に注意して下さい。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しい共有コレクションを作成することができます。 または、あとからオブジェクト記法による代入で要素を一つずつ追加・編集していくことができます (例題参照)。

共有コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、共有コレクションは自動的にリサイズされ、合い間の要素にはすべて **null** 値が割り当てられらます。

以下のサポートされる型であれば、いくつでも値を渡すことができます:

- 数値 (実数、倍長整数...)。 数値は常に実数として保存されます。
- テキスト
- boolean
- date
- 時間 (ミリ秒の数 (実数) として保存されます)。
- null
- 共有オブジェクト
- 共有コレクション

:::note

標準のコレクション (非共有コレクション) とは異なり、共有コレクションはピクチャーやポインター、共有でないオブジェクトおよびコレクションはサポートしていません。

:::

#### 例題

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### 参照

[New collection](new-collection.md)\
[New shared object](../commands-legacy/new-shared-object.md)\
*共有オブジェクトと共有コレクション*

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1527                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
