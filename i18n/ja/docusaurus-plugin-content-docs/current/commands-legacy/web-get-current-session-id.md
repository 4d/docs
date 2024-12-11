---
id: web-get-current-session-id
title: WEB Get Current Session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get Current Session ID.Syntax-->**WEB Get Current Session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get Current Session ID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | セッションUUID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Get Current Session ID.Summary-->**WEB Get Current Session ID**コマンドはカレントのWebリクエストのセッションIDを返します。<!-- END REF-->このIDは4Dが自動で生成します。 

このコマンドがWebセッション管理のコンテキストの外で呼び出されると、コマンドは空の文字列を返します。

#### 参照 

[WEB LEGACY GET SESSION EXPIRATION](web-legacy-get-session-expiration.md)  
*Webセッション管理(旧式)*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1162 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


