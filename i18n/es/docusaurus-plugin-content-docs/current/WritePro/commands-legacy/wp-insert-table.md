---
id: wp-insert-table
title: WP Insert table
slug: /WritePro/commands/wp-insert-table
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert table.Syntax-->**WP Insert table** ( *objRango* ; *modo* {; *actRango* {; *numCol* {; *numFilas*}}} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Insert table.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango |
| modo | Integer | &#8594;  | Modo de inserción |
| actRango | Integer | &#8594;  | Modo de actualización de rango |
| numCol | Integer | &#8594;  | Número de columnas a definir en la tabla |
| numFilas | Integer | &#8594;  | Número de filas a definir en la tabla |
| Resultado | Object | &#8592; | Objeto de referencia de tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Insert table.Summary-->El comando **WP Insert table** inserta una nueva tabla en *objRango* de acuerdo con el *modo* de inserción especificado y devuelve el nuevo objeto tabla correspondiente.<!-- END REF--> Opcionalmente, puede pasar un parámetro *actRango* así como también un número predefinido de columnas y filas en *numCol* y *numFilas*.

En *objRango*, pase:

* un rango, o
* un elemento (tabla / párrafo / cuerpo / encabezado / pie / imagen en línea / sección / subsección), o
* documento 4D Write Pro.

**Nota:** si *objRango* es una tabla, la nueva tabla insertada reemplazará o se insertará antes o después de la misma, según el *modo* utilizado. Insertar una tabla dentro de otra tabla no es posible.

En el parámetro *modo*, pase una de las siguientes constantes para indicar el modo de inserción que se utilizará para la tabla en el documento:

| Constante  | Tipo         | Valor | Comentario                                 |
| ---------- | ------------ | ----- | ------------------------------------------ |
| wk append  | Entero largo | 2     | Inserta contenidos al final del rango      |
| wk prepend | Entero largo | 1     | Insertar contenidos al principio del rango |
| wk replace | Entero largo | 0     | Remplazar el contenido de la página        |

* Si *objRango* es un rango, puede utilizar el parámetro opcional *actRango*, para pasar una de las siguientes constantes para especificar si la tabla insertada se incluye o no en el rango resultante:  

| Constante             | Tipo         | Valor | Comentario                                                            |  
| --------------------- | ------------ | ----- | --------------------------------------------------------------------- |  
| wk exclude from range | Entero largo | 1     | Contenidos insertados no incluidos en el rango actualizado            |  
| wk include in range   | Entero largo | 0     | Contenido insertado incluido en el rango actualizado (predeterminado) |  
    
Si no pasa un parámetro *actRango*, de forma predeterminada, la tabla insertada se incluye en el rango resultante.
* If *targetObj* is not a range, *rangeUpdate* is ignored.

Puede pasar en *numCol* y *numFilas* el número de columnas y filas a definir en la tabla. Por defecto, si se omiten *numCol* y *numFilas*, se crea una nueva tabla con columna 0 y fila 0\. A continuación, podrá agregar estos elementos utilizando el comando [WP Table append row](../commands/wp-table-append-row.md).

El comando devuelve la nueva tabla como un objeto de tabla, que puede pasar a continuación a los demás comandos de tabla WP. La tabla se crea con los atributos predeterminados de fuente, borde y color que puede personalizar utilizando el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes.md).

#### Ejemplo 

En un documento en blanco, usted desea agregar una nueva tabla con 3 columnas y 2 filas:

```4d
 var $WPRange;$WPTable : Object
 $WPRange:=WP Text range(WParea;wk start text;wk end text)
 $WPTable:=WP Insert table($WPRange;wk append;wk exclude from range;3;2)
```

Resultado:

![](../../assets/en/WritePro/commands/pict3306926.en.png)

#### Ver también 

[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get rows](wp-table-get-rows.md)  