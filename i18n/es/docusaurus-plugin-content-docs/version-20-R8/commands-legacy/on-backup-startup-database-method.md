---
id: on-backup-startup-database-method
title: On Backup Startup database method
slug: /commands/on-backup-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Startup database method.Syntax-->**Método base On Backup Startup** : Integer<!-- END REF-->
<!--REF #_command_.On Backup Startup database method.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | 0 = backup autorizado; valor diferente de 0 = backup no autorizado |

<!-- END REF-->

## 

<!--REF #_command_.On Backup Startup database method.Summary-->El Método base On Backup Startup se llama cada vez que un backup está a punto de iniciar (backup manual, backup automático programado, o utilizando el comando [BACKUP](backup.md)).<!-- END REF--> 

Esto concierne a todos los entornos 4D: 4D en modo local, 4D Server, 4D en modo remoto, 4D Desktop y bases fusionadas con 4D Desktop.

El [BACKUP INFO](backup-info.md) permite verificar el inicio del backup. En este método, debe devolver en el parámetro $0 un valor que autorice o rechace el backup:

* Si $0 = 0, el backup puede comenzar.
* Si $0 # 0, el backup no es autorizado. La operación se cancela y devuelve un error. Puede obtener el error utilizando el comando Método base On Backup Startup.

Puede utilizar este método base para verificar las condiciones de ejecución del backup (usuario, fecha del último, etc.).

**Nota:** debe declarar el parámetro *$0* (entero largo) en el método de la base:

```4d
 var $0 : Integer.
```
