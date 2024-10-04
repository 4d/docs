---
id: web-server-list
title: WEB Server list
slug: /commands/web-server-list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list**  -> Resultado<!-- END REF-->
<!--REF #_command_.WEB Server list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#x1F850; | Coleção de objetos disponíveis Web Server |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB Server list.Summary-->O comando **WEB Server list** devolve a coleção de todos os objetos de servidor web disponíveis na aplicação 4D.<!-- END REF--> 

Uma aplicação 4D pode conter de um a vários servidores web:

* 1 servidor web para o banco de dados local (servidor web pré-determinado)
* 1 servidor web para cada componente.

O comando devuelve todos os servidores web disponíveis, estejam sendo executados ou não.

**Nota:** 4D carrega automaticamente o objeto pré-determinado do servidor web ao início. Por outro lado, cada servidor web componente que quiser usar deve ser criada uma instância utilizando o comando [WEB Server](web-server.md). 

Pode utilizar a propriedade *name* do objeto do servidor web para identificar o banco de dados ou o componente ao que se anexa cada objeto de servidor web na lista. Para uma descrição detalhada de objeto de servidor web, consulte o comando [WEB Server](web-server.md).

#### Exemplo 

Se quisermos saber quantos servidores web em execução estão disponíveis:

```4d
 var $wSList : Collection
 var $vRun : Integer
 
 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Ver também 

[WEB Server](web-server.md)  
*webServer.stop( )*  