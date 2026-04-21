---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* : Integer, Text ; *lineamenu* : Integer {; *proceso* : Integer} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594; | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594; | Número de referencia del proceso |
| Resultado | Text | &#8592; | Texto del elemento de menú |
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

<!--REF #_command_.Get menu item.Summary-->El comando Get menu item devuelve el texto del comando de menú cuyos números de menú y de comando se pasan en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu*. 

Si omite el parámetro *proceso*, Get menu item se aplica a la barra de menús del proceso actual. De lo contrario, Get menu item se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

## Ver también 

[Get menu item key](../commands/get-menu-item-key)  
[SET MENU ITEM](../commands/set-menu-item)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 422 |
| Hilo seguro | no |
| Prohibido en el servidor ||


