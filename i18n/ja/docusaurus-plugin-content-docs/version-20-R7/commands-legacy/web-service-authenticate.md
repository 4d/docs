---
id: web-service-authenticate
title: WEB SERVICE AUTHENTICATE
slug: /commands/web-service-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Syntax-->**WEB SERVICE AUTHENTICATE** ( *name* ; *password* {; *authMethod*} {; *} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE AUTHENTICATE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | ユーザの名前 |
| password | Text | &#8594;  | ユーザのパスワード |
| authMethod | Integer | &#8594;  | 認証メソッド 0または省略された場合 = 指定されない、1 = BASIC、2 = DIGEST |
| * | 演算子 | &#8594;  | 渡された場合、プロキシによる認証 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Summary-->**WEB SERVICE AUTHENTICATE**コマンドは、クライアントアプリケーションの認証を必要とするWeb サービスの使用を可能にします (シンプルな認証) 。<!-- END REF-->BASICとDIGEST メソッド、そしてプロキシの存在がサポートされています。

**注:** BASICとDIGEST認証のメソッドに関する詳細は*接続セキュリティ*を参照してください。

引数 *name* と *password* には、必須となるID情報 (ユーザ名とパスワード) を渡します。[WEB SERVICE CALL](web-service-call.md)コマンドによってこの情報はコード化され、Webサービスへ送られるHTTPリクエストに追加されます。従って[WEB SERVICE CALL](web-service-call.md)コマンドを呼び出す前に**WEB SERVICE AUTHENTICATE**コマンド を呼び出す必要があります。  
  
オプション引数 *authMethod* を用いて、次の[WEB SERVICE CALL](web-service-call.md)コマンド を呼び出すために使用する認証メソッドを指定します。そのためには、以下の値の1つを渡します。

* 2 = DIGEST認証メソッドを使用する。
* 1 = BASIC認証メソッドを使用する。
* 0 (または引数を省略) = 適切なメソッドを使用する。この場合、4Dは認証メソッドを決定するために追加のリクエストを発行します。

引数 *\** を渡すと、認証情報をHTTPプロキシへ送ることを指定します。Webサービスクライアントと Webサービスの間で認証を必要とするプロキシが存在する際、必ずこの設定を実行しなければなりません。Webサービス自体が認証されている場合、ダブル認証が必要となります (例題を参照) 。

認証情報は各リクエスト後にデフォルトで0にリセットされます。そのため**WEB SERVICE AUTHENTICATE**コマンドを使用してから各[WEB SERVICE CALL](web-service-call.md)コマンドを使用します。しかし[WEB SERVICE SET OPTION](web-service-set-option.md)コマンドのオプションを使用すれば、この情報を一時的に保持するのは可能です。この場合、**WEB SERVICE AUTHENTICATE**コマンドをつど実行せずに、各[WEB SERVICE CALL](web-service-call.md)コマンドを実行します。

認証が失敗すると、SOAPサーバはエラーを返します。このエラーは[WEB SERVICE Get info](web-service-get-info.md)コマンドを使用して確認できます。

#### 例題 

プロキシの後ろに配置されているWebサービスによる認証:

```4d
  //DIGESTモードでのWeb Serviceへの認証
 WEB SERVICE AUTHENTICATE("SoapUser";"123";2)
  //デフォルトモードでのプロキシへの認証
 WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)
 WEB SERVICE CALL(...)
```

#### 参照 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE Get info](web-service-get-info.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 786 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


