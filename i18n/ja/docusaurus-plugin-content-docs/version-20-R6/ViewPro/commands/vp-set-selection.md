---
id: vp-set-selection
title: VP SET SELECTION
---

<!-- REF #_method_.VP SET SELECTION.Syntax -->

**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET SELECTION.Params -->

| 引数       | 型      |    | 説明             |                  |
| -------- | ------ | -- | -------------- | ---------------- |
| rangeObj | Object | -> | 複数セルのレンジオブジェクト | <!-- END REF --> |

#### 説明

`VP SET SELECTION` コマンドは、<!-- REF #_method_.VP SET SELECTION.Summary -->指定のセルレンジを選択し、その先頭セルをアクティブセルに設定します<!-- END REF -->。

*rangeObj* には、カレントセレクションとして定義するセルのレンジオブジェクトを渡します。

#### 例題

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](../../assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### 参照

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP ADD SELECTION](vp-add-selection)<br/>
[VP SHOW CELL](vp-show-cell.md)
