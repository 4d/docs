---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.HIDE MENU BAR.Summary-->El comando HIDE MENU BAR vuelve invisible la barra de menús.<!-- END REF--> 

Si la barra de menús ya está oculta, el comando no hace nada.

## Ejemplo 

El siguiente método muestra un registro en toda la pantalla (Macintosh) hasta que haga clic: 

```4d
 HIDE TOOL BAR
 HIDE MENU BAR
 Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)
 FORM SET INPUT([Pinturas];"Full Screen 800")
 DISPLAY RECORD([Pinturas])
 Repeat
    MOUSE POSITION($vlX;$vlY;$vlBoton)
 Until($vlBoton#0)
 CLOSE WINDOW
 SHOW MENU BAR
 SHOW TOOL BAR
```

**Nota:** en Windows, la ventana estará limitada por los límites de la ventana de la aplicación. 

## Ver también 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[SHOW MENU BAR](../commands/show-menu-bar)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 432 |
| Hilo seguro | no |
| Prohibido en el servidor ||


