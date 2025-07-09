---
id: vp-copy-to-object
title: VP Copy to object
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

<!-- REF #_method_.VP Copy to object.Syntax -->

**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

| 引数       | 型      |                             | 説明                             |                  |
| -------- | ------ | --------------------------- | ------------------------------ | ---------------- |
| rangeObj | Object | ->                          | レンジオブジェクト                      |                  |
| options  | Object | ->                          | 追加のオプション                       |                  |
| 戻り値      | Object | <- | 返されるオブジェクト。 コピーされたデータが格納されています | <!-- END REF --> |

## 説明

`VP Copy to object` コマンドは、<!-- REF #_method_.VP Copy to object.Summary -->*rangeObj* のコンテンツ、スタイル、フォーミュラをオブジェクトにコピーします<!-- END REF -->。

*rangeObj* には、コピーしたい値、フォーマット、フォーミュラを格納しているセルレンジを渡します。 *rangeObj* が結合レンジの場合は、最初のものだけが使用されます。

任意の *options* 引数として、以下のプロパティを渡すことができます。

| プロパティ       | 型       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy        | Boolean | コマンド実行後もコピーされた値、書式、数式が保持するには *true* (デフォルト)。 削除するには *false*。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| copyOptions | Integer | コピーまたは移動する内容を指定します。 Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p> |

[ワークブックオプション](vp-set-workbook-options.md) で定義されている貼り付けオプションが考慮されます。

このコマンドは、コピーされたデータを含むオブジェクトを返します。

## 例題

あるレンジのコンテンツ、値、フォーマット、フォーミュラをオブジェクトに格納し、それを別のレンジに貼り付けます:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

## 参照

[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

