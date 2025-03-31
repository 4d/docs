---
id: web-service-get-info
title: WEB SERVICE Get info
slug: /commands/web-service-get-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE Get info.Syntax-->**WEB SERVICE Get info** ( *infoType* ) : Text<!-- END REF-->
<!--REF #_command_.WEB SERVICE Get info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| infoType | Integer | &#8594;  | 取得する情報 |
| 戻り値 | Text | &#8592; | 最新のSOAPエラーに関する情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SERVICE Get info.Summary-->**WEB SERVICE Get info**コマンドは、リモートのWebサービスに送信された最新のSOAPリクエストの 実行中に生成されたエラーについての情報を返します。<!-- END REF-->このコマンドは一般的に[ON ERR CALL](on-err-call.md)コマンドでインストールされたエラー処理メソッド内から呼び出します。

*infoType* 引数には、取得したい情報を指定します。*Web Services (Client)*テーマの以下の定数を渡します:

| 定数                           | 型    | 値 | コメント                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ---- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service detailed message | 倍長整数 | 1 | エラーの説明メッセージ。メインのエラータイプに応じてメッセージは異なります。<br/>- 9910 (Soap fault): SOAPエラーの原因が返されます (例: “リモートメソッドが存在しません”)。<br/>- 9911 (Parser fault): XMLドキュメント中のエラーの個所が返されます。<br/>- 9912 (HTTP fault):<br/>- HTTPエラーが \[300-400\] の場合 (問題がリクエストされたドキュメントの場所に関連<br/> する場合)、リクエストURLの新しい場所が返されます。<br/>- 他のHTTPエラーコードの場合、<body>が返されます。<br/>- 9913 (Network fault): ネットワークエラーの原因が返されます (例: “ServerAddress: DNS lookup failure”)<br/>- 9914 (Internal fault): 内部エラーの原因が返されます。 |
| Web Service error code       | 倍長整数 | 0 | (4Dが定義した) 主たるエラーコード。このコードはErrorシステム変数にも返されます。<br/>返される可能性のあるコードは以下のとおりです:<br/>9910: Soap fault (参照 Web Service Fault Actor)<br/>9911: Parser fault<br/>9912: HTTP fault (参照 Web Service HTTP Error code)<br/>9913: Network fault<br/>9914: Internal fault.                                                                                                                                                                                                              |
| Web Service fault actor      | 倍長整数 | 3 | エラーの原因 (SOAPプロトコルにより返される、メインエラーが9910の場合に使用)。<br/>- バージョンが合わない<br/>- 引数解釈エラー (必須として定義された引数をサーバが解釈できない)<br/>- 送信側側のエラー<br/>- 受信側のエラー<br/>- 未知のエンコーディング                                                                                                                                                                                                                                                                                                                            |
| Web Service HTTP status code | 倍長整数 | 2 | HTTPエラーコード (メインエラーが9912の場合に使用)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

情報が利用できない場合、空の文字列が返されます。特に最後のSOAPリクエストがエラーを生成しなかった場合。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 780 |
| スレッドセーフである | &check; |


