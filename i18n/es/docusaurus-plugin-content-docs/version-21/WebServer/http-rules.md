---
id: http-rules
title: Reglas HTTP
---

Puede definir reglas HTTP para controlar los encabezados de respuesta HTTP para toda petición recibida por el servidor web 4D, incluyendo las peticiones REST. Puede añadir, modificar o eliminar los encabezados HTTP, enviar redirecciones o establecer el estado HTTP. This feature is useful to implement security policies based upon the handling of headers.

To define HTTP rules, you just need to write some RegEx to declare the URL patterns you want to control, as well as how to modify response headers. You can set these rules using a `HTTPRules.json` file stored in the project folder, or using the *settings* parameter [`start()`](../API/WebServerClass.md#start) function of the web server object.

## Requisitos

HTTP rules are supported in the following contexts:

- [scalable sessions](./sessions.md#enabling-web-sessions) or [no sessions](../settings/web.md#no-sessions) are enabled,
- a web server run locally by 4D or 4D Server, including those [run by components](./webServerObject.md).

## Cómo definir reglas

You can declare HTTP response rules:

- in a configuration file named **HTTPRules.json** stored in the [`Project/Sources`](../Project/architecture.md#sources) folder of the project. Rules are loaded and applied in the main Web server once it is started.
- using a [`.rules`](../API/WebServerClass.md#rules) property set in the *settings* parameter of the [`start()`](../API/WebServerClass.md#start) function, for any web server object:

```4d
WEB Server.start($settings.rules) //set rules at web server startup
```

If both a **HTTPRules.json** file and a call to the [`WEB Server`](../commands/web-server.md) command with a valid `$settings.rules` are used, the `WEB Server` command has priority.

If the URI of the request does not match any of the RegEx patterns, the web server returns a default response.

## Definición de reglas

The **HTTPRules.json** file or the [`.rules`](../API/WebServerClass.md#rules) property must contain a collection of **rule objects**.

Un objeto regla se define por:

- a RegEx describing a URL pattern, e.g. "^(.\*\\.(jpg|jpeg|png|gif))"
- the name of the action to execute for the HTTP response, e.g. "removeHeaders"
- the value of the action, e.g. "X-Unwanted-Header1"

Las demás propiedades se ignoran.

### Patrones de la URL

URL patterns are given using **regular expressions**. To declare a regular expression pattern, use the "RegExPattern" property name.

Ej.: `"RegExPattern": "/Test/Authorized/(.*)"`

When the web server receives a request, **all** URL patterns are triggered sequentially in the given order, and all matching patterns are executed. In case of several actions modifying similar resources, the last executed action is taken into account.

### Acciones

The following action keywords are supported:

| Palabras clave  | Tipo de valor               | Descripción                                                                                                                                                                                                                                   |
| --------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `removeHeaders` | Texto o colección de textos | Header(s) to remove from the HTTP responses. If a header to remove does not exist in the response header, it is ignored.                                                                   |
| `addHeaders`    | Object                      | Name (text) and value (text) of header(s) to add to the HTTP responses.                                                                                              |
| `setHeaders`    | Object                      | Name (text) and value (text) of header(s) to modify in the HTTP responses. If a header to modify does not exist in the response header, it is added. |
| `denyAccess`    | Boolean                     | true to deny access to the resource, false to allow access. When the access to a resource is denied, the web server returns a 403 status by default                                                                           |
| `redirect`      | Text                        | Redirection URL. When a redirection is triggered, the web server returns a 302 status by default                                                                                                                              |
| `status`        | Number                      | Estado HTTP                                                                                                                                                                                                                                   |

### Encabezados no modificables

Some headers could not be added, modified or removed:

| Encabezado       | Acción de añadir | Set           | Remove |
| ---------------- | ---------------- | ------------- | ------ |
| Fecha            | No               | No            | No     |
| Content-Length   | No               | No            | No     |
| Content-Encoding | No               | No            | No     |
| Vary             | Sí               | No            | No     |
| Set-Cookie       | Sí               | Añadir cookie | No     |

Unauthorized changes on these headers do not generate errors, however modifications will be ignored.

### Current rules

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

[New Way to Control Your HTTP Responses](https://blog.4d.com/new-way-to-control-your-http-responses/)

:::
