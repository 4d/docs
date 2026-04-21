---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|17 R4|Modificado|
|11 SQL Release 3|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.MESSAGES OFF.Summary-->Los comandos MESSAGES OFF y [MESSAGES ON](../commands/messages-on) encienden y apagan los termómetros de progresión mostrados por 4D mientras se ejecutan operaciones de larga duración.<!-- END REF--> Por defecto, se muestran los mensajes. 

Estas son las operaciones que pueden mostrar termómetros de progreso: aplicación de una fórmula, generación de un informe rápido, exportación de datos, importación de datos, ordenación, generación de un gráfico, búsqueda, búsqueda por formulario, búsqueda por fórmula.

La siguiente tabla lista los comandos que muestran termómetros de progreso:

[APPLY TO SELECTION](../commands/apply-to-selection)  
[Average](../commands/average)  
[BUILD APPLICATION](../commands/build-application)  
[DISTINCT VALUES](../commands/distinct-values)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[Max](../commands/max)  
[Min](../commands/min)  
[ORDER BY](../commands/order-by)  
[ORDER BY FORMULA](../commands/order-by-formula)  
[QR REPORT](../commands/qr-report)  
[QUERY](../commands/query)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[REDUCE SELECTION](../commands/reduce-selection)  
[RELATE MANY SELECTION](../commands/relate-many-selection)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  
[SCAN INDEX](../commands/scan-index)  
[Sum](../commands/sum)

**Nota para 4D Server:** las ventanas de mensajes de progreso no se muestran en el servidor desde que estas operaciones se listan automáticamente en la *\_o\_PAGE SETUP* de la ventana de administración. Si desea forzar la visualización de estas ventanas de progreso, debe llamar al comando [MESSAGES ON](../commands/messages-on) en el servidor. 

## Ejemplo 

El siguiente ejemplo suprime los termómetros de progreso antes de efectuar una ordenación y luego los restablece después de terminar la operación de ordenación:

```4d
 MESSAGES OFF
 ORDER BY([Direcciones];[Direcciones]ZIP;>;[Direcciones]Nombre2;>)
 MESSAGES ON
```

## Ver también 

[MESSAGES ON](../commands/messages-on)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 175 |
| Hilo seguro | yes |


