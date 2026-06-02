---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( * ; *objeto* : Text ; *horizontal* : Boolean ; *vertical* : Boolean )<br/>**LISTBOX SET GRID** ( *objeto* : Variable ; *horizontal* : Boolean ; *vertical* : Boolean )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| horizontal | Boolean | &#8594; | True = mostrar, False = ocultar |
| vertical | Boolean | &#8594; | True = mostrar, False = ocultar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Renombrar|
|12|Renombrar|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.LISTBOX SET GRID.Summary-->El comando LISTBOX SET GRID permite mostrar u ocultar las líneas horizontales y/o verticales que componen la matriz del objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

Pase en los parámetros *horizontal* y *vertical* los valores booleanos que indican si la líneas de la matriz deben mostrarse ([True](../commands/true)) u ocultarse ([False](../commands/false)). La matriz se muestra por defecto. 

## Ver también 

[LISTBOX GET GRID](../commands/listbox-get-grid)  
[LISTBOX Get property](../commands/listbox-get-property)  
[LISTBOX SET GRID COLOR](../commands/listbox-set-grid-color)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 841 |
| Hilo seguro | no |



