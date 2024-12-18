---
id: on-web-connection-database-method
title: On Web Connection database method
slug: /commands/on-web-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Connection database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Connectionデータベースメソッド<!-- END REF-->
<!--REF #_command_.On Web Connection database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | テキスト | &#8592; | URL |
| $2 | テキスト | &#8592; | HTTPヘッダー + HTTPボディ (32 KBまで) |
| $3 | テキスト | &#8592; | Webクライアント (ブラウザー) のIPアドレス |
| $4 | テキスト | &#8592; | サーバーのIPアドレス |
| $5 | テキスト | &#8592; | ユーザー名 |
| $6 | テキスト | &#8592; | パスワード |

<!-- END REF-->

#### 

<!--REF #_command_.On Web Connection database method.Summary-->**On Web Connectionデータベースメソッド**は以下のケースで呼び出されます:

* Webサーバが */4DCGI/* から始まるURLを受信した。<!-- END REF-->
* Webサーバが無効なリクエストを受信した。

詳細な情報は、後述の“” の段落を参照してください。  
  
データベースがWebサーバとして公開され、リクエストは事前に[On Web Authenticationデータベースメソッド](on-web-authentication-database-method.md)で受け入れられていなければなりません(存在する場合)。

**On Web Connectionデータベースメソッド**は6つのテキスト引数($1、$2、$3、$4、$5、および$6)を4Dから受け取ります。これらの引数の内容は以下のとおりです:

| **引数** | **型** | **説明**                      |
| ------ | ----- | --------------------------- |
| $1     | テキスト  | URL                         |
| $2     | テキスト  | HTTPヘッダ + HTTPボディ (32 KBまで) |
| $3     | テキスト  | Webクライアント (ブラウザ) のIPアドレス    |
| $4     | テキスト  | サーバのIPアドレス                  |
| $5     | テキスト  | ユーザ名                        |
| $6     | テキスト  | パスワード                       |

これらの引数を以下のように宣言しなければなりません:

```4d
  // On Web Connection データベースメソッド
 var $1;$2;$3;$4;$5;$6 : Text
  // メソッドコード
```

* **URL**  
    
最初の引数 (*$1*) は、ユーザがWebブラウザのアドレスエリアに入力した**URL**からホストのアドレスを取り除いたものです。  
イントラネット接続の場合をみてみましょう。4D WebサーバのIPアドレスを123.45.67.89とします。以下の表はWebブラウザに入力された**URL**に対して、*$1*が受け取る値を示しています:  

| **Webブラウザのアドレスに入力された値**               | **$1の値**                  |  
| ------------------------------------- | ------------------------- |  
| 123.45.67.89                          | /                         |  
| http://123.45.67.89                   | /                         |  
| 123.45.67.89/Customers                | /Customers                |  
| http://123.45.67.89/Customers         | /Customers                |  
| http://123.45.67.89/Customers/Add     | /Customers/Add            |  
| 123.45.67.89/Do\_This/If\_OK/Do\_That | /Do\_This/If\_OK/Do\_That |  
    
    
この引数は必要に応じて自由に利用できます。4Dは単にURLのホスト部より後の部分を$1に渡します。  
例えば値 *"/Customers/Add"* が “直接新規レコードを*\[Customers\]* テーブルに追加する”ということを意味するというような、オリジナルのルールを作成できます。Webユーザにデータベースを公開し、利用可能な値やブックマークを提供できます。アプリケーションの異なる部分へのショートカットを提供できます。このようにして、Webユーザはデータベースに接続するたびにナビゲーションを通過することなく、素早くWebサイトのリソースにアクセスできます。

**警告:** 以前のセッションで作成されたブックマークでデータベースに直接アクセスされるのを防ぐため、4Dは標準の4D URLに対応するURLをすべてキャッチします。

* **HTTPリクエストのヘッダとボディ**  
    
２番目の引数 (*$2*) はWebブラウザから送信されたHTTPリクエストのヘッダとボディです。この情報は**On Web Connectionデータベースメソッド**に"そのまま"渡されることに留意してください。その内容は接続を試みたWebブラウザの仕様により異なります。  
Mac OS上のSafariでは、以下のようなヘッダを受け取るでしょう (一部省略):  
```RAW  
GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3 (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: ja-jpAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  
```  
    
    
Windows上のMicrosoft Internet Explorer 8では、以下のようなヘッダを受け取るでしょう:  
```RAW  
GET / HTTP/1.1Accept: image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/vnd.ms-powerpoint, application/vnd.ms-excel, application/msword, */*Accept-Language: ja-JPUser-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)Accept-Encoding: gzip, deflateHost: 123.45.67.89Connection: Keep-Alive  
```  
    
    
アプリケーションでこの情報を使用するには、開発者がヘッダとボディを解析しなければなりません。  
**注**: パフォーマンスの理由から、このデータのサイズは32KBで切り取られます。
* **webクライアントのIPアドレス**  
    
$3 引数はブラウザマシンのIPアドレスを受け取ります。この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。  
**注:** 4DはIPv4アドレスを、96-bitの接頭辞付きのハイブリッド型のIPv6/IPv4フォーマットで返します。例えば、ffff:192.168.2.34は、192.168.2.34というIPv4アドレスを意味します。詳細な情報については、*IPv6のサポート*の章を参照して下さい。
* **サーバIPアドレス**  
    
$4 引数は4DWebサーバによってリクエストされたIPアドレスを受け取ります。4Dバージョン6.5以降マルチホーミングがサポートされ、複数のIPアドレ スを持つマシンで使用できるようになりました。詳細は*Webサーバー設定*を参照してください。
* **ユーザ名とパスワード**  
    
$5 と $6 引数は、ブラウザが表示する標準の認証ダイアログにユーザが入力したユーザ名とパスワードがあればそれを受け取ります。このダイアログは環境設定で**パスワード管理**オプ ションが指定されていると、接続のたびに表示されます (*接続セキュリティ*参照)。  
    
**注:** ブラウザから送信されたユーザ名が4Dに存在する場合、$6 引数 (ユーザパスワード) はセキュリティのため渡されません。

#### On Web Connection データベースメソッドの呼び出し 

**On Web Connectionデータベースメソッド** は*4DCGI* URLまたはカスタマイズされたコマンドURLを使用したWebサーバーへのアクセスのエントリポイントとして使用できます。

**警告:** インタフェース要素を表示する4D コマンド ([DIALOG](../commands/dialog.md)、[ALERT](alert.md)...) を呼び出すと、メソッド処理が終了します。

**On Web Connectionデータベースメソッド** は以下のケースで呼び出されます:

* 4Dが */4DCGI/* URLを受け取ったとき。*$1*に */4DCGI/<action>* が渡されて、データベースメソッドが呼び出されます。
* *<path>/<file>*タイプのURLで存在しないWebページが呼び出されたとき。データベースメソッドにそのURLが渡されて呼び出されます。
* *<file>/* タイプのURLでWebページが呼び出され、デフォルトのホームページが設定されていないとき。データベースメソッドにそのURLが渡されて呼び出されます。
