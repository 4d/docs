---
id: authUsers
title: Usuários e sessões
---


## Autenticação de usuários

Como primeiro passo para abrir uma sessão REST no servidor 4D, o usuário que envia a solicitude deve estar autenticado.

You log in a user to your application by passing the user's name and password to [`$directory/login`]($directory.md#directorylogin).

Quando um usuário é registrado com sucesso, uma sessão é aberta. See below to know how to handle the session cookie in subsequent client requests, if necessary.

A sessão será encerrada automaticamente quando o tempo limite for atingido.

## Cookie de sessão

Each REST request is handled through a specific session on the 4D server.

When a first valid REST request is received, the server creates the session and sends a session cookie named `WASID4D` in the **"Set-Cookie" response header**, containing the session UUID, for example:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

In the subsequent REST requests, make sure this cookie is included in the **"Cookie" request header** so that you will reuse the same session. Caso contrário, uma nova sessão será aberta e outra licença será usada.

### Exemplo

A maneira de lidar com os cookies de sessão depende, na verdade, de seu cliente HTTP. Este exemplo mostra como extrair e reenviar o cookie de sessão no contexto de solicitações tratadas por meio do comando 4D `HTTP Request`.

```4d
// Criação de cabeçalhos
ARRAY TEXT(headerNames;0)
ARRAY TEXT(headerValues;0)

APPEND TO ARRAY(headerNames; "username-4D")
APPEND TO ARRAY(headerNames; "session-4D-length")
APPEND TO ARRAY(headerNames;"hashed-password-4D")

APPEND TO ARRAY(headerValues; "kind user")
APPEND TO ARRAY(headerValues; "60")
APPEND TO ARRAY(headerValues;Generate digest("test";4D digest))

C_OBJECT($response)
$response:=New object

//Esta solicitação abre uma sessão para o usuário "kind user"
$result:=HTTP Request(HTTP POST method; "127.0.0.1:8044/rest/$directory/login";"";\  
    $response;headerNames;headerValues;*)


//Criar novos arrays para cabeçalhos com apenas o cookie WASID4D
buildHeader(->headerNames;->headerValues)

//Essa outra solicitação não abrirá uma nova sessão
$result:=HTTP Request(HTTP GET method; "127.0.0.1:8044/rest/$catalog";"";\  
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



