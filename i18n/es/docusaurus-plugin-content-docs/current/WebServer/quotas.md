---
id: quotas
title: Cuotas del servidor web
---

Web applications can receive requests from many different clients, generating varying levels of traffic and resource consumption. Without appropriate limits, excessive activity from one or more clients can affect Web server performance and availability.
Web server quotas let you control resource usage by limiting traffic, requests, active sessions, Guest sessions, and REST entity sets. Quotas can be configured at the web server global level (for all sessions combined), at the session default level (for each new session) or at the current REST session level.

:::tip Entradas de blog relacionadas

[A 4D web server that knows when to say No](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/)

:::

## Requisitos

Quota configuration requires [scalable sessions](./sessions.md#enabling-web-sessions) to be enabled.

## Cómo configurar las cuotas

### Al inicio

At startup, you can configure quotas in the `quotas` property passed to [`WebServer.start()`](../API/WebServerClass.md#start) for the host Web server or a component Web server. For the host Web server only, you can also load quotas from an **HTTPQuotas.json** file stored in the [`Project/Sources`](../Project/architecture.md#sources) folder.

#### Uso de la propiedad `quotas`

Quotas can be defined using the `quotas` property in the *settings* parameter passed to the [`start()`](../API/WebServerClass.md#start) function.

```4d

var $quotas:={}
$quotas.inBytesPerMin:=20000000

WEB Server().start({quotas: $quotas})
```

#### Usando un archivo HTTPQuotas.json

For the host Web server, you can create an **HTTPQuotas.json** file and store it in the [`Project/Sources`](../Project/architecture.md#sources) folder. El servidor web del host carga este archivo al iniciarse. The file must contain a JSON object whose properties are [quota property names](../API/QuotaManagerClass.md):

```json title="/Project/Sources/HTTPQuotas.json"
{
    "inBytesPerHour": 100000000,
    "inBytesPerHourPerSession": 10000000,
    "nbRequestsPerMin": 1000,
    "nbRequestsPerMinPerSession": 100
}
```

If the **HTTPQuotas.json** file contains malformed JSON, the Web server does not start and returns error *551 - JSON malformed*.

Si se especifica `settings.quotas` al iniciar el servidor web, se ignora el archivo **HTTPQuotas.json**.

### At runtime

For a running Web server, you can update quotas through the [`WebServer.quotas`](../API/WebServerClass.md#quotas) property. Changes are applied to subsequent Web server activity; session default quotas apply to new sessions created after the quota value is updated.

### Current REST session quotas

The [`Session.quotas`](../API/SessionClass.md#quotas) property configures quotas for the current REST session. Proporciona los valores de uso actuales y permite configurar los límites de conjuntos de entidades REST y los tiempos de espera de la sesión. These quotas are distinct from the session default quotas configured through [`WebServer.quotas`](../API/WebServerClass.md#quotas), which are applied when new Web sessions are created.

### Ejemplo

The following example configures web server quotas at startup for an internal application used by approximately 20 people with occasional usage:

```4d

var $quotas:={}
var $webServer : Object:=WEB Server

// Maximum number of input bytes accepted in a one-minute time window on the web server
$quotas.inBytesPerMin:=20000000

// Maximum number of output bytes sent in a one-minute time window for a session
$quotas.outBytesPerMinPerSession:=10000000

// Maximum number of active sessions on the web server
$quotas.nbSessions:=50

// Maximum number of unauthenticated sessions on the web server
$quotas.nbGuestSessions:=10

// Maximum number of requests accepted in a one-minute time window on the web server
$quotas.nbRequestsPerMin:=500

// Maximum number of requests accepted in a one-hour time window on the web server
$quotas.nbRequestsPerHour:=20000

// We launch the Web server
$webServer.start({quotas: $quotas})
```

## Quota enforcement

For each incoming request, the Web server checks quotas during preprocessing, before the [`On Web Connection`](./httpRequests.md#on-web-connection) database method is called (if defined):

1. Si se configura una cuota de sesión, se verifica primero.
2. Si se acepta la solicitud, se comprueba el límite global del servidor.
3. Si ambas verificaciones pasan, la solicitud se procesa.

Si se supera cualquiera de las dos cuotas, la solicitud se rechaza con una respuesta **HTTP 429 Too Many Requests**. No se crea ningún proceso web y no se llama a [`On Web Connection`](./httpRequests.md#on-web-connection) (si está definido).

Si se supera una cuota de bytes de salida mientras se envía una respuesta, se interrumpe la solicitud actual. Las reglas de preprocesamiento anteriores se aplican a la siguiente solicitud dentro de la misma ventana de tiempo.

### Respuestas de limitación de velocidad

Las cuotas de limitación de velocidad utilizan intervalos de tiempo fijos. When a quota is reached, subsequent requests are rejected until the current one-minute or one-hour window ends. The **HTTP 429 Too Many Requests** response includes a `Retry-After` header containing the time to wait before sending another request.

When one of concurrent quotas (`nbSessions`, `nbGuestSessions`, and `nbEntitySetsPerSession`) is reached, the response includes an empty `Retry-After` header until the quota is no longer reached.

Las cuotas de bytes de entrada se aplican a todos los datos recibidos en una solicitud, incluidos sus encabezados y su cuerpo. The output byte quotas are evaluated against the uncompressed response size, regardless of the Web server compression settings.

## Valores de las cuotas

Los límites de cuota deben ser números enteros positivos. Un valor *Undefined* significa que la cuota no está configurada y no se aplica. Establecer un valor de cuota en cero o en un número negativo genera un error, y el valor de cuota existente permanece sin cambios.

Los contadores de cuota se almacenan en la memoria de cada instancia de 4D Server y no se comparten entre las distintas instancias del servidor.

## Servidores web de componentes

Quotas configured for a component Web server apply only to that server and are independent of the quotas configured for the host Web server or other component Web servers.

The [**HTTPQuotas.json**](#using-an-httpquotasjson-file) configuration file applies only to the host Web server. Component Web servers must be configured with the Web server [`.quotas`](../API/WebServerClass.md#quotas) property and/or the session [`.quotas`](../API/SessionClass.md#quotas) property.

## Ver también

- [`WebServer.quotas`](../API/WebServerClass.md#quotas)
- [`WebServer.start()`](../API/WebServerClass.md#start)
- [`Session.quotas`](../API/SessionClass.md#quotas)
- [`4D.QuotaManager`](../API/QuotaManagerClass.md)