---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |                  |
| sheet      | 整数   | <- | 新しいカレントシートのインデックス       | <!-- END REF --> |

#### 説明

`VP SET CURRENT SHEET` コマンドは、<!-- REF #_method_.VP SET CURRENT SHEET.Summary -->*vpAreaName* 引数で指定した View Pro エリアのカレントシートを設定します<!-- END REF --> 。 カレントシートとは、ドキュメント内で選択されているシートのことです。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* 引数には、カレントシートに設定したいシートのインデックスを渡します。 index 引数が 0未満の場合、またはシートの総数より多い場合、コマンドは何もしません。

> インデックスは 0 起点です。

#### 例題

ドキュメントの最初のシートがカレントシートになっています:

![first-sheet-selected](../../assets/en/ViewPro/vp-sheet-3-select.png)

カレントシートを第3シートに設定します:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### 参照

[VP Get current sheet](vp-get-current-sheet.md)
