---
id: vp-remove-sheet
title: VP REMOVE SHEET
---

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( _vpAreaName_ : Text ; _index_: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| 引数         | タイプ     |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| index      | Integer | -> | 削除するシートのインデックス          | <!-- END REF --> |

#### 説明

`VP REMOVE SHEET` コマンドは、<!-- REF #_method_.VP REMOVE SHEET.Summary -->_vpAreaName_ 引数で指定したエリアにロードされているドキュメントから、_index_ 引数で指定したインデックスのシートを削除します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

_index_ 引数には、削除したいシートのインデックスを渡します。 _index_ 引数に渡したインデックスが存在しない場合、このコマンドは何もしません。

> インデックスは 0 起点です。

#### 例題

ドキュメントには現在 3つのシートがあります:

![](../../assets/en/ViewPro/vp-sheet-3.png)

3つ目のシートを削除します:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

#### 参照

[VP ADD SHEET](vp-add-sheet.md)
