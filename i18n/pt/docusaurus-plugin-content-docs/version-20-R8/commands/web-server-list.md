---
id: web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

| Parâmetro | Tipo       |   | Descrição                                      |
| --------- | ---------- | - | ---------------------------------------------- |
| Resultado | Collection | ← | Collection of the available Web Server objects |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

#### Descrição

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

Uma aplicação 4D pode conter em qualquer lugar de um a vários servidores Web:

- um servidor Web para o banco de dados host (servidor Web padrão)
- um servidor web para cada componente.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> O objeto do servidor Web padrão é carregado automaticamente pelo 4D na inicialização. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](web-server.md) command.

You can use the [.name](../API/WebServerClass.md#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Exemplo

Queremos saber quantos servidores rodando estão disponíveis:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Veja também

[WEB Server](web-server.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1716                            |
| Thread safe    | &amp;check; |
