---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *rejectStatus* : Boolean )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594; | 接続を拒否したい場合にはTrue、そうでない場合にはFalse |
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

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->**REJECT NEW REMOTE CONNECTIONS** コマンドは、アプリケーションサーバーが新規リモートユーザー接続を受け入れるかどうかを指定します。<!-- END REF-->引数には、リモート接続を拒否するためには**true** を渡します。**false** を渡した場合、新規リモート接続を許可することを指定します。

**注**: このコマンドは4D Server 上でのみ実行可能です。コマンドを呼び出しているメソッドが、リモートクライアントでローカルに実行されていた場合、あるいはシングルユーザー版4D で実行されていた場合、**REJECT NEW REMOTE CONNECTIONS** は何もしません。

## 例題 

新規クライアント接続を拒否したい、あるいは許可したい場合を考えます:

```4d
  // 新規接続を拒否
 REJECT NEW REMOTE CONNECTIONS(True)
  // メンテナンスオペレーションを実行
 ...
  // 新規接続を許可
 REJECT NEW REMOTE CONNECTIONS(False)
```

## 参照 

[DROP REMOTE USER](../commands/drop-remote-user)  
[Application info](../commands/application-info)  
[SOAP REJECT NEW REQUESTS](../commands/soap-reject-new-requests)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1635 |
| スレッドセーフである | yes |



