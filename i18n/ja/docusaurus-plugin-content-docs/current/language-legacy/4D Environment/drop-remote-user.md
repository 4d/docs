---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *userSession* : Text )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userSession | Text | &#8594; | ユーザーのセッションID |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|17 R4|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DROP REMOTE USER.Summary-->**DROP REMOTE USER** コマンドは4D Server にリモートで接続している特定のユーザーの接続を解除します。<!-- END REF-->引数には、サーバーから接続を解除したいユーザーのセッションID を渡します。セッションID は、[Process activity](../commands/process-activity) コマンドを使用することで取得できます。  

**注:** このコマンドは非同期に実行され、また4D Server でしか実行することができません。このコマンドを呼び出しているメソッドがリモートクライアントでローカルに実行されるか、あるいはシングルユーザー版4D で実行された場合、**DROP REMOTE USER** は何もしません。

## 例題 

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

## 参照 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[SEND MESSAGE TO REMOTE USER](../commands/send-message-to-remote-user)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1633 |
| スレッドセーフである | yes |



