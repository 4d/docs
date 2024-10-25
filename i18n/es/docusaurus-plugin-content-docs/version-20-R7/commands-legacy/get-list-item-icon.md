---
id: get-list-item-icon
title: GET LIST ITEM ICON
slug: /commands/get-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM ICON.Syntax-->**GET LIST ITEM ICON** ( {* ;} *lista* ; refElem | * ; *icono* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un número de referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre de objeto de tipo de lista (si pasa *) |
| refElem &#124; * | Operador, Entero largo | &#8594;  | Número de referencia del elemento o 0 para el último elemento añadido a la lista o * para el elemento actual de la lista |
| icono | Picture | &#8592; | Icono asociado al elemento |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET LIST ITEM ICON.Summary-->El comando GET LIST ITEM ICON devuelve, en *icono*, el icono asociado al elemento cuyo número de referencia se pasa en *refElem* de la lista cuyo número de referencia o nombre de objeto pasa en *lista*.<!-- END REF-->  
  
Si pasa el primer parámetro opcional *\**, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de la lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza una sola representación de lista o trabaja con los elementos estructurales (se omite el segundo *\** ), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo *\**), la sintaxis basada en el nombre del objeto es requerida ya que cada representación tiene su propio elemento actual. 

**Nota:** si utiliza el carácter @ en el nombre de objeto de la lista y el formulario contiene varias listas que responden a este nombre, el comando GET LIST ITEM ICON se aplicará al primer objeto cuyo nombre corresponda.

Puede pasar un número de referencia en *refElem*. Si este número no corresponde a un elemento en la lista, el comando no hace nada. También puede pasar 0 en *refElem* para indicar el último elemento añadido a la lista (usando [APPEND TO LIST](append-to-list.md "APPEND TO LIST")).

Finalmente, puede pasar *\** en *refElem:* en este caso, el comando se aplicará al elemento actual de la lista. Si varios elementos son seleccionados manualmente, el elemento actual es el seleccionado de último. Si ningún elemento está seleccionado, el comando no hace nada.  
  
Pase en *icono* una variable imagen. Después de ejecutar el comando, contendrá el icono asociado con el elemento, sin importar la fuente del icono (imagen estática, recurso o expresión imagen). 

Si ningún icono está asociado al elemento, la variable icono se devuelve vacía.

**Nota:** cuando el icono asociado a un elemento ha sido definido vía una referencia estática (referencias de recursos o imágenes de la librería de imágenes), es posible conocer su número utilizando el comando GET LIST ITEM PROPERTIES.

#### Ver también 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  