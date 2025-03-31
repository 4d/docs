---
id: php-get-full-response
title: PHP GET FULL RESPONSE
slug: /commands/php-get-full-response
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET FULL RESPONSE.Syntax-->**PHP GET FULL RESPONSE** ( *stdOut* {; *errLabels* ; *errValues*} {; *httpHeaderFields* {; *httpHeaderValues*}} )<!-- END REF-->
<!--REF #_command_.PHP GET FULL RESPONSE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| stdOut | Text, Blob | &#8592; | stdoutバッファーの内容 |
| errLabels | Text array | &#8592; | エラーのラベル |
| errValues | Text array | &#8592; | エラーの値 |
| httpHeaderFields | Text array | &#8592; | HTTPヘッダーの名前 |
| httpHeaderValues | Text array | &#8592; | HTTPヘッダーの値 |

<!-- END REF-->

:::info 互換性

**4D のビルトインPHPインタープリターは削除されました**。[`4D.SystemWorkerクラス`](../API/SystemWorkerClass.md) を使用して外部PHPインタープリターをご利用ください。

:::

#### 説明 

<!--REF #_command_.PHP GET FULL RESPONSE.Summary-->PHP GET FULL RESPONSE コマンドを使用して PHPインタープリターから返されるレスポンスに関する追加の情報を取得できます。<!-- END REF--> このコマンドは特にスクリプトの実行中にエラーが発生したときに有効です。

PHPスクリプトはstdoutバッファーにデータを書き込むことがあります (echo, print等)。このコマンドはデータを直接*stdout*変数に返します。そして[PHP Execute](php-execute.md)コマンドで説明されている原則と同じ変換を適用します。

同期される*errLabels*と*errValues*テキスト配列は、PHPスクリプトの実行がエラーの原因であるときに値が返されます。これらの配列には特に、エラーのもと、スクリプト、そして行などの情報が提供されます。これら2つの配列はともに使用します。*errLabels*を渡すときは合わせて*errValues*も渡さなければなりません。

4DとPHP間の交換はFastCGI経由で実行されるため、PHPインタープリターは、それがHTTPサーバから呼び出されたかのように機能し、したがってHTTPヘッダを送信します。*httpHeaderFields*と*httpHeaderValues*配列を使用してこれらのヘッダを取得できます。

#### 参照 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1061 |
| スレッドセーフである | &cross; |


