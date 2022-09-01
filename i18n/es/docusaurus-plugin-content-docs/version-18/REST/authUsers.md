---
id: authUsers
title: Usuarios y sesiones
---


## Autenticación de los usuarios

Como primer paso para abrir una sesión REST en el servidor 4D, el usuario que envía la solicitud debe estar autenticado.

Usted inicia la sesión de un usuario en su aplicación pasando el nombre y la contraseña del usuario en [`$directory/login`]($directory.md#directorylogin).

Una vez que un usuario se registra con éxito, se abre una sesión. Vea a continuación para saber cómo manejar la cookie de sesión en las siguientes peticiones del cliente, si es necesario.

La sesión se cerrará automáticamente cuando se alcance el tiempo de espera.

## Cookie de sesión

Cada petición REST se gestiona por una sesión específica en el servidor 4D.

Cuando se recibe una primera petición REST válida, el servidor crea la sesión y envía una cookie de sesión llamada `WASID4D` en el encabezado de respuesta **"Set-Cookie"**, que contiene el UUID de la sesión, por ejemplo:

```
WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3
```

En las siguientes peticiones REST, asegúrese de que esta cookie se incluya en **el encabezado "Cookie"** con el fin de reutilizar la misma sesión. En caso contrario, se abrirá una nueva sesión y se utilizará otra licencia.

### Ejemplo

La gestión de las cookies de sesión depende de su cliente HTTP. Este ejemplo muestra cómo extraer y reenviar la cookie de sesión en el contexto de las peticiones gestionadas a través del comando 4D `HTTP Request`.

```4d
// Crear los encabezados
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

//Esta petición abre una sesión para el usuario "kind user"
$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\  
    $response;headerNames;headerValues;*)


//Crear nuevos arrays para los encabezados con únicamente la cookie WASID4D
buildHeader(->headerNames;->headerValues)

//Esta otra petición no abrirá una nueva sesión
$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\  
    $response;headerNames;headerValues;*)
```

```4d
// método proyecto buildHeader  

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



