---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( vista previa )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| vista previa | Booleano | &#8594; | Previsualización en pantalla (TRUE), o Sin previsualización (FALSE) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004.5|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** le permite seleccionar o deseleccionar por programación la opción de previsualización en pantalla de la caja de diálogo de impresión.<!-- END REF--> Si pasa TRUE en *vista previa*, se selecciona Previsualización en pantalla, si pasa FALSE, se deseleccionará. Este parámetro es local para un proceso y no afecta la impresión de otros procesos o usuarios.

**Nota:** en Windows, puede definir el formato de la vista previa de impresión utilizando el comando [SET PRINT OPTION](../commands/set-print-option).

## Ejemplo 

El siguiente ejemplo selecciona la opción Previsualización en pantalla para mostrar los resultados de una búsqueda en pantalla, y luego la deselecciona.

```4d
 QUERY([Clientes])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Clientes];*)
    SET PRINT PREVIEW(False)
 End if
```

## Ver también 

[Get print preview](../commands/get-print-preview)  
[Is in print preview](../commands/is-in-print-preview)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 364 |
| Hilo seguro | no |


