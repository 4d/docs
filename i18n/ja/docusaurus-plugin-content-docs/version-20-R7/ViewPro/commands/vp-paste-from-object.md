---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| 引数         | 型      |    | 説明                   |                  |
| ---------- | ------ | -- | -------------------- | ---------------- |
| rangeObj   | オブジェクト | -> | セルレンジオブジェクト          |                  |
| dataObject | オブジェクト | -> | ペーストするデータを格納したオブジェクト |                  |
| options    | 倍長整数   | -> | ペーストする内容を指定します       | <!-- END REF --> |

#### 説明

`VP PASTE FROM OBJECT` コマンドは、<!-- REF #_method_.PASTE FROM OBJECT.Summary -->*dataObject* のコンテンツ・スタイル・フォーミュラを *rangeObj* セルレンジオブジェクトにペーストします<!-- END REF -->。

*rangeObj* には、値・フォーマット・フォーミュラをペーストする先のセルレンジオブジェクトを渡します。 *rangeObj* が複数のセルを参照している場合は、最初のセルだけが使用されます。

*dataObject* には、ペーストしたい値・フォーマット・フォーミュラを格納しているオブジェクトを渡します。

任意の *options* 引数を渡して、セルレンジにペーストする内容を指定することができます。 とりうる値:

| 定数                                             | 説明                                       |
| ---------------------------------------------- | ---------------------------------------- |
| `vk clipboard options all`                     | 値・フォーマット・フォーミュラを含むすべてのデータオブジェクトをペーストします。 |
| `vk clipboard options formatting`              | フォーマットだけをペーストします。                        |
| `vk clipboard options formulas`                | フォーミュラだけをペーストします。                        |
| `vk clipboard options formulas and formatting` | フォーミュラとフォーマットをペーストします。                   |
| `vk clipboard options values`                  | 値だけをペーストします。                             |
| `vk clipboard options value and formatting`    | 値とフォーマットをペーストします。                        |

[ワークブックオプション](vp-set-workbook-options.md) で定義されている貼り付けオプションが考慮されます。

dataObject に存在しない要素を *options* で指定した場合 (例: フォーミュラ) コマンドはなにもしません。

#### 例題

[VP Copy to object](vp-copy-to-object.md) の例題を参照ください。

#### 参照

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
