---
id: on-backup-shutdown-database-method
title: On Backup Shutdown database method
slug: /commands/on-backup-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Shutdown database method.Syntax-->$1 -> Método base On Backup Shutdown<!-- END REF-->
<!--REF #_command_.On Backup Shutdown database method.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Entero largo | &#8592; | 0 = backup ejecutado correctamente; otro valor = error, interrumpido por el usuario o código devuelto por On Backup Startup |

<!-- END REF-->

## 

<!--REF #_command_.On Backup Shutdown database method.Summary-->El Método base On Backup Shutdown se llama cada vez que termina un backup de la base.<!-- END REF--> Las razones para detener un backup pueden ser el fin de la copia, la interrupción por parte del usuario o un error.  
Esto concierne a todos los entornos 4D (todos los modos), 4D Server así como las aplicaciones 4D compiladas y fusionadas con 4D Volume Desktop. 

El Método base On Backup Shutdown permite verificar que el backup fue ejecutado correctamente. El método recibe, en el parámetro *$status*, un valor indicando el estado del backup una vez terminado:

* Si el backup se ejecutó correctamente, *$status* es igual a 0.
* Si el backup fue interrumpido por el usuario o por un error, *$status* es diferente de 0\.
   * Si el backup fue detenido por el *Método de base de datos On Backup Startup* (*$result* \# 0), *$status* obtiene el valor devuelto en el parámetro *$result*. Esto le permite implementar un sistema de gestión de errores personalizado.
   * Si el backup fue detenido por un error, el código del error se devuelve en *$status*.
 En todos los casos, puede obtener información sobre el error utilizando el comando [BACKUP INFO](backup-info.md).

**Nota**: debe declarar el parámetro *$status* (entero largo) en el método de la base:

```4d
 #DECLARE( $status : Integer)
```

Es importante notar que en caso de error durante el backup (disco lleno, soporte inaccesible, etc.), la información relativa al error se muestra únicamente en el monitor de 4D Server o en el CSM, y se copia en el historial de backups. No se muestra una caja de diálogo de alerta y la variable *error* no se modifica. Si quiere notificar al administrador que se produjo un error, particularmente en el contexto de una aplicación en modo cliente/servidor, es necesario utilizar el **Método base On Backup Shutdown**.
