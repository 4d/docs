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

Cada servidor web 4D, incluindo o servidor web da aplicação principal, é exposto como um **objeto** específico da classe `4D. WebServer`. Uma vez instanciado, um objeto de servidor da Web pode ser gerenciado a partir da aplicação atual ou de qualquer componente usando um [grande número de propriedades e funções](API/WebServerClass.md).

> Os [comandos WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) herdados da linguagem 4D são compatíveis, mas não é possível selecionar o servidor Web ao qual eles se aplicam (veja abaixo).

Cada servidor web (aplicação host ou componente) pode ser usado em seu próprio contexto separado, incluindo:
- as chamadas os métodos banco de dados `On Web Authentication` e `On Web Connection`
- o processamento das etiquetas 4D e das chamadas de métodos,
- sessões Web e gestão do protocolo TLS.

Isso permite que você desenvolva componentes e recursos independentes que vêm com suas próprias interfaces web.


## Instanciar um objeto servidor Web

O objeto servidor web da aplicação host (servidor web padrão) é carregado automaticamente pelo 4D ao iniciar. Assim, se escrever num projeto recém-criado:

```4d
$nbSrv:=WEB Server list.length   
//$nbSrv valor é 1
```

Para instanciar um objeto servidor web, chame o comando [`WEB Server`](API/WebServerClass.md#web-server):

```4d
    //create an object variable of the 4D. WebServer class
var webServer : 4D. WebServer 
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
var webServer : 4D. WebServer 
    //call the host web server from a component  
webServer:=WEB Server(Web server host database)  
    //call the target web server
webServer:=WEB Server(Web server receiving request)  
```


## Funções do servidor Web

Um [objeto de classe web server](API/WebServerClass.md#web-server-object) contém as seguintes funções:

| Funções                                  | Parâmetro        | Valor retornado  | Descrição             |
| ---------------------------------------- | ---------------- | ---------------- | --------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (objecto) | Inicia o servidor web |
| [`stop()`](API/WebServerClass.md#start)  | -                | -                | Pára o servidor Web   |

Para iniciar e interromper um servidor web, apenas chame as funções [`start()`](API/WebServerClass.md#start) e [`stop()`](API/WebServerClass.md#stop) do objeto servidor web:

```4d
var $status : Object
    //para iniciar um servidor web com os parâmetros padrão
$status:=webServer.start()
    //para iniciar o servidor web com configurações personalizadas  
    // O objeto$settings contém propriedades do servidor Web
webServer.start($settings)

    //para parar o servidor da web
$status:=webServer.stop()
```


## Propriedades do servidor web

Um objeto de servidor web contém [várias propriedades](API/WebServerClass.md#web-server-object) que configuram o servidor web.

Estas propriedades são definidas:

1. usando o parâmetro `settings` da função [`.start()`](API/WebServerClass.md#start) (exceto as propriedades somente leitura, veja abaixo),
2. se não for usado, usando o comando `WEB SET OPTION` (apenas aplicações host),
3. se não for usado, nos parâmetros da aplicação host ou do componente.

- Se o servidor web não for iniciado, as propriedades contêm os valores que serão usados na próxima inicialização do servidor web.
- Se o servidor web for iniciado, as propriedades contêm os valores reais usados pelo servidor web (configurações padrão poderiam ter sido substituídas pelo parâmetro `settings` da função [`.start()`](API/WebServerClass.md#start).

> *isRunning*, *name*, *openSSLVersion* e *perfectForwardSecrecy* são propriedades somente de leitura que não podem ser predefinidas no parâmetro objeto`settings` para a função [`start()`](API/WebServerClass.md#start).


## Âmbito dos comandos 4D Web

A linguagem 4D contém [vários comandos](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) que podem ser usados para controlar o servidor Web. No entanto, esses comandos são projetados para funcionar com um único servidor web (padrão). Ao usar esses comandos no contexto de objetos do servidor web, certifique-se de que seu escopo é apropriado.

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
