---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MESSAGES OFF.Summary-->Los comandos MESSAGES OFF y [MESSAGES ON](messages-on.md) encienden y apagan los termómetros de progresión mostrados por 4D mientras se ejecutan operaciones de larga duración.<!-- END REF--> Por defecto, se muestran los mensajes. 

Estas son las operaciones que pueden mostrar termómetros de progreso: aplicación de una fórmula, generación de un informe rápido, exportación de datos, importación de datos, ordenación, generación de un gráfico, búsqueda, búsqueda por formulario, búsqueda por fórmula.

La siguiente tabla lista los comandos que muestran termómetros de progreso:

[APPLY TO SELECTION](apply-to-selection.md)  
[Average](average.md)  
[BUILD APPLICATION](build-application.md)  
[DISTINCT VALUES](distinct-values.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[ORDER BY FORMULA](order-by-formula.md)  
[QR REPORT](qr-report.md)  
[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[REDUCE SELECTION](reduce-selection.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  
[SCAN INDEX](scan-index.md)  
[Sum](sum.md)

**Nota para 4D Server:** las ventanas de mensajes de progreso no se muestran en el servidor desde que estas operaciones se listan automáticamente en la *\_o\_PAGE SETUP* de la ventana de administración. Si desea forzar la visualización de estas ventanas de progreso, debe llamar al comando [MESSAGES ON](messages-on.md) en el servidor. 

#### Ejemplo 

El siguiente ejemplo suprime los termómetros de progreso antes de efectuar una ordenación y luego los restablece después de terminar la operación de ordenación:

```4d
 MESSAGES OFF
 ORDER BY([Direcciones];[Direcciones]ZIP;>;[Direcciones]Nombre2;>)
 MESSAGES ON
```

#### Ver también 

[MESSAGES ON](messages-on.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 175 |
| Hilo seguro | &check; |


