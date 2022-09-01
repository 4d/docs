---
id: authUsers
title: Users and sessions
---


## Authenticating users

Como primeiro passo para abrir uma sessão REST no servidor 4D, o usuário que envia a solicitude deve estar autenticado.

Pode iniciar a sessão de um usuário em sua aplicação passando o nome e a senhar de usuário em  [`$directory/login`]($directory.md#directorylogin).

Quando um usuário registrar com sucesso, se abre uma sessão. Veja abaixo para saber como manejar o cookie da sessão nas seguintes petições de cliente se for necessário.

A sessão se fechará automaticamente quando alcançar o tempo de espera.

## Cookie de sessão

Cada petição REST se gerencia por uma sessão específica no servidor 4D.

Quando se recebe uma primeira petição REST válida, o servidor cria a sessão e envia uma cookie de sessão chamada `WASID4D` no cabeçalho de resposta **"Set-Cookie"**, que contém o UUID da sessão, por exemplo:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

Nas seguintes petições REST, tenha certeza de que esta cookie se inclua no **cabeçalho "Cookie"** com o fim de reutilizar a mesma sessão. Em caso contrário, se abrirá uma nova sessão e se utilizará outra licença.

### Exemplo

A gestão de cookies de sessão depende de seu cliente HTTP. Este exemplo mostra como extrair e reenviar a cookie de sessão no contexto das petições gestionadas através do comando 4D `HTTP Request`.

```4d
// Creating headers ARRAY TEXT(headerNames;0)
ARRAY TEXT(headerValues;0) APPEND TO ARRAY(headerNames;"username-4D")
APPEND TO ARRAY(headerNames;"session-4D-length")
APPEND TO ARRAY(headerNames;"hashed-password-4D") APPEND TO ARRAY(headerValues;"kind user")
APPEND TO ARRAY(headerValues;"60")
APPEND TO ARRAY(headerValues;Generate digest("test";4D digest)) C_OBJECT($response)
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
// buildHeader project method C_POINTER($pointerNames;$1;$pointerValues;$2)
ARRAY TEXT($headerNames;0)
ARRAY TEXT($headerValues;0) COPY ARRAY($1->;$headerNames)
COPY ARRAY($2->;$headerValues)

$indexCookie:=Find in array($headerValues;"WASID4D@")
$cookie:=$headerValues{$indexCookie}
$start:=Position("WASID4D";$cookie)
$end:=Position(";";$cookie)
$uuid:= Substring($cookie;$start;$end-$start) ARRAY TEXT($headerNames;1)
ARRAY TEXT($headerValues;1)

$headerNames{1}:="Cookie"
$headerValues{1}:=$uuid COPY ARRAY($headerNames;$1->)
COPY ARRAY($headerValues;$2->)
```



