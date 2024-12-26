---
id: array-integer
title: ARRAY INTEGER
slug: /commands/array-integer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY INTEGER.Syntax-->**ARRAY INTEGER** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY INTEGER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Nombre de los elementos en el array o Número de filas si se especifica el tamaño 2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array de dos dimensiones |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY INTEGER.Summary-->El comando ARRAY INTEGER crea y/o redimensiona un array de elementos de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)") de 2 bytes en memoria.<!-- END REF-->es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si especifica *tamaño2*, el comando crea un array de dos dimensiones. En este caso, *tamaño* especifica el número de filas y *tamaño2* el número de columnas en cada array. Cada fila en un array de dos dimensiones puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comando de array para insertar y borrar arrays enteros en un array de dos dimensiones.

Cuando aplica ARRAY INTEGER a un array existente:

* Si agranda el tamaño del array, los elementos existentes no son modificados, y los elementos nuevos se inicializan en 0.
* Si reduce el tamaño del array, los últimos elementos son borrados del array y se pierden.

#### Ejemplo 1 

Este ejemplo crea un array proceso de 2 bytes de 100 elementos de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"):

```4d
 ARRAY INTEGER(aiValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 2 bytes de 100 filas de 50 elementos de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"):

```4d
 ARRAY INTEGER($aiValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 2 bytes de 50 elementos de tipo [Entero](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), y asigna a cada elemento su número de elemento:

```4d
 ARRAY INTEGER(◊aiValores;50)
 For($vlElem;1;50)
    ◊aiValores{$vlElem}:=$vlElem
 End for
```

#### Ver también 

[ARRAY LONGINT](array-longint.md)  
[ARRAY REAL](array-real.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 220 |
| Hilo seguro | &check; |


