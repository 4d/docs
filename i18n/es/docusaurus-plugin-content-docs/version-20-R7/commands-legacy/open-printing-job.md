---
id: open-printing-job
title: OPEN PRINTING JOB
slug: /commands/open-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.OPEN PRINTING JOB.Syntax-->**OPEN PRINTING JOB**<!-- END REF-->
<!--REF #_command_.OPEN PRINTING JOB.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OPEN PRINTING JOB.Summary-->El comando **OPEN PRINTING JOB** abre una tarea de impresión y apila todas las órdenes de impresión ejecutadas hasta que se llame el comando [CLOSE PRINTING JOB](close-printing-job.md).<!-- END REF--> Este comando le permite controlar los trabajos de impresión y, más particularmente, asegurar que ninguna tarea de impresión inesperada pueda ser insertada en una secuencia de impresión.

El comando **OPEN PRINTING JOB** puede utilizarse con todos los comandos de impresión 4D, los comandos del editor de informes rápidos, y los comandos de impresión de 4D Write Pro y 4D View Pro. 

El trabajo de impresión es local al proceso, cada proceso tiene su propia configuración de impresión (opciones de impresión, impresora actual, etc.). Varios trabajos de impresión pueden estar abiertos al mismo tiempo en 4D.

Debe llamar al comando [CLOSE PRINTING JOB](close-printing-job.md) para determinar el trabajo de impresión y enviar el documento de impresión a la impresora. Si omite este comando, el documento de impresión permanecerá en la pila.

**OPEN PRINTING JOB** utiliza la configuración de impresión actual (configuración predeterminada o definida mediante el comando [SET PRINT OPTION](set-print-option.md)). Los comandos que modifican la configuración de impresión deben ser llamados antes de **OPEN PRINTING JOB**, de lo contrario se genera un error (excepción: el comando Orientation option puede ser llamado por el comando [SET PRINT OPTION](set-print-option.md) dentro de un trabajo de impresión).

**Nota de compatibilidad**: a partir de 4D v20 R4, los trabajos de impresión no se bloquean en los nuevos proyectos. Para más información, consulte la documentación de la [opción de impresión sin bloqueo](../settings/compatibility.md) en los parámetros de compatibilidad.

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el trabajo de impresión se ha abierto con éxito. De lo contrario, toma el valor 0, por ejemplo en los siguientes casos:

* si el trabajo de impresión ha sido cancelado por el usuario
* en Windows, el formato de vista previa de impresión seleccionado no está disponible

#### Ver también 

[CLOSE PRINTING JOB](close-printing-job.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 995 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


