---
id: http-rules
title: Reglas HTTP
---

Puede definir reglas HTTP para controlar los encabezados de respuesta HTTP para toda petición recibida por el servidor web 4D, incluyendo las peticiones REST. Puede añadir, modificar o eliminar los encabezados HTTP, enviar redirecciones o establecer el estado HTTP. Esta funcionalidad es útil para implementar políticas de seguridad basadas en el manejo de encabezados.

Para definir reglas HTTP, sólo tiene que escribir RegEx para declarar los patrones de URL que quiere controlar así como cómo modificar los encabezados de respuesta. You can set these rules using a `HTTPRules.json` file stored in the project folder, or using the *settings* parameter [`start()`](../API/WebServerClass.md#start) function of the web server object.

## Requisitos

Las reglas HTTP se soportan en los siguientes contextos:

- las [sesiones escalables](./sessions.md#enabling-web-sessions) o [sin sesiones](../settings/web.md#no-sessions) están activadas,
- un servidor web ejecutado localmente por 4D o 4D Server, incluyendo aquellos [ejecutados por componentes](./webServerObject.md).

## Cómo definir reglas

Puede declarar las reglas de respuesta HTTP:

- en un archivo de configuración llamado **HTTPRules.json** almacenado en la carpeta [`Project/Sources`](../Project/architecture.md#sources) del proyecto. Las reglas se cargan y se aplican en el servidor web principal una vez que se inicia.
- utilizando una propiedad [`.rules`](../API/WebServerClass.md#rules) definida en el parámetro *settings* de la función [`start()`](../API/WebServerClass.md#start), para todo objeto servidor web:

```4d
WEB Server.start($settings.rules) //definir reglas al inicio del servidor web
```

Si se utiliza tanto un archivo **HTTPRules.json** como una llamada al comando [`WEB Server`](../commands/web-server.md) con un `$settings.rules` válido, el comando `WEB Server` tiene prioridad.

Si la URI de la petición no coincide con ninguno de los patrones de RegEx, el servidor web devuelve una respuesta por defecto.

## Definición de reglas

El archivo **HTTPRules.json** o la propiedad [`.rules`](../API/WebServerClass.md#rules) deben contener una colección de **objetos regla**.

Un objeto regla se define por:

- un RegEx que describe un patrón de URL, por ejemplo, "^(.\*\\.(jpg|jpeg|png|gif))"
- el nombre de la acción a ejecutar para la respuesta HTTP, por ejemplo, "removeHeaders"
- el valor de la acción, por ejemplo, "X-Unwanted-Header1"

Las demás propiedades se ignoran.

### Patrones de la URL

Los patrones de URL se dan usando **expresiones regulares**. Para declarar un patrón de expresión regular, utilice el nombre de propiedad "RegExExpattern".

Ej.: `"RegExPattern": "/Test/Authorized/(.*)"`

Cuando el servidor web recibe una solicitud, **todos** los patrones de URL se activan secuencialmente en el orden dado y se ejecutan todos los patrones coincidentes. En caso de varias acciones que modifican recursos similares, se tiene en cuenta la última acción ejecutada.

### Acciones

Se soportan las siguientes palabras clave de acción:

| Palabras clave  | Tipo de valor               | Descripción                                                                                                                                                                                                                                         |
| --------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `removeHeaders` | Texto o colección de textos | Encabezado(s) para eliminar de las respuestas HTTP. Si un encabezado a eliminar no existe en el encabezado de respuesta, se ignora.                                                              |
| `addHeaders`    | Object                      | Name (text) and value (text) of header(s) to add to the HTTP responses.                                                                                                    |
| `setHeaders`    | Object                      | Name (text) and value (text) of header(s) to modify in the HTTP responses. Si un encabezado a modificar no existe en el encabezado de respuesta, se añade. |
| `denyAccess`    | Boolean                     | true para negar el acceso al recurso, false para permitir el acceso. Cuando el acceso a un recurso es denegado, el servidor web devuelve un estado 403 por defecto                                                                  |
| `redirect`      | Text                        | Redirigir URL. Cuando se activa una redirección, el servidor web devuelve un estado 302 por defecto                                                                                                                                 |
| `status`        | Number                      | Estado HTTP                                                                                                                                                                                                                                         |

### Encabezados no modificables

Algunos encabezados no pudieron ser añadidos, modificados o eliminados:

| Encabezado       | Acción de añadir | Set           | Remove |
| ---------------- | ---------------- | ------------- | ------ |
| Fecha            | No               | No            | No     |
| Content-Length   | No               | No            | No     |
| Content-Encoding | No               | No            | No     |
| Vary             | Sí               | No            | No     |
| Set-Cookie       | Sí               | Añadir cookie | No     |

Los cambios no autorizados en estos encabezados no generan errores, sin embargo las modificaciones serán ignoradas.

### Reglas actuales

Puede conocer las reglas actuales utilizando la propiedad [`.rules` del objeto Web Server](../API/WebServerClass.md#rules):

```
var $rules : Collection
$rules:=WEB Server.rules //reglas actuales
```

## Ejemplos

Rules can be set using a `HTTPRules.json` file or the *settings* parameter of the [`.start()`](../API/WebServerClass.md#start) web server function.

### Utilización de un archivo HTTPRules.json

```json

[
	{
		"comment": "All requests: allow GET method for, remove 'Server' header and set security headers",
		"regexPattern": "/(.*)",
		"setHeaders": {
			"Allow": "GET",
			"X-Frame-Options": "SAMEORIGIN",
			"Content-Security-Policy": "default-src 'self'"
		},
		"removeHeaders": [
			"Server"
		]
	},
	{
		"comment": "REST requests: allow POST method",
		"regexPattern": "/rest/(.*)",
		"addHeaders": {
			"Allow": "POST"
		}
	},
	{
		"comment": "HTML files in 'doc' folder: set cache control",
		"regexPattern": "/docs/(.*).html",
		"setHeaders": {
			"Cache-Control": "max-age=3600"
		},
		"removeHeaders": [
			"X-Powered-By"
		]
	},
	{
		"comment": "Status 503 on 'maintenance' page",
		"regexPattern": "^/maintenance.html",
		"status": 503
	},
	{
		"comment": "Redirect CSS and JS files",
		"regexPattern": "^(.*\\\\.(css|js))",
		"redirect": "https://cdn.example.com/"
	},
	{
		"comment": "Redirect images with permanent status code",
		"regexPattern": "^(.*\\\\.(jpg|jpeg|png|gif))",
		"redirect": "https://cdn.example.com/images/",
		"status": 301
	},
	{
		"comment": "Deny access for all resources placed in the 'private' folder",
		"regexPattern": "/private/(.*)",
		"denyAccess": true
	},
	{
		"comment": "Allow access to all resources placed in the 'private/allowed' folder",
		"regexPattern": "/private/allowed/(.*)",
		"denyAccess": false
	}
]

```

### Using a *settings* parameter

```4d
var $rule:={}

var $settings:={}

$settings.rules:=[]

$rule:={}
$rule.comment:="All requests: allow GET method for, remove 'Server' header and set security headers"
$rule.regexPattern:="/(.*)"
$rule.setHeaders:={Allow: "GET"}
$rule.setHeaders["X-Frame-Options"]:="SAMEORIGIN"
$rule.setHeaders["Content-Security-Policy"]:="default-src 'self'"
$rule.removeHeaders:=["Server"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="REST requests: allow POST method"
$rule.regexPattern:="/rest/(.*)"
$rule.addHeaders:={Allow: "POST"}
$settings.rules.push($rule)

$rule:={}
$rule.comment:="HTML files in 'doc' folder: set cache control"
$rule.regexPattern:="/docs/(.*).html"
$rule.setHeaders:={}
$rule.setHeaders["Cache-Control"]:="max-age=3600"
$rule.removeHeaders:=["X-Powered-By"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Status 503 on 'maintenance' page"
$rule.regexPattern:="^/maintenance.html"
$rule.status:=503
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirect CSS and JS files"
$rule.regexPattern:="^(.*\\\\.(css|js))"
$rule.redirect:="https://cdn.example.com/"
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirect images with permanent status code"
$rule.regexPattern:="^(.*\\\\.(jpg|jpeg|png|gif))"
$rule.redirect:="https://cdn.example.com/images/"
$rule.status:=301
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Deny access for all resources placed in the 'private' folder"
$rule.regexPattern:="/private/(.*)"
$rule.denyAccess:=True
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Allow access to all resources placed in the 'private/allowed' folder"
$rule.regexPattern:="/private/allowed/(.*)"
$rule.denyAccess:=False
$settings.rules.push($rule)

$return:=WEB Server.start($settings)

```

:::tip Entrada de blog relacionada

[Nueva forma de controlar sus respuestas HTTP](https://blog.4d.com/new-way-to-control-your-http-responses/)

:::
