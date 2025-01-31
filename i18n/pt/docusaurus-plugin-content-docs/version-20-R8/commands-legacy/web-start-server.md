---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB START SERVER.Summary-->O comando WEB START SERVER inicia o servidor web da aplicação 4D na qual é executado (4D ou 4D Server).<!-- END REF--> O banco de dados é portanto publicado em sua rede Intranet ou no Internet.  

Se o servidor web for iniciado corretamente, OK assume o valor 1, do contrário, assume o valor 0 (zero). Por exemplo, se o protocolo de rede TCP/IP não está corretamente configurado, OK assume o valor 0.

#### Variáveis e conjuntos do sistema 

Se o servidor Web é iniciado corretamente, Ok assume o valor 1; do contrário OK assume o valor 0.

#### Ver também 

[WEB STOP SERVER](web-stop-server.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 617 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


