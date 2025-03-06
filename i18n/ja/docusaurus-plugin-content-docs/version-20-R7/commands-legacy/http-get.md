---
id: http-get
title: HTTP Get
slug: /commands/http-get
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get.Syntax-->**HTTP Get** ( *url* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Get.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| url | Text | &#8594;  | リクエスト送信先URL |
| response | Text, Blob, Picture, Object | &#8592; | リクエストの結果 |
| headerNames | Text array | &#8594;  | リクエストのヘッダー名 |
| &#8592; | 返されたヘッダー名 |
| headerValues | Text array | &#8594;  | リクエストのヘッダー値 |
| &#8592; | 返されたヘッダー値 |
| * | 演算子 | &#8594;  | 指定時: 接続を保持する (keep-alive)省略時: 自動で接続を閉じる |
| 戻り値 | Integer | &#8592; | HTTPステータスコード |

<!-- END REF-->

:::info 互換性

このコマンドは互換性のためだけに維持されています。現在は [`4D.HTTPRequest クラス`](../API/HTTPRequestClass.md) を使用することが推奨されています。

:::


#### 説明 

<!--REF #_command_.HTTP Get.Summary-->**HTTP Get**コマンドは指定したURLにHTTP GETリクエストを送信し、HTTPサーバーからのレスポンスを処理します。<!-- END REF-->引数にはリクエストの送信先URLを渡します。シンタックスは以下の通りです:

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

例えば以下のような文字列を渡せます:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name=jones    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

(\*) HTTPSリクエストを行う場合でも、証明書の発行局は検証されません。  
(\*\*) IPv6 アドレスをURLに使用する場合についての詳細は [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt) を参照ください。

コマンド実行後、*response* 引数はサーバーから返される結果を受け取ります。この結果はレスポンスからヘッダーを取り除いたボディー部です。   
*response*には異なる型の変数を渡すことができます:

* テキスト: 期待される結果がテキストの場合(以下参照)。
* BLOB: 期待される結果がバイナリの場合。
* ピクチャー: 期待される結果がピクチャーの場合。
* オブジェクト:期待される結果が *C\_OBJECT* オブジェクトの場合。

**注:** *response* 引数にテキスト変数が渡された場合、4Dはサーバーから返されたデータを解読しようとします。4Dはまず*content-type* ヘッダーから文字セットを取得しようとし、次にBOMの中身を使用し、最後は*http-equiv charset* (html コンテンツ内) あるいは *encoding* (xml用) 属性を探します。それでも文字セットが見つからない場合、4DはレスポンスをANSIで解読しようとします。変換が失敗した場合、返されるテキストは空になります。サーバーが文字セット情報あるいはBOMを返すかどうかが分からない一方エンコーディング情報を知っている場合には、BLOBに*response*変数を渡して[Convert to text](convert-to-text.md)を呼び出す方が正確です。

BLOBを渡した場合、テキストやピクチャー、その他 (.wav, .zip, etc.) どのようなタイプのコンテンツでも受け取ることができます。受け取った内容を復元するのは開発者の仕事です (ヘッダーはBLOBに含まれません)。*C\_OBJECT* 型のオブジェクトを渡したとき、リクエストがテキストコンテンツ型の結果を返す場合、4D はコンテンツをJOSN として解析しようとし、その解析された結果をオブジェクトとして返します。それ以外の場合には*4D.Blob* 型のオブジェクトが返されます。

*headerNames* と *headerValues*にはリクエストヘッダーの名前と値をそれぞれ格納した配列を渡します。  
このコマンド実行後、これらの配列にはHTTPサーバーから返されたレスポンスのヘッダー情報で置き換えられます。これにより特にCookieを管理できます。

*\** 引数を使用してサーバー接続時にkeep-aliveメカニズムを有効にできます。デフォルトではこの引数が省略されると、keep-aliveは有効になりません。

コマンドからは標準のHTTPステータスコードが返されます (200=OK等)。HTTPステータスコードについては*RFC 2616*を参照してください。   
ネッ トワークに関連する理由 (DNS解決に失敗した、サーバーに接続できないなど...) により、サーバーに接続できない場合、コマンドは0を返し、エラーが生成されます。このエラーは[ON ERR CALL](on-err-call.md)コマンドを使用してインストールされたエラー処理メソッドで処理できます。

#### 例題 1 

4D Webサイトから4Dロゴを取得する:

```4d
 var URLPic_t : Text
 URLPic_t:="http://www.4d.com/sites/all/themes/dimention/images/home/logo4D.jpg"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 var Pic_i : Picture
 $httpResponse:=HTTP Get(URLPic_t;Pic_i;HeaderNames_at;HeaderValues_at)
```

#### 例題 2 

RFCを取得する:

```4d
 var URLText_t : Text
 var Text_t : Text
 URLText_t:="http://tools.ietf.org/rfc/rfc1.txt"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 $httpResponse:=HTTP Get(URLText_t;Text_t;HeaderNames_at;HeaderValues_at)
```

#### 例題 3 

動画を取得する:

```4d
 var vBlob : Blob
 $httpResponse:=HTTP Get("http://www.example.com/video.flv";vBlob)
 BLOB TO DOCUMENT(vBlob;"video.flv")
```

#### 参照 

[HTTP Request](http-request.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1157 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


