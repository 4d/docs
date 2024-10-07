---
id: wa-get-last-url-error
title: WA GET LAST URL ERROR
slug: /commands/wa-get-last-url-error
displayed_sidebar: docs
---

<!--REF #_command_.WA GET LAST URL ERROR.Syntax-->**WA GET LAST URL ERROR** ( {* ;} *object* ; *url* ; *description* ; *errorCode* )<!-- END REF-->
<!--REF #_command_.WA GET LAST URL ERROR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#x1F852; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | フォームオブジェクト | &#x1F852; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| url | 文字 | &#x1F858; | エラー元のURL |
| description | 文字 | &#x1F858; | エラーの説明 (Mac OS) |
| errorCode | 倍長整数 | &#x1F858; | エラーコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA GET LAST URL ERROR.Summary-->WA GET LAST URL ERROR コマンドを使用して、*\** と *object* 引数で指定したWebエリアで発生した最後のエラーに関する情報のいくつかの項目を取得できます。<!-- END REF-->

この情報は３つの変数に返されます:

* *url*: エラーを発生させたURL。
* *description* (Mac OS のみ): エラーについての説明 (利用可能な場合)。エラーにテキストが関連付けられていない場合、空の文字列が返されます。Windowsでは常に空の文字列が返されます。
* *errorCode*: エラーコード。  
\- コードが400以上の場合、それはHTTPプロトコル関連のエラーです。このタイプのエラーに関する詳細情報は、以下のアドレスを参照してください:*http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html*  
\- 上記以外の場合、WebKit (Mac OS) または ActiveX (Windows) から返されたエラーです。

発生したエラーの原因を知るためには、On URL Loading Errorフォームイベントのフレームワークでこのコマンドを呼び出すことをお勧めします。

#### 参照 

[Form event code](form-event-code.md)  