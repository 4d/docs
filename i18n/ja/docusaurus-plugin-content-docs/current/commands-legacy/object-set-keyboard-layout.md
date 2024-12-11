---
id: object-set-keyboard-layout
title: OBJECT SET KEYBOARD LAYOUT
slug: /commands/object-set-keyboard-layout
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Syntax-->**OBJECT SET KEYBOARD LAYOUT** ( {* ;} *object* ; *languageCode* )<!-- END REF-->
<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| languageCode | Text | &#8594;  | RFC3066 ISO639 そして ISO3166 言語コード<br/>"" = 変更しない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET KEYBOARD LAYOUT.Summary-->**OBJECT SET KEYBOARD LAYOUT**コマンドは*object* と*\** 引数で指定したオブジェクトに割り当てられたキーボードレイアウトをカレントプロセス内で動的に変更します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

*languageCode* には使用する言語の (RFC3066、ISO639、そしてISO3166に基づく) コードを示す文字列を渡します。詳細は[SET DATABASE LOCALIZATION](set-database-localization.md)コマンドの説明を参照してください。

#### 参照 

[OBJECT Get keyboard layout](object-get-keyboard-layout.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1179 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


