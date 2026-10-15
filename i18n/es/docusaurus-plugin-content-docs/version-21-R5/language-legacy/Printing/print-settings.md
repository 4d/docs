---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** ({ *dialType* : Integer })<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dialType | Integer | &#8594; | Cajas de diálogo a mostrar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15 R5|Modificado|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.PRINT SETTINGS.Summary-->PRINT SETTINGS muestra una caja de diálogo de impresión.<!-- END REF--> Este comando debe llamarse antes de una serie de comandos [Print form](../commands/print-form) o el comando [OPEN PRINTING JOB](../commands/open-printing-job).

El parámetro opcional *tipoDial* permite configurar la visualización de las caja de diálogo de impresión. Puede utilizar una de las siguientes constantes del tema *Opciones de impresión*. Las cajas de diálogo de impresión que aparecen dependerán de la versión de 4D, como se muestra en la siguiente tabla:

| Constante         | Valor | Comentario                                           |
| ----------------- | ----- | ---------------------------------------------------- |
| Page setup dialog | 1     | Visualización del diálogo de configuración de página |
| Print dialog      | 2     | Visualización de la caja de diálogo de Impresión     |

**Nota:** la caja de diálogo de impresión contiene la opción **Preview on Screen** que permite al usuario previsualizar su trabajo de impresión. Puede preseleccionar o deseleccionar esta opción llamando [SET PRINT PREVIEW](../commands/set-print-preview) antes de llamar PRINT SETTINGS.

## Ejemplo 

Ver ejemplo para el comando [Print form](../commands/print-form.md "Print form").

## Variables y conjuntos del sistema 

Si el usuario hace clic en OK en ambas cajas de diálogo, la variable sistema OK toma el valor 1\. De lo contrario, la variable sistema OK toma el valor 0\. 

## Ver también 

[OPEN PRINTING JOB](../commands/open-printing-job)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 106 |
| Hilo seguro | no |
| Modifica variables | OK |



