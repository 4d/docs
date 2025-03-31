---
id: vp-set-table-theme
title: VP SET TABLE THEME
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R8 | 追加 |

</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->

**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

| 引数         | 型                                                                                 |    | 説明                                             |
| ---------- | --------------------------------------------------------------------------------- | -- | ---------------------------------------------- |
| vpAreaName | Text                                                                              | -> | 4D View Pro フォームオブジェクト名                        |
| tableName  | Text                                                                              | -> | Table name                                     |
| options    | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | -> | 設定する表テーマのプロパティ                                 |
| sheet      | Integer                                                                           | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->

#### 説明

`VP SET TABLE THEME` コマンドは、<!-- REF #_method_.VP SET TABLE THEME.Summary -->*tableName* の表の現在のテーマを変更します<!-- END REF -->。

*vpAreaName* には 4D View Pro エリアの名前を渡します。*tableName* には変更する表の名前を渡します。

*options* には、設定するテーマプロパティを格納する [`cs.ViewPro.TableTheme` クラス](../classes.md#tabletheme) のオブジェクトを渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、または -1 が渡された場合、コマンドはカレントシートに対して適用されます。

#### 例題 1

あらかじめ定義されたテーマを表に設定します:

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

#### 例題 2

交互の列表示を設定します:

![](../../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// 交互の列の表示を有効にします
$param.bandColumns:=True
$param.bandRows:=False

// ヘッダーと列のスタイル用のテーマオブジェクトを作成します
$param.theme:=cs.ViewPro.TableThemeOptions.new()

var $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle

$styleHeader:=cs.ViewPro.TableStyle.new()
$styleHeader.backColor:="Gold"
$styleHeader.foreColor:="#03045E"
$param.theme.headerRowStyle:=$styleHeader

$styleColumn1:=cs.ViewPro.TableStyle.new()
$styleColumn1.backColor:="SkyBlue"
$styleColumn1.foreColor:="#03045E"
$param.theme.firstColumnStripStyle:=$styleColumn1

$styleColumn2:=cs.ViewPro.TableStyle.new()
$styleColumn2.backColor:="LightCyan"
$styleColumn2.foreColor:="#03045E"
$param.theme.secondColumnStripStyle:=$styleColumn2

VP SET TABLE THEME("ViewProArea"; "myTable"; $param)

```

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table theme](vp-get-table-theme.md)
