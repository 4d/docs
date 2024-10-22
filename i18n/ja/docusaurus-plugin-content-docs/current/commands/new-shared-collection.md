---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| 引数    | 型                                                                   |                            | 説明                    |
| ----- | ------------------------------------------------------------------- | -------------------------- | --------------------- |
| value | Number, Text, Date, Time, Boolean, Shared object, Shared collection | &#8594; | 共有コレクションの値            |
| 戻り値   | コレクション                                                              | &#8592; | New shared collection |

<!-- END REF-->

#### 説明

`New shared collection` コマンドは、<!-- REF #_command_.New shared collection.Summary -->空の、あるいは値が入った新規コレクションを作成し、その参照を返します<!-- END REF -->。 Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](../Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](../API/CollectionClass.md#push) or [`map()`](../API/CollectionClass.md#map) because they automatically trigger an internal *Use...End use*). ただし、属性の読み取りは [`Use...End use`](Concepts/shared#useend-use) 構造の外側でも可能です。

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../Concepts/shared.md) page.

:::

引数を渡さない場合、`New shared collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

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
*Shared objects and shared collections*
