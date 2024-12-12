---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de referencia de la ventana del formulario actual |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Current form window.Summary-->El comando Current form window devuelve la referencia de la ventana del formulario actual.<!-- END REF--> Si ninguna ventana ha sido definida para el formulario actual, el comando devuelve 0.

La ventana del formulario actual puede ser generada automáticamente por un comando tal como [ADD RECORD](add-record.md "ADD RECORD"), después de una acción de usuario o utilizando los comandos [Open window](open-window.md "Open window") u [Open form window](open-form-window.md "Open form window"). 

#### Ver también 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  
[RESIZE FORM WINDOW](resize-form-window.md)  