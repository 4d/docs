---
id: get-registered-clients
title: GET REGISTERED CLIENTS
slug: /commands/get-registered-clients
displayed_sidebar: docs
---

<!--REF #_command_.GET REGISTERED CLIENTS.Syntax-->**GET REGISTERED CLIENTS** ( *clientList* ; *methods* )<!-- END REF-->
<!--REF #_command_.GET REGISTERED CLIENTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| clientList | Text array | &#8592; | 登録されている4D Clientのリスト |
| methods | Integer array | &#8592; | 実行するメソッドのリスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET REGISTERED CLIENTS.Summary-->GET REGISTERED CLIENTS コマンドは2つの配列を作成します:

* *clientLists*は、[REGISTER CLIENT](register-client.md "REGISTER CLIENT")コマンドを使って"登録された"クライアントの登録名の配列となります。<!-- END REF-->
* *methods*は、各クライアントの"ワークロード"の配列となります。ワークロードとは、[EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT") コマンドでスタックされた、4D Clientがこれから実行しなければならないメソッドの数です (より詳しい情報は、[EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT")コマンドを参照してください)。

**Note:** 処理に成功すると、OKシステム変数は1になります。

#### 例題 1 

すべての登録されたクライアントの配列と、まだ実行されずに残っているメソッド数の配列を取得します: 

```4d
 ARRAY TEXT($clients;0)
 ARRAY LONGINT($methods;0)
 GET REGISTERED CLIENTS($clients;$methods)
```

#### 例題 2 

[REGISTER CLIENT](register-client.md "REGISTER CLIENT") コマンドの例題参照

#### システム変数およびセット 

処理が成功すると、システム変数OKは1に設定されます。

#### 参照 

[EXECUTE ON CLIENT](execute-on-client.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 650 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


