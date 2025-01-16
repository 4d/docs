---
id: on-backup-startup-database-method
title: On Backup Startup database method
slug: /commands/on-backup-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Startup database method.Syntax-->**On Backup Startup database method**  : Integer<!-- END REF-->
<!--REF #_command_.On Backup Startup database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | 0 = backup can be launched; value other than 0 = backup not authorized |

<!-- END REF-->

#### Método de base de dados On Backup Startup 

<!--REF #_command_.On Backup Startup database method.Summary-->O *Método de banco de dados On Backup Startup* é chamado cada vez que um backup está a ponto de ser iniciado (backup manual, backup automático programado, ou utilizando o comando [BACKUP](backup.md "BACKUP")).<!-- END REF--> 

Isto envolve todos os ambientes 4D: 4D em modo local, 4D Server, 4D em modo remoto, 4D Desktop e bancos fusionados com 4D Desktop.

O *Método de banco de dados On Backup Startup* permite verificar o início do backup. Neste método, você deve retornar no parâmetro $0 um valor que autorize ou recuse o backup:

* Se $0 = 0, o backup pode começar.
* Se $0 # 0, o backup não é autorizado. A operação é cancelada e retorna um erro. Você pode obter o erro utilizando o comando [BACKUP INFO](backup-info.md "BACKUP INFO").

Você pode utilizar este método de base para verificar as condições de execução do backup (usuário, data do último, etc.).

**Nota:** Você deve declarar o parâmetro *$0* (inteiro longo) no método da base:

```4d
 var $0 : Integer.
```
