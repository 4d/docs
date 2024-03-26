---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( _rangeObj_ : Object ; _dataObject_ : Object {; _options_ : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| 引数         | タイプ     |    | 説明                   |                  |
| ---------- | ------- | -- | -------------------- | ---------------- |
| rangeObj   | Object  | -> | セルレンジオブジェクト          |                  |
| dataObject | Object  | -> | ペーストするデータを格納したオブジェクト |                  |
| options    | Longint | -> | ペーストする内容を指定します       | <!-- END REF --> |

#### 説明

`VP PASTE FROM OBJECT` コマンドは、<!-- REF #_method_.PASTE FROM OBJECT.Summary -->_dataObject_ のコンテンツ・スタイル・フォーミュラを _rangeObj_ セルレンジオブジェクトにペーストします<!-- END REF -->。

_rangeObj_ には、値・フォーマット・フォーミュラをペーストする先のセルレンジオブジェクトを渡します。 _rangeObj_ が複数のセルを参照している場合は、最初のセルだけが使用されます。

_dataObject_ には、ペーストしたい値・フォーマット・フォーミュラを格納しているオブジェクトを渡します。

任意の _options_ 引数を渡して、セルレンジにペーストする内容を指定することができます。 とりうる値:

| 定数                                             | 説明                                       |
| ---------------------------------------------- | ---------------------------------------- |
| `vk clipboard options all`                     | 値・フォーマット・フォーミュラを含むすべてのデータオブジェクトをペーストします。 |
| `vk clipboard options formatting`              | フォーマットだけをペーストします。                        |
| `vk clipboard options formulas`                | フォーミュラだけをペーストします。                        |
| `vk clipboard options formulas and formatting` | フォーミュラとフォーマットをペーストします。                   |
| `vk clipboard options values`                  | 値だけをペーストします。                             |
| `vk clipboard options value and formatting`    | 値とフォーマットをペーストします。                        |

[ワークブックオプション](vp-set-workbook-options.md) で定義されている貼り付けオプションが考慮されます。

dataObject に存在しない要素を _options_ で指定した場合 (例: フォーミュラ) コマンドはなにもしません。

#### 例題

[VP Copy to object](vp-copy-to-object.md) の例題を参照ください。

#### 参照

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
