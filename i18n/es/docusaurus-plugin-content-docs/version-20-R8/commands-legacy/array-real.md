---
id: array-real
title: ARRAY REAL
slug: /commands/array-real
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY REAL.Syntax-->**ARRAY REAL** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY REAL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array de dos dimensiones |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY REAL.Summary-->El comando ARRAY REAL crea y/o redimensiona un array de elementos de tipo Real en memoria.<!-- END REF--> 

* El parámetro nombreArray es el nombre del array.
* El parámetro *tamaño* es el número de elementos del array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional. En este caso, *tamaño* especifica el número de filas y *tamaño2 e*specifica el número de columnas en cada array. Cada línea en un array de dos dimensiones puede tratarse como un elemento y un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays completos en un array de dos dimensiones.

Cuando aplica ARRAY REAL a un array existente:

* Si agranda el tamaño del array, los elementos existentes no son modificados y los nuevos elementos se inicializan en 0.
* Si reduce el tamaño del array, los últimos elementos son borrados del array y se pierden.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo Real:

```4d
 ARRAY REAL(arValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de 50 elementos de tipo Real:

```4d
 ARRAY REAL($arValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 50 elementos de tipo Real y asigna a cada elemento su número:

```4d
 ARRAY REAL(◊arValores;50)
 For($vlElem;1;50)
    ◊arValores{$vlElem}:=$vlElem
 End for
```

#### Ver también 

[ARRAY INTEGER](array-integer.md)  
[ARRAY LONGINT](array-longint.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 219 |
| Hilo seguro | &check; |


