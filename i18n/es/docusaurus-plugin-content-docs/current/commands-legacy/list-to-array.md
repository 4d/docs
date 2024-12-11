---
id: list-to-array
title: LIST TO ARRAY
slug: /commands/list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO ARRAY.Syntax-->**LIST TO ARRAY** ( *lista* ; *array* {; *refElementos*} )<!-- END REF-->
<!--REF #_command_.LIST TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Text, Integer | &#8594;  | Lista de la cual copiar los elementos de primer nivel |
| array | Array | &#8592; | Array al cual copiar los elementos de la lista |
| refElementos | Array | &#8592; | Números de referencia de los elementos de la lista |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LIST TO ARRAY.Summary-->El comando LIST TO ARRAY crea o reemplaza el array a*rray* con los elementos del primer nivel de la lista o de la lista de selección designada por *lista*.<!-- END REF--> 

En el parámetro *lista* puede pasar el nombre de una lista de selección (cadena), o una referencia de lista jerárquica (RefList).

Si no define previamente el array como de tipo Alfa o Texto, LIST TO ARRAY crea un nuevo array de tipo Texto por defecto. 

**Nota:** en modo compilado, el *array* debe haber sido definido previamente y no puede ser digitado nuevamente.

El parámetro opcional *refElements* (un array de tipo numérico) devuelve los números de referencia de los elementos de la lista. 

Puede utilizar LIST TO ARRAY para construir un array basado en los elementos de primer nivel de una lista. Sin embargo, este comando no le permite trabajar con los elementos de las sublistas. Para trabajar con listas jerárquicas, utilice los comandos de listas jerárquicas, en particular [Load list](load-list.md).

#### Ejemplo 1 

El siguiente ejemplo copia los elementos de una lista llamada Regiones en el array llamado *atRegions*:

```4d
 LIST TO ARRAY("Regions";atRegions)
```

#### Ejemplo 2 

Dada una lista jerárquica creada como se ve a continuación:

```4d
 myList2:=New list
 APPEND TO LIST(myList2;"Scotland";1)
 APPEND TO LIST(myList2;"England";2)
 APPEND TO LIST(myList2;"Wales";3)
 myList1:=New list
 APPEND TO LIST(myList1;"France";1)
 APPEND TO LIST(myList1;"Germany";2)
 APPEND TO LIST(myList1;"Spain";3)
 APPEND TO LIST(myList1;"Great Britain";4;myList2;True)
 APPEND TO LIST(myList1;"Portugal";5)
 APPEND TO LIST(myList1;"Belgium";6)
 APPEND TO LIST(myList1;"Italy";7)
 APPEND TO LIST(myList1;"Netherlands";8)
 APPEND TO LIST(myList1;"Ireland";9)
```

Esta lista puede estar representada como:

![](../assets/en/commands/pict1214045.en.png)

Si ejecuta la siguiente instrucción:

```4d
 LIST TO ARRAY(myList1;$MyArray)
```

...obtiene

```4d
 $MyArray{1}="France"
 $MyArray{2}="Germany"
 $MyArray{3}="Spain"
 $MyArray{4}="Great Britain"
 $MyArray{5}="Portugal"
 ...
```

#### Ver también 

[ARRAY TO LIST](array-to-list.md)  
[Load list](load-list.md)  
[SAVE LIST](save-list.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 288 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


