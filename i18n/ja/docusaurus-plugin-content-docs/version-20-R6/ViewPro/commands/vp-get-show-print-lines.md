---
id: vp-get-show-print-lines
title: VP Get show print lines
---

<!-- REF #_method_.VP Get show print lines.Syntax -->

**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

| 引数         | 型       |                             | 説明                            |                  |
| ---------- | ------- | --------------------------- | ----------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名       |                  |
| sheet      | Integer | <- | シートのインデックス                    |                  |
| 戻り値        | Boolean | <- | 印刷線が表示状態であれば true、それ以外は false | <!-- END REF --> |

#### 説明

`VP Get show print lines` コマンドは、<!-- REF #_method_.VP Get show print lines.Summary -->印刷プレビューの線が表示状態であれば `true` を、非表示であれば `false` を返します。<!-- END REF -->

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 *sheet* が省略された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

#### 例題

以下のコードは、ドキュメントの印刷プレビュー線の表示状態をチェックします:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### 参照

[VP SET SHOW PRINT LINES](vp-set-show-print-lines.md)
