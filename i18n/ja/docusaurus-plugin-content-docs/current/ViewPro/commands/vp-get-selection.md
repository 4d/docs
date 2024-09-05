---
id: vp-get-selection
title: VP Get selection
---

<!-- REF #_method_.VP Get selection.Syntax -->

**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get selection.Params -->

| 引数         | 型      |    | 説明                                             |                  |
| ---------- | ------ | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名                     |                  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | オブジェクト | <- | 複数セルのレンジオブジェクト                                 | <!-- END REF --> |

#### 説明

`VP Get selection` コマンドは、<!-- REF #_method_.VP Get selection.Summary -->現在選択されているセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

![](../../assets/en/ViewPro/cmd_vpGetSelection.PNG)

以下のコードを実行すると、現在選択されているセルの座標がすべて取得できます:

```4d
$currentSelection:=VP Get selection("myVPArea")


// 返されるレンジオブジェクトには以下が格納されています:
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### 参照

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
