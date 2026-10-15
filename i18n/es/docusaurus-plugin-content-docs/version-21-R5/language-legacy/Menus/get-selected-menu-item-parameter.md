---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  : Text<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
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

<!--REF #_command_.Get selected menu item parameter.Summary-->El comando Get selected menu item parameter devuelve la cadena de caracteres personalizada asociada a la línea de menú seleccionada.<!-- END REF--> Este parámetro deber haber sido definido de antemano utilizando el comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER").  
Si ninguna línea de menú ha sido seleccionada, el comando devuelve una cadena vacía"".

## Ver también 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1005 |
| Hilo seguro | no |


