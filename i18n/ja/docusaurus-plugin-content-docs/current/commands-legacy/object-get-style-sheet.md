---
id: object-get-style-sheet
title: OBJECT Get style sheet
slug: /commands/object-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get style sheet.Syntax-->**OBJECT Get style sheet** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get style sheet.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Text | &#8592; | スタイルシート名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get style sheet.Summary-->**OBJECT Get style sheet**コマンドは、引数 *object* と *\** で指定したオブジェクトに関連付けられたスタイルシートの名前を返します。<!-- END REF-->

スタイルシートはデザインモードにおいてプロパティリストで設定することができます。または、セッションの間においては、 [OBJECT SET STYLE SHEET](object-set-style-sheet.md) コマンドを使用して設定することもできます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

コマンドから以下のどれかが返されます:

* スタイルシート名
* スタイルシートが何も設定されていない場合は空の文字列 ("") が返されます。
* 自動スタイルシートが設定されていた場合は"*Font Styles*" テーマの定数のいずれかが返されます:  

| 定数                                | 型   | 値                                   | コメント                                                           |  
| --------------------------------- | --- | ----------------------------------- | -------------------------------------------------------------- |  
| Automatic style sheet             | 文字列 | \_\_automatic\_\_                   | デフォルトで全てのオブジェクトに使用されます                                         |  
| Automatic style sheet\_additional | 文字列 | \_\_automatic\_additional\_text\_\_ | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでの補足テキストに使用されます。  |  
| Automatic style sheet\_main       | 文字列 | \_\_automatic\_main\_text\_\_       | スタティックテキスト、フィールドそして変数においてのみサポートされます。ダイアログボックスでのメインテキストに使用されます。 |

コマンドで複数のオブジェクトを指定した場合、コマンドが最初に見つけたオブジェクトのスタイルシートのみが返されます。

#### 互換性に関する注意 

**プロジェクトアーキテクチャー**においては、このコマンドがサポートするのは3つの自動スタイルシートだけです。

#### 参照 

*Font Styles*  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1258 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


