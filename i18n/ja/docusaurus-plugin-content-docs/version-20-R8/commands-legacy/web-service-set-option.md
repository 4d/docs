---
id: web-service-set-option
title: WEB SERVICE SET OPTION
slug: /commands/web-service-set-option
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET OPTION.Syntax-->**WEB SERVICE SET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | 設定するオプションのコード |
| value | Integer, Text | &#8594;  | オプションの値 |

<!-- END REF-->

#### 予備的なお知らせ 

<!--REF #_command_.WEB SERVICE SET OPTION.Summary-->このコマンドは上級Webサービスユーザのためにデザインされています。<!-- END REF-->使用するかどうかは任意です。

#### 説明 

**WEB SERVICE SET OPTION**コマンドを使用して、[WEB SERVICE CALL](web-service-call.md)コマンドを使用して次回呼び出されるSOAPリクエストで使用されるさまざまなオプションを設定できます。  
設定するオプションの数だけこのコマンドを呼び出します。

*option* 引数には設定するオプションの番号、*value* 引数にはそのオプションの新しい値を渡します。これらの引数には*Web Services (Client)*テーマの以下の定義済み定数を使用できます:

| 定数                              | 型    | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------- | ---- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service display auth dialog | 倍長整数 | 4 | *value* \= 0 (ダイアログボックスを表示しない) または 1 (ダイアログボックスを表示する)<br/>このオプションは[WEB SERVICE CALL](web-service-call.md)コマンド実行時の認証ダイアログボックスの表示を管理します。デフォルトでダイアログボックスは表示されません。通常[WEB SERVICE AUTHENTICATE](web-service-authenticate.md)コマンドを使用して認証を行わなければなりません。しかし認証ダイアログボックスを表示してユーザに認証情報を入力させたい場合、このオプションを使用します。*value* に1を渡すとダイアログを表示、0を渡すと表示しません。ダイアログボックスはWebサービスが認証を要求する場合のみ表示されます。                                                                                                                                                                                                                                                                                                                                                                                                           |
| Web Service HTTP compression    | 倍長整数 | 6 | *value* \= Web Service Compression <br/> このオプションは、SOAPリクエストによる4Dアプリケーション間のデータ交換を高速化する目的で、内部的な圧縮メカニズムを有効にするために使用します。[WEB SERVICE SET OPTION](web-service-set-option.md)(Web Service HTTP Compression; Web Service Compression) ステートメントをWebサービスの4Dクライアント上で実行すると、クライアントから送信される次のSOAPリクエストのデータは、4D SOAPサーバーに送信される前に、標準のHTTPメカニズム (リクエストの内容に応じて"gzip" または "deflate") を使用して圧縮されます。 サーバーはリクエストを解凍・解析し、自動で同じメカニズムを使用して応答します。[WEB SERVICE SET OPTION](web-service-set-option.md)コマンドの呼出し直後のリクエストのみに影響します。すなわち圧縮を使用したいリクエスト毎にこのコマンドを呼び出す必要があります。デフォルトで4DはWebサービスHTTPリクエストを圧縮しません。<br/>**注:** <br/>このメカニズムは11.3以前の4D SOAPサーバーへのリクエストでは利用できません。この機能を最適化するために、リクエストの圧縮を行う閾値や圧縮率を設定する追加のオプションがあります。これらのオプションを設定するには[SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用します。 |
| Web Service HTTP timeout        | 倍長整数 | 1 | *value* \= 秒単位で指定するクライアント側のタイムアウト<br/>クライアント側のタイムアウトは、サーバが返答しない場合のWebサービスクライアント側の待ち時間です。この時間経過後、クライアントはセッションを閉じ、リクエストは失われます。<br/>このタイムアウトはデフォルトで180秒です。特定の理由 (ネットワークの状態、Webサービスの仕様等) でこの値を変更できます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Web Service reset auth settings | 倍長整数 | 5 | *value* \= 0 (情報を消去しない) または 1 (情報を消去する)<br/>このオプションを使用して、4Dにユーザの認証情報 (ユーザ名とパスワード、認証メソッド等) を記憶させ、それを再利用するかどうかを指定できます。デフォルトでこの情報は[WEB SERVICE CALL](web-service-call.md)コマンドを呼び出すたびに消去されます。*value* に0を渡すと情報は保持され、1を渡すと消去されます。0を渡した場合、情報はセッションの間保持されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Web Service SOAP header         | 倍長整数 | 2 | *value* \= SOAPリクエストのヘッダとして挿入するXMLルート要素参照<br/>このオプションを使用して、[WEB SERVICE CALL](web-service-call.md)コマンドで生成されるSOAPリクエストにヘッダを挿入できます。デフォルトでSOAPリクエストは特定のヘッダを持っていません。しかしWebサービスによっては、例えば識別情報を管理するために、ヘッダを要求することがあります。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Web Service SOAP version        | 倍長整数 | 3 | *value* \= Web Service SOAP\_1\_1 または Web Service SOAP\_1\_2<br/>このオプションで、リクエストで使用するSOAPプロトコルのバージョンを指定できます。Web Service SOAP\_1\_1 定数を *value* に渡すとバージョン1.1が、Web Service SOAP\_1\_2 を渡すとバージョン1.2が指定されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

オプションを呼び出す順番は重要ではありません。同じ *option* が複数回設定された場合は、最後の呼び出しで設定された値が有効になります。

#### 例題 1 

SOAPリクエストにカスタマイズしたヘッダーを挿入する:   

```4d
  // XML参照を作成
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
  // 参照を使用してSOAPヘッダーを更新する
 WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)
```

#### 例題 2 

 SOAPプロトコルのバージョン1.2を使用する:   

```4d
 WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)
```

#### 参照 

[WEB SERVICE CALL](web-service-call.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 901 |
| スレッドセーフである | &check; |


