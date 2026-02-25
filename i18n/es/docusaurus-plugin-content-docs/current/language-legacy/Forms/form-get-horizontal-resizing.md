---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *redimension* : Boolean {; *anchoMin* : Integer {; *anchoMax* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| redimension | Boolean | &#8592; | True: el formulario es redimensionable horizontalmente<br/>False: el formulario no es redimensionable horizontalmente |
| anchoMin | Integer | &#8592; | Ancho mínimo del formulario (píxeles) |
| anchoMax | Integer | &#8592; | Ancho máximo del formulario (píxeles) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->El comando FORM GET HORIZONTAL RESIZING devuelve las propiedades de redimensionamiento horizontal del formulario actual en las variables *redimension*, *anchoMin* y *anchoMax*.<!-- END REF--> Estas propiedades pueden haberse definido para el formulario en el editor de formularios en modo Diseño o para el proceso actual vía el comando [FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md "FORM SET HORIZONTAL RESIZING").

## Ver también 

[FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1077 |
| Hilo seguro | no |


