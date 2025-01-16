---
id: set-list-item-icon
title: SET LIST ITEM ICON
slug: /commands/set-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM ICON.Syntax-->**SET LIST ITEM ICON** ( {* ;} *lista* ; refElem | * ; *icono* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Entero largo, Operador | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| icono | Picture | &#8594;  | Icono a asociar al elemento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET LIST ITEM ICON.Summary-->El comando SET LIST ITEM ICON permite modificar el icono asociado al elemento especificado por el parámetro *refElem* de la lista cuyo número de referencia o nombre de objeto se pasa en *lista* 

**Nota:** es posible modificar el icono asociado con un elemento utilizando el comando [SET LIST ITEM PROPERTIES](set-list-item-properties.md).<!-- END REF--> Sin embargo, este comando acepta únicamente las referencias de imágenes estáticas (referencias de recursos o imágenes de la librería de imágenes).

Si pasa el primer parámetro opcional \*, indica que el parámetro lista es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro lista es una referencia de lista jerárquica (RefLista). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (el segundo \* se omite), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo \*), se requiere la sintaxis basada en el nombre del objeto ya que cada representación puede tener su propio elemento actual.

Puede pasar un número de referencia en refElem. Si este número no corresponde a ningún elemento en la lista, el comando no hace nada. Igualmente puede pasar 0 en refElem para indicar el último elemento añadido a la lista (utilizando [APPEND TO LIST](append-to-list.md)).

Por último, puede pasar *\** en *refElem*: en este caso, el comando será aplicado al elemento actual de la lista. Si se seleccionan varios elementos manualmente, el elemento actual es el último seleccionado. Si ningún elemento está seleccionado, el comando no hace nada.

Pase en el parámetro *icono* una expresión de imagen 4D válida (campo, variable, puntero, etc.). La imagen será colocada a la izquierda del elemento.

#### Ejemplo 

Queremos asignar la misma imagen a dos elementos diferentes. El siguiente código se optimiza ya que la imagen se carga en la memoria sólo una vez:

```4d
 var $picture : Picture
 READ PICTURE FILE("myPict.png";$picture)
 SET LIST ITEM ICON(mylist;ref1;$picture)
 SET LIST ITEM ICON(mylist;ref2;$picture)
```

#### Ver también 

[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 950 |
| Hilo seguro | &cross; |


