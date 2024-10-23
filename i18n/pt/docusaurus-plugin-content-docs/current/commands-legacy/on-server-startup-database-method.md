---
id: on-server-startup-database-method
title: On Server Startup database method
slug: /commands/on-server-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Startup database method.Syntax-->**On Server Startup database method**<!-- END REF-->
<!--REF #_command_.On Server Startup database method.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### 

<!--REF #_command_.On Server Startup database method.Summary-->O On Server Startup database method é chamado uma vez na máquina servidor quando abre uma base com 4D Server.<!-- END REF--> O On Server Startup database method NÃO é executado em um ambiente diferente a 4D Server.

O On Server Startup database method é a localização ideal para:

* Inicializar as variáveis interprocesso utilizadas durante toda a sessão 4D Server.
* Iniciar automaticamente os *Procedimentos armazenados* ao abrir a base.
* Carregar preferências ou parâmetros guardados durante a sessão anterior de 4D Server.
* Evitar a abertura da base se não se cumpre uma condição (ausência de recursos sistema) para uma chamada explícita a [QUIT 4D](quit-4d.md).
* Realizar outras ações que queira fazer automaticamente cada vez que seja aberta a base.

Para executar código automaticamente na máquina cliente quando um 4D remoto se conecta ao servidor, utilize o [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md).

**Nota**: O On Server Startup database method se executa de forma atômica, o que significa que nenhum 4D remoto pode ser conectado enquanto a execução do método não tenha terminado.
