---
id: web-legacy-get-session-expiration
title: WEB LEGACY GET SESSION EXPIRATION
slug: /commands/web-legacy-get-session-expiration
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Syntax-->**WEB LEGACY GET SESSION EXPIRATION** ( *sessionID* ; *expDate* ; *expTime* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| sessionID | Text | &#8594;  | セッションUUID |
| expDate | Date | &#8592; | cookie有効期限日 |
| expTime | Time | &#8592; | cookie有効期限時刻 |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Summary-->このコマンドは、4D v18 R6 以前のバージョンから変換されたデータベースでのみ利用可能な**旧式Web セッション**でのみ使用することが可能です。<!-- END REF-->これは**スケーラブルWeb セッション**モード(4D v18 R6以降のバージョンでの推奨)が有効化されている場合には無視されます。詳細な情報については、*Webセッション管理(旧式)* の章を参照してください。

#### 説明 

**WEB LEGACY GET SESSION EXPIRATION**コマンドは*sessionID*に渡されたUUIDのセッションのcookieの有効期限に関する情報を返します。

*expDate* 引数はcookieの有効期限日を、*expTime* 引数はcookieの有効期限時刻を受け取ります。 

**注:** Webレスポンスがクライアントに送信されるたびに、cookieの有効期限はリクエストが行われた時刻+Web Inactive session timeout (デフォルトで8時間) に設定されます。例えばデフォルト値の状態で:   
最初のリクエスト: 月曜日の1:00   
 \-> 有効期限は月曜日の09:00  
二番目のリクエスト: 月曜日の1:10   
 \-> 有効期限は月曜日の09:10  
三番目のリクエスト: 火曜日の4:00 (cookieの有効期限が過ぎている)  
 \-> 新しいcookie値が生成され、有効期限は火曜日の12:00

#### 参照 

[WEB Get Current Session ID](web-get-current-session-id.md)  
[WEB SET OPTION](web-set-option.md)  
*Webセッション管理(旧式)*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1207 |
| スレッドセーフである | &check; |


