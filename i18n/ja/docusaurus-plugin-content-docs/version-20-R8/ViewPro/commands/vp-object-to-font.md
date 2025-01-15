---
id: vp-object-to-font
title: VP Object to font
---

<!-- REF #_method_.VP Object to font.Syntax -->

**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

| 引数      | 型      |                             | 説明              |                  |
| ------- | ------ | --------------------------- | --------------- | ---------------- |
| fontObj | Object | ->                          | フォントオブジェクト      |                  |
| 戻り値     | Text   | <- | フォントのショートハンド文字列 | <!-- END REF --> |

#### 説明

`VP Object to font` コマンドは、<!-- REF #_method_.VP Object to font.Summary -->*fontObj* 引数で指定したフォントオブジェクトからフォントのショートハンド文字列を返します<!-- END REF -->。

*fontObj* には、フォントプロパティを格納するオブジェクトを渡します。 以下のプロパティがサポートされています:

| プロパティ   | 型    | 説明                                                                                                                             | とりうる値                                                                                                                                                                                                                                                                                                                                                                                                                          | 必須 |
| ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -- |
| family  | テキスト | フォントを指定します。                                                                                                                    | 標準の、あるいは一般的なフォントファミリー。 例:  "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                                                                                   | ◯  |
| size    | テキスト | フォントのサイズを定義します。"font-size/line-height" の形で line-height をfont-size に追加することもできます: 例: "15pt/20pt" | 以下のいずれかの単位を伴う数値: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li>あるいは、以下の定数のいずれか 1つ:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | ◯  |
| style   | テキスト | フォントのスタイル。                                                                                                                     | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                                                                                | ×  |
| variant | テキスト | スモールキャピタルのフォントを定義します。                                                                                                          | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                                                                          | ×  |
| weight  | テキスト | フォントの太さを定義します。                                                                                                                 | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                                           | ×  |

このオブジェクトは [VP Font to object](vp-font-to-object.md) コマンドで作成することができます。

返されるショートハンド文字列は、たとえば [VP SET CELL STYLE](vp-set-cell-style.md) を使って、セルの "font" プロパティに割り当てることができます。

#### 例題

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
//$cellStyle.font には "bolder oblique small-caps 16pt arial" が格納されます
```

#### 参照

[4D View Pro スタイルオブジェクトとスタイルシート](../configuring.md#スタイルオブジェクトとスタイルシート)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
