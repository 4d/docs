---
id: authUsers
title: ユーザーとセッション
---


## ユーザー認証

4D Server上で RESTセッションを開くには、まずリクエストを送信するユーザーが認証されなければなりません。

アプリケーションにユーザーをログインするには、ユーザー名とパスワードを [`$directory/login`]($directory.md#directorylogin) に送信します。

ユーザーのログインと同時にセッションが開かれます。 以降のクライアントリクエストにおけるセッションcookie の扱い方については、後述を参照ください。

セッションは、タイムアウトすると自動終了します。

## セッションcookie

4D Server上では、各 RESTリクエストは専用セッションを介して処理されます。

最初の有効な RESTリクエストを受信すると、サーバーはセッションを生成し、**"Set-Cookie" レスポンスヘッダー** に、セッションUUID を格納した `WASID4D` という名前のセッションcookie を返します。例:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

以降の RESTリクエストにおいては、**"Cookie" リクエストヘッダー** にこの cookie を含めるようにします。これにより、同じセッションを利用し続けることができます。 そうしない場合には新規セッションが開かれることとなり、したがってライセンスが別途消費されます。

### 例題

実際のところ、セッションcookie の扱いは HTTPクライアントに寄ります。 この例題では、4D の `HTTP Request` コマンドを使ってリクエストを処理する場合に、セッションcookie を抽出し、再送信する方法を示します:

```4d
// ヘッダーを作成します
ARRAY TEXT(headerNames;0)
ARRAY TEXT(headerValues;0)

APPEND TO ARRAY(headerNames;"username-4D")
APPEND TO ARRAY(headerNames;"session-4D-length")
APPEND TO ARRAY(headerNames;"hashed-password-4D")

APPEND TO ARRAY(headerValues;"kind user")
APPEND TO ARRAY(headerValues;"60")
APPEND TO ARRAY(headerValues;Generate digest("test";4D digest))

C_OBJECT($response)
$response:=New object

// このリクエストは "kind user" というユーザーのセッションを開きます
$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\  
    $response;headerNames;headerValues;*)


// 以降のリクエストヘッダー用に cookie WASID4D のみを格納した配列を作成します
buildHeader(->headerNames;->headerValues)

// 次のリクエストは新規セッションを開きません
$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\  
    $response;headerNames;headerValues;*)
```

```4d
// buildHeader プロジェクトメソッド  

C_POINTER($pointerNames;$1;$pointerValues;$2)
ARRAY TEXT($headerNames;0)
ARRAY TEXT($headerValues;0)

COPY ARRAY($1->;$headerNames)
COPY ARRAY($2->;$headerValues)

$indexCookie:=Find in array($headerValues;"WASID4D@")
$cookie:=$headerValues{$indexCookie}
$start:=Position("WASID4D";$cookie)
$end:=Position(";";$cookie)
$uuid:= Substring($cookie;$start;$end-$start)

ARRAY TEXT($headerNames;1)
ARRAY TEXT($headerValues;1)

$headerNames{1}:="Cookie"
$headerValues{1}:=$uuid

COPY ARRAY($headerNames;$1->)
COPY ARRAY($headerValues;$2->)
```



