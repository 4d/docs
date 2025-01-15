---
id: vp-set-sheet-count
title: VP SET SHEET COUNT
---

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->

**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| 引数         | 型       |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| number     | Integer | -> | シートの数                   | <!-- END REF --> |

#### 説明

`VP SET SHEET COUNT` コマンドは、<!-- REF #_method_.VP SET SHEET COUNT.Summary -->*vpAreaName* 引数で指定した View Pro エリア内のシートの数を設定します<!-- END REF -->。

`number` 引数には、コマンド実行後にドキュメントが格納するシート数を指定する数値を渡します。

> **警告**: このコマンドは、現在のシート数より少ない数字を渡した場合にはシートを削除します。 たとえば、ドキュメント内にシートが 5つあり、このコマンドでシートを 3つに設定した場合には、シート4 と 5 は削除されます。

#### 例題

ドキュメントには現在シートが 1つあります:

![](../../assets/en/ViewPro/vp-sheet-1.png)

シート数を 3つに設定します:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

#### 参照

[VP Get sheet count](vp-get-sheet-count.md)
