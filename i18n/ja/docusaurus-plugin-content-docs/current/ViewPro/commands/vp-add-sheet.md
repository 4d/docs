---
id: vp-add-sheet
title: VP ADD SHEET
---

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( *vpAreaName* : Text )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *sheet* : Integer ; *name* : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |                  |
| sheet      | 整数   | -> | 新しいシートのインデックス           |                  |
| name       | テキスト | -> | シート名                    | <!-- END REF --> |

#### 説明

`VP ADD SHEET` コマンドは、<!-- REF #_method_.VP ADD SHEET.Summary -->*vpAreaName* にロードされているドキュメントにシートを挿入します。<!-- END REF -->

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* 引数として、新しいシートのインデックスを渡します。 渡した *index* 引数が 0以下だった場合、コマンドは新しいシートを先頭に挿入します。 *index* 引数がシートの総数より多い場合、コマンドは既存のシートの後に新しいシートを挿入します。

> インデックスは 0 起点です。

*name* 引数として、新しいシートの名前を渡します。 新しい名前には、次の文字を含めることはできません: `*, :, [, ], ?,\,/`

#### 例題

ドキュメントには現在 3つのシートがあります:

![vp-document-with-3-sheets](../../assets/en/ViewPro/vp-sheet-3.png)

新しいシートを 3つ目の位置 (インデックスは 2) に挿入し、名前を "March" にします:

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../../assets/en/ViewPro/vp-add-sheet.png)

#### 参照

[VP REMOVE SHEET](vp-remove-sheet.md)
