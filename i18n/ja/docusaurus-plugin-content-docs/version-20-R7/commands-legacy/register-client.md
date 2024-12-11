---
id: register-client
title: REGISTER CLIENT
slug: /commands/register-client
displayed_sidebar: docs
---

<!--REF #_command_.REGISTER CLIENT.Syntax-->**REGISTER CLIENT** ( *clientName* {; *period*}{; *} )<!-- END REF-->
<!--REF #_command_.REGISTER CLIENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| clientName | Text | &#8594;  | 4Dクライアントセッション名 |
| period | Integer | &#8594;  | ***バージョン11.3より無効*** |
| * | 演算子 | &#8594;  | ローカルプロセス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REGISTER CLIENT.Summary-->REGISTER CLIENT コマンドは、4Dクライアントステーションを、*clientName*で指定した名前で4D Serverに登録し、他のクライアントもしくは4D Server (ストアドプロシージャから) が登録されたマシン上で、[EXECUTE ON CLIENT](execute-on-client.md "EXECUTE ON CLIENT")コマンドを使ってメソッドを実行できるようにします。<!-- END REF-->一旦登録されると、4Dクライアントは他のクライアント用に1つまたはそれ以上のメソッドを実行することができます。 

**Notes:**

* データベース環境設定ダイアログの、起動時にクライアント登録オプションを使って、4D Serverに接続するクライアントステーションを自動的に登録することができます。
* ローカルモードの4Dでこのコマンドが使用されても効果はありません。
* ひとつ以上の4Dクライアントが同じ登録名を持つことができます。

このコマンドが実行されると、クライアントステーション上に*clientName*という名のプロセスが作成されます。このプロセスは[UNREGISTER CLIENT](unregister-client.md "UNREGISTER CLIENT")コマンドによってのみアボート可能です。  
オプションの *\** 引数を渡すと、作成されるプロセスはローカルプロセスになり、4Dは自動的にプロセス名の始めにドルマーク ($) を付け加えます。そうでない場合は、グローバルプロセスです。

4Dバージョン11.3より、サーバ/クライアント通信のメカニズムが最適化されました。サーバは必要に応じて直接、登録されたクライアントに実行 リクエストを送信します ("プッシュ"テクノロジ)。以前の、クライアントが定期的にサーバに問い合わせする方法は使用されません。*period*引数は無視されます。 

一度コマンドが実行されると、4Dクライアント名を動的に変更することはできません。これを実行するには、UNREGISTERCLIENTコマンドを呼び出し、再度REGISTER CLIENTコマンドを呼び出します。

#### 例題 

以下の例題では小さなメッセージングシステムを作成し、クライアントワークステーション間の通信を可能にします。  
  
1) このRegistrationメソッドは4Dクライアントを登録して、他の4Dクライアントからのメッセージを受け取ることができるようにします:  
  
```4d
  //他の名前で登録する前に登録解除する必要がある
 UNREGISTER CLIENT
 REPEAT
    vPseudoName:=Request("名前を入力:";"ユーザ";"OK";"キャンセル")
 Until((OK=0)|(vPseudoName#""))
 If(OK=0)
    ... // 何も行わない
 Else
    REGISTER CLIENT(vPseudoName)
 End if
```
  
  
2) 以下の指示は、登録されたクライアントのリストを得ることができるようにするものです。これは内に置くことができます:   

```4d
 PrClientList:=New process("4D Client List";32000;"List of registered clients")
 
```

3) 以下の4D Client Listメソッドは、メッセージ受信可能な登録済み全4Dクライアントの登録名リストを入手します:   
  
```4d
 If(Application type=4D Remote Mode)
  // 以下のコードはクライアントサーバでのみ有効
    $Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"List of registered clients")
    REPEAT
       GET REGISTERED CLIENTS($ClientList;$ListeCharge)
  //$ClientListに登録済みクライアントリストを取得
       ERASE WINDOW($Ref)
       GOTO XY(0;0)
       For($p;1;Size of array($ClientList))
          MESSAGE($ClientList{$p}+Char(Carriage return))
       End for
  //毎秒ごとに表示
       DELAY PROCESS(Current process;60)
    Until(False) // 無限ループ
 End if
 
```

 4) 下記のメソッドは、登録済みの他の4Dクライアントにメッセージを送ります。これは、送られた4DクライアントでDisplay\_Messageメソッドを呼び出します（下記参照）。  

```4d
 $Addressee:=Request("メッセージの宛先:";"")
  // On Startup データベースメソッドで取得した、メッセージ受信可能者リストの名前を指定
 If(OK#0)
    $Message:=Request("Message:") // message
    If(OK#0)
       EXECUTE ON CLIENT($Addressee;"Display_Message";$Message) // メッセージ送信
    End if
 End if
 
 
```

5) 以下は、Display\_Messageメソッドです:   

```4d
 var $1 : Text
 ALERT($1)
 
```

  
 6) 最後に、以下のメソッドはクライアントステーションが他の4Dクライアントから見えず、メッセージも受け取れなくなるようにします: 

```4d
 UNREGISTER CLIENT
```

#### システム変数およびセット 

4Dクライアントが正しく登録されるとOKシステム変数に1が設定されます。4Dクライアントが既に登録されている場合、コマンドはなにも行わずOKは0に設定されます。

#### 参照 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 648 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


