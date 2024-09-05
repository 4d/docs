---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| 引数         | 型    |    | 説明                                                        |                  |
| ---------- | ---- | -- | --------------------------------------------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名                                   |                  |
| visible    | ブール  | -> | 印刷線を表示する場合は true (デフォルト)、非表示の場合は false |                  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート)            | <!-- END REF --> |

#### 説明

`VP SET SHOW PRINT LINES` コマンドは、<!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> スプレッドシート内で印刷プレビュー線を表示するかどうかを設定します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*visible* には、印刷線を表示するには `True`、非表示にするには `False` を渡します。 デフォルトでは `True` が渡されます。

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

スプレッドシートの印刷線の位置は、スプレッドシートの改ページの位置によって変化します。

#### 例題

以下のコードはドキュメントの 2番目のシートの印刷線を表示させます:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

改ページがある場合:

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### 参照

[VP Get show print lines](vp-get-show-print-lines.md)
