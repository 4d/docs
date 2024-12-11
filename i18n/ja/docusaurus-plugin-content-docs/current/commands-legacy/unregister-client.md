---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->UNREGISTER CLIENT コマンドは、クライアントステーションの登録を解除します。<!-- END REF-->クライアントは[REGISTER CLIENT](register-client.md "REGISTER CLIENT")コマンドによって既に登録されているものでなければなりません。

**Note:** 4Dクライアントは、ユーザがアプリケーションを終了すると自動的に登録を解除します。

4Dクライアントが前もって登録されていなかったり、コマンドをシングルユーザの4Dで実行しても、コマンドは何も行ないません。

クライアントの登録が正しく解除されるとシステム変数OKは1になり、クライアントが登録されていないとOKは0になります。

#### 例題 

[REGISTER CLIENT](register-client.md "REGISTER CLIENT") コマンドの例題参照

#### システム変数およびセット 

クライアントが正しく登録解除されるとOKシステム変数に1が、クライアントが登録されていなければ0が設定されます。

#### 参照 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 649 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


