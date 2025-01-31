---
id: object-get-best-size
title: OBJECT GET BEST SIZE
slug: /commands/object-get-best-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET BEST SIZE.Syntax-->**OBJECT GET BEST SIZE** ( {* ;} *objeto* ; *largOpt* ; *altOpt* {; *anchoMax*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET BEST SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre del objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| largOpt | Integer | &#8592; | Largo óptimo del objeto |
| altOpt | Integer | &#8592; | Alto óptimo del objeto |
| anchoMax | Integer | &#8594;  | Largo máximo del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET BEST SIZE.Summary-->El comando **OBJECT GET BEST SIZE** devuelve en los parámetros *largOpt* y *altOpt*, el largo y alto “óptimo” del objeto de formulario designado por los parámetros *\** y *objeto*.<!-- END REF--> Estos valores se expresan en píxeles. Este comando es particularmente útil para la visualización o impresión de informes complejos, asociados al comando [OBJECT MOVE](object-move.md).

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena de caracteres). Si no pasa el parámetro \*, indica que *objeto* es un campo o una variable. En este caso, usted no pasa una cadena sino una referencia de un campo o de una variable (de tipo objeto únicamente).

Los valores óptimos devueltos indican el tamaño mínimo del objeto de manera que su contenido actual sea incluido completamente en los límites. Por o general estos valores sólo son significativos para objetos que contengan texto. Este cálculo tiene en cuenta la fuente, su tamaño, estilo y contenido del objeto. También tiene en cuenta la incorporación de guiones y de retornos de carro. 

Note que en el caso de los botones 3D, el funciona igual si el botón contiene únicamente un ícono.

Si el objeto especificado está vacío, el *largOpt* devuelto es 0\. 

El tamaño devuelto no tiene en cuenta marcos de gráficos aplicados alrededor del objeto, ni barras de desplazamiento. Para obtener el tamaño real de un objeto en pantalla, es necesario añadir el largo de estos elementos. 

El parámetro opcional *largoMax* le permite atribuir un largo máximo al objeto. Si el largo óptimo del objeto es superior a este valor, **OBJECT GET BEST SIZE** devuelve *largoMax* en el parámetro *largoOpt* y aumenta el alto óptimo en consecuencia.

Los siguientes objetos son manejados por este comando:

* Áreas de texto estáticas
* Textos insertados en forma de referencias
* Campos y variables de los siguientes tipos: Alfa, Texto, Real, Entero, Entero largo, Fecha, Hora, Booleano (casillas de selección y botones de radio)
* Botones
* Columnas de list box en contexto de visualización (sólo las líneas visibles se tienen en cuenta).

Para todos los otros tipos de objetos de formulario (áreas de grupos, pestañas, rectángulos, líneas rectas, círculos/óvalos, áreas externas, etc.), el comando **OBJECT GET BEST SIZE** devuelve el tamaño del objeto actual (definido en el editor de formularios y eventualmente utilizando el comando [OBJECT MOVE](object-move.md)).

#### Ejemplo 

Consulte el ejemplo en el comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

#### Ver también 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 717 |
| Hilo seguro | &cross; |


