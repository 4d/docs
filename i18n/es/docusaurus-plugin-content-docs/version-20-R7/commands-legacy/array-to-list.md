---
id: array-to-list
title: ARRAY TO LIST
slug: /commands/array-to-list
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO LIST.Syntax-->**ARRAY TO LIST** ( *array* ; *lista* {; *refElementos*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array del cual copiar los elementos del array |
| lista | Text, Integer | &#8594;  | Lista en la cual copiar los elementos del array |
| refElementos | Array | &#8594;  | Array numérico de números de referencia de los elementos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ARRAY TO LIST.Summary-->El comando ARRAY TO LIST crea o reemplaza la lista jerárquica o la *lista* utilizando los elementos del *array* *.<!-- END REF-->*

Puede pasar en el parámetro opcional *lista*, una lista de selección (cadena) o una referencia de lista jerárquica (refLista). En el segundo caso, esta lista debe haber sido creada previamente (por ejemplo utilizando el comando [New list](new-list.md)) para que este comando funcione.

El parámetro opcional *refElementos*, si se pasa, debe ser un array numérico sincronizado con el array *array*. Cada elemento de este array indica el número de referencia del elemento de la lista correspondiente en *array*. Si omite este parámetro, 4D define automáticamente los números de referencia de los elementos de la lista 1, 2.

**Nota de compatibilidad:** el comando **ARRAY TO LIST** debe utilizarse con precaución por las siguientes limitaciones:

* Este comando permite definir solamente los elementos del primer nivel de la lista.
* Cuando lo utiliza con una lista, este comando modifica la estructura de la aplicación (las listas se guardan en el archivo de estructura), las modificaciones efectuadas en local se pierden durante la actualización del archivo de estructura en producción.
* Este comando no puede utilizarse con una lista de selección en una estructura cargada en **sólo lectura**, tal como un proyecto .4dz project o un componente.

Puede utilizar ARRAY TO LIST para construir una lista basada en los elementos de un array. Sin embargo, para librarse de estas restricciones y explotar por completo las listas de valores, le recomendamos utilizar los comandos del tema *Listas jerárquicas*.

#### Ejemplo 

El siguiente ejemplo copia el array *atRegiones* en la lista “Regiones:”

```4d
 ARRAY TO LIST(atRegions;"Regions")
```

#### Ejemplo 

Usted quiere poner los distintos valores de un campo en una lista, por ejemplo para crear un menú pop-up jerárquico. Puede escribir:

```4d
 ALL RECORDS([Empresa])
 DISTINCT VALUES([Empresa]pais;$arrPaises)
 ListaPais:=New list
 ARRAY TO LIST($arrPaises;ListaPais)
```

#### Gestión de errores 

El comando ARRAY TO LIST genera el error *\-9957* cuando se aplica a una lista que está siendo editada en el editor de listas del entorno Diseño. Puede interceptar este error utilizando un método de proyecto [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[LIST TO ARRAY](list-to-array.md)  
[Load list](load-list.md)  
[ON ERR CALL](on-err-call.md)  
[SAVE LIST](save-list.md)  