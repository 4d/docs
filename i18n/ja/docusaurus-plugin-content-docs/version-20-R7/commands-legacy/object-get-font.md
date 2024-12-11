---
id: object-get-font
title: OBJECT Get font
slug: /commands/object-get-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font.Syntax-->**OBJECT Get font** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get font.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または、フィールドまたは変数 (* 省略時) |
| 戻り値 | Text | &#8592; | フォント名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get font.Summary-->**OBJECT Get font**コマンドは *object*指定されたフォームオブジェクトで使用されている文字フォントの名前を返します。<!-- END REF-->

オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

#### 参照 

[OBJECT SET FONT](object-set-font.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1069 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


