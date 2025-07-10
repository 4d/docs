---
id: vp-move-cells
title: VP MOVE CELLS
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->

**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| 引数          | 型      |    | 説明                                           |                  |
| ----------- | ------ | -- | -------------------------------------------- | ---------------- |
| originRange | Object | -> | 移動 (コピー) 元のセルレンジ          |                  |
| targetRange | Object | -> | 値・書式・フォーミュラの移動 (コピー) 先レンジ |                  |
| options     | Object | -> | 追加のオプション                                     | <!-- END REF --> |

## 説明

`VP MOVE CELLS` コマンドは、<!-- REF #_method_.VP MOVE CELLS.Summary -->*originRange* の値・書式・フォーミュラを *targetRange* に移動またはコピーします<!-- END REF -->。

*originRange* と *targetRange* は異なる 4D View Pro エリアを参照することができます。

*originRange* には、移動またはコピーする値・書式・フォーミュラが格納されているレンジオブジェクトを渡します。 *originRange* が結合レンジの場合は、最初のものだけが使用されます。

*targetRange* には、値・書式・フォーミュラのコピー先または移動先であるターゲットレンジを渡します。

*options* は、複数のプロパティを持ちます:

| プロパティ        | 型       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | *originRange* のセルの値・書式・フォーミュラをコマンド実行後に削除するかどうかを指定します:<ul><li>削除するには *false* (デフォルト)。</li><li>保持するには *true*。</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| pasteOptions | Integer | ペーストする内容を指定します。 Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pastes only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pastes only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pastes the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Pastes only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pastes the values and formatting.</td></tr></table></p> |

[ワークブックオプション](vp-set-workbook-options.md) で定義されている貼り付けオプションが考慮されます。

## 例題

内容・値・書式・フォーミュラをコピーします:

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```

## 参照

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)