---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( _vpAreaName_ : Text ; _tableName_ : Text {; _onlyData_ : Integer {; _sheet_ : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| 引数         | 型       |    | 説明                                                                         |                  |
| ---------- | ------- | -- | -------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                                                    |                  |
| tableName  | Text    | -> | Table name                                                                 |                  |
| onlyData   | Integer | -> | `vk table full range` (デフォルト) または `vk table data range` |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート)                             |                  |
| 戻り値        | Object  | <- | 表組みが含まれるレンジ                                                                | <!-- END REF --> |

#### 説明

`VP Get table range` コマンドは、<!-- REF #_method_.VP Get table range.Summary -->_tableName_ で指定した表組みが含まれるレンジを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

_onlyData_ 引数に次のいずれかの定数を渡すことで、データ部のみを対象とするかを指定できます:

| 定数                    | 値 | 説明                                                                   |
| --------------------- | - | -------------------------------------------------------------------- |
| `vk table full range` | 0 | フッターとヘッダーを含む表組みの全エリアを含むセルレンジを取得します (省略した場合のデフォルト) |
| `vk table data range` | 1 | 表組みのデータエリアのみを含むセルレンジを取得します                                           |

_sheet_ には、ターゲットシートのインデックスを渡します。 index が省略された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

_tableName_ に指定した名称の表組みが見つからない場合、コマンドは **null** を返します。

#### 参照

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
