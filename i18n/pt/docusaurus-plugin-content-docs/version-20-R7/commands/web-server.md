---
id: web-server
title: WEB Server
displayed_sidebar: docs
---

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!--REF #_command_.WEB Server.Params-->

| Parâmetro | Tipo                          |   | Descrição                                                                                |
| --------- | ----------------------------- | - | ---------------------------------------------------------------------------------------- |
| option    | Integer                       | → | Servidor Web a ser obtido (padrão se omitido = `Web server database`) |
| Resultado | 4D. WebServer | ← | Objeto Web Server                                                                        |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                                            |
| ------- | --------------------------------------------------- |
| 18 R3   | Adicionado                                          |
| 19      | suporte para .sessionCookieSameSite |

</details>

#### Descrição

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the *option* parameter:

| Parâmetros                                   | Valor | Comentário                                                                     |
| -------------------------------------------- | ----- | ------------------------------------------------------------------------------ |
| `Web server database`                        | 1     | Servidor Web de banco de dados atual (padrão caso omitido)  |
| Parâmetros                                   | 2     | Servidor Web do banco de dados de host de um componente                        |
| `Solicitação de recebimento do servidor web` | 3     | Servidor web que recebeu o pedido (servidor Web de destino) |

The **returned Web server object** contains the current values of the [Web server properties](../API/WebServerClass.md).

#### Exemplo

Do seu componente, você quer saber se o servidor Web do banco de dados host está iniciado:

```4d
  // Método de um componente
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### Veja também

[WEB Server list](web-server-list.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1674                            |
| Thread safe    | &amp;cross; |
