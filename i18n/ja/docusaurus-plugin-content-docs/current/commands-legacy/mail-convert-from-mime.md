---
id: mail-convert-from-mime
title: MAIL Convert from MIME
slug: /commands/mail-convert-from-mime
displayed_sidebar: docs
---

<!--REF #_command_.MAIL Convert from MIME.Syntax-->**MAIL Convert from MIME** ( *mime* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.MAIL Convert from MIME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mime | Blob, Text | &srarr; | Email in MIME |
| 戻り値 | Object | &larr; | Email object |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MAIL Convert from MIME.Summary-->**MAIL Convert from MIME** コマンドは、MIME ドキュメントを有効なEメールオブジェクトへと変換します。<!-- END REF-->

**注:** 4D が返すEメールオブジェクトは*JMAP specification* に準拠しています。

*mime* 引数には、変換する有効なMIME ドキュメントを渡します。これはどのメールサーバーまたはアプリケーションからでも提供可能です。*mime* 引数にはBLOBまたはテキストを渡すことができます。MIME がファイルから渡される場合、文字セットと改行コード変換に関する問題を避けるため、BLOB型の引数を使用することが推奨されます。

**返される値**

*Email* オブジェクト。このオブジェクトについての詳細な説明については、*Eメールオブジェクト* の章を参照してください。
