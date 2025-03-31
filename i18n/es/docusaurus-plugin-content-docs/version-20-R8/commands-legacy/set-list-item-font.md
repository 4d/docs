---
id: set-list-item-font
title: SET LIST ITEM FONT
slug: /commands/set-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM FONT.Syntax-->**SET LIST ITEM FONT** ( {* ;} *lista* ; refElem | * ; *fuente* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM FONT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| fuente | Text, Integer | &#8594;  | Nombre o número de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET LIST ITEM FONT.Summary-->El comando SET LIST ITEM FONT modifica la fuente de caracteres del elemento especificado por el parámetro *refElem* de la lista cuyo número de referencia o nombre de objeto se pasa en *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica ([ListRef](# "Una referencia a una lista jerárquica")). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (se omite el segundo \*), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo \*), la sintaxis basada en el nombre del objeto es requerida ya que cada representación puede tener su propio elemento actual.

Puede pasar un número de referencia en *refElem*. Si este número no corresponde a ningún elemento de la lista, el comando hace nada. Igualmente puede pasar 0 en *refElem* para solicitar la modificación del último elemento añadido a la lista (utilizando [APPEND TO LIST](append-to-list.md "APPEND TO LIST")).

Por último, puede pasar \* en *refElem*: en este caso, el comando se aplicará al elemento actual de la lista. Si varios elementos se seleccionan manualmente, el elemento actual es el que se seleccionó de último. Si ningún elemento está seleccionado, el comando no hace nada.

En el parámetro *fuente*, pase el nombre o número de la fuente a utilizar. Para reaplicar la fuente por defecto de la lista jerárquica, pase una cadena vacía en *fuente*.

#### Ejemplo 

Aplicar la fuente Times al elemento actual de la lista:

```4d
 SET LIST ITEM FONT(*;"Milista";*;"Times")
```

#### Ver también 

[Get list item font](get-list-item-font.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 953 |
| Hilo seguro | &cross; |


