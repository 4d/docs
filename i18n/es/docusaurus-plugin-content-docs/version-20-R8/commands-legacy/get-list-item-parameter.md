---
id: get-list-item-parameter
title: GET LIST ITEM PARAMETER
slug: /commands/get-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER.Syntax-->**GET LIST ITEM PARAMETER** ( {* ;} *lista* ; refElem | * ; *selector* ; *valor* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de la lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| selector | Text | &#8594;  | Constante del parámetro |
| valor | Text, Boolean, Real | &#8592; | Valor actual del parámetro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET LIST ITEM PARAMETER.Summary-->El comando GET LIST ITEM PARAMETER permite conocer el *valor* actual del parámetro *selector* para el elemento *refElem* de la lista jerárquica cuya referencia o nombre de objeto se pasa en el parámetro *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional *\**, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (se omite el segundo *\**), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y se pasa el segundo *\**, es requerida la sintaxis basada en el nombre del objeto ya que cada representación puede tener su propio elemento actual.

**Nota:** si utiliza el carácter @ en el nombre del objeto de la lisa y el formulario contiene varias listas que responden a este nombre, el comando GET LIST ITEM PARAMETER se aplicará al primer objeto cuyo nombre corresponda.

Puede pasar un número de referencia en *refElem*. Si este número no corresponde a ningún elemento de la lista, el comando no hace nada. Igualmente puede pasar 0 en *refElem* para indicar el último elemento añadido a la lista (utilizando [APPEND TO LIST](append-to-list.md)).

Finalmente, puede pasar *\** en *refElem:* en este caso, el comando se aplicará al elemento actual de la lista. Si se seleccionan manualmente varios elementos, el elemento actual es el último seleccionado. Si ningún elemento fue seleccionado, el comando no hace nada.

En *selector*, puede pasar la constante Additional text o Standard action (en el tema “*Listas jerárquicas*”) o todo valor personalizado. Para mayor información sobre los parámetros *selector* y *valor*, consulte la descripción del comando [SET LIST ITEM PARAMETER](set-list-item-parameter.md).

#### Ver también 

*Listas jerárquicas*  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 985 |
| Hilo seguro | &cross; |


