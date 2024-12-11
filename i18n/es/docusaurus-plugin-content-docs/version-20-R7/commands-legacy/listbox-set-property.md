---
id: listbox-set-property
title: LISTBOX SET PROPERTY
slug: /commands/listbox-set-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *objeto* ; *propiedad* ; *valor* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable. |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| propiedad | Integer | &#8594;  | Propiedad de list box o de columna |
| valor | Integer, Text | &#8594;  | Valor de la propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->El comando **LISTBOX SET PROPERTY** define el valor de la propiedad de la columna list box o list box especificada utilizando los parámetros objeto y \*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia variable en lugar de una cadena.

**Nota:** si el list box o la columna list box especificada utilizando los parámetros objeto y \* no existe, el comando no hace nada y no se dispara ningún error.

En los parámetros *propiedad* y *valor*, se indica, respectivamente la propiedad a definir utilizando su nuevo valor. Puede utilizar las siguientes constantes del tema *Listbox*:

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
| lk meta expression             | 34    | Propiedad **Expression** **Meta Info** de los list box de tipo colección o selección de entidades.<br/>Aplica a: List box                                                                                                                                                                                                                                   |
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

\*Estas propiedades sólo se pueden aplicar a columnas list box; Sin embargo, si pasa un list box como parámetro, **LISTBOX SET PROPERTY** aplica la *propiedad* a cada columna del list box.

**Nota:** si pasa una *propiedad* que no existe, o que no está disponible para el list box o columna especificado, por ejemplo lk font style expression en el caso de un list box de tipo array, el comando no hace nada y no se dispara ningún error.

#### Ejemplo 1 

Usted quiere asegurarse de que todas las columnas del list box "MyListbox" sean redimensionables:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) //Todas las columnas del list box "MyListbox" se definen como redimensionables
```

#### Ejemplo 2 

Usted desea definir el ancho máximo de la columna "ProductNumber":

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) //Esta columna tendrá un ancho máximo de 200
```

#### Ver también 

  
*Listbox*  
[LISTBOX Get property](listbox-get-property.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1440 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


