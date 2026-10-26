---
id: quotas
title: Cuotas del servidor web
---

Las aplicaciones web pueden recibir solicitudes de muchos clientes diferentes, lo que genera distintos niveles de tráfico y consumo de recursos. Sin los límites adecuados, una actividad excesiva por parte de uno o varios clientes puede afectar al rendimiento y a la disponibilidad del servidor web.
Las cuotas del servidor web le permiten controlar el uso de recursos limitando el tráfico, las solicitudes, las sesiones activas, las sesiones de invitados y los conjuntos de entidades REST. Las cuotas se pueden configurar a nivel global del servidor web (para el conjunto de sesiones), en el nivel predeterminado de las sesiones (para cada nueva sesión) o a nivel de la sesión REST actual.

:::tip Entradas de blog relacionadas

[Un servidor web 4D que sabe cuándo decir No](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/)

:::

## Requisitos

La configuración de cuotas requiere la activación de las [sesiones escalables](./sessions.md#enabling-web-sessions).

## Cómo configurar las cuotas

### Al inicio

Al inicio, puede configurar las cuotas en la propiedad `quotas` pasada a [`WebServer.start()`](../API/WebServerClass.md#start) para el servidor Web anfitrión o un servidor Web de componentes. Para el servidor web anfitrión únicamente, también puede cargar cuotas desde un archivo **HTTPQuotas.json** almacenado en la carpeta [`Project/Sources`](../Project/architecture.md#sources).

#### Uso de la propiedad `quotas`

Las cuotas se pueden definir mediante la propiedad `quotas` del parámetro *settings* que se pasa a la función [`start()`](../API/WebServerClass.md#start).

```4d

var $quotas:={}
$quotas.inBytesPerMin:=20000000

WEB Server().start({quotas: $quotas})
```

#### Usando un archivo HTTPQuotas.json

Para el servidor web anfitrión, se puede crear un archivo **HTTPQuotas.json** y guardarlo en la carpeta [`Project/Sources`](../Project/architecture.md#sources). El servidor web del host carga este archivo al iniciarse. El archivo debe contener un objeto JSON cuyas propiedades sean los [nombres de las propiedades de cuotas](../API/QuotaManagerClass.md):

```json title="/Project/Sources/HTTPQuotas.json"
{
    "inBytesPerHour": 100000000,
    "inBytesPerHourPerSession": 10000000,
    "nbRequestsPerMin": 1000,
    "nbRequestsPerMinPerSession": 100
}
```

Si el archivo **HTTPQuotas.json** contiene código JSON con formato incorrecto, el servidor web no se inicia y devuelve el error *551 - JSON con formato incorrecto*.

Si se especifica `settings.quotas` al iniciar el servidor web, se ignora el archivo **HTTPQuotas.json**.

### En ejecución

En un servidor web en ejecución, puede actualizar las cuotas mediante la propiedad [`WebServer.quotas`](../API/WebServerClass.md#quotas). Los cambios se aplican a la actividad posterior del servidor web; las cuotas predeterminadas de sesión se aplican a las nuevas sesiones creadas tras la actualización del valor de la cuota.

### Cuotas de sesión REST actuales

La propiedad [`Session.quotas`](../API/SessionClass.md#quotas) configura las cuotas para la sesión REST actual. Proporciona los valores de uso actuales y permite configurar los límites de conjuntos de entidades REST y los tiempos de espera de la sesión. Estas cuotas son distintas de las cuotas predeterminadas de sesión configuradas a través de [`WebServer.quotas`](../API/WebServerClass.md#quotas), que se aplican cuando se crean nuevas sesiones web.

### Ejemplo

El siguiente ejemplo configura las cuotas del servidor web al iniciar una aplicación interna utilizada por aproximadamente 20 personas con uso ocasional:

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

## Aplicación de las cuotas

Para cada petición entrante, el servidor Web verifica las cuotas durante el preprocesamiento, antes de que se llame al método base [`On Web Connection`](./httpRequests.md#on-web-connection) (si está definido):

1. Si se configura una cuota de sesión, se verifica primero.
2. Si se acepta la solicitud, se comprueba el límite global del servidor.
3. Si ambas verificaciones pasan, la solicitud se procesa.

Si se supera cualquiera de las dos cuotas, la solicitud se rechaza con una respuesta **HTTP 429 Too Many Requests**. No se crea ningún proceso web y no se llama a [`On Web Connection`](./httpRequests.md#on-web-connection) (si está definido).

Si se supera una cuota de bytes de salida mientras se envía una respuesta, se interrumpe la solicitud actual. Las reglas de preprocesamiento anteriores se aplican a la siguiente solicitud dentro de la misma ventana de tiempo.

### Respuestas de limitación de velocidad

Las cuotas de limitación de velocidad utilizan intervalos de tiempo fijos. Cuando se alcanza una cuota, las solicitudes posteriores se rechazan hasta el fin de la ventana actual de un minuto o de una hora. La respuesta **HTTP 429 Too Many Requests** incluye un encabezado `Retry-After` que indica el tiempo que hay que esperar antes de enviar otra solicitud.

When one of concurrent quotas (`nbSessions`, `nbGuestSessions`, and `nbEntitySetsPerSession`) is reached, the response includes an empty `Retry-After` header until the quota is no longer reached.

Las cuotas de bytes de entrada se aplican a todos los datos recibidos en una solicitud, incluidos sus encabezados y su cuerpo. Los límites de bytes de salida se calculan en función del tamaño de la respuesta sin comprimir, independientemente de la configuración de compresión del servidor web.

## Valores de las cuotas

Los límites de cuota deben ser números enteros positivos. Un valor *Undefined* significa que la cuota no está configurada y no se aplica. Establecer un valor de cuota en cero o en un número negativo genera un error, y el valor de cuota existente permanece sin cambios.

Los contadores de cuota se almacenan en la memoria de cada instancia de 4D Server y no se comparten entre las distintas instancias del servidor.

## Servidores web de componentes

Las cuotas configuradas para el servidor web de un componente solo se aplican a ese servidor y son independientes de las cuotas configuradas para el servidor web anfitrión u otros servidores web de componentes.

El archivo de configuración [**HTTPQuotas.json**](#using-an-httpquotasjson-file) solo se aplica al servidor web anfitrión. Los servidores web de los componentes deben configurarse con la propiedad [`.quotas`](../API/WebServerClass.md#quotas) del servidor web y/o la propiedad [`.quotas`](../API/SessionClass.md#quotas) de la sesión.

## Ver también

- [`WebServer.quotas`](../API/WebServerClass.md#quotas)
- [`WebServer.start()`](../API/WebServerClass.md#start)
- [`Session.quotas`](../API/SessionClass.md#quotas)
- [`4D.QuotaManager`](../API/QuotaManagerClass.md)