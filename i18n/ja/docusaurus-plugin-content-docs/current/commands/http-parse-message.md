---
id: http-parse-message
title: HTTP Parse message
slug: /commands/http-parse-message
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Parse message.Syntax-->**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF-->

<!--REF #_command_.HTTP Parse message.Params-->

| 引数   | 型          |                             | 説明                                                |
| ---- | ---------- | --------------------------- | ------------------------------------------------- |
| data | Text, Blob | &#8594; | 解析するデータ                                           |
| 戻り値  | Object     | &#8592; | オブジェクト (各プロパティは、マルチパートの各データです) |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R4 | 追加 |

</details>

#### 説明

The `HTTP Parse message` command <!--REF #_command_.HTTP Parse message.Summary-->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. 戻り値のオブジェクトの各プロパティは、マルチパートの各データに対応します<!-- END REF -->。

:::info

HTTP 自体はステートレスな通信プロトコルです。 このフレームワークの中で、クライアントは、メソッド・ターゲット・ヘッダー・コンテンツなどの詳細を指定した "request" メッセージをサーバーに送ることによって通信を開始します。 サーバーは、同じ詳細を含む "response" メッセージで応答します。 `HTTP Parse message` コマンドは、"request" または "response" メッセージを解析し、オブジェクトの形式に整えます。

:::

#### 例題

次の例では、HTTPリクエストを格納するテキストファイルのデータを解析します。

ファイルの中身は次のとおりです:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

ファイルを解析します:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

#### プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1824                        |
| スレッドセーフ | &cross; |
