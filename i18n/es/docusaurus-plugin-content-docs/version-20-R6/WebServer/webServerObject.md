---
id: webServerObject
title: Objeto servidor web
---

Un proyecto 4D puede iniciar y monitorear un servidor web para la aplicación principal (host) así como para cada componente alojado.

Por ejemplo, si ha instalado dos componentes en su aplicación principal, puede iniciar y supervisar hasta tres servidores web independientes desde su aplicación:

- un servidor web para la aplicación local,
- un servidor web para el componente #1,
- un servidor web para el componente #2.

Aparte de la memoria, no hay límite en el número de componentes y por lo tanto, de servidores web, que se pueden adjuntar a un solo proyecto de aplicación 4D.

Cada servidor web 4D, incluido el servidor web de la aplicación principal, se expone como un **objeto** de la clase `4D.WebServer`. Una vez instanciado, un objeto servidor web puede ser manejado desde la aplicación actual o desde cualquier componente utilizando un [gran número de propiedades y funciones](API/WebServerClass.md).

> Los [comandos WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) heredados del lenguaje 4D son soportados, pero no se puede seleccionar el servidor web al que se aplican (ver más abajo).

Cada servidor web (aplicación local o componente) puede ser utilizado en su propio contexto independiente, incluyendo:

- las llamadas a los métodos base `On Web Authentication` y `On Web Connection`
- el procesamiento de las etiquetas 4D y las llamadas de métodos,
- sesiones web y gestión del protocolo TLS.

Esto le permite desarrollar componentes independientes y funcionalidades que vienen con sus propias interfaces web.

## Instanciar un objeto servidor web

El objeto servidor web de la aplicación local (servidor web por defecto) es cargado automáticamente por 4D en al inicio. Por lo tanto, si escribe en un proyecto recién creado:

```4d
$nbSrv:=WEB Server list.length   
//el valor de $nbSrv es 1
```

Para instanciar un objeto servidor web, llame al comando [`WEB Server`](API/WebServerClass.md#web-server):

```4d
//crear una variable objeto de la clase 4D.WebServer
var webServer : 4D.WebServer 
	//llamar al servidor web desde el contexto actual
webServer:=WEB Server  

	//equivalente a
webServer:=WEB Server(Web server database)
```

Si la aplicación utiliza componentes y quiere llamar a:

- el servidor web de la aplicación local a partir de un componente o
- el servidor que ha recibido la solicitud (sin importar el servidor),

también se puede utilizar:

```4d
var webServer : 4D.WebServer 
	//llamar al servidor web local desde un componente  
webServer:=WEB Server(Web server host database)  
	//llamar al servidor web objetivo
webServer:=WEB Server(Web server receiving request)  
```

## Funciones del servidor web

Un [objeto de clase Web srver](API/WebServerClass.md#web-server-object) contiene las siguientes funciones:

| Funciones                                | Parámetros                          | Valor devuelto                     | Descripción             |
| ---------------------------------------- | ----------------------------------- | ---------------------------------- | ----------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (objeto) | Iniciar el servidor web |
| [`stop()`](API/WebServerClass.md#start)  | -                                   | *                                  | Detener el servidor Web |

Para iniciar y detener un servidor web, basta con llamar a las funciones [`start()`](API/WebServerClass.md#start) y [`stop()`](API/WebServerClass.md#stop) del objeto servidor web:

```4d
var $status : Object
  	//para iniciar un servidor web con los parámetros por defecto
$status:=webServer.start()
	//para iniciar el servidor web con los parámetros personalizados  
	//$settings object contains web server properties
webServer.start($settings)

	//para detener el servidor web
$status:=webServer.stop()
```

## Propiedades del servidor web

Un objeto servidor web contiene [varias propiedades](API/WebServerClass.md#web-server-object) que configuran el servidor web.

Estas propiedades son definidas:

1. utilizando el parámetro `settings` de la función [`.start()`](API/WebServerClass.md#start) (excepto para las propiedades de sólo lectura, ver más abajo),
2. si no se utiliza, utilizando el comando `WEB SET OPTION` (sólo aplicaciones locales),
3. si no se utiliza, en los parámetros de la aplicación local o del componente.

- Si el servidor web no se inicia, las propiedades contienen los valores que se utilizarán en el próximo inicio del servidor web.
- Si se inicia el servidor web, las propiedades contienen los valores reales utilizados por el servidor web (la configuración predeterminada podría haber sido anulada por el parámetro `settings` de la función [`.start()`](API/WebServerClass.md#start).

> *isRunning*, *name*, *openSSLVersion*, y *perfectForwardSecrecy* son propiedades de sólo lectura que no pueden predefinirse en el parámetro del objeto `settings` para la función [`start()`](API/WebServerClass.md#start).

## Alcance de los comandos 4D Web

El lenguaje 4D contiene [varios comandos](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permitiendo controlar el servido Web. Sin embargo, estos comandos están diseñados para trabajar con un único servidor web (por defecto). Cuando utilice estos comandos en el contexto de los objetos servidor web, asegúrese de que su alcance es el adecuado.

| Comando                         | Alcance                                  |
| ------------------------------- | ---------------------------------------- |
| `SET DATABASE PARAMETER`        | Aplicación local del servidor web        |
| `WEB CLOSE SESSION`             | Servidor web que ha recibido la petición |
| `WEB GET BODY PART`             | Servidor web que ha recibido la petición |
| `WEB Get body part count`       | Servidor web que ha recibido la petición |
| `WEB Get Current Session ID`    | Servidor web que ha recibido la petición |
| `WEB GET HTTP BODY`             | Servidor web que ha recibido la petición |
| `WEB GET HTTP HEADER`           | Servidor web que ha recibido la petición |
| `WEB GET OPTION`                | Aplicación local del servidor web        |
| `WEB Get server info`           | Aplicación local del servidor web        |
| `WEB GET SESSION EXPIRATION`    | Servidor web que ha recibido la petición |
| `WEB Get session process count` | Servidor web que ha recibido la petición |
| `WEB GET STATISTICS`            | Aplicación local del servidor web        |
| `WEB GET VARIABLES`             | Servidor web que ha recibido la petición |
| `WEB Is secured connection`     | Servidor web que ha recibido la petición |
| `WEB Is server running`         | Aplicación local del servidor web        |
| `WEB SEND BLOB`                 | Servidor web que ha recibido la petición |
| `WEB SEND FILE`                 | Servidor web que ha recibido la petición |
| `WEB SEND HTTP REDIRECT`        | Servidor web que ha recibido la petición |
| `WEB SEND RAW DATA`             | Servidor web que ha recibido la petición |
| `WEB SEND TEXT`                 | Servidor web que ha recibido la petición |
| `WEB SET HOME PAGE`             | Aplicación local del servidor web        |
| `WEB SET HTTP HEADER`           | Servidor web que ha recibido la petición |
| `WEB SET OPTION`                | Aplicación local del servidor web        |
| `WEB SET ROOT FOLDER`           | Aplicación local del servidor web        |
| `WEB START SERVER`              | Aplicación local del servidor web        |
| `WEB STOP SERVER`               | Aplicación local del servidor web        |
| `WEB Validate digest`           | Servidor web que ha recibido la petición |
