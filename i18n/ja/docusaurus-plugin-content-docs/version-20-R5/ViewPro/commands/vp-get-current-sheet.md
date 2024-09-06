---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( _vpAreaName_ : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| 引数         | 型       |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| 戻り値        | Integer | <- | カレントシートのインデックス          | <!-- END REF --> |

#### 説明

`VP Get current sheet` コマンドは、<!-- REF #_method_.VP Get current sheet.Summary -->_vpAreaName_ 引数で指定した View Pro エリアのカレントシートのインデックスを返します。 カレントシートとは、ドキュメント内で選択されているシートのことです。<!-- END REF -->

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

> インデックスは 0 起点です。

#### 例題

3番目のシートが選択されている場合:

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

コマンドは 2 を返します:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### 参照

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
