---
id: list-item-position
title: List item position
slug: /commands/list-item-position
displayed_sidebar: docs
---

<!--REF #_command_.List item position.Syntax-->**List item position** ( {* ;} *lista* ; *refElem* ) : Integer<!-- END REF-->
<!--REF #_command_.List item position.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) Nombre de objeto de tipo lista (si se pasa *) |
| refElem | Integer | &#8594;  | Número de referencia del elemento |
| Resultado | Integer | &#8592; | Posición del elemento en listas desplegadas/contraídas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.List item position.Summary-->El comando List item position devuelve la posición del elemento cuyo número de referencia o nombre de objeto se pasa en *refElem*, en la lista cuyo número de referencia se pasa en *lista*.<!-- END REF--> 

Si pasa el primer parámetro opcional \*, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica (RefLista). Si utiliza sólo una representación de lista o trabaja con elementos estructurales (el segundo \* se omite), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista, la sintaxis basada en el nombre del objeto es necesaria ya que cada representación puede tener su propia configuración desplegada/contraída.

**Nota:** si utiliza el carácter @ en el nombre del objeto de la lista y el formulario contiene varias listas que tienen este nombre, el comando List item position se aplicará al primer objeto cuyo nombre corresponda.

**Nota:** a diferencia de otros comandos de este tema, este comando no permite pasar el valor 0 en *refElem* para designar el último elemento añadido. 

La posición se expresa con relación al elemento superior de la lista, utilizando, utilizando el estado actual desplegado/contraído de la lista y su sublista. 

El resultado es un número entre 1 y el valor devuelto por [Count list items](count-list-items.md "Count list items"). 

Si el elemento no es visible porque está ubicado en una lista contraída, List item position despliega la lista correspondiente de manera que el elemento sea visible. 

Si el elemento no existe, List item position devuelve 0.

#### Ver también 

[Count list items](count-list-items.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 629 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


