---
id: webServerObject
title: Objeto Web Server
---

A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.

For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:

- um servidor web para a aplicação local,
- um servidor Web para o componente #1,
- um servidor Web para o componente #2.

Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project.

Cada servidor web 4D, incluido el servidor web de la aplicación principal, se expone como un **objeto** de la clase `4D.WebServer`. Una vez instanciado, un objeto servidor web puede ser manejado desde la aplicación actual o desde cualquier componente utilizando un [gran número de propiedades y funciones](API/WebServerClass.md).

> Los [comandos WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) heredados del lenguaje 4D son soportados, pero no se puede seleccionar el servidor web al que se aplican (ver más abajo).

Each web server (host application or component) can be used in its own separate context, including:

- las llamadas a los métodos base `On Web Authentication` y `On Web Connection`
- o processamento das etiquetas 4D e das chamadas de métodos,
- sessões Web e gestão do protocolo TLS.

This allows you to develop independant components and features that come with their own web interfaces.

## Instanciar um objeto servidor Web

The web server object of the host application (default web server) is automatically loaded by 4D at startup. Assim, se escrever num projeto recém-criado:

```4d
$nbSrv:=WEB Server list.length   
//$nbSrv valor é 1
```

To instantiate a web server object, call the [`WEB Server`](commands/web-server.md) command:

```4d
	//create an object variable of the 4D.WebServer class
var webServer : 4D.WebServer 
	//call the web server from the current context
webServer:=WEB Server  

	//equivalent to
webServer:=WEB Server(Web server database)
```

Se a aplicação utilizar componentes e o usuário pretender chamar:

- o servidor Web da aplicação host a partir de um componente ou
- o servidor que recebeu o pedido (qualquer que seja o servidor),

também pode ser utilizado:

```4d
var webServer : 4D.WebServer 
	//call the host web server from a component  
webServer:=WEB Server(Web server host database)  
	//call the target web server
webServer:=WEB Server(Web server receiving request)  
```

## Funções do servidor Web

Un [objeto de clase Web srver](API/WebServerClass.md#web-server-object) contiene las siguientes funciones:

| Funções                                  | Parâmetro                           | Valor retornado                     | Descrição             |
| ---------------------------------------- | ----------------------------------- | ----------------------------------- | --------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (objecto) | Inicia o servidor web |
| [`stop()`](API/WebServerClass.md#start)  | -                                   | -                                   | Pára o servidor Web   |

To start and stop a web server, just call the [`start()`](API/WebServerClass.md#start) and [`stop()`](API/WebServerClass.md#stop) functions of the web server object:

```4d
var $status : Object
  	//to start a web server with default settings
$status:=webServer.start()
	//to start the web server with custom settings  
	//$settings object contains web server properties
webServer.start($settings)

	//to stop the web server
$status:=webServer.stop()
```

## Propriedades do servidor web

Un objeto servidor web contiene [varias propiedades](API/WebServerClass.md#web-server-object) que configuran el servidor web.

Estas propriedades são definidas:

1. using the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function (except for read-only properties, see below),
2. si no se utiliza, utilizando el comando `WEB SET OPTION` (sólo aplicaciones locales),
3. se não for usado, nos parâmetros da aplicação host ou do componente.

- If the web server is not started, the properties contain the values that will be used at the next web server startup.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function.

> _isRunning_, _name_, _openSSLVersion_, and _perfectForwardSecrecy_ are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/WebServerClass.md#start) function.

## Âmbito dos comandos 4D Web

El lenguaje 4D contiene [varios comandos](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permitiendo controlar el servido Web. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate.

| Comando                         | Âmbito                            |
| ------------------------------- | --------------------------------- |
| `SET DATABASE PARAMETER`        | Aplicação local de servidor Web   |
| `WEB CLOSE SESSION`             | Servidor Web que recebeu o pedido |
| `WEB GET BODY PART`             | Servidor Web que recebeu o pedido |
| `WEB Get body part count`       | Servidor Web que recebeu o pedido |
| `WEB Get Current Session ID`    | Servidor Web que recebeu o pedido |
| `WEB GET HTTP BODY`             | Servidor Web que recebeu o pedido |
| `WEB GET HTTP HEADER`           | Servidor Web que recebeu o pedido |
| `WEB GET OPTION`                | Aplicação local de servidor Web   |
| `WEB Get server info`           | Aplicação local de servidor Web   |
| `WEB GET SESSION EXPIRATION`    | Servidor Web que recebeu o pedido |
| `WEB Get session process count` | Servidor Web que recebeu o pedido |
| `WEB GET STATISTICS`            | Aplicação local de servidor Web   |
| `WEB GET VARIABLES`             | Servidor Web que recebeu o pedido |
| `WEB Is secured connection`     | Servidor Web que recebeu o pedido |
| `WEB Is server running`         | Aplicação local de servidor Web   |
| `WEB SEND BLOB`                 | Servidor Web que recebeu o pedido |
| `WEB SEND FILE`                 | Servidor Web que recebeu o pedido |
| `WEB SEND HTTP REDIRECT`        | Servidor Web que recebeu o pedido |
| `WEB SEND RAW DATA`             | Servidor Web que recebeu o pedido |
| `WEB SEND TEXT`                 | Servidor Web que recebeu o pedido |
| `WEB SET HOME PAGE`             | Aplicação local de servidor Web   |
| `WEB SET HTTP HEADER`           | Servidor Web que recebeu o pedido |
| `WEB SET OPTION`                | Aplicação local de servidor Web   |
| `WEB SET ROOT FOLDER`           | Aplicação local de servidor Web   |
| `WEB START SERVER`              | Aplicação local de servidor Web   |
| `WEB STOP SERVER`               | Aplicação local de servidor Web   |
| `WEB Validate digest`           | Servidor Web que recebeu o pedido |
