---
id: authUsers
title: Users and sessions
---


## Authenticating users

As a first step to open a REST session on the 4D server, the user sending the request must be authenticated.

You log in a user to your application by passing the user's name and password to [`$directory/login`]($directory.md#directorylogin).

Once a user is successfully logged, a session is open. See below to know how to handle the session cookie in subsequent client requests, if necessary.

The session will automatically be closed once the timeout is reached.

## Session cookie

Each REST request is handled through a specific session on the 4D server.

When a first valid REST request is received, the server creates the session and sends a session cookie named `WASID4D` in the **"Set-Cookie" response header**, containing the session UUID, for example:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

In the subsequent REST requests, make sure this cookie is included in the **"Cookie" request header** so that you will reuse the same session. Otherwise, a new session will be opened, and another license used.

### Example

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



