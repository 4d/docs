---
id: get-list-item-font
title: Get list item font
slug: /commands/get-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.Get list item font.Syntax-->**Get list item font** ( {* ;} *lista* ; refElem | * ) : Text<!-- END REF-->
<!--REF #_command_.Get list item font.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre de objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| Resultado | Text | &#8592; | Nombre de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get list item font.Summary-->El comando Get list item font devuelve el nombre de la fuente del carácter actual del elemento especificado por el parámetro RefElem de la lista cuyo número de referencia o nombre de objeto se pasa en *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza una sola representación de lista o trabaja con elementos estructurales (el segundo \* se omite), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (se pasa el segundo \*), la sintaxis basada en el nombre del objeto se necesita ya que cada representación puede tener su propio elemento actual.

**Nota:** si utiliza el carácter @ en el nombre de objeto de la lista y el formulario contiene varias listas que corresponden a este nombre, el Get list item font se aplicará al primer objeto cuyo nombre corresponda.

Puede pasar un número de referencia en *refElem*. Si este número no corresponde a ningún elemento de la lista, el comando no hace nada. También puede pasar 0 en *refElem* para obtener la fuente del último elemento añadido a la lista (utilizando [APPEND TO LIST](append-to-list.md "APPEND TO LIST")).

Finalmente, puede pasar \* en *refElem*: en este caso, el comando se aplicará al elemento actual de la lista. Si varios elementos se seleccionan manualmente, el elemento actual es el último seleccionado. Si ningún elemento está seleccionado, el comando no hace nada.

#### Ver también 

[SET LIST ITEM FONT](set-list-item-font.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 954 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


