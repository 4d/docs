---
id: vp-get-table-theme
title: VP Get table theme
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R8 | 追加 |

</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( *vpAreaName* : Text ; *tableName* : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| 引数         | 型                                                                                 |    | 説明                      |                  |
| ---------- | --------------------------------------------------------------------------------- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト                                                                              | -> | 4D View Pro フォームオブジェクト名 |                  |
| tableName  | テキスト                                                                              | -> | Table name              |                  |
| 戻り値        | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | 現在の表テーマのプロパティ値          | <!-- END REF --> |

#### 説明

`VP Get table theme` コマンドは、<!-- REF #_method_.VP Get table theme.Summary -->*tableName* で指定した表組みの現在のテーマのプロパティ値を返します<!-- END REF -->。 表組みのテーマは、[`VP CREATE TABLE`](vp-create-table.md) または [`VP SET TABLE THEME`](vp-set-table-theme.md) コマンド、もしくはインターフェースから設定することができます。

*vpAreaName* には 4D View Pro エリアの名前を渡します。*tableName* には表組みの名前を渡します。

このコマンドは、現在の表テーマを記述するプロパティと値を格納する、[cs.ViewPro.TableTheme](../classes.md#tabletheme) クラスのオブジェクトを返します。

#### 例題

このコマンドは、テーマの定義に [ネイティブSpreadJSテーマ](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) の名前が使用された場合でも、完全な `theme` オブジェクトを返します。

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="dark10" // ネイティブテーマ名を使用します

VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) // true
```

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
