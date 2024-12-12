---
id: notify-resources-folder-modification
title: NOTIFY RESOURCES FOLDER MODIFICATION
slug: /commands/notify-resources-folder-modification
displayed_sidebar: docs
---

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Syntax-->**NOTIFY RESOURCES FOLDER MODIFICATION**<!-- END REF-->
<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Summary-->O comando NOTIFY RESOURCES FOLDER MODIFICATION "força" 4D Server a enviar uma notificação a todas as máquinas conectadas a 4D, indicando que a pasta de Resources do banco de dados foi modificada de modo que eles possam sincronizar sua pasta de recursos locais.<!-- END REF-->   

  
Este comando pode ser utilizado mais especificamente para gerenciar a sincronização das pastas de Resources de máquinas remotas após esta pasta ter sido modificada por um procedimento armazenado no servidor.

Para obter mais informações sobre como gerenciar a pasta de Resources em modo remoto, consulte o Guia de Referência 4D Server.

Somente as informações de que a modificação ocorreu é enviada. Cada máquina remota irá reagir de acordo com suas preferências locais. As opções são as seguintes:

* Falta de sincronização da pasta Resources locais durante a sessão,
* Sincronização automática da pasta de Resources locais, durante a sessão,
* Exibição de um aviso para que o usuário possa efetuar uma sincronização, se desejar.
O parâmetro atual pode estar definido:
* a nível global do banco através do parâmetro das Propriedades do banco. Neste caso, se aplica a todas as máquinas remotas;
* localmente, utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md) executado na máquina remota (seletor Auto Synchro Resources Folder ). Neste caso, "invalida" o do banco e se aplica unicamente à maquina remota para a sessão.

#### Ver também 

[Get 4D folder](get-4d-folder.md)  