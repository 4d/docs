---
id: on-server-shutdown-database-method
title: On Server Shutdown database method
slug: /commands/on-server-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Shutdown database method.Syntax-->**On Server Shutdown database method**<!-- END REF-->
<!--REF #_command_.On Server Shutdown database method.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Server Shutdown database method.Summary-->O On Server Shutdown database method é chamado uma vez na máquina servidor quando a base atual é fechada em 4D Server.<!-- END REF--> O On Server Shutdown database method NÃO é chamado por outro ambiente 4D diferente de 4D Server.

Para fechar a base atual no servidor, pode selecionar o comando de menu **Fechar a base...** no servidor. Também pode escolher o comando **Sair** ou chamar ao comando [QUIT 4D](quit-4d.md) dentro de um procedimento armazenado executado no servidor.

Quando se inicia o processo de fechamento da base, 4D realiza as seguintes ações:

* Se não há um On Server Shutdown database method, 4D Server aborta cada processo em execução um por um, sem distinção.
* Se existe um On Server Shutdown database method, 4D Server executa este método em um novo processo local. Portanto pode utilizar este método base para informar os outros processos, via comunicação interprocesso, que devem deter sua execução. Note que 4D Server sairá finalmente, o On Server Shutdown database method pode realizar todas as operações de limpeza ou fechamento que você queira, mas não pode recusar a sair e em algum momento terminará.

O On Server Shutdown database method é o lugar ideal para:

* Deter os procedimentos armazenados lançados automaticamente quando é aberta a base.
* Guardar (localmente, em disco) as preferências ou os parâmetros a reutilizar ao inicio da sessão seguinte no *Método banco de dados On Server Startup*.
* Realizar qualquer outra ação que queira ativar automaticamente cada vez que sair da base.

**Importante:** Se utiliza o On Server Shutdown database method para fechar os procedimentos armazenados, lembre que o servidor sai logo que se executa o On Server Shutdown database method (e não os procedimentos armazenados). Se os procedimentos armazenados ainda estão correndo neste momento, serão abortados. Portanto, se deseja estar seguro de que os procedimentos armazenados se executem completamente antes de ser abortados pelo servidor, o On Server Shutdown database method deve indicar aos procedimentos armazenados que devem terminar sua execução (por exemplo, utilizando uma variável interprocesso) e deve permitir a eles fechar (por meio de um laço de x segundos ou outra variável interprocesso).

Se deseja que o código se execute automaticamente em uma máquina cliente quando um 4D remoto deixa de conectar-se ao servidor, utilize o [Semaphore](semaphore.md).
