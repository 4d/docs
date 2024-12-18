---
id: send-message-to-remote-user
title: SEND MESSAGE TO REMOTE USER
slug: /commands/send-message-to-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Syntax-->**SEND MESSAGE TO REMOTE USER** ( *message* {; *userSession*} )<!-- END REF-->
<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| message | Text | &#8594;  | Text sent to user |
| userSession | Text | &#8594;  | User's session ID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Summary-->**SEND MESSAGE TO REMOTE USER** コマンドは、全てのリモートユーザー、あるいは特定のリモートユーザーに対して、メッセージを送信します。<!-- END REF-->引数には、表示されるメッセージのテキストを渡します。これはセッションユーザーのスクリーン上に、アラート画面あるいは通知として表示されます。

任意の*userSession* 引数を使用すると、セッションIDを渡すことでメッセージを送信する特定のユーザーを指定することができます。セッションIDは[Process activity](../commands/process-activity.md) コマンドを使用することで取得できます。*userSession* 引数が省略されていた場合、メッセージは全てのユーザーに送信されます。

**注**: このコマンドは4D Server 上でのみ実行可能です。コマンドを呼び出しているメソッドが、リモートクライアントでローカルに実行されていた場合、あるいはシングルユーザー版4D で実行されていた場合、**SEND MESSAGE TO REMOTE USER** は何もしません。

#### 例題 

全ユーザーにメッセージを送信した後に、特定のユーザーに別のメッセージを送信したい場合を考えます:

```4d
  // サーバーで実行すべきメソッド
 var $message : Text
 var $element : Object
 var $userCol : Collection
 
  // セッション情報を取得
 $userCol:=(Get process activity(Sessions only)).sessions
 
  // メッセージを全ユーザーに送信
 $message:="A maintenance operation is scheduled for 10pm. The server will be restarted. Please log out before 10pm."
 SEND MESSAGE TO REMOTE USER($message)
 
  // メッセージを、"Vanessa" という単一のユーザーに送信
 $message:="Hello Vanessa"
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    SEND MESSAGE TO REMOTE USER($message;$element.ID)
 End for each
```

#### 参照 

[DROP REMOTE USER](drop-remote-user.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1632 |
| スレッドセーフである | &check; |


