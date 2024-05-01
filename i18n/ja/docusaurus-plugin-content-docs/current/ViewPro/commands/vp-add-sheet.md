---
id: vp-add-sheet
title: VP ADD SHEET
---

<!-- REF #_method_.VP ADD SHEET.Syntax -->

**VP ADD SHEET** ( _vpAreaName_ : Text )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _index_ : Integer )<br/>**VP ADD SHEET** ( _vpAreaName_ : Text ; _sheet_ : Integer ; _name_ : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

| 引数         | タイプ     |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| sheet      | Integer | -> | 新しいシートのインデックス           |                  |
| name       | Text    | -> | シート名                    | <!-- END REF --> |

#### 説明

`VP ADD SHEET` コマンドは、<!-- REF #_method_.VP ADD SHEET.Summary -->_vpAreaName_ にロードされているドキュメントにシートを挿入します。<!-- END REF -->

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

_sheet_ 引数として、新しいシートのインデックスを渡します。 渡した _index_ 引数が 0以下だった場合、コマンドは新しいシートを先頭に挿入します。 _index_ 引数がシートの総数より多い場合、コマンドは既存のシートの後に新しいシートを挿入します。

> インデックスは 0 起点です。

_name_ 引数として、新しいシートの名前を渡します。 新しい名前には、次の文字を含めることはできません: `*, :, [, ], ?,\,/`

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
