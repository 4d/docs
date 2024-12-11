---
id: backup
title: BACKUP
slug: /commands/backup
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP.Syntax-->**BACKUP**<!-- END REF-->
<!--REF #_command_.BACKUP.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BACKUP.Summary-->El comando BACKUP inicia el backup de la base de datos utilizando los parámetros de copia de seguridad actuales.<!-- END REF--> No aparece una caja de diálogo de confirmación; sin embargo, aparece una barra de progreso en la pantalla.

Los parámetros de backup se definen en las Propiedades de la base. Son almacenados en el archivo *backup.4DSettings* ubicado en la carpeta Settings de la base o en la carpeta Data (ver *Configuración y archivos de seguimiento*). 

El comando BACKUP llama al *Método de base de datos On Backup Startup* al comienzo de su ejecución y al *Método de base de datos On Backup Shutdown* al final de su ejecución.

Por este mecanismo, el comando no debe llamarse desde uno de estos métodos base.

**4D Server:** cuando se llama desde un equipo cliente, el comando BACKUP se considera como un procedimiento almacenado; siempre ejecutado en el servidor.

#### Variables y conjuntos del sistema 

Si el backup se realiza correctamente, la variable del sistema OK toma el valor 1; de lo contrario, toma el valor 0\. 

#### Gestión de errores 

En caso de que se presenten incidentes durante el backup, la información relativa al incidente se escribe en el diario de backup y el error de más alto nivel se envía únicamente al [Método base On Backup Shutdown](metodo-base-on-backup-shutdown.md). Por lo tanto es importante utilizar este método base para poder administrar por programación los errores relacionados con el backup.

#### Ver también 

[BACKUP INFO](backup-info.md)  
*Método de base de datos On Backup Startup*  
[RESTORE](restore.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 887 |
| Hilo seguro | &check; |
| Modifica variables | OK |


