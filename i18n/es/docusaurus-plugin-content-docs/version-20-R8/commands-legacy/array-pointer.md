---
id: array-pointer
title: ARRAY POINTER
slug: /commands/array-pointer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY POINTER.Syntax-->**ARRAY POINTER** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY POINTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array bidimensional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY POINTER.Summary-->El comando ARRAY POINTER crea o redimensiona un array de elementos de tipo [Puntero](# "A reference to another variable (including arrays and array elements), table, or field") en memoria.<!-- END REF-->es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional. En este caso, *tamaño* especifica el número de filas y *tamaño2* especifica el número de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional.

Cuando aplica ARRAY POINTER a un array existente:

* Si agranda el tamaño del array, los elementos existentes no son modificados, y los nuevos elementos se inicializan en un *puntero* nulo. Esto significa queal aplicar Nil a uno de estos elementos devuelve Verdadero.
* Si reduce el tamaño del array, se pierden los últimos elementos borrados del array.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo [Puntero](# "A reference to another variable (including arrays and array elements), table, or field"):

```4d
 ARRAY POINTER(apValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de 50 elementos de tipo [Puntero](# "A reference to another variable (including arrays and array elements), table, or field"):

```4d
 ARRAY POINTER($apValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de elementos de tipo [Puntero](# "A reference to another variable (including arrays and array elements), table, or field") y asigna a cada elemento al que apunta a la tabla cuyo número es el mismo del elemento. El tamaño del array es igual al número de tablas en la base de datos. En el caso de suprimir una tabla, la linea devolverá Nil

```4d
 ARRAY POINTER(◊apValores;Last table number)
 For($vlElem;1;Size of array(◊apValores);1;-1)
    If(Is table number valid($vlElem))
       ◊apValores{$vlElem}:=Table($vlElem)
    End if
 End for
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 280 |
| Hilo seguro | &check; |


