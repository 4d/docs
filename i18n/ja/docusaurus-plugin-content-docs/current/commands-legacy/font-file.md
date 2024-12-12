---
id: font-file
title: Font file
slug: /commands/font-file
displayed_sidebar: docs
---

<!--REF #_command_.Font file.Syntax-->**Font file** ( *fontFamily* {; *fontStyle*} ) : any<!-- END REF-->
<!--REF #_command_.Font file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fontFamily | Text | &#8594;  | フォントファミリー名 |
| fontStyle | Integer | &#8594;  | フォントスタイル: 0=通常 (デフォルト)、1=太字、2=斜体字 |
| 戻り値 | Null, Object | &#8592; | フォントファイルオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Font file.Summary-->**Font file** コマンドは、*fontFamily* 引数で指定したフォントファミリーに対応するOS 内にあるフォントファイルの詳細を格納したオブジェクトを返します。<!-- END REF-->また、*fontStyle* 引数で取得するフォントスタイルを指定することもできます。

*fontFamily* 引数で指定したフォントファミリーがOS にインストールされていない場合、コマンドは*Null* オブジェクトを返します。

任意の*fontStyle* 引数を使用すると、取得するスタイルバリエーションを定義することができます。*Font Styles* テーマにある以下の定数の一つ、またはこれらの組み合わせを渡すことができます(それ以外の値は無視されます):

| 定数     | 型    | 値 |
| ------ | ---- | - |
| Bold   | 倍長整数 | 1 |
| Italic | 倍長整数 | 2 |
| Plain  | 倍長整数 | 0 |

#### 例題 

テキストエリア内で使用されているフォントが正しく表示されるために、ユーザーシステム上で利用可能かどうかを確認したい場合を考えます:

```4d
 var $fontName : Text
 var $fontStyle : Integer
 var $fontFile : Object
 $fontName:=OBJECT Get font(*;"vText")
 $fontStyle:=OBJECT Get font style(*;"vText")
 $fontFile:=Font file($fontName;$fontStyle)
 If($fontFile=Null)
    ALERT("Defined font is not available, please install: "+$fontName)
 End if
```

#### 参照 

[OBJECT SET FONT](object-set-font.md)  