---
id: backup
title: BACKUP
slug: /commands/backup
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP.Syntax-->**BACKUP**<!-- END REF-->
<!--REF #_command_.BACKUP.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BACKUP.Summary-->O comando BACKUP inicia o backup do banco de dados utilizando os parâmetros de cópia de segurança atuais.<!-- END REF--> Não aparece uma caixa de diálogo de confirmação; no entanto, aparece uma barra de progresso na tela.

Os parâmetros de backup são definidos nas Propriedades da base ("Preferências" em 4D v11 SQL). Igualmente, são armazenados em *Backup.xml* localizado na sub-pasta (see *Configuração e arquivos de seguimento*).   
.

O comando BACKUP chama o *Método de Banco de Dados On Backup Startup* no começo de sua execução e o *Método de Banco de Dados On Backup Shutdown* ao final de sua execução.

Por este mecanismo, o comando não deve ser chamado a partir de um destes métodos de base.

**4D Server:** quando é chamado a partir de um equipamento do cliente, o comando BACKUP é considerado como um procedimento armazenado; sempre executado no servidor.

#### Variáveis e conjuntos do sistema 

Se o backup é realizado corretamente, a variável do sistema OK recebe o valor 1; do contrario, recebe o valor 0\. 

#### Gestão de erros 

Em caso de que ocorram incidentes durante o backup, a informação relativa ao incidente se escreve no diário de backup e o erro de mais alto nível se envia unicamente ao [On Backup Shutdown database method](on-backup-shutdown-database-method.md). Portanto é importante utilizar este método base para poder administrar por programação os erros relacionados com o backup.

#### Ver também 

[BACKUP INFO](backup-info.md)  
*Método de Banco de Dados On Backup Startup*  
[RESTORE](restore.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 887 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


