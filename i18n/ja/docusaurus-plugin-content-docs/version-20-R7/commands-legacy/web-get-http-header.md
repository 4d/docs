---
id: web-get-http-header
title: WEB GET HTTP HEADER
slug: /commands/web-get-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP HEADER.Syntax-->**WEB GET HTTP HEADER** ( header|fieldArray {; *valueArray*} )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP HEADER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| header&#124;fieldArray | テキスト, テキスト配列 | &#8592; | リクエストHTTPヘッダまたはHTTPヘッダフィールド |
| valueArray | Text array | &#8592; | HTTPヘッダフィールドの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB GET HTTP HEADER.Summary-->**WEB GET HTTP HEADER**コマンドは、 現在処理されているリクエストのHTTPヘッダーを含む2つの配列、または文字列のいずれかを返します。<!-- END REF--> 

 このコマンドはWebプロセスで実行されるすべてのメソッド ( '/4DACTION'...によって呼び出されるメソッド、*On Web Authenticationデータベースメソッド*または[QR SET DESTINATION](qr-set-destination.md)) 内から呼び出されます。
* **1番目のシンタックス:** **WEB GET HTTP HEADER** **(header)**  
このシンタックスを使用すると、次の結果 (例) が変数 *header* に返されます。  
"GET /page.html HTTP/1.0\[CRLF\]User-Agent: browser\[CRLF\]Cookie: C=HELLO"

Windows と Mac OS上で、各ヘッダーフィールドはCR+LF (キャリッジリターン+ラインフィード) シーケンスによって区切られています。

* **2番目のシンタックス:** **WEB GET HTTP HEADER** **(fieldArray; valueArray)**  
    
このシンタックスを使用すると、次の結果が*fieldArray* と *valueArray* に返されます。  
    
| fieldArray{1} = "X-METHOD"   | valueArray{1} = "GET" \*        |  
| ---------------------------- | ------------------------------- |  
| fieldArray{2} = "X-URL"      | valueArray{2} = "/page.html" \* |  
| fieldArray{3} = "X-VERSION"  | valueArray{3} = "HTTP/1.0" \*   |  
| fieldArray{4} = "User-Agent" | valueArray{4} = "browser"       |  
| fieldArray{5} = "Cookie"     | valueArray{5} = "C=HELLO"       |  
    
    
\* 最初の3つのアイテムはHTTPフィールドではありません。リクエストの最初の行の一部です。

HTTP標準に準拠するには、フィールド名を常に英語で記述します。

リクエストで使用可能ないくつかのHTTPフィールドを以下のリストに示します。

* **Accept**: ブラウザーが許可するコンテンツ
* **Accept-Language**: ブラウザーが使用するランゲージ。ブラウザー上で定義されたランゲージでWebページを選択できます。
* **Cookie**: cookiesリスト
* **From**: ブラウザーユーザーemailアドレス
* **Host**: サーバー名またはアドレス (例えば、URLがhttp://mywebserver/mypage.htmlとすると、**Host**はmywebserverとなります) 。同じIPアドレスを示す複数の名前を管理することができます (バーチャルホスティング) 。
* **Referer**: そのリクエストを発行した元のURL (例えば、http://mywebserver/mypage1.html)。つまりブラウザーの**戻る**ボタンをクリックした際に表示されるページ。
* **User-Agent**: ブラウザーまたはプロキシの名前とバージョン。

#### 例題 

次のメソッドを使用して、任意のHTTPリクエストヘッダーのコンテンツを取得できます。

```4d
  // GetHTTPFieldプロジェクトメソッド
  // GetHTTPField (Text) -> Text
  // GetHTTPField (HTTP header name) -> HTTPヘッダーコンテンツ
 
 var $0;$1 : Text
 var $vlItem : Integer
 ARRAY TEXT($names;0)
 ARRAY TEXT($values;0)
 $0:=""
 WEB GET HTTP HEADER($names;$values)
 $vlItem:=Find in array($names;$1)
 If($vlItem>0)
    $0:=$values{$vlItem}
 End if
```
  
  
このプロジェクトメソッドを記述したら、以下のように呼び出しを行います。  

```4d
  // Cookieヘッダーコンテンツ
 $cookie:=GetHTTPField("Cookie")
```
  
  
ブラウザー上で設定されたランゲージに応じて、異なるページを送ることができます (例えば、On Web Connection データベースメソッド において) 。  

```4d
 $language:=GetHTTPField("Accept-Language")
 Case of
    :($language="@ja@") // 日本語 (ISO 639リストを参照)
       WEB SEND FILE("index_ja.html")
    :($language="@sp@") // スペイン語 (ISO 639リストを参照)
       WEB SEND FILE("index_es.html")
    Else
       WEB SEND FILE("index.html")
 End case
```

**注:** Webブラウザ上で複数のランゲージをデフォルトで定義することができます。ランゲージは"Accept-Language" フィールドでリストにされ、 ";" で区切られて示されています。文字列内でのランゲージの位置に応じて、その優先順位が定義されます。そのため、文字列内でのランゲージの位置をテストすることをお勧めします。

 以下は仮想ホストの例です (例えば[QR SET DESTINATION](qr-set-destination.md)において) 。次の名前"home\_site.com"、"home\_site1.com" と "home\_site2.com" は同じIPアドレス、例えば192.1.2.3を指している。  

```4d
 $host:=GetHTTPField("Host")
 Case of
    :($host="www.site1.com")
       WEB SEND FILE("home_site1.com")
    :($host="www.site2.com")
       WEB SEND FILE("home_site2.com")
    Else
       WEB SEND FILE("home_site.com")
 End case
```

#### 参照 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB SET HTTP HEADER](web-set-http-header.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 697 |
| スレッドセーフである | &check; |


