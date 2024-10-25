---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *clientName* ; *methodName* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| clientName | Text | &#8594;  | 4D Clientの登録名 |
| methodName | Text | &#8594;  | 実行するメソッドの名前 |
| param | &#8594;  | メソッドの引数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->EXECUTE ON CLIENT コマンドは、*clientName*という名前で登録されている4D Clientで、必要であれば*param1.<!-- END REF-->.. paramN*を引数とし、*methodName*メソッドを実行します。4D Clientの登録名は[REGISTER CLIENT](register-client.md "REGISTER CLIENT") コマンドで定義します。  
このコマンドは、4D Clientまたは4D Serverのストアドプロシージャで呼び出すことができます。

メソッドが1つ以上の引数を要求する場合、メソッドの名前の後に引数を渡します。  
4D Client上でのメソッド実行は、クライアントワークステーション上で自動的に作成されたプロセス内で行われます。そのプロセス名は4D Clientの登録名です。

このコマンドが同じ4D Clientに対して連続的に呼び出されると、実行がスタックされます。つまりメソッドは非同期モードで、次から次へと処理されます。スタックされたメソッドが増えると、4D Clientのワークロードも大きくなってしまいます。[GET REGISTERED CLIENTS](get-registered-clients.md "GET REGISTERED CLIENTS")コマンドを使用して、各クライアントのワークロードの状態を知ることができます。

**Note:** 実行順序のスタックは、[UNREGISTER CLIENT](unregister-client.md "UNREGISTER CLIENT")コマンドを使って4D Clientが登録解除されない限りは、変更することも止めることもできません。

登録された複数の4D Clientに対し、同じメソッドを同時に実行させる事ができます。これを実行するには、*clientName*引数にワイルドカード (@) を使用します。

OKシステム変数は、4D Serverがメソッドの実行要求を正しく受け取った場合、1になりますが、これはメソッドが4D Clientによって正しく実行されたということを保証するものではありません。

#### 例題 1 

"GenerateNums"メソッドを、"Client1"クライアント上で実行したいと仮定します:

```4d
 EXECUTE ON CLIENT("Client1";"GenerateNums";12;$a;"Text")
```

#### 例題 2 

すべてのクライアントに"EmptyTemp"メソッドを実行させたい場合には:

```4d
 EXECUTE ON CLIENT("@";"EmptyTemp")
```

#### 例題 3 

[REGISTER CLIENT](register-client.md "REGISTER CLIENT") コマンドの例題参照

#### システム変数およびセット 

4D Serverが正しく実行リクエストを受け取ると、OKシステム変数は1に設定されます。しかしこのことは4Dクライアント上でメソッドが正しく実行されることを保証するものではありません。

#### 参照 

[Execute on server](execute-on-server.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  