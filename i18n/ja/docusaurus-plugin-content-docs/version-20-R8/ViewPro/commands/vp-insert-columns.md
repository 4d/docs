---
id: vp-insert-columns
title: VP INSERT COLUMNS
---

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->

**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP INSERT COLUMNS` コマンドは、<!-- REF #_method_.VP INSERT COLUMNS.Summary -->*rangeObj* 引数で指定したレンジにカラムを挿入します<!-- END REF -->。

*rangeObj* には、開始カラム (新しいカラムが挿入される場所を指定するカラム) と挿入するカラムの数を格納したオブジェクトを渡します。 挿入するカラムの数が省略された場合 (定義されていない場合)、カラムは 1列だけ挿入されます。

新しいカラムは、*rangeObj* 引数で指定した開始カラムの直前 (すぐ左側) に挿入されます。

#### 例題

2番目のカラムの前にカラムを3列挿入します:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

このようになります:

![](../../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### 参照

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
