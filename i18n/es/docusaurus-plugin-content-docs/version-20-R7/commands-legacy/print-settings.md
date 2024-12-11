---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** {( *dialType* )}<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dialType | Integer | &#8594;  | Cajas de diálogo a mostrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PRINT SETTINGS.Summary-->PRINT SETTINGS muestra una caja de diálogo de impresión.<!-- END REF--> Este comando debe llamarse antes de una serie de comandos [Print form](print-form.md) o el comando [OPEN PRINTING JOB](open-printing-job.md).

El parámetro opcional *tipoDial* permite configurar la visualización de las caja de diálogo de impresión. Puede utilizar una de las siguientes constantes del tema *Opciones de impresión*. Las cajas de diálogo de impresión que aparecen dependerán de la versión de 4D, como se muestra en la siguiente tabla:

| Constante         | Valor | Comentario                                           |
| ----------------- | ----- | ---------------------------------------------------- |
| Page setup dialog | 1     | Visualización del diálogo de configuración de página |
| Print dialog      | 2     | Visualización de la caja de diálogo de Impresión     |

**Nota:** la caja de diálogo de impresión contiene la opción **Preview on Screen** que permite al usuario previsualizar su trabajo de impresión. Puede preseleccionar o deseleccionar esta opción llamando [SET PRINT PREVIEW](set-print-preview.md) antes de llamar PRINT SETTINGS.

#### Ejemplo 

Ver ejemplo para el comando [Print form](print-form.md "Print form").

#### Variables y conjuntos del sistema 

Si el usuario hace clic en OK en ambas cajas de diálogo, la variable sistema OK toma el valor 1\. De lo contrario, la variable sistema OK toma el valor 0\. 

#### Ver también 

[OPEN PRINTING JOB](open-printing-job.md)  
[PAGE BREAK](page-break.md)  
[Print form](print-form.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 106 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


