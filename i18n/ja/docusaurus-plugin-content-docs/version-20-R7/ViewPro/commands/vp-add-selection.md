---
id: vp-add-selection
title: VP ADD SELECTION
---

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

| 引数       | 型    |    | 説明        |                  |
| -------- | ---- | -- | --------- | ---------------- |
| rangeObj | テキスト | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP ADD SELECTION` コマンドは、<!-- REF #_method_.VP ADD SELECTION.Summary -->指定されたセルを、現在選択されているセル範囲に追加します<!-- END REF -->。

*rangeObj* には、カレントセレクションに追加するセルのレンジオブジェクトを渡します。

> アクティブセルは変更されません。

#### 例題

以下のようにセルが選択されている場合:

![](../../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

以下のコードを実行すると、指定したセルを選択範囲に追加します:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

結果:

![](../../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### 参照

[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
