---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height**  ( * ; *objeto* : Text ; *linea* : Integer ) : Integer<br/>**LISTBOX Get row height**  ( *objeto* : Field, Variable ; *linea* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594; | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| linea | Integer | &#8594; | Línea de list box, cuya altura desea obtener |
| Resultado | Integer | &#8592; | Altura de la fila |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|16|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.LISTBOX Get row height.Summary-->El comando **LISTBOX Get row height**  devuelve la altura de la *fila* especificada en el objeto list box designado utilizando el *objeto* y los parámetros *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia variable en lugar de una cadena. Para más información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Si la *linea* especificada no existe en el list box, el comando devuelve 0 (cero).

El valor de la altura de la línea se expresa:

* en la unidad actual definida globalmente para las líneas del list box, ya sea en la lista de Propiedades o mediante una llamada previa al comando [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) cuando la altura de la línea es fija,
* en píxeles cuando la altura de la línea es variable, es decir, automática ( ver *Altura de línea automática*) o manejada por un array.

## Ver también 

[LISTBOX Get auto row height ](../commands/listbox-get-auto-row-height)  
[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1408 |
| Hilo seguro | no |


