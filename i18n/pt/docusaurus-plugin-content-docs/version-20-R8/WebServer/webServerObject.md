---
id: webServerObject
title: Objeto Web Server
---

Um projeto 4D pode iniciar e monitorar um servidor web para a aplicação (host) principal, bem como para cada componente hospedado.

Por exemplo, se você instalou dois componentes em sua aplicação principal, você pode iniciar e monitorar até três servidores web independentes em sua aplicação:

- um servidor web para a aplicação local,
- um servidor Web para o componente #1,
- um servidor Web para o componente #2.

Além da memória, não há limite para o número de componentes e, assim, de servidores web, que podem ser anexados a um único projeto de aplicação 4D.

Cada servidor web 4D, incluido el servidor web de la aplicación principal, se expone como un **objeto** de la clase `4D.WebServer`. Una vez instanciado, un objeto servidor web puede ser manejado desde la aplicación actual o desde cualquier componente utilizando un [gran número de propiedades y funciones](API/WebServerClass.md).

> Los [comandos WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) heredados del lenguaje 4D son soportados, pero no se puede seleccionar el servidor web al que se aplican (ver más abajo).

Cada servidor web (aplicação host ou componente) pode ser usado em seu próprio contexto separado, incluindo:

- las llamadas a los métodos base `On Web Authentication` y `On Web Connection`
- o processamento das etiquetas 4D e das chamadas de métodos,
- sessões Web e gestão do protocolo TLS.

Isso permite que você desenvolva componentes e recursos independentes que vêm com suas próprias interfaces web.

## Instanciar um objeto servidor Web

O objeto servidor web da aplicação host (servidor web padrão) é carregado automaticamente pelo 4D ao iniciar. Assim, se escrever num projeto recém-criado:

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

1. usando o parâmetro `settings` da função [`.start()`](API/WebServerClass.md#start) (exceto para propriedades somente leitura, veja abaixo),
2. si no se utiliza, utilizando el comando `WEB SET OPTION` (sólo aplicaciones locales),
3. se não for usado, nos parâmetros da aplicação host ou do componente.

- Se o servidor web não for iniciado, as propriedades contêm os valores que serão usados na próxima inicialização do servidor web.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function.

> *isRunning*, *name*, *openSSLVersion*, and *perfectForwardSecrecy* are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/WebServerClass.md#start) function.

## Âmbito dos comandos 4D Web

El lenguaje 4D contiene [varios comandos](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permitiendo controlar el servido Web. No entanto, esses comandos são projetados para funcionar com um único servidor web (padrão). Ao usar esses comandos no contexto de objetos do servidor web, certifique-se de que seu escopo é apropriado.

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
