---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* : Integer, Text ; *lineaMenu* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594; | Número de línea de menú o -1 para la última línea añadida al menú |
| Resultado | Text | &#8592; | Parámetro personalizado de la línea de menú |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL Release 4|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Get menu item parameter.Summary-->El comando Get menu item parameter devuelve la cadena de caracteres personalizada asociada a la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> Esta cadena debe haber sido definida previamente utilizando el comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER").

## Ver también 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1003 |
| Hilo seguro | no |


