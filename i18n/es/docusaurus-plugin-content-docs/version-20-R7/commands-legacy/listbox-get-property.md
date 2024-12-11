---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *objeto* ; *propiedad* ) : any<!-- END REF-->
<!--REF #_command_.LISTBOX Get property.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| propiedad | Integer | &#8594;  | Información a obtener |
| Resultado | Text, Integer | &#8592; | Valor actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get property.Summary-->El comando **LISTBOX Get property** devuelve el valor de la *propiedad* del list box o columna especificado utilizando los parámetros *objeto* y *\*.<!-- END REF-->*

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, usted pasa una referencia de variable en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

**Nota:** si el list box o columna especificado utilizando los parámetros *objeto* y *\** no existe, el comando **LISTBOX Get property** devuelve -1 para los propiedades numéricas o una cadena vacía.

En el parámetro *propiedad*, pase una constante indicando la propiedad cuyo valor quiere obtener. Puede utilizar un valor o una de las siguientes constantes del tema *Listbox*:

| Constante                      | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14    | Propiedad **Retorno de línea**<br/>Aplica a: Columna\*<br/>Valores posibles:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                        |
| lk auto row height             | 31    | Propiedad **Altura de fila automática**. <br/>Aplica a: List box o columna<br/>Valores posibles:lk yes lk no**4D View Pro únicamente:** esta funcionalidad requiere una licencia 4D View Pro. Para más información, consulte *4D View Pro*.                                                                                                         |
| lk background color expression | 22    | Propiedad **Expresión** **color de fondo** para list box de tipo selección, colección o entity selection.<br/>Aplica a: List box o columna                                                                                                                                                                                                                  |
| lk cell horizontal padding     | 36    | Relleno horizontal de la celda en píxeles (mismo valor para el relleno izquierdo y derecho) Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                               |
| lk cell vertical padding       | 37    | Relleno vertical de la celda en píxeles (mismo valor para el relleno superior e inferior)<br/>Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                     |
| lk column max width            | 26    | Propiedad **Ancho Máximo**<br/>Aplica a: Columna\*                                                                                                                                                                                                                                                                                                          |
| lk column min width            | 25    | Propiedad **Ancho mínimo**<br/>Aplica a: Columna\*                                                                                                                                                                                                                                                                                                          |
| lk column resizable            | 15    | Propiedad **Redimensionable** <br/>Aplica a: Columna\*<br/>Valores posibles:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                        |
| lk detail form name            | 19    | Propiedad **Nombre formulario detallado** para la selección de tipo list box <br/>Aplica a: List box                                                                                                                                                                                                                                                        |
| lk display footer              | 8     | 0=oculto, 1=se muestra                                                                                                                                                                                                                                                                                                                                              |
| lk display header              | 0     | 0=oculto, 1=se muestra                                                                                                                                                                                                                                                                                                                                              |
| lk display type                | 21    | Propiedad **Tipo de visualización** para columnas numéricas <br/>Aplica a: Columna\*<br/>Valores posibles:**<br/>**lk numeric format (0): muestra valores en formato numéricolk three states checkbox (1): muestra valores como casillas de selección de tres estados                                                                       |
| lk double click on row         | 18    | Propiedad **Doble clic en la línea** para los list box de tipo selección<br/>Aplica a: List box<br/>Valores posibles:lk do nothing (0): no desencadena ninguna acción automáticalk edit record (1): muestra el registro correspondiente en modo lectura-escrituralk display record (2): muestra el registro correspondiente en modo de solo lectura |
| lk extra rows                  | 13    | Propiedad **Ocultar líneas vacías finales** <br/>Aplica a: List box<br/>Valores posibles:**<br/>**lk display (0)lk hide (1)                                                                                                                                                                                                                 |
| lk font color expression       | 23    | Propiedad **Expresión color fuente**para list box de tipo selección,  colección o entity selection.<br/>Aplica a: List box o columna                                                                                                                                                                                                                        |
| lk font style expression       | 24    | Propiedad **Expresión estilo** para list boxes de tipo selección, colección o entity selection.<br/>Aplica a: List box o columna<br/>                                                                                                                                                                                                               |
| lk hide selection highlight    | 16    | Propiedad **Ocultar resaltado de selección**<br/>Aplica a: List box<br/>Valores posibles:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                                       |
| lk highlight set               | 27    | Propiedad **Conjunto resaltado** para el list box de tipo selección**<br/>**Aplica a: List box                                                                                                                                                                                                                                                              |
| lk hor scrollbar height        | 3     | Altura en píxeles                                                                                                                                                                                                                                                                                                                                                   |
| lk movable rows                | 35    | La propiedad **Líneas móviles** para list box de tipo array <br/>Se aplica a: List box (excluyendo el modo jerárquico) <br/>Valores posibles: lk no (0): las líneas no se pueden mover en tiempo de ejecución lk yes (1): las líneas se pueden mover en tiempo de ejecución (predeterminado)                                                        |
| lk multi style                 | 30    | Propiedad **Multiestilo** <br/>Aplica a: Columna\*<br/>Valores posibles:<br/>lk no (0)\[#/note\]lk yes (1) \[#/note\]                                                                                                                                                                                                                       |
| lk named selection             | 28    | Propiedad **Selección temporal** para list box de tipo selección<br/>Aplica a: List box                                                                                                                                                                                                                                                                     |
| lk resizing mode               | 11    | Propiedad **Autoredimensionamiento de columnas**<br/>Aplica a: List box<br/>Valores posibles:<br/>lk manual (0)lk automatic (2)                                                                                                                                                                                                             |
| lk row height unit             | 17    | Unidad de la propiedad **Alto de línea** <br/>Aplica a: List box<br/>Valores posibles:**<br/>**lk lines (1)<br/>lk pixels (0)                                                                                                                                                                                                       |
| lk selection mode              | 10    | Propiedad **Modo de s** **elección**<br/>Aplica a: List box<br/>Valores posibles: **<br/>**lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                                |
| lk single click edit           | 29    | Propiedad **Editar en clic único**<br/>Aplica a: List box<br/>Posible valores:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                                      |
| lk sortable                    | 20    | Propiedad **Ordenable** <br/>Aplica a: List box<br/>Valores posibles:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                                                           |
| lk truncate                    | 12    | Propiedad **Truncar con elipse** <br/>Aplica a: List box o columna<br/>Valores posibles:**<br/>**lk without ellipsis (0)lk with ellipsis (1)                                                                                                                                                                                                |
| lk ver scrollbar width         | 5     | Ancho en píxeles                                                                                                                                                                                                                                                                                                                                                    |

\*Estas propiedades sólo se aplican a las columnas list box; si pasa un list box como parámetro con una de estas propiedades, **LISTBOX Get property** devuelve -1, o una cadena vacía, dependiendo de la *propiedad* pasada.

En general, para indicar un resultado no válido **LISTBOX Get property** devuelve -1 al recuperar las propiedades que tienen valores numéricos, o una cadena vacía; Sin embargo, no se generan errores. Más específicamente, esto ocurre en los siguientes casos:

* Si pasa una *propiedad* que no existe
* Si pasa una *propiedad* que no está disponible para el list box o columna especificada, por ejemplo, usted pasa la propiedad lk font color expression con un list box de tipo array
* Si pasa una columna como parámetro con una *propiedad* que se aplica a un list box, y viceversa, si pasa un list box como parámetro con una *propiedad* que se aplica a una columna (ver arriba \*)

Además, no es posible devolver valores de más de una columna a la vez; si utiliza el símbolo "@" como parte del nombre de una columna para indicar varias columnas múltiples con nombres similares, **LISTBOX Get property** devuelve el primer valor coincidente que encuentre; como resultado, el valor devuelto no tiene verdadera importancia.

**Notas:**

* Las constantes lk display footer y lk display header son útiles para calcular el tamaño de un área de list box mostrada en el formulario.
* Cuando utilice las constantes lk hor scrollbar position o lk ver scrollbar position, el comando **LISTBOX Get property** devuelve la posición del cursor de desplazamiento en relación con su posición original, es decir el tamaño de la parte oculta de la ventana, expresado en píxeles. Por defecto, esta posición corresponde a 0\. Combinando, por ejemplo, con información relativa a la altura de la línea, este valor le permite encontrar el contenido mostrado en el listbox. Sin embargo, estas constantes son obsoletas y pueden remplazarse por el comando [OBJECT GET SCROLL POSITION](object-get-scroll-position.md).
* La instrucción **LISTBOX Get property**(vLB;\_o\_lk footer height) devuelve el mismo valor que el comando [LISTBOX Get footers height](listbox-get-footers-height.md) cuando los pies se muestran. Sin embargo, si los pies no se muestran, **LISTBOX Get property** devuelve 0 mientras [LISTBOX Get footers height](listbox-get-footers-height.md) devuelve la altura, en este caso teórica, de los pies.

#### Ejemplo 1 

Dado un listbox"MyListbox", si ejecuta la siguiente instrucción:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // el valor devuelto indica el modo de selección
```

En este caso, el resultado devuelto indica si varias líneas pueden ser seleccionadas.

#### Ejemplo 2 

Dado un list box "MyListbox", si ejecuta la siguiente instrucción:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** devuelve -1 porque la propiedad lk column resizable aplica a columnas y un list box se pasó como parámetro.

#### Ver también 

[LISTBOX SET GRID](listbox-set-grid.md)  
[LISTBOX SET PROPERTY](listbox-set-property.md)  
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 917 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


