---
id: web-service-call
title: WEB SERVICE CALL
slug: /commands/web-service-call
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE CALL.Syntax-->**WEB SERVICE CALL** ( *accessURL* ; *soapAction* ; *methodName* ; *nameSpace* {; *complexType* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE CALL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| accessURL | Text | &#8594;  | WebサービスへのアクセスURL |
| soapAction | Text | &#8594;  | SOAPActionフィールドの内容 |
| methodName | Text | &#8594;  | メソッドの名前 |
| nameSpace | Text | &#8594;  | 名前空間 |
| complexType | Integer | &#8594;  | 複合タイプの設定 (省略された場合、シンプルタイプ) |
| * | 演算子 | &#8594;  | 接続を終了しない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SERVICE CALL.Summary-->**WEB SERVICE CALL**コマンドは、HTTPリクエストを送ることでWebサービスを呼び出すために使用します。<!-- END REF-->このリクエストには、事前に[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)コマンドを使用して作成したSOAPメッセージが含まれています。

一連の[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)コマンド呼び出しは、新しいリクエストを作成します。**WEB SERVICE CALL**コマンドの実行はまた、以前に呼び出したWebサービスの結果を消去し、新しい結果に置き換えます。

*accessURL* には、Webサービスへアクセスできる完全なURLを渡します (このURLをWebサービスを説明するWSDLファイルのURLと混同しないでください) 。

* ****保護モードでのアクセス(SSL)**: SSLを用いて、保護モードでWebサービスを使用したい場合、http://の代わりとしてURLの前にhttps://を渡します。この設定により、保護モードでの自動接続が可能になります。なお、このコマンドはサーバー認証を使用することができます( [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md) コマンドを参照して下さい)。この認証が有効でない(失効しているか無効である)場合、OKシステム変数は0に設定され、エラー901 "Invalid server certificate" が返されます。このエラーは [ON ERR CALL](on-err-call.md) コマンドに実装されたエラーハンドリングメソッドにより割り込み可能です。

*soapAction* には、リクエストのSOAPActionフィールドの内容を渡します。このフィールドは一般的に"ServiceName#MethodName"値を含みます。

*methodName* には、 (Webサービスに属する) 実行したいリモートメソッドの名前を渡します。

*namespace* には、SOAPリクエストに使用するXML名前空間を渡します。XML名前空間に関する詳細は、4DのDesign Referenceマニュアルを参照してください。

オプション引数 *complexType* は、([WEB SERVICE SET PARAMETER](web-service-set-parameter.md)と[WEB SERVICE GET RESULT](web-service-get-result.md)コマンドを使用して定義された) 送信および受信するWebサービス引数の設定を示します。

引数 *complexType* の値は、Webサービスの公開モード (DOC または RPC、4DのDesign Referenceマニュアルを参照してください) とその引数により異なります。  
*complexType* には*Web Services (Client)*テーマにある以下の定数の1つを必ず渡します:

| 定数                     | 型    | 値 |
| ---------------------- | ---- | - |
| Web Service dynamic    | 倍長整数 | 0 |
| Web Service manual     | 倍長整数 | 3 |
| Web Service manual in  | 倍長整数 | 1 |
| Web Service manual out | 倍長整数 | 2 |
  
  
それぞれの定数は、Webサービス"設定"に対応しています。設定は公開モード (RPC/DOC) と引数のタイプ (入出力、シンプルまたは複合) の組み合わせを表します。 

**Note:** 引数 “input” または “output” の特徴は、プロキシメソッド/Webサービスの視点から評価されるということを覚えておいてください。

* 引数 “input” はプロキシメソッドに、そしてWebサービスへ渡される値です。
* 引数 “output” は、Webサービスから、そしてプロキシメソッドから返されます (一般的に$0経由) 。

可能となる設定と対応する定数のすべてを以下のリストに示します:

| **Input引数**  |                        |                       |
| ------------ | ---------------------- | --------------------- |
| **Output引数** | **シンプル**               | **複合**                |
| **シンプル**     | Web Service Dynamic    | Web Service Manual In |
| | (RPCモード)   | (RPCモード)               |                       |
| **複合**       | Web Service Manual Out | Web Service Manual    |
| (RPCモード)     | (RPCまたはDOCモード)         |                       |

使用する設定に応じて、このリクエストの内容をフォーマットするかは開発者に任されています。  

そのため、以下で説明する5つの設定を実装することができます。すべての場合において、4DはWebサービスへ送られるSOAPリクエストやそのエンベローブのフォーマット処理を行います。

**Note:** 複合XMLタイプであるにも関わらず、4Dはシンプルタイプとしてデータの配列を処理します。

##### RPCモード、シンプルinputとoutput 

最も使いやすいのはこの設定です。この場合、引数 *complexType* には定数 Web Service Dynamic が含まれるかこの引数が省略されます。 

送られた引数と受け取った応答は、前処理されることなく直接的に処理できます。

[WEB SERVICE GET RESULT](web-service-get-result.md)コマンドの例題を参照してください。

##### RPCモード、複合inputとシンプルoutput 

この場合、引数 *complexType* には定数 Web Service Manual In が含まれます。この設定ではWebサービスに、[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)コマンドを使用してBLOBの形でXMLソースの要素を必ず “手動で” 渡さなければなりません。

最初のBLOBを有効なXML要素としてフォーマットするかしないかを決定するのは、ユーザ次第です。最初の要素として、このBLOBには、最終リクエストの <body> 要素の最初に現れる “child” 要素が含まれなければなりません。   
  
例題  

```4d
 var $1 : Blob
 var $0 : Boolean
 WEB SERVICE SET PARAMETER("MyXMLBlob";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual in)
 WEB SERVICE GET RESULT($0;"MyOutputVar";*)
```

##### RPCモード、シンプルinputと複合output 

この場合、引数*complexType*には、定数Web Service Manual Outが含まれます。それぞれの引数outputはBLOBに保存されているXML要素の形でWebサービスから返されます。[WEB SERVICE GET RESULT](web-service-get-result.md)コマンド. を使用してこの引数を取り出します。そして、受け取ったBLOBの内容を4Dの XMLコマンドを使用して解析します。  
  
例題  
  
```4d
 var $0 : Blob
 var $1 : Boolean
 
 WEB SERVICE SET PARAMETER("MyInputVar";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual out)
 
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

##### RPCモード、複合inputとoutput 

この場合、*complexType* 引数にはWeb Service Manual定数を指定します。それぞれのinputとoutput引数は、先に説明した2つの設定に従い、XML要素の形でBLOBに格納しなければなりません。 例題  
  
```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MyXMLInputBlob";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

##### DOCモード 

DOC Webサービスのプロクシ呼び出しメソッドは、複合型INPUT OUTPUT引数を使用するRPC Webサービスのプロクシ呼び出しメソッドと同様です。  
これら2つの設定の唯一の違いは、送受信するBLOB引数のXMLの内容レベルにあります。4Dから見ると、SOAPリクエストの構築と送信は同じものです。   
  
例題  
  
```4d
 var $0 : Blob
 var $1 : Blob
 
 SET WEB SERVICE PARAMETER("MyXMLInput";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MyXMLOutput";*)
```

**注:** DOC Webサービスの場合、引数として渡される文字列の値 (上記の“MyXMLInput” と “MyXMLOutput”) は重要ではありません。空の文字列を渡すことさえできます。実際、これらの値はXMLドキュメントを含むSOAPリクエストでは使用されません。にもかか わらずこれらの引数は必須です。

DOCモード (または複合タイプのRPCモード) で公開されたWebサービスを使用するには、以下に従うことをお勧めします:

* Webサービスウィザードを使用してプロクシメソッドを生成する。  
プロクシメソッドは以下のように呼び出されます: *$XMLresultBlob:=$DOCproxy\_Method($XMLparamBlob)*
* オンラインテストにより、Webサービスに送信するSOAPリクエストの内容について習熟する (例えば*http://soapclient.com/soaptest.html*)。このタイプのツールは、WebサービスのWSDLに基づき、HTMLテストフォームを生成するために使用されます。
* 生成されたXMLの*<body>*の第一子要素をコピーします。
* 実際の引数値をXMLコードに置くことを可能にするメソッドを記述する。このコードは*$XMLparamBlob* BLOBに置かれます。
* レスポンスを解析するには、オンライテストを使用するか、返される要素を定義したWSDLを参照します。

オプションの *\** 引数を使用して呼び出しを最適化できます。この引数を指定すると、コマンドはその実行後に、処理により使用される接続を閉じません。この場合、次の**WEB SERVICE CALL**は \* 引数が渡されていれば同じ接続を再利用します。接続を閉じるには、**WEB SERVICE CALL**コマンドを \* 引数なしで呼び出します。このメカニズムにより、同じサーバ上の複数の異なるWebサービスを連続して呼び出すような処理が高速化されます。特にWAN環 境 (例えばインターネット経由) の場合に顕著です。この設定はWebサーバの“keep-alive”設定に基づきます。この設定では通常接続ごとの最大リクエスト数を設定し、リクエス トを拒否することもあります。一連の**WEB SERVICE CALL**リクエストがこの最大数の制限に達した場合、またはkeep-alive接続が許可されていない場合、4Dは新しい接続を作成します。

#### システム変数およびセット 

リクエストが正しくルーティングされ、Webサービスがそれを受け入れると、システム変数OKは1に設定されます。そうでなければ0に設定され、エラーが生成されます。

#### 参照 

[WEB SERVICE GET RESULT](web-service-get-result.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 778 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


