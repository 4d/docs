---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( {* ;} *object* ; *foregroundColor* {; *backgroundColor* {; *altBackgrndColor*}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| foregroundColor | Text, Integer | &#8592; | 描画色のRGBカラー値 |
| backgroundColor | Text, Integer | &#8592; | 背景色のRGBカラー値 |
| altBackgrndColor | Text, Integer | &#8592; | 奇数行の色のRGBカラー値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->OBJECT GET RGB COLORS コマンドは*object*で指定されたオブジェクトまたはオブジェクトグループの描画色や背景色を返します。<!-- END REF-->.

オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

このコマンドをリストボックスタイプのオブジェクトに適用すると、*altBackgrndColor* 引数に奇数行のカラー値が返されることがあります。この場合、*backgroundColor* の値は偶数行の背景色にのみ使用されます。

*foregroundColor*、*backgroundColor*、そして*altBackgrndColor* 引数に返されるRGBカラー値は、引数の型によって異なります:

* text 型の引数が渡された場合、カラーは"#rrggbb" シンタックスのCSS フォーマットで返されます。(例:"#0000FF")
* longint 型の引数が渡された場合、カラーは4バイトの倍長整数フォーマット(0x00RRGGBB)または"system" カラーに対応する負の値で返されます。

*foregroundColor*、*backgroundColor*、および*altBackgrndColor* 引数のフォーマットに関する詳細は[OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドを参照してください。

#### 参照 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1074 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


