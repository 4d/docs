---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| 引数         | 型      |    | 説明                                           |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                      |                  |
| styleObj   | オブジェクト | -> | スタイルオブジェクト                                   |                  |
| sheet      | 整数     | -> | シートインデックス (デフォルト=カレントシート) | <!-- END REF --> |

#### 説明

`VP SET DEFAULT STYLE` コマンドは、<!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->*sheet* で指定したシートに対して、*styleObj* 引数のスタイルをデフォルトスタイルとして定義します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*styleObj* にはスタイル設定を格納したオブジェクトを渡します。 既存のスタイルシートを使用することもできますし、新しいスタイルを作成することも可能です。 詳細については、[スタイルオブジェクト](../configuring.md#スタイルオブジェクト) を参照ください。

任意の *sheet* 引数として、シートのインデックスを渡すことで、スタイルが定義されるスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" // 薄い紫色

VP SET DEFAULT STYLE("myDoc";$style)
```

![](../../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### 参照

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get default style](vp-get-default-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
