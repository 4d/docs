---
id: vp-set-sheet-options
title: VP SET SHEET OPTIONS
---

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->

**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| 引数           | 型      |    | 説明                                             |                  |
| ------------ | ------ | -- | ---------------------------------------------- | ---------------- |
| vpAreaName   | オブジェクト | -> | 4D View Pro エリア名                               |                  |
| sheetOptions | オブジェクト | -> | 設定するシートオプション                                   |                  |
| sheet        | オブジェクト | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP SET SHEET OPTIONS` コマンドは、<!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->*vpAreaName* 引数で名前を指定した View Pro エリアの様々なシートオプションを設定します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*sheetOptions* には、設定するオプションの定義を格納したオブジェクトを渡します。 利用可能なオプション一覧については、[シートオプション](../configuring.md#シートオプション) を参照ください。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、スプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題 1

C5:D10 のレンジ以外のセルをすべて保護します:

```4d
// カレントシートでセルの保護を有効化します
var $options : Object

$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)

// C5:D10 を 'unlocked' に設定します
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```

#### 例題 2

ドキュメントを保護しつつ、ユーザーが行とカラムをリサイズできるようにします:

```4d
var $options : Object

$options:=New object
// 保護を有効化します
$options.isProtected:=True
$options.protectionOptions:=New object
// ユーザーに行のリサイズを許可します
$options.protectionOptions.allowResizeRows=True;
// ユーザーにカラムのリサイズを許可します
$options.protectionOptions.allowResizeColumns=True;

// カレントシートに上記の設定での保護を適用します
VP SET SHEET OPTIONS("ViewProArea";$options)
```

#### 例題 3

シートのタブ、固定化された線、枠線、選択範囲の背景と選択範囲の境界線のカラーをカスタマイズします:

```4d
var $options : Object

$options:=New object
// Sheet1 のタブのカラーをカスタマイズします
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"

VP SET SHEET OPTIONS("ViewProArea";$options;0)

// Sheet2 のタブのカラーをカスタマイズします
$options.sheetTabColor:="red"

VP SET SHEET OPTIONS("ViewProArea";$options;1)

// Sheet3 のタブのカラーをカスタマイズします
$options.sheetTabColor:="blue"

VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

結果:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### 例題 4

枠線と、行ヘッダー/カラムヘッダーを非表示にします:

```4d
var $options : Object

$options:=New object

$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False

VP SET SHEET OPTIONS("ViewProArea";$options)
```

結果:

![](../../assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### 参照

[4D View Pro シートオプション](../configuring.md#シートオプション)<br/>
[VP Get sheet options](vp-get-sheet-options.md)
