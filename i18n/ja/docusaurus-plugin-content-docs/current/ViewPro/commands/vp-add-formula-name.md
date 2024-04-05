---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( _vpAreaName_ : Text ; _vpFormula_ : Text ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| 引数         | タイプ    |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| vpFormula  | Text   | -> | 4D View Pro フォーミュラ      |                  |
| name       | Text   | -> | フォーミュラの名称               |                  |
| options    | Object | -> | 命名フォーミュラのオプション          | <!-- END REF --> |

#### 説明

`VP ADD FORMULA NAME` コマンドは、<!-- REF #_method_.VP ADD FORMULA NAME.Summary -->開いているドキュメント内において命名されたフォーミュラを作成、または編集します<!-- END REF -->。

> このコマンドで作成された命名フォーミュラはドキュメントとともに保存されます。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_vpFormula_ には、命名する 4D View Pro フォーミュラを渡します。 フォーミュラシンタックスの詳細については、[式と関数](../formulas.md) ページを参照ください。

名前をつけたいレンジを rangeObj に、新しいレンジの名前は _name_ に渡します。 同じスコープ内で名前が既に使用されている場合、新しい命名レンジは既存のものを上書きします。 ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

_options_ 引数には、命名フォーミュラの追加プロパティを格納したオブジェクト型を渡すことができます。 以下のプロパティがサポートされています:

| プロパティ   | タイプ    | 説明                                                                                                                                                                                                                                                                                                                     |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope   | Number | フォーミュラのスコープ。 シートのインデックス (0起点) を渡すか、あるいは以下の定数を使用することができます: <li>`vk current sheet`</li><li>`vk workbook`</li>スコープは、フォーミュラ名が特定のワークシートに限定されたローカル (_scope_ = シートのインデックス または `vk current sheet`) なものか、あるいはワークブック全体で使用できるグローバル (_scope_ = `vk workbook`) なものかを決定します。 |
| comment | Text   | 命名フォーミュラに割り当てられたコメント                                                                                                                                                                                                                                                                                                   |

#### 例題

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### 参照

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)
