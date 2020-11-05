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

When a first valid REST request is received, the server creates the session and sends a session cookie named `WASID4D` in the **"Set-Cookie" response header**, containing the session UUID, for example:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

In the subsequent REST requests, make sure this cookie is included in the **"Cookie" request header** so that you will reuse the same session. Otherwise, a new session will be opened, and another license used.

### 例題

The way to handle session cookies actually depends on your HTTP client. This example shows how to extract and resend the session cookie in the context of requests handled through the 4D `HTTP Request` command.

```4d
// Creating headers
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

//This request opens a session for the user "kind user"
$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\  
    $response;headerNames;headerValues;*)


//Build new arrays for headers with only the cookie WASID4D
buildHeader(->headerNames;->headerValues)

//This other request will not open a new session
$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\  
    $response;headerNames;headerValues;*)
```

```4d
// buildHeader project method  

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



