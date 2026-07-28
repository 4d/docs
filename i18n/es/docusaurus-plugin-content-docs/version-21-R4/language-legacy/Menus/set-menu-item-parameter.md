---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* : Integer, Text ; *lineaMenu* : Integer ; *param* : Text )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594; | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594; | Número de línea de menú o -1 para la última línea añadida al menú |
| param | Text | &#8594; | Cadena a asociar como parámetro |
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

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->El comando SET MENU ITEM PARAMETER permite asociar una cadena de caracteres personalizada con una línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> 

Este parámetro es utilizado principalmente por el comando [Dynamic pop up menu](dynamic-pop-up-menu.md "Dynamic pop up menu").

## Ejemplo 

Este código ofrece un menú que incluye los nombres de las ventanas abiertas y permite recuperar el número de la ventana elegida:

```4d
 WINDOW LIST($alWindow)
 $tMenuRef:=Create menu
 For($i;1;Size of array($alWindow))
    APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i})) // Título de la línea del menú
    SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i})) // Valor devuelto por la línea del menú
 End for
 $tWindowRef:=Dynamic pop up menu($tMenuRef)
 RELEASE MENU($tMenuRef)
```

## Ver también 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1004 |
| Hilo seguro | no |


