---
id: get-last-update-log-path
title: Get last update log path
slug: /commands/get-last-update-log-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last update log path.Syntax-->**Get last update log path** : Text<!-- END REF-->
<!--REF #_command_.Get last update log path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Via de acesso do histórico de atualização mais recente |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get last update log path.Summary-->O comando Get last update log path devolve a via de acesso completa do arquivo de histórico de atualização mais recente na máquina onde se chama.<!-- END REF-->  
  
O histórico de atualização é gerado por 4D durante o processo de atualização automática. Contém informação sobre as mudanças realizadas, assim como os erros que se produziram.  
  
Este comando está destinado a ser utilizado em um processo de atualização automática para uma aplicação fusionada (servidor ou autônomo). Para mais informação, consulte *Finalizar e distribuir aplicativos* no manual de Desenho.

#### Ver também 

[RESTART 4D](restart-4d.md)  
[SET UPDATE FOLDER](set-update-folder.md)  