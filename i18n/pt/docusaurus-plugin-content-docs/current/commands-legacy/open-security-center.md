---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->O comando OPEN SECURITY CENTERmostra a janela do Centro de segurança e manutenção (CSM).<!-- END REF--> Para saber mais veja a página *Centro de segurança e manutenção*.   
  
Dependendo dos privilegios de acesso do usuário atual, certas funções disponíveis nesta janela poderiam ser desativadas.

**Nota:** 

* este comando funciona com o mesmo princípio que uma chamada a [DIALOG](../commands/dialog.md) com o parâmetro *\**: o CSM se mostra em uma janela e o comando devolve imediatamente o controle do código 4D. Se o processo atual termina, a janela é fechada automaticamente mediante a simulação de um [CANCEL](cancel.md). Por isso deve gerenciar sua visualização através do código do processo em execução.
* Este comando não pode ser executado em uma aplicação 4D remota.

#### Ver também 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  