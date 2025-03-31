---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *userSession* )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userSession | Text | &#8594;  | ユーザーのセッションID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DROP REMOTE USER.Summary-->**DROP REMOTE USER** コマンドは4D Server にリモートで接続している特定のユーザーの接続を解除します。<!-- END REF-->引数には、サーバーから接続を解除したいユーザーのセッションID を渡します。セッションID は、[Process activity](../commands/process-activity.md) コマンドを使用することで取得できます。  

**注:** このコマンドは非同期に実行され、また4D Server でしか実行することができません。このコマンドを呼び出しているメソッドがリモートクライアントでローカルに実行されるか、あるいはシングルユーザー版4D で実行された場合、**DROP REMOTE USER** は何もしません。

#### 例題 

特定のリモートユーザーをドロップしたい場合を考えます:

```4d
  // サーバーで実行すべきメソッド
 var $userCol : Collection
 var $element : Object
 
  //Vanessa というリモートユーザーの接続を解除する
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    DROP REMOTE USER($element.ID)
 End for each
```

#### 参照 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[SEND MESSAGE TO REMOTE USER](send-message-to-remote-user.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1633 |
| スレッドセーフである | &check; |


