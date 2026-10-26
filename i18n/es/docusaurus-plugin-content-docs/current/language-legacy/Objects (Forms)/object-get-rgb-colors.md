---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( * ; *objeto* : Text ; *colorPrimerPlano* : Text, Integer {; *colorFondo* : Text, Integer {; *colorFondoAlt* : Text, Integer {; *borderColor* : Text, Integer}}} )<br/>**OBJECT GET RGB COLORS** ( *objeto* : Variable, Field ; *colorPrimerPlano* : Text, Integer {; *colorFondo* : Text, Integer {; *colorFondoAlt* : Text, Integer {; *borderColor* : Text, Integer}}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594; | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| colorPrimerPlano | Text, Integer | &#8592; | Valor del color RGB del primer plano |
| colorFondo | Text, Integer | &#8592; | Valor del color RGB del fondo |
| colorFondoAlt | Text, Integer | &#8592; | Valor del color RGB del fondo alterno |
| borderColor | Text, Integer | &#8592; | Valor del color RGB del borde |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R5|Compatibilidad con el parámetro *borderColor*|
|17 R6|Modificado|
|12|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->El comando **OBJECT GET RGB COLORS** devuelve los colores de primer plano y de fondo y, opcionalmente, los colores de fondo alterno y del borde del objeto o grupo de objetos designados por *objeto*.<!-- END REF-->
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena.   
  
Cuando el comando se aplica a un objeto de tipo List box, el color de fondo alterno de las filas pueden se devuelto en el parámetro *colorFondoAlt*. En este caso, el valor de *colorFondo* se utiliza para el fondo de las líneas impares.

Cuando el comando se aplica a un objeto que admite la propiedad [`borderColor`](../../FormObjects/properties_BackgroundAndBorder.md#border-color), el color del borde se puede devolver en el parámetro *borderColor*.

:::note

El parámetro *borderColor* no está disponible en las bases de datos binarias.

:::

Los valores RGB devueltos en los parámetros *colorPrimerPlano*, *colorFondo*, *colorFondoAlt* y *borderColor* dependen del tipo del parámetro:

- si el parámetro es de tipo texto, el color se devuelve en formato CSS con la sintaxis "#rrggbb" (por ejemplo, "#0000FF");
- si el parámetro es de tipo entero, el color puede ser un entero largo de 4 bytes con el formato (0x00RRGGBB) o un valor negativo correspondiente a los colores del "sistema".

Para más información sobre el formato de estos parámetros, consulte la descripción del comando [OBJECT SET RGB COLORS](../commands/object-set-rgb-colors).

## Ver también 

[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1074 |
| Hilo seguro | no |

