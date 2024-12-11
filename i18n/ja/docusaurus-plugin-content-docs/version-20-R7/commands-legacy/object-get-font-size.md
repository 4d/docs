---
id: object-get-font-size
title: OBJECT Get font size
slug: /commands/object-get-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font size.Syntax-->**OBJECT Get font size** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font size.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または、フィールドまたは変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | ポイント単位のフォントサイズ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get font size.Summary-->OBJECT Get font size コマンドは*object*で指定されたフォームオブジェクトで使用されている文字フォントのサイズをポイント単位で返します。<!-- END REF--> . 

オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。 

#### 参照 

[OBJECT SET FONT SIZE](object-set-font-size.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1070 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


