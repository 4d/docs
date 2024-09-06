---
id: vp-remove-sheet
title: VP REMOVE SHEET
---

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| 引数         | 型       |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| index      | Integer | -> | 削除するシートのインデックス          | <!-- END REF --> |

#### 説明

`VP REMOVE SHEET` コマンドは、<!-- REF #_method_.VP REMOVE SHEET.Summary -->*vpAreaName* 引数で指定したエリアにロードされているドキュメントから、*index* 引数で指定したインデックスのシートを削除します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*index* 引数には、削除したいシートのインデックスを渡します。 *index* 引数に渡したインデックスが存在しない場合、このコマンドは何もしません。

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
