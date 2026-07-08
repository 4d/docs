---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *redimension* : Boolean {; *anchoMin* : Integer {; *anchoMax* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| redimension | Boolean | &#8594; | True: el formulario es redimensionable horizontalmente False: El formulario no puede redimensionarse horizontalmente |
| anchoMin | Integer | &#8594; | ancho mínimo del formulario (píxeles) |
| anchoMax | Integer | &#8594; | ancho máximo del formulario (píxeles) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Renombrar|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->El comando FORM SET HORIZONTAL RESIZING permite cambiar por programación las propiedades de redimensionamiento horizontal del formulario actual.<!-- END REF--> Por defecto, estas propiedades son definidas en el editor de formularios en el entorno Diseño. Las nuevas propiedades son definidas para el proceso actual; no se almacenan con el formulario. 

El parámetro *redimension* le permite definir si el formulario puede redimensionarse horizontalmente; en otras palabras, si el ancho es modificable (manualmente por el usuario o por programación).  
  
Si pasa [True](../commands/true), el ancho del formulario puede ser modificado por el usuario; 4D utiliza como marcadores los valores pasados en *anchoMin* y *ancho*Max.

Si pasa [False](../commands/false), no se puede modificar el largo del formulario actual; en este caso, no hay necesidad de pasar valores en los parámetros *anchoMin* y *ancho*Max . 

Si ha pasado [True](../commands/true) en el primer parámetro, puede pasar en los parámetros opcionales *anchoMin* y *ancho*Max los nuevos largos, mínimos y máximos, del formulario (en píxeles). Si omite estos parámetros se utilizan los valores definidos en el entorno Diseño (si los hay).

## Ejemplo 

Consulte el ejemplo del comando [FORM SET SIZE](form-set-size.md "FORM SET SIZE"). 

## Ver también 

[FORM GET HORIZONTAL RESIZING](../commands/form-get-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  
[FORM SET VERTICAL RESIZING](../commands/form-set-vertical-resizing)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 892 |
| Hilo seguro | no |


