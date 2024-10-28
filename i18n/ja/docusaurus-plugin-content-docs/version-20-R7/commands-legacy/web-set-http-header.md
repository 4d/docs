---
id: web-set-http-header
title: WEB SET HTTP HEADER
slug: /commands/web-set-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HTTP HEADER.Syntax-->**WEB SET HTTP HEADER** ( header|fieldArray {; *valueArray*} )<!-- END REF-->
<!--REF #_command_.WEB SET HTTP HEADER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| header&#124;fieldArray | テキスト, テキスト配列 | &#8594;  | リクエストHTTPヘッダーを格納したフィールドまたは変数、またはHTTPヘッダーフィールド |
| valueArray | Text array | &#8594;  | HTTPヘッダーフィールドコンテンツ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SET HTTP HEADER.Summary-->**WEB SET HTTP HEADER**コマンドを使用して、4DからWebブラウザーへ送信されるHTTPヘッダーにフィールドを設定します。<!-- END REF-->このコマンドはWebプロセスでのみ機能します。  
このコマンドで "Cookie" を管理することが可能です。

 このコマンドでは、2つのシンタックスが利用可能です: 
* 1番目のシンタックス**:** **WEB SET HTTP HEADER** (header)  
設定したいテキストタイプ (変数またはフィールド) のHTTPヘッダーフィールドを 引数 *fields* に渡します。  
このシンタックスを使用すれば、"HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO" のようにヘッダーを記述することができます。Windows と Mac OS上では、ヘッダーフィールドは、CR または CR+LF (キャリッジリターン + ラインフィード) シーケンスで区切られてなければなりません。4Dがそのレスポンスをフォーマットします。

カスタム "Cookie" の例を示します:

```4d
 var $vTcookie : Text
 $vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"
 WEB SET HTTP HEADER($vTcookie)
```

****注:** コマンドは引数 *header* として、リテラルテキストを受け入れません。4Dの変数またはフィールドでなくてはなりません。

HTTPヘッダーのシンタックスに関する詳細は、[http://www.w3c.org](http://www.w3c.org/) のRFC (Request For Comments) を参照してください。

* 2番目のシンタックス **:** **WEB SET HTTP HEADER** (fieldArray; valueArray)  
2つのテキスト配列 *fieldArray* と *valueArray* を通して、HTTPヘッダーは定義されます。 以下のようにヘッダーを記述します:

```4d
 fieldArray{1}:="X-VERSION"
 fieldArray{2}:="X-STATUS"
 fieldArray{3}:="Set-Cookie"
 fieldArray{4}:="Server"
 
 valueArray{1}:="HTTP/1.0"*
 valueArray{2}:="200 OK"*
 valueArray{3}:="C=HELLO"
 valueArray{4}:="North_Carolina"
```

\* 最初の2つのアイテムはレスポンスの最初の行です。これらを入力する際は、配列の1番目と2番目の要素でなければなりません。ただし、これらを省略して以下のコードのみを記述することも可能です (4Dがヘッダーフォーマットを処理します):

```4d
 fieldArray{1}:="Set-Cookie"
 valueArray{1}:="C=HELLO"
```

X-VERSIONとX-STATUSを指定しないと、自動的にHTTP/1.0 200 OKが設定されます。Server フィールドのデフォルト値は"4D/<version>" です。**Date** と **Content-Length** のフィールドも4Dによって設定されます。

#### 参照 

[WEB GET HTTP HEADER](web-get-http-header.md)  