---
id: vp-font-to-object
title: VP Font to object
---

<!-- REF #_method_.VP Font to object.Syntax -->

**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Font to object.Params -->

| 引数   | 型      |    | 説明              |
| ---- | ------ | -- | --------------- |
| font | テキスト   | -> | フォントのショートハンド文字列 |
| 戻り値  | オブジェクト | <- | フォントオブジェクト      |

<!-- END REF -->

#### 説明

`VP Font to object` ユーティリティコマンドは、<!-- REF #_method_.VP Font to object.Summary -->フォントのショートハンド文字列からオブジェクトを返します<!-- END REF -->。 このオブジェクトはその後、オブジェクト記法を通してフォントプロパティ設定を取得・設定するのに使用することができます。

*font* には、フォントのショートハンド文字列を渡してフォントのプロパティを指定します (例: "12 pt Arial")。 フォントのショートハンド文字列についての詳細は、[こちら](https://www.w3schools.com/cssref/pr_font_font.asp) を参照ください。

返されるオブジェクトには、フォント属性がプロパティとして格納されています。 利用可能なプロパティの詳細については、[VP Object to font](vp-object-to-font.md) コマンドを参照ください。

#### 例題 1

以下のコードを実行すると:

```4d
$font:=VP Font to object("16pt arial")
```

以下の $font オブジェクトが返されます:

```4d
{

family:arial
size:16pt
}
```

#### 例題 2

[`VP Object to font`](vp-object-to-font.md) の例題を参照ください。

#### 参照

[4D View Pro スタイルオブジェクトとスタイルシート](../configuring.md#スタイルオブジェクトとスタイルシート)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
