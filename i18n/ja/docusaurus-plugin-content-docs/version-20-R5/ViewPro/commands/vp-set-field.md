---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( _rangeObj_ : Object ; _field_ : Pointer { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| 引数            | タイプ    |    | 説明                  |                  |
| ------------- | ------ | -- | ------------------- | ---------------- |
| rangeObj      | Object | -> | レンジオブジェクト           |                  |
| フィールド         | ポインター  | -> | 仮想ストラクチャーのフィールドへの参照 |                  |
| formatPattern | Text   | -> | フィールドのフォーマット        | <!-- END REF --> |

#### 説明

`VP SET FIELD` コマンドは、<!-- REF #_method_.VP SET FIELD.Summary -->指定されたセルレンジに、4Dデータベースの仮想フィールドを割り当てます<!-- END REF -->。

_rangeObj_ には、値を割り当てたいセルのレンジを渡します。 _rangeObj_ 引数に複数のセルが含まれる場合、指定されたフィールドはそれぞれのセルに対して繰り返し割り当てられます。

_field_ 引数は、_rangeObj_ のレンジに対して割り当てられる 4Dデータベースの [仮想フィールド](../formulas.md#仮想ストラクチャーを使ったフィールド参照) を指定します。 フォーミュラバーには、_field_ の仮想ストラクチャー名が表示されます。 _rangeObj_ に含まれるセルに既存のコンテンツがあった場合、そのコンテンツは _field_ で上書きされます。

任意の _formatPattern_ 引数は、_field_ 引数に対するパターンを定義します。 有効な [カスタムフォーマット](../configuring.md#セルフォーマット) を渡すことができます。

#### 例題

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### 参照

[VP SET VALUE](vp-set-value.md)
