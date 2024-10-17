---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| 引数            | 型       |    | 説明                  |                  |
| ------------- | ------- | -- | ------------------- | ---------------- |
| rangeObj      | Object  | -> | レンジオブジェクト           |                  |
| field         | Pointer | -> | 仮想ストラクチャーのフィールドへの参照 |                  |
| formatPattern | Text    | -> | フィールドのフォーマット        | <!-- END REF --> |

#### 説明

`VP SET FIELD` コマンドは、<!-- REF #_method_.VP SET FIELD.Summary -->指定されたセルレンジに、4Dデータベースの仮想フィールドを割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジを渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定されたフィールドはそれぞれのセルに対して繰り返し割り当てられます。

*field* 引数は、*rangeObj* のレンジに対して割り当てられる 4Dデータベースの [仮想フィールド](../formulas.md#仮想ストラクチャーを使ったフィールド参照) を指定します。 フォーミュラバーには、*field* の仮想ストラクチャー名が表示されます。 *rangeObj* に含まれるセルに既存のコンテンツがあった場合、そのコンテンツは *field* で上書きされます。

任意の *formatPattern* 引数は、*field* 引数に対するパターンを定義します。 有効な [カスタムフォーマット](../configuring.md#セルフォーマット) を渡すことができます。

#### 例題

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### 参照

[VP SET VALUE](vp-set-value.md)
