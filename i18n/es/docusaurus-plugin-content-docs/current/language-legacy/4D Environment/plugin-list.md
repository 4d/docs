---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *arrayNumeros* : Integer array ; *arrayNoms* : Text array )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayNumeros | Integer array | &#8592; | Números de los plug-ins |
| arrayNoms | Text array | &#8592; | Nombres de los plug-ins |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.PLUGIN LIST.Summary-->El comando PLUGIN LIST llena los arrays *arrayNumeros* y *arrayNoms* con los números y los nombres de los plug-ins cargados por la aplicación 4D.<!-- END REF--> Estos dos arrays son dimensionados y sincronizados automáticamente por el comando. 

**Nota:** puede comparar los valores devueltos en el array *arrayNumeros* con las constantes del tema *Licencia disponible*. 

PLUGIN LIST tiene en cuenta todos los plug-ins, incluyendo aquellos que están integrados (por ejemplo 4D Chart) y los plug-ins de terceras partes.

## Ver también 

[COMPONENT LIST](../commands/component-list)  
[Get plugin access](../commands/get-plugin-access)  
[Is license available](../commands/is-license-available)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 847 |
| Hilo seguro | yes |


