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

**VP MOVE CELLS** ( _originRange_ : Object ; _targetRange_ : Object ; _options_ : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| 引数          | タイプ    |    | 説明                                           |                  |
| ----------- | ------ | -- | -------------------------------------------- | ---------------- |
| originRange | Object | -> | 移動 (コピー) 元のセルレンジ          |                  |
| targetRange | Object | -> | 値・書式・フォーミュラの移動 (コピー) 先レンジ |                  |
| options     | Object | -> | 追加のオプション                                     | <!-- END REF --> |

#### 説明

`VP MOVE CELLS` コマンドは、<!-- REF #_method_.VP MOVE CELLS.Summary -->_originRange_ の値・書式・フォーミュラを _targetRange_ に移動またはコピーします<!-- END REF -->。

_originRange_ と _targetRange_ は異なる 4D View Pro エリアを参照することができます。

_originRange_ には、移動またはコピーする値・書式・フォーミュラが格納されているレンジオブジェクトを渡します。 _originRange_ が結合レンジの場合は、最初のものだけが使用されます。

_targetRange_ には、値・書式・フォーミュラのコピー先または移動先であるターゲットレンジを渡します。

_options_ は、複数のプロパティを持ちます:

| プロパティ        | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | _originRange_ のセルの値・書式・フォーミュラをコマンド実行後に削除するかどうかを指定します:<ul><li>削除するには _false_ (デフォルト)。</li><li>保持するには _true_。</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| pasteOptions | Longint | ペーストする内容を指定します。 とりうる値: <p><table><tr><th>値</th><th>説明</th></tr><tr><td>`vk clipboard options all` (デフォルト)</td><td>値・フォーマット・フォーミュラを含むすべてのデータオブジェクトをペーストします。</td></tr><tr><td>`vk clipboard options formatting`</td><td>フォーマットだけをペーストします。</td></tr><tr><td>`vk clipboard options formulas`</td><td>フォーミュラだけをペーストします。</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>フォーミュラとフォーマットをペーストします。</td></tr><tr><td>`vk clipboard options values`</td><td>値だけをペーストします。</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>値とフォーマットをペーストします。</td></tr></table></p> |

[ワークブックオプション](vp-set-workbook-options.md) で定義されている貼り付けオプションが考慮されます。

#### 例題

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

#### 参照

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
