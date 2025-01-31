---
id: object-get-font-style
title: OBJECT Get font style
slug: /commands/object-get-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font style.Syntax-->**OBJECT Get font style** ( * ; *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font style.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) 、<br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)、またはフィールドまたは変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | フォントスタイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get font style.Summary-->OBJECT Get font style コマンドは、*object*で指定されたフォームオブジェクトで使用されている文字フォントの現在のスタイルを返します。<!-- END REF-->. 

オプションの *\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

返される値を"*Font Styles*"テーマの定義済み定数と比較することができます:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Plain     | 倍長整数 | 0 |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Underline | 倍長整数 | 4 |

#### 参照 

[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1071 |
| スレッドセーフである | &cross; |


