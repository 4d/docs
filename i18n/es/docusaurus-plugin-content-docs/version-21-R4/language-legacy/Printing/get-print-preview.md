---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = Vista previa de impresión, False = No vista previa de impresión |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get print preview.Summary-->El comando **Get print preview** devuelve True si el comando [SET PRINT PREVIEW](../commands/set-print-preview) se llamó con el valor **True** en el proceso actual.<!-- END REF-->

Note que el usuario puede modificar esta opción antes de validar la caja de diálogo. Para obtener el modo final de impresión, debe utilizar el comando [Is in print preview](../commands/is-in-print-preview). 

## Ver también 

[Is in print preview](../commands/is-in-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1197 |
| Hilo seguro | no |


