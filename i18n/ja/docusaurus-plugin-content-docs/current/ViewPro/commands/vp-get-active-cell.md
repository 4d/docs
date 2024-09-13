---
id: vp-get-active-cell
title: VP Get active cell
---

<!-- REF #_method_.VP Get active cell.Syntax -->

**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get active cell.Params -->

| 引数         | 型       |                             | 説明                                             |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                        |                  |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Object  | <- | 単一セルのレンジオブジェクト                                 | <!-- END REF --> |

#### 説明

`VP Get active cell` コマンドは、<!-- REF #_method_.VP Get active cell.Summary -->フォーカスを持ち、データ入力されようとしてるセル (アクティブセル) を参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

![](../../assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

以下のコードを実行するとアクティブセルの座標が取得できます:

```4d
$activeCell:=VP Get active cell("myVPArea")

  // 返されるレンジオブジェクトには以下が格納されています:
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### 参照

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
